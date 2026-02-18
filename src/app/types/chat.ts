
export interface Message {
    id: number;
    text: string;
    sender: 'me' | 'other';
    senderName?: string;
    senderImage?: string;
    time: string;
}

export interface Chat {
    id: string | number;
    name: string;
    message: string;
    time: string;
    unread: number;
    status: 'sent' | 'read' | 'received';
    image: string;
    type: 'mentor' | 'community';
    isGroup?: boolean;
}
