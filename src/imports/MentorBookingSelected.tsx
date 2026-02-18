import svgPaths from "./svg-kvc2x3ljit";

function Frame16() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <p className="font-['Bricolage_Grotesque:Medium',sans-serif] font-medium leading-[20px] opacity-90 relative shrink-0 text-[#272d2c] text-[14px] w-[256px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'opsz\' 14, \'wdth\' 100" }}>{`Choose the language you're most comfortable with.`}</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="h-[50px] relative rounded-[4px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(63,69,68,0.25)] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <p className="font-['Figtree:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#3f4544] text-[14px]">English</p>
        </div>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame16 />
      <Frame />
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[8px]">
      <div aria-hidden="true" className="absolute border border-[rgba(63,69,68,0.15)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[8px] relative size-full">
          <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#1b362e] text-[14px] text-justify">Single Session</p>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[4px]">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[8px] relative size-full">
          <p className="font-['Figtree:Regular',sans-serif] font-normal leading-[20px] opacity-80 relative shrink-0 text-[#3f4544] text-[14px] text-justify">Long-Term</p>
        </div>
      </div>
    </div>
  );
}

function Frame42() {
  return (
    <div className="bg-[#f3f3f3] h-[54px] relative rounded-[12px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[4px] relative size-full">
          <Frame1 />
          <Frame3 />
        </div>
      </div>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="font-['Figtree:Medium',sans-serif] font-medium relative shrink-0 text-[#575c5b]">Single Session:</p>
      <p className="font-['Figtree:Regular',sans-serif] font-normal relative shrink-0 text-[#9fa2a1]">One time Session</p>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <p className="font-['Figtree:Medium',sans-serif] font-medium relative shrink-0 text-[#575c5b]">Long-term Sessions:</p>
      <p className="font-['Figtree:Regular',sans-serif] font-normal relative shrink-0 text-[#9fa2a1]">For buying a mentorship package</p>
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start leading-[16px] relative shrink-0 text-[12px] w-full">
      <Frame39 />
      <Frame40 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame42 />
      <Frame43 />
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[330px]">
      <p className="font-['Bricolage_Grotesque:Medium',sans-serif] font-medium leading-[20px] opacity-90 relative shrink-0 text-[#272d2c] text-[14px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "\'opsz\' 14, \'wdth\' 100" }}>
        Session type
      </p>
      <Frame44 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex items-center justify-between leading-[20px] relative shrink-0 text-[#272d2c] text-[14px] text-justify w-full">
      <p className="font-['Figtree:Medium',sans-serif] font-medium relative shrink-0">Session Capacity</p>
      <p className="font-['Figtree:Semi_Bold',sans-serif] not-italic relative shrink-0">1 / 2 Hours used</p>
    </div>
  );
}

function Frame36() {
  return (
    <div className="h-[10px] relative shrink-0 w-full">
      <div className="absolute bg-[#f3f3f3] h-[10px] left-[-0.5px] right-[0.5px] rounded-[200px] top-0" />
      <div className="absolute bg-[#2d5a4c] h-[10px] left-[-0.5px] rounded-[200px] top-0 w-[134px]" />
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
      <Frame35 />
      <Frame36 />
    </div>
  );
}

function Frame46() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(63,69,68,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[10px] items-start p-[16px] relative w-full">
        <Frame37 />
        <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#3f4544] text-[12px] w-full whitespace-pre-wrap">Total session duration has a limit of up to 2 hours.</p>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[64px] shrink-0">
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[14px] relative shrink-0 text-[#1b362e] text-[10px]">45 Min</p>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#272d2c] text-[14px] text-justify">Interview prep.</p>
      <Frame25 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[#f3f3f3] relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[16px] relative w-full">
          <Frame33 />
          <p className="font-['Figtree:Regular',sans-serif] font-normal leading-[16px] opacity-50 relative shrink-0 text-[#3f4544] text-[12px] text-justify">Free</p>
        </div>
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="bg-[#2d5a4c] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[64px] shrink-0">
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[14px] relative shrink-0 text-[10px] text-white">60 Min</p>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[206.5px]">
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#272d2c] text-[14px] text-justify">Career guidance</p>
      <Frame26 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-[#f8f7f3] relative rounded-[8px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#2d5a4c] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[16px] relative w-full">
          <Frame32 />
          <p className="font-['Figtree:Semi_Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#272d2c] text-[14px] text-justify">20$</p>
        </div>
      </div>
    </div>
  );
}

function Frame27() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[64px] shrink-0">
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[14px] relative shrink-0 text-[#1b362e] text-[10px]">45 Min</p>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#272d2c] text-[14px] text-justify">Mock Interview</p>
      <Frame27 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-[#f3f3f3] relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[16px] relative w-full">
          <Frame34 />
          <p className="font-['Figtree:Regular',sans-serif] font-normal leading-[16px] opacity-50 relative shrink-0 text-[#3f4544] text-[12px] text-justify">50 $</p>
        </div>
      </div>
    </div>
  );
}

function Frame28() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[64px] shrink-0">
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[14px] relative shrink-0 text-[#1b362e] text-[10px]">30 Min</p>
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#272d2c] text-[14px] text-justify">Portfolio Review</p>
      <Frame28 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-[#f3f3f3] relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[16px] relative w-full">
          <Frame38 />
          <p className="font-['Figtree:Regular',sans-serif] font-normal leading-[16px] opacity-50 relative shrink-0 text-[#3f4544] text-[12px] text-justify">Free</p>
        </div>
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[64px] shrink-0">
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[14px] relative shrink-0 text-[#1b362e] text-[10px]">60 Min</p>
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#272d2c] text-[14px] text-justify">Project Review</p>
      <Frame29 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-[#f3f3f3] relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[16px] relative w-full">
          <Frame47 />
          <p className="font-['Figtree:Regular',sans-serif] font-normal leading-[16px] opacity-50 relative shrink-0 text-[#3f4544] text-[12px] text-justify">30 $</p>
        </div>
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame2 />
      <Frame4 />
      <Frame5 />
      <Frame6 />
      <Frame7 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame46 />
      <Frame31 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <p className="font-['Bricolage_Grotesque:Medium',sans-serif] font-medium leading-[20px] opacity-90 relative shrink-0 text-[#272d2c] text-[14px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "\'opsz\' 14, \'wdth\' 100" }}>
        Select Service you need.
      </p>
      <Frame41 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative rounded-[4px] shrink-0">
      <p className="font-['Bricolage_Grotesque:Medium',sans-serif] font-medium leading-[20px] opacity-90 relative shrink-0 text-[#272d2c] text-[14px] text-justify" style={{ fontVariationSettings: "\'opsz\' 14, \'wdth\' 100" }}>{`Date & Time`}</p>
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame8 />
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#2d5a4c] text-[12px]">Change Date</p>
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex flex-col h-[64px] items-center justify-center pb-[13px] pt-[12px] px-[16px] relative rounded-[8px] shrink-0 w-[56px]">
      <div aria-hidden="true" className="absolute border border-[rgba(63,69,68,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[16px] opacity-70 relative shrink-0 text-[#3f4544] text-[12px] text-justify">MON</p>
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#3f4544] text-[16px] text-justify">12</p>
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex flex-col h-[64px] items-center justify-center pb-[13px] pt-[12px] px-[16px] relative rounded-[8px] shrink-0 w-[56px]">
      <div aria-hidden="true" className="absolute border border-[rgba(63,69,68,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[16px] opacity-70 relative shrink-0 text-[#3f4544] text-[12px] text-justify">TUE</p>
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#3f4544] text-[16px] text-justify">13</p>
    </div>
  );
}

function Frame50() {
  return (
    <div className="bg-[#2d5a4c] content-stretch flex flex-col font-['Figtree:Medium',sans-serif] font-medium gap-[8px] h-[74px] items-center justify-center px-[20px] py-[12px] relative rounded-[8px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.25)] shrink-0 text-justify text-white">
      <p className="leading-[16px] opacity-70 relative shrink-0 text-[12px]">WED</p>
      <p className="leading-[24px] relative shrink-0 text-[16px]">14</p>
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex flex-col h-[64px] items-center justify-center pb-[13px] pt-[12px] px-[16px] relative rounded-[8px] shrink-0 w-[56px]">
      <div aria-hidden="true" className="absolute border border-[rgba(63,69,68,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[16px] opacity-70 relative shrink-0 text-[#3f4544] text-[12px] text-justify">THU</p>
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#3f4544] text-[16px] text-justify">15</p>
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex flex-col h-[64px] items-center justify-center pb-[13px] pt-[12px] px-[16px] relative rounded-[8px] shrink-0 w-[56px]">
      <div aria-hidden="true" className="absolute border border-[rgba(63,69,68,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[16px] opacity-70 relative shrink-0 text-[#3f4544] text-[12px] text-justify">FRI</p>
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#3f4544] text-[16px] text-justify">16</p>
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full">
      <Frame48 />
      <Frame49 />
      <Frame50 />
      <Frame54 />
      <Frame56 />
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame52 />
      <Frame51 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="bg-[#f3f3f3] content-stretch flex items-center justify-between p-[8px] relative rounded-[4px] shrink-0 w-[104px]">
      <p className="font-['Figtree:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#b7b9b9] text-[14px] text-justify">10: 00 AM</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="bg-[#2d5a4c] content-stretch flex items-center justify-between p-[8px] relative rounded-[4px] shrink-0 w-[104px]">
      <p className="font-['Figtree:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-justify text-white">11:00AM</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="bg-[#f3f3f3] content-stretch flex items-center justify-between p-[8px] relative rounded-[4px] shrink-0 w-[104px]">
      <p className="font-['Figtree:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#3f4544] text-[14px] text-justify">1:00 PM</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="bg-[#f3f3f3] content-stretch flex items-center justify-between p-[8px] relative rounded-[4px] shrink-0 w-[104px]">
      <p className="font-['Figtree:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#3f4544] text-[14px] text-justify">2:00 PM</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="bg-[#f3f3f3] content-stretch flex items-center justify-between p-[8px] relative rounded-[4px] shrink-0 w-[104px]">
      <p className="font-['Figtree:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#b7b9b9] text-[14px] text-justify">3:00 PM</p>
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-start flex flex-wrap gap-[8px] items-start relative shrink-0 w-full">
      <Frame9 />
      <Frame12 />
      <Frame13 />
      <Frame14 />
      <Frame15 />
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-[328px]">
      <Frame53 />
      <Frame57 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative rounded-[4px] shrink-0">
      <p className="font-['Bricolage_Grotesque:Medium',sans-serif] font-medium leading-[20px] opacity-90 relative shrink-0 text-[#272d2c] text-[14px] text-justify" style={{ fontVariationSettings: "\'opsz\' 14, \'wdth\' 100" }}>{`Short description `}</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex h-[60px] items-start justify-center overflow-clip relative shrink-0 w-[293px]">
      <p className="flex-[1_0_0] font-['Figtree:Regular',sans-serif] font-normal h-[60px] leading-[20px] min-h-px min-w-px overflow-hidden relative text-[#b7b9b9] text-[14px] text-ellipsis whitespace-pre-wrap">Eg :As a mentee seeking guidance, my primary need is to gain clarity...</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="h-[92px] relative rounded-[4px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(63,69,68,0.1)] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[20px] py-[8px] relative size-full">
          <Frame18 />
        </div>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame17 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame19 />
      <p className="font-['Figtree:Regular',sans-serif] font-normal h-[48px] leading-[16px] opacity-40 relative shrink-0 text-[#3f4544] text-[12px] w-[328px] whitespace-pre-wrap">Short description helps mentor to understand your primary needs of this session so that mentor can prepare before the session and save your time.</p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame10 />
      <Frame24 />
    </div>
  );
}

function Frame59() {
  return (
    <div className="-translate-x-1/2 absolute bg-white content-stretch flex flex-col gap-[48px] h-[644px] items-start left-[calc(50%+1.5px)] pb-[32px] pt-[24px] px-[16px] top-[80px] w-[360px]">
      <Frame23 />
      <Frame45 />
      <Frame20 />
      <Frame55 />
      <Frame21 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#2d5a4c] bottom-[24px] content-stretch flex h-[52px] items-center justify-center left-[calc(50%+0.5px)] px-[20px] py-[16px] rounded-[8px] w-[328px]">
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[16px] text-white">Continue for Confirmation</p>
    </div>
  );
}

function IconamoonArrowLeft2Duotone() {
  return (
    <div className="h-[24px] relative shrink-0 w-[22px]" data-name="iconamoon:arrow-left-2-duotone">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 24">
        <g id="iconamoon:arrow-left-2-duotone">
          <path d={svgPaths.p2c50c8c0} id="Vector" stroke="var(--stroke-0, #0F1615)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex items-center p-[10px] relative shrink-0">
      <IconamoonArrowLeft2Duotone />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <div className="bg-[#2d5a4c] rounded-[200px] shrink-0 size-[8px]" />
      <div className="bg-[#e7e8e8] rounded-[200px] shrink-0 size-[8px]" />
      <div className="bg-[#e7e8e8] h-[8px] rounded-[200px] shrink-0 w-[34px]" />
    </div>
  );
}

function Frame58() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[16px] top-[36px] w-[326px]">
      <Frame11 />
      <Frame30 />
    </div>
  );
}

export default function MentorBookingSelected() {
  return (
    <div className="bg-white relative size-full" data-name="Mentor Booking/selected">
      <Frame59 />
      <Frame22 />
      <Frame58 />
    </div>
  );
}