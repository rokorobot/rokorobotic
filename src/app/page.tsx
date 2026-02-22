import Image from "next/image";

export function ConsoleSectionHeader({ title, index }: { title: string, index: string }) {
  return (
    <div className="font-ui text-white/85 w-full max-w-[1200px] mx-auto mt-24 mb-6">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3 whitespace-nowrap">
          <span className="text-white/70 text-base sm:text-lg font-bold">//</span>
          <span className="uppercase tracking-[0.18em] text-lg font-bold">
            {title}
          </span>
        </div>
        <div className="h-px flex-1 bg-white/20" />
        <div className="flex items-center whitespace-nowrap">
          <span className="text-[12px] uppercase tracking-[0.34em] text-white/75 font-bold">
            {index}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  const roadmapCards = [
    { tagLeft: "PHASE_01", tagRight: "GENESIS", title: "01 - PROVENANCE", desc: "Initial minting phase. Establishing the genesis collection and verifying on-chain provenance." },
    { tagLeft: "PHASE_02", tagRight: "EVOLVE", title: "02 - DIRECTIVES", desc: "Burn/merge or claim mechanisms. Hardware evolution through targeted upgrades." },
    { tagLeft: "PHASE_03", tagRight: "AUDIO", title: "03 - SOUND_UTILITY", desc: "Holders gain access to exclusive RokoRobo stems, loops, and sonic environments." },
    { tagLeft: "PHASE_04", tagRight: "IRL", title: "04 - DEPLOYMENT", desc: "Physical deployment. Gallery exhibitions and cross-protocol collaborative hardware drops." },
  ]

  const traitMap = [
    { title: "/CHASSIS", sub: "Modular structure\nType-A Exoskeletons", color: "text-white/70" },
    { title: "/OPTICS", sub: "Visual sensors\nOcular Arrays & Glow", color: "text-white/70" },
    { title: "/CORE", sub: "Power units\nQuantum Processing", color: "text-[#ff3b3b]" },
    { title: "/DIRECTIVE", sub: "System states\nSurveillance Mode", color: "text-[#ff3b3b]" },
    { title: "/MARKINGS", sub: "Industrial wear\nSerials & Decals", color: "text-white/70" },
  ]

  return (
    <main className="min-h-screen font-ui text-white selection:bg-white selection:text-black mt-16 px-4">

      {/* HERO CONTAINER EXACT MATCH - LMMRodeo Layout translated to RokoRobotic */}
      <div className="border border-white/20 flex w-full max-w-[1200px] mx-auto bg-transparent relative">

        {/* Left Sidebar Banner */}
        <div className="hidden sm:flex w-12 bg-[#d9d9d9] items-center justify-center shrink-0 border-r border-white/20">
          <div className="-rotate-90 whitespace-nowrap text-black font-ui uppercase tracking-[0.2em] text-[11px] font-bold">
            ROKOROBOTIC // IDENTITY SYSTEM
          </div>
        </div>

        <div className="flex-1 flex flex-col w-full min-w-0">

          {/* Top Row */}
          <div className="flex flex-col md:flex-row border-b border-white/20">

            {/* Top Left */}
            <div className="px-6 py-8 md:p-10 md:w-3/5 border-b md:border-b-0 md:border-r border-white/20 flex flex-col justify-center">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 border border-white/40 flex items-center justify-center shrink-0 relative bg-black">
                  {/* Triangle Icon */}
                  <div className="w-0 h-0 border-l-[11px] border-r-[11px] border-b-[20px] border-l-transparent border-r-transparent border-b-white mt-[-3px]"></div>
                </div>
                <div>
                  <h1 className="text-4xl sm:text-[44px] font-brand font-bold text-[#ff3b3b] tracking-[-0.04em] leading-none uppercase m-0 p-0">
                    RokoRobotic
                  </h1>
                  <div className="text-[10px] text-white/70 uppercase tracking-[0.24em] mt-2 font-ui font-medium">
                    ROBOTIC NFT PROTOCOL
                  </div>
                </div>
              </div>
            </div>

            {/* Top Right */}
            <div className="px-6 py-8 md:p-10 md:w-2/5 flex flex-col justify-center gap-7">
              <div className="flex justify-between items-center text-[10px] uppercase tracking-[0.18em] font-ui">
                <span className="text-[#ff3b3b]">COLLECTION</span>
                <span className="text-white/90 font-medium">RKRB-01</span>
              </div>
              <div className="flex justify-between items-center text-[10px] uppercase tracking-[0.18em] font-ui">
                <span className="text-[#ff3b3b]">STATUS</span>
                <span className="text-white/90 font-medium">STANDBY</span>
              </div>
              <div className="flex justify-between items-center text-[10px] uppercase tracking-[0.18em] font-ui">
                <span className="text-[#ff3b3b]">MINT_DATA</span>
                <span className="text-[#ff3b3b] text-4xl font-brand leading-none">TBA</span>
              </div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="flex flex-col md:flex-row">

            {/* Bottom Left */}
            <div className="px-6 py-10 md:p-10 md:w-3/5 border-b md:border-b-0 md:border-r border-white/20 relative overflow-hidden flex flex-col justify-center min-h-[340px]">
              {/* Background Watermark */}
              <div className="absolute top-8 left-10 text-[100px] font-brand font-bold text-white/[0.04] leading-none select-none z-0">
                RKRB
              </div>
              <div className="relative z-10 pt-20 mt-auto">
                <div className="flex items-center gap-3 text-[11px] font-ui text-white/70 tracking-[0.2em] mb-4">
                  <span>EST. 2026</span>
                  <div className="flex-1 border-t border-dashed border-white/20 opacity-50"></div>
                </div>
                <div className="text-3xl sm:text-[32px] font-ui text-white uppercase tracking-[0.1em] mb-4 font-normal">
                  SIGNAL-GRADE ROBOTS
                </div>
                <div className="text-[14px] sm:text-[15px] font-ui text-white/70 uppercase tracking-[0.15em] leading-[2.2]">
                  GENERATIVE ROBOTICS FORGED FROM <br />
                  MINIMAL INDUSTRIAL AESTHETICS.
                </div>
              </div>
            </div>

            {/* Bottom Right */}
            <div className="px-6 py-8 md:p-10 md:w-2/5 relative flex flex-col min-h-[340px]">
              <div className="text-[10px] uppercase font-ui text-[#ff3b3b] tracking-[0.2em]">
                SUPPLY <br />
                <span className="text-white/80 inline-block mt-2 font-bold select-none">¬</span>
              </div>

              <div className="flex-1 flex items-center justify-end pr-2 pt-4">
                <div className="text-6xl sm:text-[76px] font-ui text-white tracking-widest font-normal">
                  4096
                </div>
              </div>

              <div className="mt-auto pt-8">
                <div className="text-[10px] uppercase font-ui text-[#ff3b3b] tracking-[0.15em] mb-2">
                  SYSTEM NOT PICTURE
                </div>
                {/* Fake Barcode perfectly matching the screenshot lines */}
                <div className="h-[46px] w-full bg-[repeating-linear-gradient(90deg,white,white_1.5px,transparent_1.5px,transparent_3px,white_3px,white_4.5px,transparent_4.5px,transparent_6px,white_6px,white_9px,transparent_9px,transparent_11px,white_11px,white_12px,transparent_12px,transparent_15px)]"></div>
              </div>
            </div>

          </div>
        </div>
      </div>


      {/* DEFINITION / RATIONALE mapping to THE SYSTEM/WHAT IT IS */}
      <ConsoleSectionHeader title="THE_SYSTEM" index="001" />

      <div className="border border-white/20 p-8 sm:p-10 max-w-[1200px] mx-auto mt-6 relative bg-transparent">
        <div className="text-[#ff3b3b] font-ui uppercase font-bold tracking-widest mb-6 text-sm">
          BUILT AS A SYSTEM, NOT A MOD PACK.
        </div>
        <div className="font-ui text-white/90 text-[14px] leading-loose mb-8">
          RokoRobotic is a generative identity set, forged entirely around functional design:
          <div className="pl-4 sm:pl-4 mt-4 space-y-3 uppercase tracking-[0.1em] text-[13px] text-white/80">
            <div>:: TRAIT ENGINE (MODULAR RARITY + STATES)</div>
            <div>:: IDENTITY LAYER (DIRECTIVES, VERSIONS)</div>
            <div>:: AUDIO DNA (ROKOROBO SOUND-WORLD TIE-IN)</div>
            <div>:: CLEAN SILHOUETTES, ZERO NOISE</div>
          </div>
        </div>
        <div className="border-l-[2px] border-[#ff3b3b] pl-4 text-white/80 italic text-[14px] font-ui leading-relaxed tracking-wide">
          Every generated outcome adheres strictly to industrial logic.
        </div>
      </div>

      {/* ARCHITECTURE Grid mapping to DEPLOYMENT PHASES */}
      <ConsoleSectionHeader title="DEPLOYMENT" index="PH_1-4" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-[1200px] mx-auto">
        {roadmapCards.map((card, i) => (
          <div key={i} className="border border-white/20 bg-transparent p-6 h-[170px] flex flex-col">
            <div className="flex justify-between text-[10px] uppercase tracking-[0.2em] font-ui text-white/30 mb-auto">
              <span>{card.tagLeft}</span>
              <span>{card.tagRight}</span>
            </div>
            <div className="mb-2">
              <div className="text-white font-ui uppercase font-bold tracking-[0.12em] text-[15px] mb-2">
                {card.title}
              </div>
              <div className="text-white/80 font-ui text-[13px] leading-relaxed max-w-[95%]">
                {card.desc}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* SYSTEM MAP mapping to TRAIT DATABASE */}
      <ConsoleSectionHeader title="TRAIT_DATABASE" index="NAV" />
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-5 max-w-[1200px] mx-auto pb-10">
        {traitMap.map((link, i) => (
          <div key={i} className="aspect-square border border-white/20 bg-transparent flex flex-col items-center justify-center p-6 cursor-pointer group hover:border-white/40 transition-colors">
            <div className="font-ui uppercase tracking-[0.1em] text-white font-bold sm:text-[16px] xl:text-[20px] mb-3 mt-auto">{link.title}</div>
            <div className={`font-ui text-center uppercase tracking-[0.12em] text-[11px] whitespace-pre-line ${link.color} mb-auto leading-relaxed`}>{link.sub}</div>
          </div>
        ))}
      </div>

      {/* FOOTER EXACT MATCH mapping to ROKOROBOTIC END */}
      <footer className="w-full max-w-[1200px] mx-auto mt-28">
        <div className="border-t border-white/20 pt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 font-ui">

            {/* Footer Left */}
            <div>
              <div className="text-[13px] uppercase tracking-[0.15em] text-white font-bold mb-8">
                PROTOCOL RESOURCES
              </div>
              <div className="space-y-4 text-[13px] uppercase tracking-[0.15em]">
                <div className="text-white mb-2 font-bold">ACCESS POINTS:</div>
                <div><a href="#" className="block text-white hover:text-[#ff3b3b] transition-colors">MINT_LOGIC</a></div>
                <div><a href="#" className="block text-white hover:text-[#ff3b3b] transition-colors">SMART_CONTRACT</a></div>
                <div><a href="#" className="block text-white hover:text-[#ff3b3b] transition-colors">COLLECTION_GALLERY</a></div>
              </div>
            </div>

            {/* Footer Right */}
            <div>
              <div className="text-[13px] uppercase tracking-[0.15em] text-white font-bold mb-8">
                SYSTEM METRICS
              </div>
              <div className="space-y-4 text-[12px] uppercase tracking-[0.18em] w-full max-w-[420px]">
                <div className="flex justify-between border-b border-dashed border-white/20 pb-2">
                  <span className="text-white/90">NETWORK</span>
                  <span className="text-white">ETHEREUM</span>
                </div>
                <div className="flex justify-between border-b border-dashed border-white/20 pb-2">
                  <span className="text-white/90">SUPPLY</span>
                  <span className="text-white">4096</span>
                </div>
                <div className="flex justify-between pb-2">
                  <span className="text-white/90">MINT_STATUS</span>
                  <span className="text-[#ff3b3b]">TBA</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="mt-20 flex justify-center pb-8 border-b border-white/10">
          <div className="text-center font-ui italic text-white/90 text-[14px] tracking-[0.05em] leading-relaxed">
            Full IP rights are transferred upon acquisition.<br />
            You hold the keys, you own the asset.
          </div>
        </div>

        <div className="mt-4 pb-20 flex flex-col sm:flex-row gap-4 justify-between items-center text-[10px] font-ui text-white/40 uppercase tracking-[0.15em]">
          <div>ROKOROBOTIC // IDENTITY PROTOCOL © 2026</div>
          <div>END_OF_LINE</div>
        </div>
      </footer>

    </main>
  );
}
