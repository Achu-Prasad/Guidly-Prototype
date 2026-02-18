import svgPaths from "./svg-cuwx32e6ul";
import imgFrame202 from "../assets/077ac054d733d28e01e7d9018b3e5bb140a75c6b.png";
import imgFrame205 from "../assets/789d8f2f18189d4fd935fc937e86de90d343fdbb.png";
import imgFrame204 from "../assets/a800f2f4426e38833c204ca2afbe165183d69d30.png";
import imgFrame207 from "../assets/974f64139ae2c5e04862c15f091168fc30ea0604.png";
import imgFrame203 from "../assets/783f2f0d0e239a962510c5385e1e5350c509fb4b.png";
import imgFrame206 from "../assets/78096bef9e9107a3563eada9676656b35366e1ba.png";
import imgFrame208 from "../assets/e74205c2b9964c332ba76335f396fa34ff27f6e2.png";
import imgFrame209 from "../assets/d3e10467954f597b5b78a18c4ae1b5a842627cea.png";
import imgFrame210 from "../assets/9da4348ad61c4560bb9f64d5853da2b82b34aec5.png";
import imgFrame211 from "../assets/79be69bbd24aad3b8454f2e0f2fb5b1276be5cc6.png";
import imgFrame212 from "../assets/8f331114f2654e8e73a8351173af16a47065cf73.png";
import imgFrame213 from "../assets/4e5a67961316284e50cebdd610e51f82f0d64a6c.png";
import imgFrame214 from "../assets/5f0e16ab9fcec06cfcfdf4210062651540900a59.png";
import imgFrame215 from "../assets/80d6ddd6e3f5393643554787e9bf9c27e3ab8e7e.png";
import imgFrame216 from "../assets/3cfc6f7fd681186fa4d136cceae6a46a0038156e.png";
import imgFrame217 from "../assets/9c3eb875fef8893a5f9f6a9e0dbef8a11cdfc597.png";
import imgFrame218 from "../assets/d80059837f12c3135914bcbae5d2eebddaf9c732.png";
import imgFrame219 from "../assets/c064848b5664cafb44cdca26f05a53e62acd7ff0.png";

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

function Frame37() {
  return (
    <div className="content-stretch flex items-center justify-center p-[6px] relative rounded-[56px] shrink-0 size-[48px]">
      <SolarBellBroken />
    </div>
  );
}

function Frame57() {
  return (
    <div className="absolute bg-[#fb2c36] content-stretch flex items-center justify-center left-[24px] rounded-[89px] size-[15px] top-[11px]">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[10px] text-white">4</p>
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0">
      <Frame37 />
      <Frame57 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="absolute content-stretch flex h-[48px] items-center justify-between left-[16px] rounded-bl-[12px] rounded-br-[12px] top-[40px] w-[328px]">
      <Frame5 />
      <Frame59 />
    </div>
  );
}

function Frame62() {
  return (
    <div className="bg-[#edebe1] content-stretch flex items-center justify-center px-[12px] py-[8px] relative rounded-[4px] shrink-0">
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#2d5a4c] text-[14px]">Feed</p>
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative rounded-[4px] shrink-0">
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[20px] opacity-90 relative shrink-0 text-[#3f4544] text-[14px]">Recent</p>
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative rounded-[4px] shrink-0">
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[20px] opacity-90 relative shrink-0 text-[#3f4544] text-[14px]">Favourites</p>
    </div>
  );
}

function Frame66() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px overflow-x-auto overflow-y-clip relative">
      <Frame62 />
      <Frame63 />
      <Frame64 />
    </div>
  );
}

function Frame132() {
  return (
    <div className="absolute content-stretch flex h-[32px] items-center left-[16px] top-[168px] w-[328px]">
      <Frame66 />
    </div>
  );
}

function House() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="House">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="House">
          <path d={svgPaths.pf1a2200} fill="var(--fill-0, #2D5A4C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center p-[8px] relative shrink-0 size-[55px]">
      <House />
      <p className="font-['Figtree:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#2d5a4c] text-[12px]">Home</p>
    </div>
  );
}

function UsersThree() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="UsersThree">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="UsersThree">
          <path d={svgPaths.p17789300} fill="var(--fill-0, #0F1615)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center opacity-80 p-[8px] relative shrink-0 size-[55px]">
      <UsersThree />
      <p className="font-['Figtree:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#3f4544] text-[12px]">Team Up</p>
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
    <div className="absolute bg-white content-stretch flex gap-[16px] items-center justify-center left-0 overflow-clip px-[16px] py-[8px] shadow-[0px_-8px_20.6px_-6px_rgba(0,0,0,0.1)] top-[729px] w-[360px]" data-name="Iconssss">
      <Frame />
      <Frame4 />
      <Frame2 />
      <Frame1 />
      <Frame3 />
    </div>
  );
}

function LineMdStarFilled() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="line-md:star-filled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="line-md:star-filled">
          <path d={svgPaths.p20c8eff0} fill="var(--fill-0, #2D5A4C)" id="Vector" />
          <path d={svgPaths.p3a3cc600} id="Vector_2" stroke="var(--stroke-0, #2D5A4C)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-white content-stretch flex gap-[2px] items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0">
      <p className="font-['Figtree:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#3f4544] text-[12px] text-center">5</p>
      <LineMdStarFilled />
      <p className="font-['Figtree:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#3f4544] text-[12px] text-center">(92+ reviews)</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <Frame7 />
    </div>
  );
}

function CurrencyRupeeCircle() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="currency_rupee_circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="currency_rupee_circle">
          <mask height="12" id="mask0_9_1025" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="12" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="12" id="Bounding box" width="12" />
          </mask>
          <g mask="url(#mask0_9_1025)">
            <path d={svgPaths.p1ddbd000} fill="var(--fill-0, #0F1615)" id="currency_rupee_circle_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-white content-stretch flex h-[20px] items-center justify-center opacity-72 px-[4px] relative rounded-[4px] shrink-0">
      <CurrencyRupeeCircle />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame13 />
      <Frame8 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center leading-[20px] relative shrink-0 text-[14px] text-ellipsis text-white w-full whitespace-nowrap">
      <p className="font-['Bricolage_Grotesque:Medium',sans-serif] font-medium overflow-hidden relative shrink-0 w-full" style={{ fontVariationSettings: "\'opsz\' 14, \'wdth\' 100" }}>
        Chandrasekhar
      </p>
      <p className="font-['Figtree:Regular',sans-serif] font-normal opacity-70 overflow-hidden relative shrink-0 w-full">Senior Ui Ux Designer @ Infosys</p>
    </div>
  );
}

function Frame95() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full">
      <Frame16 />
    </div>
  );
}

function Frame98() {
  return (
    <div className="h-[236px] relative rounded-[8px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
        <div className="absolute bg-[#edebe1] inset-0 rounded-[8px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[8px] size-full" src={imgFrame202} />
        <div className="absolute bg-gradient-to-b from-[53.396%] from-[rgba(0,0,0,0)] inset-0 rounded-[8px] to-[#0f1615]" />
      </div>
      <div className="content-stretch flex flex-col items-start justify-between p-[12px] relative size-full">
        <Frame14 />
        <Frame95 />
      </div>
    </div>
  );
}

function LineMdStarFilled1() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="line-md:star-filled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="line-md:star-filled">
          <path d={svgPaths.p20c8eff0} fill="var(--fill-0, #2D5A4C)" id="Vector" />
          <path d={svgPaths.p3a3cc600} id="Vector_2" stroke="var(--stroke-0, #2D5A4C)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Frame9() {
  return (
    <div className="bg-white content-stretch flex gap-[2px] items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0">
      <p className="font-['Figtree:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#3f4544] text-[12px] text-center">4</p>
      <LineMdStarFilled1 />
      <p className="font-['Figtree:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#3f4544] text-[12px] text-center">(20+ reviews)</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <Frame9 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center leading-[20px] relative shrink-0 text-[14px] text-ellipsis text-white w-full whitespace-nowrap">
      <p className="font-['Bricolage_Grotesque:Medium',sans-serif] font-medium overflow-hidden relative shrink-0 w-full" style={{ fontVariationSettings: "\'opsz\' 14, \'wdth\' 100" }}>
        John Doe
      </p>
      <p className="font-['Figtree:Regular',sans-serif] font-normal opacity-70 overflow-hidden relative shrink-0 w-full">Creative Lead @ Salesforce</p>
    </div>
  );
}

function Frame96() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full">
      <Frame17 />
    </div>
  );
}

function Frame101() {
  return (
    <div className="h-[236px] relative rounded-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[12px]">
        <div className="absolute bg-[#3f4544] inset-0 rounded-[12px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[12px] size-full" src={imgFrame205} />
        <div className="absolute bg-gradient-to-b from-[53.396%] from-[rgba(0,0,0,0)] inset-0 rounded-[12px] to-[#0f1615]" />
      </div>
      <div className="content-stretch flex flex-col items-start justify-between p-[12px] relative size-full">
        <Frame15 />
        <Frame96 />
      </div>
    </div>
  );
}

function LineMdStarFilled2() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="line-md:star-filled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="line-md:star-filled">
          <path d={svgPaths.p20c8eff0} fill="var(--fill-0, #2D5A4C)" id="Vector" />
          <path d={svgPaths.p3a3cc600} id="Vector_2" stroke="var(--stroke-0, #2D5A4C)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Frame10() {
  return (
    <div className="bg-white content-stretch flex gap-[2px] h-[20px] items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#3f4544] text-[10px] text-center">4.5</p>
      <LineMdStarFilled2 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#3f4544] text-[10px] text-center">(120+ reviews)</p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <Frame10 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <Frame19 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center leading-[normal] not-italic relative shrink-0 text-ellipsis text-white w-full whitespace-nowrap">
      <p className="font-['Inter:Medium',sans-serif] font-medium overflow-hidden relative shrink-0 text-[16px] w-full">Rone Riguz</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal opacity-70 overflow-hidden relative shrink-0 text-[12px] w-full">Creative Designer @ Fivrr</p>
    </div>
  );
}

function Frame97() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full">
      <Frame20 />
    </div>
  );
}

function Frame100() {
  return (
    <div className="h-[236px] relative rounded-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[12px]">
        <div className="absolute bg-[#3f4544] inset-0 rounded-[12px]" />
        <div className="absolute inset-0 overflow-hidden rounded-[12px]">
          <img alt="" className="absolute h-[208.47%] left-0 max-w-none top-[-16.95%] w-full" src={imgFrame204} />
        </div>
        <div className="absolute bg-gradient-to-b from-[53.396%] from-[rgba(0,0,0,0)] inset-0 rounded-[12px] to-[#0f1615]" />
      </div>
      <div className="content-stretch flex flex-col items-start justify-between p-[12px] relative size-full">
        <Frame18 />
        <Frame97 />
      </div>
    </div>
  );
}

function LineMdStarFilled3() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="line-md:star-filled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="line-md:star-filled">
          <path d={svgPaths.p20c8eff0} fill="var(--fill-0, #2D5A4C)" id="Vector" />
          <path d={svgPaths.p3a3cc600} id="Vector_2" stroke="var(--stroke-0, #2D5A4C)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Frame11() {
  return (
    <div className="bg-white content-stretch flex gap-[2px] h-[20px] items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#3f4544] text-[10px] text-center">4.2</p>
      <LineMdStarFilled3 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#3f4544] text-[10px] text-center">(80+ reviews)</p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <Frame11 />
    </div>
  );
}

function CurrencyRupeeCircle1() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="currency_rupee_circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="currency_rupee_circle">
          <mask height="12" id="mask0_9_1025" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="12" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="12" id="Bounding box" width="12" />
          </mask>
          <g mask="url(#mask0_9_1025)">
            <path d={svgPaths.p1ddbd000} fill="var(--fill-0, #0F1615)" id="currency_rupee_circle_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame12() {
  return (
    <div className="bg-white content-stretch flex h-[20px] items-center justify-center opacity-72 px-[4px] relative rounded-[4px] shrink-0">
      <CurrencyRupeeCircle1 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame22 />
      <Frame12 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center leading-[normal] not-italic relative shrink-0 text-ellipsis text-white w-full whitespace-nowrap">
      <p className="font-['Inter:Medium',sans-serif] font-medium overflow-hidden relative shrink-0 text-[16px] w-full">Arun Kumar</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal opacity-70 overflow-hidden relative shrink-0 text-[12px] w-full">Ui/Ux Designer @ Zoho</p>
    </div>
  );
}

function Frame99() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full">
      <Frame23 />
    </div>
  );
}

function Frame103() {
  return (
    <div className="h-[236px] relative rounded-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[12px]">
        <div className="absolute bg-[#3f4544] inset-0 rounded-[12px]" />
        <div className="absolute inset-0 overflow-hidden rounded-[12px]">
          <img alt="" className="absolute h-[208.47%] left-0 max-w-none top-[-27.54%] w-full" src={imgFrame207} />
        </div>
        <div className="absolute bg-gradient-to-b from-[53.396%] from-[rgba(0,0,0,0)] inset-0 rounded-[12px] to-[#0f1615]" />
      </div>
      <div className="content-stretch flex flex-col items-start justify-between p-[12px] relative size-full">
        <Frame21 />
        <Frame99 />
      </div>
    </div>
  );
}

function LineMdStarFilled4() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="line-md:star-filled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="line-md:star-filled">
          <path d={svgPaths.p20c8eff0} fill="var(--fill-0, #2D5A4C)" id="Vector" />
          <path d={svgPaths.p3a3cc600} id="Vector_2" stroke="var(--stroke-0, #2D5A4C)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Frame26() {
  return (
    <div className="bg-white content-stretch flex gap-[2px] h-[20px] items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#3f4544] text-[10px] text-center">4.9</p>
      <LineMdStarFilled4 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#3f4544] text-[10px] text-center">(30+ reviews)</p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <Frame26 />
    </div>
  );
}

function CurrencyRupeeCircle2() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="currency_rupee_circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="currency_rupee_circle">
          <mask height="12" id="mask0_9_1025" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="12" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="12" id="Bounding box" width="12" />
          </mask>
          <g mask="url(#mask0_9_1025)">
            <path d={svgPaths.p1ddbd000} fill="var(--fill-0, #0F1615)" id="currency_rupee_circle_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame27() {
  return (
    <div className="bg-white content-stretch flex h-[20px] items-center justify-center opacity-72 px-[4px] relative rounded-[4px] shrink-0">
      <CurrencyRupeeCircle2 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame25 />
      <Frame27 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center leading-[normal] not-italic relative shrink-0 text-ellipsis text-white w-full whitespace-nowrap">
      <p className="font-['Inter:Medium',sans-serif] font-medium overflow-hidden relative shrink-0 text-[16px] w-full">Akash Chanchal</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal opacity-70 overflow-hidden relative shrink-0 text-[12px] w-full">Product manager @ BOSCH</p>
    </div>
  );
}

function Frame104() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full">
      <Frame28 />
    </div>
  );
}

function Frame102() {
  return (
    <div className="h-[236px] relative rounded-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[12px]">
        <div className="absolute bg-[#3f4544] inset-0 rounded-[12px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[12px] size-full" src={imgFrame203} />
        <div className="absolute bg-gradient-to-b from-[53.396%] from-[rgba(0,0,0,0)] inset-0 rounded-[12px] to-[#0f1615]" />
      </div>
      <div className="content-stretch flex flex-col items-start justify-between p-[12px] relative size-full">
        <Frame24 />
        <Frame104 />
      </div>
    </div>
  );
}

function LineMdStarFilled5() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="line-md:star-filled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="line-md:star-filled">
          <path d={svgPaths.p20c8eff0} fill="var(--fill-0, #2D5A4C)" id="Vector" />
          <path d={svgPaths.p3a3cc600} id="Vector_2" stroke="var(--stroke-0, #2D5A4C)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Frame31() {
  return (
    <div className="bg-white content-stretch flex gap-[2px] h-[20px] items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#3f4544] text-[10px] text-center">4.4</p>
      <LineMdStarFilled5 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#3f4544] text-[10px] text-center">(80+ reviews)</p>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <Frame31 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <Frame30 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center leading-[normal] not-italic relative shrink-0 text-ellipsis text-white w-full whitespace-nowrap">
      <p className="font-['Inter:Medium',sans-serif] font-medium overflow-hidden relative shrink-0 text-[16px] w-full">James Deccan</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal opacity-70 overflow-hidden relative shrink-0 text-[12px] w-full">{`Business Strategist @ Freshworks `}</p>
    </div>
  );
}

function Frame106() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full">
      <Frame32 />
    </div>
  );
}

function Frame105() {
  return (
    <div className="h-[236px] relative rounded-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[12px]">
        <div className="absolute bg-[#3f4544] inset-0 rounded-[12px]" />
        <div className="absolute inset-0 overflow-hidden rounded-[12px]">
          <img alt="" className="absolute h-[208.47%] left-0 max-w-none top-[-16.1%] w-full" src={imgFrame206} />
        </div>
        <div className="absolute bg-gradient-to-b from-[53.396%] from-[rgba(0,0,0,0)] inset-0 rounded-[12px] to-[#0f1615]" />
      </div>
      <div className="content-stretch flex flex-col items-start justify-between p-[12px] relative size-full">
        <Frame29 />
        <Frame106 />
      </div>
    </div>
  );
}

function LineMdStarFilled6() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="line-md:star-filled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="line-md:star-filled">
          <path d={svgPaths.p20c8eff0} fill="var(--fill-0, #2D5A4C)" id="Vector" />
          <path d={svgPaths.p3a3cc600} id="Vector_2" stroke="var(--stroke-0, #2D5A4C)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Frame35() {
  return (
    <div className="bg-white content-stretch flex gap-[2px] h-[20px] items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#3f4544] text-[10px] text-center">4.9</p>
      <LineMdStarFilled6 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#3f4544] text-[10px] text-center">(100+ reviews)</p>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <Frame35 />
    </div>
  );
}

function CurrencyRupeeCircle3() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="currency_rupee_circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="currency_rupee_circle">
          <mask height="12" id="mask0_9_1025" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="12" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="12" id="Bounding box" width="12" />
          </mask>
          <g mask="url(#mask0_9_1025)">
            <path d={svgPaths.p1ddbd000} fill="var(--fill-0, #0F1615)" id="currency_rupee_circle_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame36() {
  return (
    <div className="bg-white content-stretch flex h-[20px] items-center justify-center opacity-72 px-[4px] relative rounded-[4px] shrink-0">
      <CurrencyRupeeCircle3 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame34 />
      <Frame36 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center leading-[normal] not-italic relative shrink-0 text-ellipsis text-white w-full whitespace-nowrap">
      <p className="font-['Inter:Medium',sans-serif] font-medium overflow-hidden relative shrink-0 text-[16px] w-full">Nicole D’Maria</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal opacity-70 overflow-hidden relative shrink-0 text-[12px] w-full">Product Designer @ Wallmart</p>
    </div>
  );
}

function Frame108() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full">
      <Frame38 />
    </div>
  );
}

function Frame107() {
  return (
    <div className="h-[236px] relative rounded-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[12px]">
        <div className="absolute bg-[#3f4544] inset-0 rounded-[12px]" />
        <div className="absolute inset-0 overflow-hidden rounded-[12px]">
          <img alt="" className="absolute h-[208.47%] left-0 max-w-none top-[-10.17%] w-full" src={imgFrame208} />
        </div>
        <div className="absolute bg-gradient-to-b from-[53.396%] from-[rgba(0,0,0,0)] inset-0 rounded-[12px] to-[#0f1615]" />
      </div>
      <div className="content-stretch flex flex-col items-start justify-between p-[12px] relative size-full">
        <Frame33 />
        <Frame108 />
      </div>
    </div>
  );
}

function LineMdStarFilled7() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="line-md:star-filled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="line-md:star-filled">
          <path d={svgPaths.p20c8eff0} fill="var(--fill-0, #2D5A4C)" id="Vector" />
          <path d={svgPaths.p3a3cc600} id="Vector_2" stroke="var(--stroke-0, #2D5A4C)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Frame42() {
  return (
    <div className="bg-white content-stretch flex gap-[2px] h-[20px] items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#3f4544] text-[10px] text-center">4.2</p>
      <LineMdStarFilled7 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#3f4544] text-[10px] text-center">(20+ reviews)</p>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <Frame42 />
    </div>
  );
}

function CurrencyRupeeCircle4() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="currency_rupee_circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="currency_rupee_circle">
          <mask height="12" id="mask0_9_1025" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="12" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="12" id="Bounding box" width="12" />
          </mask>
          <g mask="url(#mask0_9_1025)">
            <path d={svgPaths.p1ddbd000} fill="var(--fill-0, #0F1615)" id="currency_rupee_circle_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame43() {
  return (
    <div className="bg-white content-stretch flex h-[20px] items-center justify-center opacity-72 px-[4px] relative rounded-[4px] shrink-0">
      <CurrencyRupeeCircle4 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame41 />
      <Frame43 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center leading-[normal] not-italic relative shrink-0 text-ellipsis text-white w-full whitespace-nowrap">
      <p className="font-['Inter:Medium',sans-serif] font-medium overflow-hidden relative shrink-0 text-[16px] w-full">Jancy Daniel</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal opacity-70 overflow-hidden relative shrink-0 text-[12px] w-full">Software Developer @ intel</p>
    </div>
  );
}

function Frame110() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full">
      <Frame44 />
    </div>
  );
}

function Frame109() {
  return (
    <div className="h-[236px] relative rounded-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[12px]">
        <div className="absolute bg-[#3f4544] inset-0 rounded-[12px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[12px] size-full" src={imgFrame209} />
        <div className="absolute bg-gradient-to-b from-[53.396%] from-[rgba(0,0,0,0)] inset-0 rounded-[12px] to-[#0f1615]" />
      </div>
      <div className="content-stretch flex flex-col items-start justify-between p-[12px] relative size-full">
        <Frame40 />
        <Frame110 />
      </div>
    </div>
  );
}

function LineMdStarFilled8() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="line-md:star-filled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="line-md:star-filled">
          <path d={svgPaths.p20c8eff0} fill="var(--fill-0, #2D5A4C)" id="Vector" />
          <path d={svgPaths.p3a3cc600} id="Vector_2" stroke="var(--stroke-0, #2D5A4C)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Frame47() {
  return (
    <div className="bg-white content-stretch flex gap-[2px] h-[20px] items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#3f4544] text-[10px] text-center">4.3</p>
      <LineMdStarFilled8 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#3f4544] text-[10px] text-center">(30+ reviews)</p>
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <Frame47 />
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <Frame46 />
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center leading-[normal] not-italic relative shrink-0 text-ellipsis text-white w-full whitespace-nowrap">
      <p className="font-['Inter:Medium',sans-serif] font-medium overflow-hidden relative shrink-0 text-[16px] w-full">Rinole</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal opacity-70 overflow-hidden relative shrink-0 text-[12px] w-full">Human Resource Manager @ TCS</p>
    </div>
  );
}

function Frame112() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full">
      <Frame48 />
    </div>
  );
}

function Frame111() {
  return (
    <div className="h-[236px] relative rounded-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[12px]">
        <div className="absolute bg-[#3f4544] inset-0 rounded-[12px]" />
        <div className="absolute inset-0 overflow-hidden rounded-[12px]">
          <img alt="" className="absolute h-[208.47%] left-0 max-w-none top-[-33.05%] w-full" src={imgFrame210} />
        </div>
        <div className="absolute bg-gradient-to-b from-[53.396%] from-[rgba(0,0,0,0)] inset-0 rounded-[12px] to-[#0f1615]" />
      </div>
      <div className="content-stretch flex flex-col items-start justify-between p-[12px] relative size-full">
        <Frame45 />
        <Frame112 />
      </div>
    </div>
  );
}

function LineMdStarFilled9() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="line-md:star-filled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="line-md:star-filled">
          <path d={svgPaths.p20c8eff0} fill="var(--fill-0, #2D5A4C)" id="Vector" />
          <path d={svgPaths.p3a3cc600} id="Vector_2" stroke="var(--stroke-0, #2D5A4C)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Frame51() {
  return (
    <div className="bg-white content-stretch flex gap-[2px] h-[20px] items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#3f4544] text-[10px] text-center">4.9</p>
      <LineMdStarFilled9 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#3f4544] text-[10px] text-center">(70+ reviews)</p>
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <Frame51 />
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <Frame50 />
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center leading-[normal] not-italic relative shrink-0 text-ellipsis text-white w-full whitespace-nowrap">
      <p className="font-['Inter:Medium',sans-serif] font-medium overflow-hidden relative shrink-0 text-[16px] w-full">Chanchal Verma</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal opacity-70 overflow-hidden relative shrink-0 text-[12px] w-full">User Experience Designer @ HCL Tech</p>
    </div>
  );
}

function Frame114() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full">
      <Frame52 />
    </div>
  );
}

function Frame113() {
  return (
    <div className="h-[236px] relative rounded-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[12px]">
        <div className="absolute bg-[#3f4544] inset-0 rounded-[12px]" />
        <div className="absolute inset-0 overflow-hidden rounded-[12px]">
          <img alt="" className="absolute h-[181.8%] left-0 max-w-none top-[-19.72%] w-full" src={imgFrame211} />
        </div>
        <div className="absolute bg-gradient-to-b from-[53.396%] from-[rgba(0,0,0,0)] inset-0 rounded-[12px] to-[#0f1615]" />
      </div>
      <div className="content-stretch flex flex-col items-start justify-between p-[12px] relative size-full">
        <Frame49 />
        <Frame114 />
      </div>
    </div>
  );
}

function LineMdStarFilled10() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="line-md:star-filled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="line-md:star-filled">
          <path d={svgPaths.p20c8eff0} fill="var(--fill-0, #2D5A4C)" id="Vector" />
          <path d={svgPaths.p3a3cc600} id="Vector_2" stroke="var(--stroke-0, #2D5A4C)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Frame55() {
  return (
    <div className="bg-white content-stretch flex gap-[2px] h-[20px] items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#3f4544] text-[10px] text-center">4.3</p>
      <LineMdStarFilled10 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#3f4544] text-[10px] text-center">(90+ reviews)</p>
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <Frame55 />
    </div>
  );
}

function CurrencyRupeeCircle5() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="currency_rupee_circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="currency_rupee_circle">
          <mask height="12" id="mask0_9_1025" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="12" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="12" id="Bounding box" width="12" />
          </mask>
          <g mask="url(#mask0_9_1025)">
            <path d={svgPaths.p1ddbd000} fill="var(--fill-0, #0F1615)" id="currency_rupee_circle_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame56() {
  return (
    <div className="bg-white content-stretch flex h-[20px] items-center justify-center opacity-72 px-[4px] relative rounded-[4px] shrink-0">
      <CurrencyRupeeCircle5 />
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame54 />
      <Frame56 />
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center leading-[normal] not-italic relative shrink-0 text-ellipsis text-white w-full whitespace-nowrap">
      <p className="font-['Inter:Medium',sans-serif] font-medium overflow-hidden relative shrink-0 text-[16px] w-full">Thrimul Chakrabarthi</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal opacity-70 overflow-hidden relative shrink-0 text-[12px] w-full">Senior Ui/UX Designer @ Target</p>
    </div>
  );
}

function Frame116() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full">
      <Frame58 />
    </div>
  );
}

function Frame115() {
  return (
    <div className="h-[236px] relative rounded-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[12px]">
        <div className="absolute bg-[#3f4544] inset-0 rounded-[12px]" />
        <div className="absolute inset-0 overflow-hidden rounded-[12px]">
          <img alt="" className="absolute h-[208.91%] left-0 max-w-none top-[-64.2%] w-full" src={imgFrame212} />
        </div>
        <div className="absolute bg-gradient-to-b from-[53.396%] from-[rgba(0,0,0,0)] inset-0 rounded-[12px] to-[#0f1615]" />
      </div>
      <div className="content-stretch flex flex-col items-start justify-between p-[12px] relative size-full">
        <Frame53 />
        <Frame116 />
      </div>
    </div>
  );
}

function LineMdStarFilled11() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="line-md:star-filled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="line-md:star-filled">
          <path d={svgPaths.p20c8eff0} fill="var(--fill-0, #2D5A4C)" id="Vector" />
          <path d={svgPaths.p3a3cc600} id="Vector_2" stroke="var(--stroke-0, #2D5A4C)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Frame65() {
  return (
    <div className="bg-white content-stretch flex gap-[2px] h-[20px] items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#3f4544] text-[10px] text-center">4</p>
      <LineMdStarFilled11 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#3f4544] text-[10px] text-center">(30+ reviews)</p>
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <Frame65 />
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <Frame61 />
    </div>
  );
}

function Frame67() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center leading-[normal] not-italic relative shrink-0 text-ellipsis text-white w-full whitespace-nowrap">
      <p className="font-['Inter:Medium',sans-serif] font-medium overflow-hidden relative shrink-0 text-[16px] w-full">{`Richard `}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal opacity-70 overflow-hidden relative shrink-0 text-[12px] w-full">Ai Architect @ Hume ai</p>
    </div>
  );
}

function Frame118() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full">
      <Frame67 />
    </div>
  );
}

function Frame117() {
  return (
    <div className="h-[236px] relative rounded-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[12px]">
        <div className="absolute bg-[#3f4544] inset-0 rounded-[12px]" />
        <div className="absolute inset-0 overflow-hidden rounded-[12px]">
          <img alt="" className="absolute h-[208.47%] left-0 max-w-none top-[-10.59%] w-full" src={imgFrame213} />
        </div>
        <div className="absolute bg-gradient-to-b from-[53.396%] from-[rgba(0,0,0,0)] inset-0 rounded-[12px] to-[#0f1615]" />
      </div>
      <div className="content-stretch flex flex-col items-start justify-between p-[12px] relative size-full">
        <Frame60 />
        <Frame118 />
      </div>
    </div>
  );
}

function LineMdStarFilled12() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="line-md:star-filled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="line-md:star-filled">
          <path d={svgPaths.p20c8eff0} fill="var(--fill-0, #2D5A4C)" id="Vector" />
          <path d={svgPaths.p3a3cc600} id="Vector_2" stroke="var(--stroke-0, #2D5A4C)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Frame70() {
  return (
    <div className="bg-white content-stretch flex gap-[2px] h-[20px] items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#3f4544] text-[10px] text-center">4.7</p>
      <LineMdStarFilled12 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#3f4544] text-[10px] text-center">(120+ reviews)</p>
    </div>
  );
}

function Frame69() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <Frame70 />
    </div>
  );
}

function CurrencyRupeeCircle6() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="currency_rupee_circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="currency_rupee_circle">
          <mask height="12" id="mask0_9_1025" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="12" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="12" id="Bounding box" width="12" />
          </mask>
          <g mask="url(#mask0_9_1025)">
            <path d={svgPaths.p1ddbd000} fill="var(--fill-0, #0F1615)" id="currency_rupee_circle_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame71() {
  return (
    <div className="bg-white content-stretch flex h-[20px] items-center justify-center opacity-72 px-[4px] relative rounded-[4px] shrink-0">
      <CurrencyRupeeCircle6 />
    </div>
  );
}

function Frame68() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame69 />
      <Frame71 />
    </div>
  );
}

function Frame72() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center leading-[normal] not-italic relative shrink-0 text-ellipsis text-white w-full whitespace-nowrap">
      <p className="font-['Inter:Medium',sans-serif] font-medium overflow-hidden relative shrink-0 text-[16px] w-full">Dialela</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal opacity-70 overflow-hidden relative shrink-0 text-[12px] w-full">Product Manager @ Sesame</p>
    </div>
  );
}

function Frame120() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full">
      <Frame72 />
    </div>
  );
}

function Frame119() {
  return (
    <div className="h-[236px] relative rounded-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[12px]">
        <div className="absolute bg-[#3f4544] inset-0 rounded-[12px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[12px] size-full" src={imgFrame214} />
        <div className="absolute bg-gradient-to-b from-[53.396%] from-[rgba(0,0,0,0)] inset-0 rounded-[12px] to-[#0f1615]" />
      </div>
      <div className="content-stretch flex flex-col items-start justify-between p-[12px] relative size-full">
        <Frame68 />
        <Frame120 />
      </div>
    </div>
  );
}

function LineMdStarFilled13() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="line-md:star-filled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="line-md:star-filled">
          <path d={svgPaths.p20c8eff0} fill="var(--fill-0, #2D5A4C)" id="Vector" />
          <path d={svgPaths.p3a3cc600} id="Vector_2" stroke="var(--stroke-0, #2D5A4C)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Frame75() {
  return (
    <div className="bg-white content-stretch flex gap-[2px] h-[20px] items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#3f4544] text-[10px] text-center">4.8</p>
      <LineMdStarFilled13 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#3f4544] text-[10px] text-center">(10+ reviews)</p>
    </div>
  );
}

function Frame74() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <Frame75 />
    </div>
  );
}

function CurrencyRupeeCircle7() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="currency_rupee_circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="currency_rupee_circle">
          <mask height="12" id="mask0_9_1025" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="12" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="12" id="Bounding box" width="12" />
          </mask>
          <g mask="url(#mask0_9_1025)">
            <path d={svgPaths.p1ddbd000} fill="var(--fill-0, #0F1615)" id="currency_rupee_circle_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame76() {
  return (
    <div className="bg-white content-stretch flex h-[20px] items-center justify-center opacity-72 px-[4px] relative rounded-[4px] shrink-0">
      <CurrencyRupeeCircle7 />
    </div>
  );
}

function Frame73() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame74 />
      <Frame76 />
    </div>
  );
}

function Frame77() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center leading-[normal] not-italic relative shrink-0 text-ellipsis text-white w-full whitespace-nowrap">
      <p className="font-['Inter:Medium',sans-serif] font-medium overflow-hidden relative shrink-0 text-[16px] w-full">{`james `}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal opacity-70 overflow-hidden relative shrink-0 text-[12px] w-full">Data Scientist @ Infosys</p>
    </div>
  );
}

function Frame122() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full">
      <Frame77 />
    </div>
  );
}

function Frame121() {
  return (
    <div className="h-[236px] relative rounded-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[12px]">
        <div className="absolute bg-[#3f4544] inset-0 rounded-[12px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[12px] size-full" src={imgFrame215} />
        <div className="absolute bg-gradient-to-b from-[53.396%] from-[rgba(0,0,0,0)] inset-0 rounded-[12px] to-[#0f1615]" />
      </div>
      <div className="content-stretch flex flex-col items-start justify-between p-[12px] relative size-full">
        <Frame73 />
        <Frame122 />
      </div>
    </div>
  );
}

function LineMdStarFilled14() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="line-md:star-filled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="line-md:star-filled">
          <path d={svgPaths.p20c8eff0} fill="var(--fill-0, #2D5A4C)" id="Vector" />
          <path d={svgPaths.p3a3cc600} id="Vector_2" stroke="var(--stroke-0, #2D5A4C)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Frame80() {
  return (
    <div className="bg-white content-stretch flex gap-[2px] h-[20px] items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#3f4544] text-[10px] text-center">4.8</p>
      <LineMdStarFilled14 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#3f4544] text-[10px] text-center">(150+ reviews)</p>
    </div>
  );
}

function Frame79() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <Frame80 />
    </div>
  );
}

function Frame78() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <Frame79 />
    </div>
  );
}

function Frame81() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center leading-[normal] not-italic relative shrink-0 text-ellipsis text-white w-full whitespace-nowrap">
      <p className="font-['Inter:Medium',sans-serif] font-medium overflow-hidden relative shrink-0 text-[16px] w-full">Charles Norman</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal opacity-70 overflow-hidden relative shrink-0 text-[12px] w-full">{`Lead Creative Designer @ AT&T`}</p>
    </div>
  );
}

function Frame124() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full">
      <Frame81 />
    </div>
  );
}

function Frame123() {
  return (
    <div className="h-[236px] relative rounded-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[12px]">
        <div className="absolute bg-[#3f4544] inset-0 rounded-[12px]" />
        <div className="absolute inset-0 overflow-hidden rounded-[12px]">
          <img alt="" className="absolute h-[208.47%] left-0 max-w-none top-[-4.24%] w-full" src={imgFrame216} />
        </div>
        <div className="absolute bg-gradient-to-b from-[53.396%] from-[rgba(0,0,0,0)] inset-0 rounded-[12px] to-[#0f1615]" />
      </div>
      <div className="content-stretch flex flex-col items-start justify-between p-[12px] relative size-full">
        <Frame78 />
        <Frame124 />
      </div>
    </div>
  );
}

function LineMdStarFilled15() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="line-md:star-filled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="line-md:star-filled">
          <path d={svgPaths.p20c8eff0} fill="var(--fill-0, #2D5A4C)" id="Vector" />
          <path d={svgPaths.p3a3cc600} id="Vector_2" stroke="var(--stroke-0, #2D5A4C)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Frame84() {
  return (
    <div className="bg-white content-stretch flex gap-[2px] h-[20px] items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#3f4544] text-[10px] text-center">4.3</p>
      <LineMdStarFilled15 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#3f4544] text-[10px] text-center">(30+ reviews)</p>
    </div>
  );
}

function Frame83() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <Frame84 />
    </div>
  );
}

function Frame82() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <Frame83 />
    </div>
  );
}

function Frame85() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center leading-[normal] not-italic relative shrink-0 text-ellipsis text-white w-full whitespace-nowrap">
      <p className="font-['Inter:Medium',sans-serif] font-medium overflow-hidden relative shrink-0 text-[16px] w-full">Rosamma Punnuz</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal opacity-70 overflow-hidden relative shrink-0 text-[12px] w-full">Motion graphics artist @ infosys</p>
    </div>
  );
}

function Frame126() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full">
      <Frame85 />
    </div>
  );
}

function Frame125() {
  return (
    <div className="h-[236px] relative rounded-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[12px]">
        <div className="absolute bg-[#3f4544] inset-0 rounded-[12px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[12px] size-full" src={imgFrame217} />
        <div className="absolute bg-gradient-to-b from-[53.396%] from-[rgba(0,0,0,0)] inset-0 rounded-[12px] to-[#0f1615]" />
      </div>
      <div className="content-stretch flex flex-col items-start justify-between p-[12px] relative size-full">
        <Frame82 />
        <Frame126 />
      </div>
    </div>
  );
}

function LineMdStarFilled16() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="line-md:star-filled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="line-md:star-filled">
          <path d={svgPaths.p20c8eff0} fill="var(--fill-0, #2D5A4C)" id="Vector" />
          <path d={svgPaths.p3a3cc600} id="Vector_2" stroke="var(--stroke-0, #2D5A4C)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Frame88() {
  return (
    <div className="bg-white content-stretch flex gap-[2px] h-[20px] items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#3f4544] text-[10px] text-center">4.9</p>
      <LineMdStarFilled16 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#3f4544] text-[10px] text-center">(30+ reviews)</p>
    </div>
  );
}

function Frame87() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <Frame88 />
    </div>
  );
}

function Frame86() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <Frame87 />
    </div>
  );
}

function Frame89() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center leading-[normal] not-italic relative shrink-0 text-ellipsis text-white w-full whitespace-nowrap">
      <p className="font-['Inter:Medium',sans-serif] font-medium overflow-hidden relative shrink-0 text-[16px] w-full">Arman Noyal</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal opacity-70 overflow-hidden relative shrink-0 text-[12px] w-full">Business Analyst</p>
    </div>
  );
}

function Frame128() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full">
      <Frame89 />
    </div>
  );
}

function Frame127() {
  return (
    <div className="h-[236px] relative rounded-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[12px]">
        <div className="absolute bg-[#3f4544] inset-0 rounded-[12px]" />
        <div className="absolute inset-0 overflow-hidden rounded-[12px]">
          <img alt="" className="absolute h-[185.2%] left-0 max-w-none top-[-17.09%] w-full" src={imgFrame218} />
        </div>
        <div className="absolute bg-gradient-to-b from-[53.396%] from-[rgba(0,0,0,0)] inset-0 rounded-[12px] to-[#0f1615]" />
      </div>
      <div className="content-stretch flex flex-col items-start justify-between p-[12px] relative size-full">
        <Frame86 />
        <Frame128 />
      </div>
    </div>
  );
}

function LineMdStarFilled17() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="line-md:star-filled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="line-md:star-filled">
          <path d={svgPaths.p20c8eff0} fill="var(--fill-0, #2D5A4C)" id="Vector" />
          <path d={svgPaths.p3a3cc600} id="Vector_2" stroke="var(--stroke-0, #2D5A4C)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Frame92() {
  return (
    <div className="bg-white content-stretch flex gap-[2px] h-[20px] items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#3f4544] text-[10px] text-center">4.5</p>
      <LineMdStarFilled17 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#3f4544] text-[10px] text-center">(30+ reviews)</p>
    </div>
  );
}

function Frame91() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <Frame92 />
    </div>
  );
}

function CurrencyRupeeCircle8() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="currency_rupee_circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="currency_rupee_circle">
          <mask height="12" id="mask0_9_1025" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="12" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="12" id="Bounding box" width="12" />
          </mask>
          <g mask="url(#mask0_9_1025)">
            <path d={svgPaths.p1ddbd000} fill="var(--fill-0, #0F1615)" id="currency_rupee_circle_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame93() {
  return (
    <div className="bg-white content-stretch flex h-[20px] items-center justify-center opacity-72 px-[4px] relative rounded-[4px] shrink-0">
      <CurrencyRupeeCircle8 />
    </div>
  );
}

function Frame90() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame91 />
      <Frame93 />
    </div>
  );
}

function Frame94() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center leading-[normal] not-italic relative shrink-0 text-ellipsis text-white w-full whitespace-nowrap">
      <p className="font-['Inter:Medium',sans-serif] font-medium overflow-hidden relative shrink-0 text-[16px] w-full">Name of the mentor</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal opacity-70 overflow-hidden relative shrink-0 text-[12px] w-full">User interface designer @ EY</p>
    </div>
  );
}

function Frame130() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full">
      <Frame94 />
    </div>
  );
}

function Frame129() {
  return (
    <div className="h-[236px] relative rounded-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[12px]">
        <div className="absolute bg-[#3f4544] inset-0 rounded-[12px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[12px] size-full" src={imgFrame219} />
        <div className="absolute bg-gradient-to-b from-[53.396%] from-[rgba(0,0,0,0)] inset-0 rounded-[12px] to-[#0f1615]" />
      </div>
      <div className="content-stretch flex flex-col items-start justify-between p-[12px] relative size-full">
        <Frame90 />
        <Frame130 />
      </div>
    </div>
  );
}

function Frame131() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[16px] h-[513px] items-start left-1/2 overflow-x-clip overflow-y-auto top-[216px] w-[328px]">
      <Frame98 />
      <Frame101 />
      <Frame100 />
      <Frame103 />
      <Frame102 />
      <Frame105 />
      <Frame107 />
      <Frame109 />
      <Frame111 />
      <Frame113 />
      <Frame115 />
      <Frame117 />
      <Frame119 />
      <Frame121 />
      <Frame123 />
      <Frame125 />
      <Frame127 />
      <Frame129 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-[#f3f3f3] flex-[1_0_0] h-[48px] min-h-px min-w-px relative rounded-[4px]">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[4px] relative size-full">
          <p className="font-['Figtree:Regular',sans-serif] font-normal leading-[24px] opacity-40 relative shrink-0 text-[#3f4544] text-[16px]">{`Search `}</p>
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

function Component1() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-[16px] top-[104px] w-[328px]" data-name="Component 23">
      <Frame6 />
      <Component />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-0 top-0">
      <Frame39 />
      <Frame132 />
      <Iconssss />
      <Frame131 />
      <div className="absolute bg-white h-[215px] left-0 rounded-bl-[12px] rounded-br-[12px] top-0 w-[360px]" />
      <Component1 />
    </div>
  );
}

export default function HomeScreenNewMentee() {
  return (
    <div className="bg-[#f8f7f3] relative size-full" data-name="Home screen / New Mentee">
      <Group />
    </div>
  );
}