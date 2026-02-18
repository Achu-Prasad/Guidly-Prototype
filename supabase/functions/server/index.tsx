import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";

const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-e5c0f4b0/health", (c) => {
  return c.json({ status: "ok" });
});

// Create a new booking
app.post("/make-server-e5c0f4b0/bookings", async (c) => {
  try {
    const body = await c.req.json();
    const { 
      mentee_id = "mentee_" + Math.random().toString(36).slice(2, 9),
      mentor_id = "mentor_001",
      scheduled_time,
      duration_min,
      service_snapshot,
      payment_id = "pay_" + Math.random().toString(36).slice(2, 9),
      amount_paid,
      user_notes
    } = body;

    const booking_id = crypto.randomUUID();
    const meeting_link = `https://meet.jit.si/guidly-${booking_id.slice(0, 8)}`;

    const booking = {
      booking_id,
      mentee_id,
      mentor_id,
      status: "confirmed",
      scheduled_time,
      duration_min,
      service_snapshot,
      payment_id,
      amount_paid,
      meeting_link,
      user_notes
    };

    // Store in KV using a specific prefix
    await kv.set(`booking:${booking_id}`, booking);

    return c.json({ 
      success: true, 
      message: "Booking confirmed and stored in backend.", 
      booking 
    });
  } catch (error) {
    console.log("Error creating booking:", error);
    return c.json({ success: false, error: error.message }, 500);
  }
});

// Get all bookings (for prototyping)
app.get("/make-server-e5c0f4b0/bookings", async (c) => {
  try {
    const bookings = await kv.getByPrefix("booking:");
    return c.json({ success: true, bookings });
  } catch (error) {
    return c.json({ success: false, error: error.message }, 500);
  }
});

// Create a new event
app.post("/make-server-e5c0f4b0/events", async (c) => {
  try {
    const body = await c.req.json();
    const { 
      community_id,
      title,
      host_name,
      start_time,
      end_time,
      ticket_price,
      attendee_ids = [],
      meeting_url
    } = body;

    const event_id = crypto.randomUUID();
    const event = {
      event_id,
      community_id,
      title,
      host_name,
      start_time,
      end_time,
      ticket_price,
      attendee_ids,
      meeting_url: meeting_url || `https://stream.guidly.app/${event_id.slice(0, 8)}`
    };

    await kv.set(`event:${event_id}`, event);

    return c.json({ 
      success: true, 
      message: "Event created and stored in backend.", 
      event 
    });
  } catch (error) {
    console.log("Error creating event:", error);
    return c.json({ success: false, error: error.message }, 500);
  }
});

// Get all events
app.get("/make-server-e5c0f4b0/events", async (c) => {
  try {
    const events = await kv.getByPrefix("event:");
    return c.json({ success: true, events });
  } catch (error) {
    return c.json({ success: false, error: error.message }, 500);
  }
});

Deno.serve(app.fetch);
