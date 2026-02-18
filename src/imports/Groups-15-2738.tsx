import svgPaths from "./svg-3ryd0o16w6";
import imgRectangle356 from "../assets/64f999ffac08d5fd023081990cac406b85a0dd6e.png";
import imgEllipse17 from "../assets/37215fd44c0a6b71dedb07c96bdb112fd1d5d3c0.png";

function Layer() {
  return (
    <div className="absolute contents inset-0" data-name="Layer 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 24">
        <g id="Group">
          <path d={svgPaths.p3aca52f0} fill="var(--fill-0, #2D5A4C)" id="Vector" />
          <path d={svgPaths.p309b4400} fill="var(--fill-0, #2D5A4C)" id="Vector_2" />
          <path d={svgPaths.p24fd5100} fill="var(--fill-0, #2D5A4C)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Asset() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-[17px]" data-name="Asset 1 1">
      <Layer />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[12px] h-full items-center px-[8px] relative shrink-0 w-[106px]">
      <Asset />
      <p className="font-['Figtree:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#2d5a4c] text-[20px]">Guidly</p>
    </div>
  );
}

function SolarBellBroken() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="solar:bell-broken">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="solar:bell-broken" opacity="0.8">
          <path d={svgPaths.p30269500} id="Vector" stroke="var(--stroke-0, #0F1615)" strokeLinecap="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex items-center justify-center p-[6px] relative rounded-[56px] shrink-0 size-[48px]">
      <SolarBellBroken />
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute bg-[#fb2c36] content-stretch flex items-center justify-center left-[24px] rounded-[89px] size-[15px] top-[11px]">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[10px] text-white">4</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0">
      <Frame7 />
      <Frame9 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute content-stretch flex h-[48px] items-center justify-between left-[16px] rounded-bl-[12px] rounded-br-[12px] top-[40px] w-[328px]">
      <Frame5 />
      <Frame10 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative rounded-[4px] shrink-0">
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#3f4544] text-[14px]">Communities</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="bg-[#edebe1] content-stretch flex items-center justify-center px-[12px] py-[8px] relative rounded-[4px] shrink-0">
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[20px] opacity-90 relative shrink-0 text-[#2d5a4c] text-[14px]">Events</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative rounded-[4px] shrink-0">
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[20px] opacity-90 relative shrink-0 text-[#3f4544] text-[14px]">Joined</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px overflow-x-auto overflow-y-clip relative">
      <Frame11 />
      <Frame12 />
      <Frame13 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="absolute content-stretch flex h-[32px] items-center left-[16px] top-[168px] w-[328px]">
      <Frame14 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-[#f3f3f3] flex-[1_0_0] h-[48px] min-h-px min-w-px relative rounded-[4px]">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[4px] relative size-full">
          <p className="font-['Figtree:Regular',sans-serif] font-normal leading-[24px] opacity-40 relative shrink-0 text-[#3f4544] text-[16px]">Search Events</p>
        </div>
      </div>
    </div>
  );
}

function MagnifyingGlass() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="MagnifyingGlass">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="MagnifyingGlass">
          <path d={svgPaths.p3ee3db00} fill="var(--fill-0, #0F1615)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Component() {
  return (
    <div className="bg-[#f3f3f3] content-stretch flex h-[48px] items-center justify-center p-[8px] relative rounded-[4px] shrink-0 w-[51px]" data-name="Component 22">
      <MagnifyingGlass />
    </div>
  );
}

function Frame42() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-[16px] top-[104px] w-[328px]">
      <Frame6 />
      <Component />
    </div>
  );
}

function House() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="House">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="House">
          <path d={svgPaths.p2d56cd00} fill="var(--fill-0, #0F1615)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center opacity-80 p-[8px] relative shrink-0 size-[55px]">
      <House />
      <p className="font-['Figtree:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#3f4544] text-[12px]">Home</p>
    </div>
  );
}

function UsersThree() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="UsersThree">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="UsersThree">
          <path d={svgPaths.p2d6fb2f2} fill="var(--fill-0, #2D5A4C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center p-[8px] relative shrink-0 size-[55px]">
      <UsersThree />
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#2d5a4c] text-[12px]">Team Up</p>
    </div>
  );
}

function Bookmarks() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Bookmarks">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Bookmarks">
          <path d={svgPaths.p1868ef80} fill="var(--fill-0, #0F1615)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center opacity-80 p-[8px] relative shrink-0 size-[55px]">
      <Bookmarks />
      <p className="font-['Figtree:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#3f4544] text-[12px]">Bookings</p>
    </div>
  );
}

function ChatCircleText() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ChatCircleText">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ChatCircleText">
          <path d={svgPaths.p19c3d000} fill="var(--fill-0, #0F1615)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center opacity-80 p-[8px] relative shrink-0 size-[55px]">
      <ChatCircleText />
      <p className="font-['Figtree:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#3f4544] text-[12px]">Chat</p>
    </div>
  );
}

function UserCircle() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="UserCircle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="UserCircle">
          <path d={svgPaths.p363c9000} fill="var(--fill-0, #0F1615)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center opacity-80 p-[8px] relative shrink-0 size-[55px]">
      <UserCircle />
      <p className="font-['Figtree:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#3f4544] text-[12px]">Account</p>
    </div>
  );
}

function Iconssss() {
  return (
    <div className="absolute bg-white bottom-0 content-stretch flex gap-[16px] items-center justify-center left-0 overflow-clip px-[16px] py-[8px] shadow-[0px_-8px_20.6px_-6px_rgba(0,0,0,0.1)] w-[360px]" data-name="Iconssss">
      <Frame />
      <Frame4 />
      <Frame2 />
      <Frame1 />
      <Frame3 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[118px]">
      <div className="relative shrink-0 size-[14px]">
        <img alt="" className="block max-w-none size-full" height="14" src={imgEllipse17} width="14" />
      </div>
      <p className="flex-[1_0_0] font-['Figtree:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px opacity-60 relative text-[#3f4544] text-[12px] whitespace-pre-wrap">Stolen and Friends</p>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame18 />
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[24px] min-w-full opacity-90 relative shrink-0 text-[#272d2c] text-[16px] w-[min-content] whitespace-pre-wrap">Basics of Design Systems</p>
    </div>
  );
}

function LucideClock() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="lucide/clock-4">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_15_2760)" id="lucide/clock-4" opacity="0.4">
          <path d={svgPaths.p1a9c8b00} id="Vector" stroke="var(--stroke-0, #3F4544)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_15_2760">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <LucideClock />
      <p className="font-['Figtree:Regular',sans-serif] font-normal leading-[16px] opacity-80 relative shrink-0 text-[#3f4544] text-[12px]">02 SUN</p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative">
      <div className="relative shrink-0 size-[2px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, #D9D9D9)" id="Ellipse 18" r="1" />
        </svg>
      </div>
      <p className="flex-[1_0_0] font-['Figtree:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[#2d5a4c] text-[12px] whitespace-pre-wrap">09:30 AM IST</p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <Frame19 />
      <Frame24 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Group">
      <div className="absolute inset-[-3.75%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3333 14.3334">
          <g id="Group">
            <path d={svgPaths.p20f6a680} id="Vector" stroke="var(--stroke-0, #3F4544)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p19485e00} id="Vector_2" stroke="var(--stroke-0, #0F1615)" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function HugeiconsComputerVideoCall() {
  return (
    <div className="opacity-40 relative shrink-0 size-[16px]" data-name="hugeicons:computer-video-call">
      <Group />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <HugeiconsComputerVideoCall />
      <p className="flex-[1_0_0] font-['Figtree:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px opacity-70 relative text-[#3f4544] text-[12px] whitespace-pre-wrap">Online . Gmeet</p>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame25 />
      <Frame20 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] h-[84px] items-start min-h-px min-w-px relative">
      <Frame28 />
      <Frame27 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="bg-[#2d5a4c] relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[12px] py-[6px] relative w-full">
          <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[14px] text-white">Buy Ticket</p>
        </div>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[8.33%_5.67%_8.34%_5.67%]" data-name="Group">
      <div className="absolute inset-[-4.29%_-4.03%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.4125 12.6667">
          <g id="Group">
            <path d={svgPaths.p882eaf0} id="Vector" stroke="var(--stroke-0, #2D5A4C)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p306eec80} id="Vector_2" stroke="var(--stroke-0, #2D5A4C)" />
            <path d={svgPaths.p1f55380} id="Vector_3" stroke="var(--stroke-0, #2D5A4C)" />
            <path d={svgPaths.p20f4c4f0} id="Vector_4" stroke="var(--stroke-0, #2D5A4C)" />
            <path d={svgPaths.p34446660} id="Vector_5" stroke="var(--stroke-0, #2D5A4C)" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function AkarIconsPeopleGroup() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="akar-icons:people-group">
      <Group1 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center p-[4px] relative w-full">
          <AkarIconsPeopleGroup />
          <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#2d5a4c] text-[12px]">650 Joined</p>
        </div>
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] h-full items-start justify-center relative shrink-0 w-[91px]">
      <Frame32 />
      <Frame15 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[4px] relative w-full">
          <Frame26 />
          <div className="flex flex-row items-center self-stretch">
            <Frame29 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="bg-white relative rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.12),0px_0px_3px_0px_rgba(0,0,0,0.14)] shrink-0 w-full">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-center px-[16px] py-[11px] relative w-full">
          <div className="h-[164px] relative rounded-[8px] shrink-0 w-full">
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
              <img alt="" className="absolute max-w-none object-cover rounded-[8px] size-full" src={imgRectangle356} />
              <div className="absolute bg-gradient-to-b from-[rgba(75,110,104,0)] inset-0 rounded-[8px] to-[rgba(45,90,76,0.6)]" />
            </div>
          </div>
          <Frame30 />
        </div>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[118px]">
      <div className="relative shrink-0 size-[14px]">
        <img alt="" className="block max-w-none size-full" height="14" src={imgEllipse17} width="14" />
      </div>
      <p className="flex-[1_0_0] font-['Figtree:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px opacity-60 relative text-[#3f4544] text-[12px] whitespace-pre-wrap">Stolen and Friends</p>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame21 />
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[24px] min-w-full relative shrink-0 text-[#272d2c] text-[16px] w-[min-content] whitespace-pre-wrap">Basics of Design Systems</p>
    </div>
  );
}

function LucideClock1() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="lucide/clock-4">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_15_2760)" id="lucide/clock-4" opacity="0.4">
          <path d={svgPaths.p1a9c8b00} id="Vector" stroke="var(--stroke-0, #3F4544)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_15_2760">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <LucideClock1 />
      <p className="font-['Figtree:Regular',sans-serif] font-normal leading-[20px] opacity-80 relative shrink-0 text-[#3f4544] text-[14px]">02 MAY</p>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative">
      <div className="relative shrink-0 size-[2px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, #D9D9D9)" id="Ellipse 18" r="1" />
        </svg>
      </div>
      <p className="flex-[1_0_0] font-['Figtree:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px relative text-[#2d5a4c] text-[14px] whitespace-pre-wrap">09:30 AM IST</p>
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <Frame22 />
      <Frame39 />
    </div>
  );
}

function LucideMapPin() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="lucide/map-pin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="lucide/map-pin" opacity="0.4">
          <g id="Vector">
            <path d={svgPaths.p930c0d0} stroke="var(--stroke-0, #3F4544)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p58ecc10} stroke="var(--stroke-0, #3F4544)" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <LucideMapPin />
      <p className="flex-[1_0_0] font-['Figtree:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px opacity-70 relative text-[#3f4544] text-[14px] whitespace-pre-wrap">Online . Gmeet</p>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame38 />
      <Frame23 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[84px] items-start justify-between min-h-px min-w-px relative">
      <Frame36 />
      <Frame37 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="bg-[#2d5a4c] relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[12px] py-[6px] relative w-full">
          <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[14px] text-white">Buy Ticket</p>
        </div>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[8.33%_5.67%_8.34%_5.67%]" data-name="Group">
      <div className="absolute inset-[-4.29%_-4.03%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.4125 12.6667">
          <g id="Group">
            <path d={svgPaths.p882eaf0} id="Vector" stroke="var(--stroke-0, #2D5A4C)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p306eec80} id="Vector_2" stroke="var(--stroke-0, #2D5A4C)" />
            <path d={svgPaths.p1f55380} id="Vector_3" stroke="var(--stroke-0, #2D5A4C)" />
            <path d={svgPaths.p20f4c4f0} id="Vector_4" stroke="var(--stroke-0, #2D5A4C)" />
            <path d={svgPaths.p34446660} id="Vector_5" stroke="var(--stroke-0, #2D5A4C)" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function AkarIconsPeopleGroup1() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="akar-icons:people-group">
      <Group2 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center p-[4px] relative w-full">
          <AkarIconsPeopleGroup1 />
          <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#2d5a4c] text-[12px]">650 Joined</p>
        </div>
      </div>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0 w-[91px]">
      <Frame41 />
      <Frame16 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[4px] relative w-full">
          <Frame35 />
          <Frame40 />
        </div>
      </div>
    </div>
  );
}

function Frame33() {
  return (
    <div className="bg-white relative rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.12),0px_0px_3px_0px_rgba(0,0,0,0.14)] shrink-0 w-full">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-center px-[16px] py-[11px] relative w-full">
          <div className="h-[164px] relative rounded-[8px] shrink-0 w-full">
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
              <img alt="" className="absolute max-w-none object-cover rounded-[8px] size-full" src={imgRectangle356} />
              <div className="absolute bg-gradient-to-b from-[rgba(75,110,104,0)] inset-0 rounded-[8px] to-[rgba(45,90,76,0.6)]" />
            </div>
          </div>
          <Frame34 />
        </div>
      </div>
    </div>
  );
}

function Frame43() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[514px] items-start left-0 overflow-x-clip overflow-y-auto py-[16px] top-[215px] w-[360px]">
      <Frame31 />
      <Frame33 />
    </div>
  );
}

export default function Groups() {
  return (
    <div className="bg-[#f8f7f3] relative size-full" data-name="Groups">
      <Frame8 />
      <Frame17 />
      <Frame42 />
      <Iconssss />
      <div className="absolute bg-white h-[215px] left-0 rounded-bl-[12px] rounded-br-[12px] top-0 w-[360px]" />
      <Frame43 />
    </div>
  );
}