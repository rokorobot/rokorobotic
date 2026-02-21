import Image from "next/image";

/**
 * REUSABLE COMPONENTS FOR CONSOLE UIs
 */

export function ConsoleSectionHeader({ title, index, rightLabel }: { title: string, index: string, rightLabel?: string }) {
  return (
    <div className="font-ui text-white/85">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3 whitespace-nowrap">
          <span className="text-white/70">//</span>
          <span className="uppercase tracking-[var(--tracking-mid)] text-lg md:text-xl font-medium">
            {title}
          </span>
        </div>

        <div className="h-px flex-1 bg-white/10" />

        <div className="flex items-center gap-4 whitespace-nowrap">
          {rightLabel ? (
            <span className="text-[11px] uppercase tracking-[var(--tracking-micro)] text-white/55">
              {rightLabel}
            </span>
          ) : null}
          <span className="text-[12px] uppercase tracking-[var(--tracking-micro)] text-white/75">
            {index}
          </span>
        </div>
      </div>
    </div>
  );
}


export function DefinitionCard({ tagLeft, tagRight, title, body, foot, isRare = false }: { tagLeft: string, tagRight: string, title: string, body: string, foot?: string, isRare?: boolean }) {
  return (
    <div className={`relative rounded-none border p-6 transition-colors ${isRare ? 'bg-white/[0.05] border-white/30' : 'border-white/15 bg-white/[0.03] hover:bg-white/[0.05]'}`}>
      <div className="flex items-center justify-between text-[10px] uppercase tracking-[var(--tracking-micro)] text-white/35">
        <span>{tagLeft}</span>
        <span className={isRare ? "text-red-500" : ""}>{tagRight}</span>
      </div>

      <div className="mt-6 font-ui uppercase tracking-[var(--tracking-headline)] text-xl md:text-2xl text-white/90 leading-[1.15] font-medium min-h-[56px]">
        {title}
      </div>

      <p className="mt-4 font-ui text-[13px] leading-[1.85] text-white/60 font-light min-h-[72px]">
        {body}
      </p>

      {foot ? (
        <div className="mt-8 text-[11px] uppercase tracking-[var(--tracking-mid)] text-red-500 font-medium">
          {foot}
        </div>
      ) : null}
    </div>
  );
}


export function TraitCard({ title, note, img }: { title: string, note: string, img: string }) {
  return (
    <div className="group rounded-none border border-white/15 bg-white/[0.03] p-5 hover:border-white/30 transition-all cursor-pointer">
      <div className="mb-4 aspect-square w-full border border-white/10 bg-[#050505] relative overflow-hidden flex items-center justify-center">
        <img src={img} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0 relative z-10" alt={title} />
        <div className="absolute inset-0 z-20 pointer-events-none opacity-30 mix-blend-overlay console-scanlines bg-black/50"></div>
      </div>
      <div className="text-[11px] uppercase tracking-[var(--tracking-micro)] text-white/80 font-medium">
        {title}
      </div>
      <div className="mt-2 text-[13px] text-white/50 leading-relaxed font-light">{note}</div>
    </div>
  )
}


export function StatusTable() {
  const rows = [
    { k: "FRAMEWORK", v: "OPERATIONAL", accent: false },
    { k: "GRADIENT", v: "HONEST", accent: false },
    { k: "IGNITION", v: "READY", accent: true },
  ];

  return (
    <div className="grid gap-10 md:grid-cols-2 font-ui border border-white/15 bg-white/[0.02] p-8 md:p-12">
      <div>
        <div className="text-[12px] uppercase tracking-[var(--tracking-micro)] text-white/70 font-medium">
          FRAMEWORK RESOURCES
        </div>
        <div className="mt-6 space-y-3 text-[13px] uppercase tracking-[0.16em] text-white/75">
          <div className="font-semibold text-white/90 mb-4">ACCESS_POINTS:</div>
          <a href="#" className="block text-white/55 hover:text-white transition-colors">&gt; WHITE_PAPER_DB</a>
          <a href="#" className="block text-white/55 hover:text-white transition-colors">&gt; SOURCE_CODE</a>
          <a href="#" className="block text-white/55 hover:text-white transition-colors">&gt; CONTACT_US</a>
        </div>
      </div>

      <div>
        <div className="text-[12px] uppercase tracking-[var(--tracking-micro)] text-white/70 font-medium">
          SYSTEM METRICS
        </div>
        <div className="mt-6 space-y-4">
          {rows.map((r) => (
            <div key={r.k} className="flex items-center justify-between border-b border-white/5 pb-3 last:border-0 last:pb-0">
              <div className="text-[12px] uppercase tracking-[var(--tracking-mid)] text-white/60">
                {r.k}
              </div>
              <div
                className={[
                  "text-[12px] uppercase tracking-[0.22em] font-medium",
                  r.accent ? "text-red-500" : "text-white/80",
                ].join(" ")}
              >
                {r.v}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


/**
 * MAIN PAGE LAYOUT
 */
export default function Page() {
  const traitCards = [
    { title: "Chassis", note: "structure / silhouette", img: "/images/chassis.png" },
    { title: "Optics", note: "eyes / sensors / glow", img: "/images/hero.png" },
    { title: "Core", note: "power unit / reactor", img: "/images/core.png" },
    { title: "Markings", note: "serials / decals / scars", img: "/images/chassis.png" },
    { title: "Hands", note: "tools / claws / grip", img: "/images/core.png" },
    { title: "Background", note: "void / lab / night", img: "/images/hero.png" },
    { title: "Directive", note: "states / modes / overrides", img: "/images/core.png" },
    { title: "Badge", note: "units / factions", img: "/images/chassis.png" },
  ];

  return (
    <main className="min-h-screen bg-black text-white console-scanlines selection:bg-white selection:text-black">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="h-4 w-4 bg-white/20" />
            <span className="font-brand tracking-[var(--tracking-mid)] text-sm uppercase text-white font-semibold">
              RokoRobotic
            </span>
          </div>

          <div className="flex items-center gap-6">
            <span className="hidden sm:block text-[10px] uppercase tracking-[var(--tracking-micro)] text-white/40">
              STATUS: <span className="text-white/80">STANDBY</span>
            </span>
            <button className="border border-white/20 bg-white/5 px-6 py-2 text-[10px] uppercase tracking-[var(--tracking-micro)] text-white hover:bg-white hover:text-black hover:border-white transition-all font-medium">
              MINT_LOGIC
            </button>
          </div>
        </div>
      </header>


      <div className="mx-auto max-w-[1400px] px-6 py-14">

        {/* HERO SECTION */}
        <section className="min-h-[70vh] flex flex-col justify-center py-20">
          <p className="text-[12px] uppercase tracking-[var(--tracking-micro)] text-white/50 mb-8 font-medium">
            Robotic NFT Protocol _<span className="animate-pulse">_</span>
          </p>
          <h1 className="font-brand text-6xl md:text-8xl lg:text-9xl font-bold uppercase tracking-tight leading-[0.95] max-w-5xl">
            ROKOROBOTIC
            <span className="block text-white/50 mt-4 text-4xl md:text-6xl font-ui font-medium tracking-normal">SIGNAL-GRADE_ ROBOTS</span>
          </h1>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 border-t border-white/15 pt-8 max-w-4xl">
            <div>
              <div className="text-[10px] uppercase tracking-[var(--tracking-micro)] text-white/40 mb-2">SUPPLY</div>
              <div className="text-xl md:text-2xl font-ui font-medium tracking-wide">4096_</div>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[var(--tracking-micro)] text-white/40 mb-2">NETWORK</div>
              <div className="text-xl md:text-2xl font-ui font-medium tracking-wide">ETHEREUM_</div>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[var(--tracking-micro)] text-white/40 mb-2">DEPLOY_DATE</div>
              <div className="text-xl md:text-2xl font-ui font-medium tracking-wide text-white/50">TBA_</div>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[var(--tracking-micro)] text-white/40 mb-2">CONTRACT</div>
              <div className="text-xl md:text-2xl font-ui font-medium tracking-wide text-white/50 text-red-500">NULL</div>
            </div>
          </div>
        </section>


        {/* THE SYSTEM DEFINITION */}
        <section className="py-24 border-t border-white/10">
          <ConsoleSectionHeader title="THE_DEFINITION" index="001" rightLabel="SYS_ARCHITECTURE" />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <DefinitionCard
              tagLeft="WHAT_IT_IS_NOT"
              tagRight="CRITICAL"
              title="ROKOROBOTIC IS NOT A JPEG PACK"
              body="It is a system of engineered traits, directive states, and identity-consistent design rules constructed for structural provenance."
              foot="ENTITY_TYPE: SYSTEM"
              isRare={true}
            />
            <DefinitionCard
              tagLeft="WHAT_IT_IS"
              tagRight="CORE"
              title="GENERATIVE ROBOT IDENTITY"
              body="A constrained aesthetic OS: silhouettes, mechanisms, optics, and functional wear. Every generated outcome adheres strictly to industrial logic."
              foot="ENTITY_TYPE: ASSET"
            />
            <DefinitionCard
              tagLeft="SOUND_PROTOCOL"
              tagRight="CORE"
              title="AUDIO DNA INTEGRATION"
              body="A unified aesthetic tied directly to RokoRobo’s minimal industrial funk signal-world. Visual directives correlate with sonic signatures."
              foot="ENTITY_TYPE: SIGNAL"
            />
          </div>
        </section>


        {/* TRAITS DATABASE */}
        <section className="py-24 border-t border-white/10">
          <ConsoleSectionHeader title="HARDWARE_REGISTRY" index="002" rightLabel="TRAIT_ENGINE" />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {traitCards.map(t => (
              <TraitCard key={t.title} title={t.title} note={t.note} img={t.img} />
            ))}
          </div>
        </section>

        {/* METRICS & STATUS */}
        <section className="py-24 border-t border-white/10">
          <ConsoleSectionHeader title="TERMINAL_STATUS" index="003" rightLabel="LIVE_FEED" />

          <div className="mt-12">
            <StatusTable />
          </div>
        </section>

      </div>
    </main>
  );
}
