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
  const cards = [
    { tagLeft: "LAYER_01", tagRight: "BASE", title: "L1 - EXECUTION", desc: "Sandboxed, time-limited, deterministic." },
    { tagLeft: "LAYER_02", tagRight: "GEN", title: "L2 - IDEATION", desc: "Proposal generation without evaluation access." },
    { tagLeft: "LAYER_03", tagRight: "EVAL", title: "L3 - EVALUATION", desc: "Tournaments, multi-axis scoring, evidence capture." },
    { tagLeft: "LAYER_04", tagRight: "META", title: "L4 - GOVERNANCE", desc: "Invariants, anti-cheat rules, progression logic." },
  ]

  const sysMap = [
    { title: "/ABOUT", sub: "What TM4 is / is not", color: "text-[#ff3b3b]" },
    { title: "/HOW-IT-WORKS", sub: "L1-L4 Architecture", color: "text-[#ff3b3b]" },
    { title: "/EXPERIMENTS", sub: "Validation Lineage", color: "text-[#ff3b3b]" },
    { title: "/PUBLISHING", sub: "Whitepapers &\nDiagrams", color: "text-[#ff3b3b]" },
    { title: "/STATUS", sub: "Proven & Next", color: "text-[#ff3b3b]" },
  ]

  return (
    <main className="min-h-screen font-ui text-white selection:bg-white selection:text-black mt-16 px-4">

      {/* HERO CONTAINER EXACT MATCH */}
      <div className="border border-white/20 flex w-full max-w-[1200px] mx-auto bg-transparent relative">

        {/* Left Sidebar Banner */}
        <div className="hidden sm:flex w-12 bg-[#d9d9d9] items-center justify-center shrink-0 border-r border-white/20">
          <div className="-rotate-90 whitespace-nowrap text-black font-ui uppercase tracking-[0.2em] text-[11px] font-bold">
            TM4 // GOVERNANCE FRAMEWORK
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
                  <h1 className="text-4xl sm:text-5xl font-brand font-bold text-[#ff3b3b] tracking-[-0.04em] leading-none uppercase m-0 p-0">
                    LMMRodeo
                  </h1>
                  <div className="text-[10px] text-white/70 uppercase tracking-[0.24em] mt-2 font-ui font-medium">
                    TM4 OFFICIAL REFERENCE
                  </div>
                </div>
              </div>
            </div>

            {/* Top Right */}
            <div className="px-6 py-8 md:p-10 md:w-2/5 flex flex-col justify-center gap-7">
              <div className="flex justify-between items-center text-[10px] uppercase tracking-[0.18em] font-ui">
                <span className="text-[#ff3b3b]">FRAMEWORK</span>
                <span className="text-white/90 font-medium">TM4</span>
              </div>
              <div className="flex justify-between items-center text-[10px] uppercase tracking-[0.18em] font-ui">
                <span className="text-[#ff3b3b]">STATUS</span>
                <span className="text-white/90 font-medium">OPERATIONAL</span>
              </div>
              <div className="flex justify-between items-center text-[10px] uppercase tracking-[0.18em] font-ui">
                <span className="text-[#ff3b3b]">ANTI-CHEAT</span>
                <span className="text-[#ff3b3b] text-4xl font-brand leading-none">ON</span>
              </div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="flex flex-col md:flex-row">

            {/* Bottom Left */}
            <div className="px-6 py-10 md:p-10 md:w-3/5 border-b md:border-b-0 md:border-r border-white/20 relative overflow-hidden flex flex-col justify-center min-h-[340px]">
              {/* Background Watermark */}
              <div className="absolute top-8 left-10 text-[100px] font-brand font-bold text-white/[0.05] leading-none select-none z-0">
                TM4
              </div>
              <div className="relative z-10 pt-20 mt-auto">
                <div className="flex items-center gap-3 text-[11px] font-ui text-white/70 tracking-[0.2em] mb-4">
                  <span>EST. 2026</span>
                  <div className="flex-1 border-t border-dashed border-white/20 opacity-50"></div>
                </div>
                <div className="text-3xl sm:text-[32px] font-ui text-white uppercase tracking-[0.1em] mb-4 font-normal">
                  THINKING MACHINE 4.0
                </div>
                <div className="text-[14px] sm:text-[15px] font-ui text-white/70 uppercase tracking-[0.15em] leading-[2.2]">
                  A GOVERNANCE FRAMEWORK FOR <br />
                  HONEST AUTONOMOUS EVOLUTION
                </div>
              </div>
            </div>

            {/* Bottom Right */}
            <div className="px-6 py-8 md:p-10 md:w-2/5 relative flex flex-col min-h-[340px]">
              <div className="text-[10px] uppercase font-ui text-[#ff3b3b] tracking-[0.2em]">
                SYSTEM <br />
                <span className="text-white/80 inline-block mt-2 font-bold select-none">¬</span>
              </div>

              <div className="flex-1 flex items-center justify-end pr-2 pt-4">
                <div className="text-6xl sm:text-[80px] font-ui text-white tracking-widest font-normal">
                  GOV
                </div>
              </div>

              <div className="mt-auto pt-8">
                <div className="text-[10px] uppercase font-ui text-[#ff3b3b] tracking-[0.15em] mb-2">
                  FRAMEWORK NOT ACTOR
                </div>
                {/* Fake Barcode perfectly matching the screenshot lines */}
                <div className="h-[46px] w-full bg-[repeating-linear-gradient(90deg,white,white_1.5px,transparent_1.5px,transparent_3px,white_3px,white_4.5px,transparent_4.5px,transparent_6px,white_6px,white_9px,transparent_9px,transparent_11px,white_11px,white_12px,transparent_12px,transparent_15px)]"></div>
              </div>
            </div>

          </div>
        </div>
      </div>


      {/* DEFINITION / RATIONALE */}
      <ConsoleSectionHeader title="RATIONALE" index="002" />

      <div className="border border-white/20 p-8 sm:p-10 max-w-[1200px] mx-auto mt-6 relative bg-transparent">
        <div className="text-[#ff3b3b] font-ui uppercase font-bold tracking-widest mb-6 text-sm">
          ELIMINATING ILLUSORY PROGRESS
        </div>
        <div className="font-ui text-white/90 text-[14px] leading-loose mb-8">
          Modern AI systems often <span className="italic">appear</span> to improve while quietly relying on:
          <div className="pl-4 sm:pl-4 mt-4 space-y-3 uppercase tracking-[0.1em] text-[13px] text-white/80">
            <div>:: REWARD HACKING</div>
            <div>:: HEURISTIC SHORTCUTS</div>
            <div>:: PROMPT LEAKAGE</div>
            <div>:: SUPERFICIAL STRUCTURAL CHANGES</div>
          </div>
        </div>
        <div className="border-l-[2px] border-[#ff3b3b] pl-4 text-white/80 italic text-[14px] font-ui leading-relaxed tracking-wide">
          TM4 was built to eliminate illusory progress. Governance precedes capability.
        </div>
      </div>

      {/* ARCHITECTURE Grid */}
      <ConsoleSectionHeader title="ARCHITECTURE" index="L1-L4" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-[1200px] mx-auto">
        {cards.map((card, i) => (
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

      {/* SYSTEM MAP */}
      <ConsoleSectionHeader title="SYSTEM MAP" index="NAV" />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 max-w-[1200px] mx-auto pb-10">
        {sysMap.map((link, i) => (
          <div key={i} className="aspect-square border border-white/20 bg-transparent flex flex-col items-center justify-center p-6 cursor-pointer group hover:border-white/40 transition-colors">
            <div className="font-ui uppercase tracking-[0.1em] text-white font-bold sm:text-[22px] mb-3 mt-auto">{link.title}</div>
            <div className={`font-ui text-center uppercase tracking-[0.12em] text-[12px] whitespace-pre-line ${link.color} mb-auto leading-relaxed`}>{link.sub}</div>
          </div>
        ))}
      </div>

      {/* FOOTER EXACT MATCH */}
      <footer className="w-full max-w-[1200px] mx-auto mt-28">
        <div className="border-t border-white/20 pt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 font-ui">

            {/* Footer Left */}
            <div>
              <div className="text-[13px] uppercase tracking-[0.15em] text-white font-bold mb-8">
                FRAMEWORK RESOURCES
              </div>
              <div className="space-y-4 text-[13px] uppercase tracking-[0.15em]">
                <div className="text-white mb-2 font-bold">ACCESS POINTS:</div>
                <div><a href="#" className="block text-white hover:text-[#ff3b3b] transition-colors">WHITE_PAPER_DB</a></div>
                <div><a href="#" className="block text-white hover:text-[#ff3b3b] transition-colors">SOURCE_CODE</a></div>
                <div><a href="#" className="block text-white hover:text-[#ff3b3b] transition-colors">CONTACT_US</a></div>
              </div>
            </div>

            {/* Footer Right */}
            <div>
              <div className="text-[13px] uppercase tracking-[0.15em] text-white font-bold mb-8">
                SYSTEM METRICS
              </div>
              <div className="space-y-4 text-[12px] uppercase tracking-[0.18em] w-full max-w-[420px]">
                <div className="flex justify-between border-b border-dashed border-white/20 pb-2">
                  <span className="text-white/90">FRAMEWORK</span>
                  <span className="text-white">OPERATIONAL</span>
                </div>
                <div className="flex justify-between border-b border-dashed border-white/20 pb-2">
                  <span className="text-white/90">GRADIENT</span>
                  <span className="text-white">HONEST</span>
                </div>
                <div className="flex justify-between pb-2">
                  <span className="text-white/90">IGNITION</span>
                  <span className="text-[#ff3b3b]">READY</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="mt-20 flex justify-center pb-8 border-b border-white/10">
          <div className="text-center font-ui italic text-white/90 text-[14px] tracking-[0.05em] leading-relaxed">
            TM4 does not promise intelligence.<br />
            It promises that learning cannot be faked.
          </div>
        </div>

        <div className="mt-4 pb-20 flex flex-col sm:flex-row gap-4 justify-between items-center text-[10px] font-ui text-white/40 uppercase tracking-[0.15em]">
          <div>TM4 // THINKING MACHINE 4.0 © 2026</div>
          <div>END_OF_LINE</div>
        </div>
      </footer>

    </main>
  );
}
