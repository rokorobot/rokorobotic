/**
 * RokoRobotic V2 Alternative Design
 * Pure RokoRobo/LLMRodeo aesthetic
 */
export default function Home() {
  const nav = [
    { label: "About", href: "#about" },
    { label: "Traits", href: "#traits" },
    { label: "Roadmap", href: "#roadmap" },
    { label: "FAQ", href: "#faq" },
    { label: "Connect", href: "#connect" },
  ];

  const stats = [
    { k: "Supply", v: "TBA" },
    { k: "Chain", v: "ETH / Tezos (TBA)" },
    { k: "Mint", v: "TBA" },
    { k: "Price", v: "TBA" },
    { k: "Contract", v: "TBA" },
  ];

  const pillars = [
    {
      title: "Trait Engine",
      desc: "Modular components with engineered rarity. Clean silhouettes. Zero noise.",
    },
    {
      title: "Identity Layer",
      desc: "Directive states, versions, and controlled evolution. Designed like a system.",
    },
    {
      title: "Audio DNA",
      desc: "A unified aesthetic with RokoRobo’s minimal industrial funk signal-world.",
    },
  ];

  const traitCards = [
    { title: "Chassis", note: "structure / silhouette", img: "/images/chassis.png" },
    { title: "Optics", note: "eyes / sensors / glow", img: "/images/hero.png" },
    { title: "Core", note: "power unit / reactor", img: "/images/core.png" },
    { title: "Markings", note: "serials / decals / scars", img: "/images/chassis.png" },
    { title: "Hands", note: "tools / claws / grip", img: "/images/core.png" },
    { title: "Head", note: "helm / antenna / crown", img: "/images/hero.png" },
    { title: "Background", note: "void / lab / night", img: "/images/hero.png" },
    { title: "Directive", note: "states / modes / overrides", img: "/images/core.png" },
    { title: "Finish", note: "matte / chrome / worn", img: "/images/chassis.png" },
    { title: "Signal", note: "interference / clean / burst", img: "/images/hero.png" },
    { title: "Badge", note: "units / factions", img: "/images/core.png" },
    { title: "Artifact", note: "rare add-ons", img: "/images/chassis.png" },
  ];

  const roadmap = [
    {
      phase: "Phase 01",
      title: "Drop + provenance",
      items: ["Final trait set", "Mint site + contract", "Reveal + rarity index"],
    },
    {
      phase: "Phase 02",
      title: "Directive upgrades",
      items: [
        "Claim-based upgrades (limited)",
        "Optional burn/merge mechanic (TBA)",
        "Holder snapshots + allowlist rules",
      ],
    },
    {
      phase: "Phase 03",
      title: "Sound utilities",
      items: ["Holders get loops/stems", "Exclusive drops", "Behind-the-system logs"],
    },
    {
      phase: "Phase 04",
      title: "Collabs + showcase",
      items: ["Curated collabs", "Gallery page for holders", "IRL/online exhibit (optional)"],
    },
  ];

  const faq = [
    {
      q: "What chain is this on?",
      a: "TBA. We’ll publish the final chain decision, mint contract, and verification links before launch.",
    },
    {
      q: "How does mint work?",
      a: "Simple public mint (and/or allowlist). No gimmicks. Wallet connect, mint, reveal.",
    },
    {
      q: "Is there utility?",
      a: "Yes—directive states + audio drops. Utility stays aligned with the aesthetic system (no random perks).",
    },
    {
      q: "Commercial rights?",
      a: "TBA. We’ll publish clear holder rights in the docs before mint.",
    },
    {
      q: "Royalties?",
      a: "TBA. If used, we’ll state the percentage and destination transparently.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      {/* Subtle grid / noise */}
      <div className="pointer-events-none fixed inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:48px_48px]" />

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full border border-white/20" />
            <span className="tracking-[0.22em] text-sm uppercase text-white/90">
              RokoRobotic
            </span>
          </div>

          <nav className="hidden items-center gap-6 md:flex">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-xs uppercase tracking-[0.22em] text-white/70 hover:text-white transition"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#connect"
              className="hidden rounded-full border border-white/20 px-4 py-2 text-xs uppercase tracking-[0.22em] text-white/80 hover:text-white hover:border-white/40 transition md:inline-flex"
            >
              Join
            </a>
            <button
              disabled
              className="rounded-full bg-white px-4 py-2 text-xs uppercase tracking-[0.22em] text-black opacity-60 cursor-not-allowed"
              title="Mint opens soon"
            >
              Mint (TBA)
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-5 py-20 md:grid-cols-2 md:py-28">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.32em] text-white/60">
              Robotic NFT System
            </p>
            <h1 className="text-4xl font-semibold leading-[1.05] md:text-6xl uppercase tracking-tighter">
              ROKOROBOTIC
              <span className="block text-white/60 mt-2">Signal-grade robots.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70">
              A generative robot collection forged from minimal industrial aesthetics,
              identity-driven trait logic, and audio-grade branding.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#connect"
                className="rounded-full bg-white px-5 py-3 text-xs uppercase tracking-[0.22em] text-black hover:opacity-90 transition inline-block"
              >
                Join the drop
              </a>
              <a
                href="#traits"
                className="rounded-full border border-white/20 px-5 py-3 text-xs uppercase tracking-[0.22em] text-white/80 hover:text-white hover:border-white/40 transition inline-block"
              >
                View traits
              </a>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4 border-t border-white/10 pt-6 md:grid-cols-5">
              {stats.map((s) => (
                <div key={s.k} className="min-w-0">
                  <div className="text-[10px] uppercase tracking-[0.26em] text-white/50">
                    {s.k}
                  </div>
                  <div className="mt-1 truncate text-sm text-white/85 uppercase">{s.v}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero visual */}
          <div className="relative flex justify-center lg:justify-end items-center">
            <div className="aspect-[4/5] w-full max-w-md rounded-3xl border border-white/15 bg-white/5 shadow-[0_0_0_1px_rgba(255,255,255,0.06)] relative overflow-hidden">
              <img src="/images/hero.png" className="w-full h-full object-cover opacity-80" alt="RokoRobotic" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden h-32 w-32 rounded-3xl border border-white/15 bg-[#050505] md:flex items-center justify-center p-2 overflow-hidden shadow-lg">
              <img src="/images/core.png" className="w-full h-full object-cover opacity-70" alt="Core snippet" />
            </div>
            <div className="absolute -top-6 -right-6 hidden h-24 w-24 rounded-3xl border border-white/15 bg-[#050505] md:flex items-center justify-center overflow-hidden shadow-lg p-1">
              <img src="/images/chassis.png" className="w-full h-full object-cover opacity-70" alt="Chassis snippet" />
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-white/60">
                What it is
              </p>
              <h2 className="mt-4 text-3xl font-semibold md:text-4xl tracking-tight">
                Built as a system, <br className="hidden md:block" />not a picture pack.
              </h2>
              <p className="mt-5 max-w-2xl text-white/70 leading-relaxed text-sm md:text-base">
                RokoRobotic is a robotic identity set: clean silhouettes, engineered traits,
                rare directive states, and a consistent visual OS aligned with the RokoRobo universe.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="rounded-3xl border border-white/15 bg-white/[0.02] p-6 hover:bg-white/[0.04] transition-colors"
              >
                <div className="text-[11px] uppercase tracking-[0.26em] text-white/60 mb-1 border-b border-white/10 pb-3">
                  {p.title}
                </div>
                <p className="mt-4 text-white/75 leading-relaxed text-sm font-light">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Traits */}
      <section id="traits" className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-white/60">
                Traits
              </p>
              <h2 className="mt-4 text-3xl font-semibold md:text-4xl tracking-tight">
                Modular components.<br className="hidden md:block" /> Controlled rarity.
              </h2>
            </div>
            <div className="hidden text-[10px] uppercase tracking-[0.26em] text-white/50 md:block max-w-[150px] text-right">
              Gallery overview (Generated samples)
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {traitCards.map((t) => (
              <div
                key={t.title}
                className="group rounded-3xl border border-white/15 bg-white/[0.02] p-5 hover:border-white/30 transition-all duration-300"
              >
                <div className="mb-4 aspect-square w-full rounded-2xl border border-white/10 bg-[#050505] relative overflow-hidden flex items-center justify-center">
                  <img src={t.img} className="w-full h-full object-cover opacity-40 group-hover:opacity-100 transition-opacity duration-300 grayscale group-hover:grayscale-0" alt={t.title} />
                </div>
                <div className="text-[11px] uppercase tracking-[0.26em] text-white/80">
                  {t.title}
                </div>
                <div className="mt-2 text-xs text-white/50">{t.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section id="roadmap" className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <p className="text-xs uppercase tracking-[0.32em] text-white/60">Roadmap</p>
          <h2 className="mt-4 text-3xl font-semibold md:text-4xl tracking-tight">
            Operator-style phases.<br className="hidden md:block" /> No fluff.
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {roadmap.map((r) => (
              <div
                key={r.phase}
                className="rounded-3xl border border-white/15 bg-white/[0.02] p-8 hover:bg-white/[0.04] transition-colors"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="text-[10px] uppercase tracking-[0.26em] text-white/60 border border-white/20 rounded-full px-3 py-1 bg-white/5">
                    {r.phase}
                  </div>
                  <div className="h-px flex-1 bg-white/10" />
                </div>
                <div className="mt-6 text-xl font-medium text-white/90 uppercase tracking-wide">
                  {r.title}
                </div>
                <ul className="mt-5 space-y-3 text-white/60 text-sm">
                  {r.items.map((it) => (
                    <li key={it} className="flex gap-3 items-start">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-white/40 shrink-0" />
                      <span className="leading-relaxed">{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <p className="text-xs uppercase tracking-[0.32em] text-white/60">FAQ</p>
          <h2 className="mt-4 text-3xl font-semibold md:text-4xl tracking-tight">Clear answers.</h2>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {faq.map((f) => (
              <div
                key={f.q}
                className="rounded-3xl border border-white/15 bg-white/[0.02] p-8 hover:bg-white/[0.04] transition-colors"
              >
                <div className="text-xs uppercase tracking-[0.18em] text-white/90 font-medium">
                  {f.q}
                </div>
                <p className="mt-4 text-white/60 leading-relaxed text-sm">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Connect */}
      <section id="connect" className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <div className="rounded-3xl border border-white/15 bg-white/[0.02] p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/[0.03] rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>

            <div className="relative z-10">
              <p className="text-xs uppercase tracking-[0.32em] text-white/60">
                Connect
              </p>
              <h2 className="mt-4 text-3xl font-semibold md:text-4xl tracking-tight">
                Get the drop signal.
              </h2>
              <p className="mt-4 max-w-2xl text-white/60 text-sm leading-relaxed">
                Join the list for mint date, chain confirmation, contract verification, and reveal details.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full rounded-full border border-white/15 bg-black/60 px-5 py-3 text-white placeholder:text-white/40 outline-none focus:border-white/40 transition-colors sm:max-w-md text-sm"
                />
                <button className="rounded-full bg-white px-6 py-3 text-[11px] font-bold uppercase tracking-[0.22em] text-black hover:opacity-90 transition">
                  Notify me
                </button>
              </div>
              <div className="mt-3 text-[10px] uppercase tracking-[0.22em] text-white/40">
                (wire to Mailchimp / Beehiiv / Supabase)
              </div>

              <div className="mt-12 flex flex-wrap gap-3 text-[10px] uppercase tracking-[0.22em]">
                <a className="rounded-full border border-white/15 bg-black/40 px-5 py-2.5 text-white/70 hover:text-white hover:border-white/40 transition" href="#">
                  X / Twitter (TBA)
                </a>
                <a className="rounded-full border border-white/15 bg-black/40 px-5 py-2.5 text-white/70 hover:text-white hover:border-white/40 transition" href="#">
                  Discord (TBA)
                </a>
                <a className="rounded-full border border-white/15 bg-black/40 px-5 py-2.5 text-white/70 hover:text-white hover:border-white/40 transition" href="#">
                  Docs (TBA)
                </a>
                <a className="rounded-full border border-white/15 bg-black/40 px-5 py-2.5 text-white/70 hover:text-white hover:border-white/40 transition" href="#">
                  Marketplace (TBA)
                </a>
              </div>
            </div>
          </div>

          <footer className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 text-[10px] uppercase tracking-[0.22em] text-white/40 md:flex-row md:items-center md:justify-between">
            <div>© {new Date().getFullYear()} RokoRobotic Protocol</div>
            <div>Contract: TBA · Verify links before mint</div>
          </footer>
        </div>
      </section>
    </div>
  );
}
