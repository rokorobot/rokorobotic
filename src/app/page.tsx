import Image from "next/image";
import { ArrowRight, Cpu, Network, Volume2, Plus, Terminal } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#ededed] font-sans selection:bg-[#ff3333] selection:text-white overflow-hidden pb-12">
      {/* Background Atmosphere */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_0%,rgba(30,30,30,0.8)_0%,rgba(5,5,5,1)_100%)] z-0" />
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay z-0" style={{ backgroundImage: `url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')` }} />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 h-20 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md z-50 flex items-center justify-between px-6 lg:px-12">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-white/10 flex items-center justify-center border border-white/20">
            <Cpu className="w-4 h-4 text-white" />
          </div>
          <span className="font-bold tracking-widest text-sm uppercase">RokoRobotic</span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-xs font-mono uppercase tracking-widest text-white/50">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#traits" className="hover:text-white transition-colors">Traits</a>
          <a href="#roadmap" className="hover:text-white transition-colors">Roadmap</a>
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
        </nav>

        <div className="flex items-center gap-4">
          <a href="#" className="hidden sm:block text-xs font-mono uppercase tracking-widest text-white/50 hover:text-white transition-colors">Docs</a>
          <button className="px-5 py-2.5 bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors flex items-center gap-2" disabled>
            Mint <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 pt-20">

        {/* Section 1: Hero */}
        <section className="min-h-[calc(100vh-5rem)] flex flex-col justify-center px-6 lg:px-12 relative">
          <div className="max-w-5xl relative z-10 mb-20 mt-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-white/10 bg-white/5 text-xs font-mono uppercase tracking-widest text-white/70 mb-8">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              System Live // Status: Standby
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.85] mb-8">
              Robotic NFTs.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">Signal-Grade</span><br />
              Design.
            </h1>

            <p className="text-lg md:text-2xl text-white/60 max-w-2xl font-light leading-relaxed mb-12">
              A generative robot collection forged from minimal industrial aesthetics, on-chain identity, and audio-grade branding.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors flex items-center justify-center gap-3">
                Join the Drop <ArrowRight className="w-4 h-4" />
              </button>
              <button className="px-8 py-4 border border-white/20 bg-transparent text-white font-bold uppercase tracking-widest hover:bg-white/5 transition-colors flex items-center justify-center gap-3">
                View Collection
              </button>
            </div>
          </div>

          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[50vw] h-[80vh] opacity-50 hidden lg:block -z-10 pointer-events-none">
            <Image src="/images/hero.png" alt="RokoRobotic Silhouette" fill className="object-contain object-right" priority />
            <div className="absolute inset-0 bg-gradient-to-r from-[#050505] to-transparent"></div>
          </div>

          <div className="w-full border-t border-white/10 bg-black/50 py-4 px-6 absolute bottom-0 left-0 grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-0 divide-x-0 md:divide-x divide-white/10 backdrop-blur-md">
            <div className="flex flex-col md:px-6 first:pl-0 font-mono">
              <span className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Supply</span>
              <span className="text-sm text-white">4,096</span>
            </div>
            <div className="flex flex-col md:px-6 font-mono">
              <span className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Chain</span>
              <span className="text-sm text-white">Ethereum</span>
            </div>
            <div className="flex flex-col md:px-6 font-mono">
              <span className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Mint Date</span>
              <span className="text-sm text-white/50">TBA</span>
            </div>
            <div className="flex flex-col md:px-6 font-mono">
              <span className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Price</span>
              <span className="text-sm text-white/50">TBA</span>
            </div>
            <div className="flex flex-col md:px-6 font-mono col-span-2 md:col-span-1">
              <span className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Contract</span>
              <span className="text-sm text-white/50 truncate">TBA</span>
            </div>
          </div>
        </section>

        {/* Section 2: What it is */}
        <section id="about" className="py-32 px-6 lg:px-12 border-t border-white/5 bg-[#0a0a0a]">
          <div className="max-w-4xl mb-24">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-6">Built as a system,<br /><span className="text-white/40">not a picture pack.</span></h2>
            <p className="text-xl text-white/60 font-light leading-relaxed">
              RokoRobotic is a robotic identity set: clean silhouettes, engineered traits, rare "directive" states, and a consistent visual OS.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group">
              <Cpu className="w-8 h-8 text-white/50 mb-6 group-hover:text-white transition-colors" />
              <h3 className="text-lg font-bold uppercase tracking-widest mb-3">Trait Engine</h3>
              <p className="text-sm text-white/50 leading-relaxed font-mono">Modular rarity + states. Precision-engineered components that define each unit's functional aesthetic.</p>
            </div>
            <div className="p-8 border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group">
              <Network className="w-8 h-8 text-white/50 mb-6 group-hover:text-white transition-colors" />
              <h3 className="text-lg font-bold uppercase tracking-widest mb-3">Identity Layer</h3>
              <p className="text-sm text-white/50 leading-relaxed font-mono">Directives, versions, evolution. On-chain reputation mechanics integrated into the metadata core.</p>
            </div>
            <div className="p-8 border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group">
              <Volume2 className="w-8 h-8 text-white/50 mb-6 group-hover:text-white transition-colors" />
              <h3 className="text-lg font-bold uppercase tracking-widest mb-3">Audio DNA</h3>
              <p className="text-sm text-white/50 leading-relaxed font-mono">RokoRobo sound-world tie-in. Unique sonic signatures attached to directive variants.</p>
            </div>
          </div>
        </section>

        {/* Section 3: Trait Gallery */}
        <section id="traits" className="py-32 px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">Hardware Specs</h2>
              <p className="text-white/50 font-mono text-sm uppercase tracking-widest">Component Analysis & Rarity Tiers</p>
            </div>
            <div className="font-mono text-xs text-white/40 uppercase tracking-widest text-right">
              Showing 06/12 Categories
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <TraitCard title="Chassis" rarity="Common" img="/images/chassis.png" label="Type-A Exoskeleton" />
            <TraitCard title="Optics" rarity="Uncommon" img="/images/hero.png" label="Ocular Sensor Array" />
            <TraitCard title="Core" rarity="Rare" img="/images/core.png" label="Quantum Processing Unit" />
            <TraitCard title="Markings" rarity="Common" img="/images/chassis.png" label="Industrial Caution" />
            <TraitCard title="Background" rarity="Mythic" img="/images/hero.png" label="Void Protocol" />
            <TraitCard title="Directive" rarity="Rare" img="/images/core.png" label="Surveillance Mode" />
          </div>
        </section>

        {/* Section 4: Roadmap */}
        <section id="roadmap" className="py-32 px-6 lg:px-12 border-t border-white/5 bg-[#0a0a0a]">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-16">Deployment Phases</h2>

            <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
              <RoadmapItem phase="01" title="Drop + Provenance" desc="Initial minting phase. Establishing the genesis collection and verifying on-chain provenance." active />
              <RoadmapItem phase="02" title="Directive Upgrades" desc="Burn/merge or claim mechanisms. Hardware evolution through targeted upgrades." />
              <RoadmapItem phase="03" title="Sound Utilities" desc="Holders gain access to exclusive RokoRobo stems, loops, and sonic environments." />
              <RoadmapItem phase="04" title="Collab / IRL" desc="Physical deployment. Gallery exhibitions and cross-protocol collaborative hardware drops." />
            </div>
          </div>
        </section>

        {/* Section 5: FAQ */}
        <section id="faq" className="py-32 px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-16 text-center">System Queries</h2>

            <div className="divide-y divide-white/10 border-y border-white/10">
              <FaqItem question="What chain?" answer="Ethereum mainnet. Optimized ERC-721A contract for minimal gas consumption during the deployment phase." />
              <FaqItem question="What is the total supply?" answer="4,096 immutable generic units." />
              <FaqItem question="How does the mint work?" answer="The mint will be divided into specific phases: Allowlist for pre-approved operatives, followed by a public deployment. Max 2 units per wallet during public phase." />
              <FaqItem question="Royalties?" answer="5% enforced at the contract level to fund ongoing protocol development and utility execution." />
              <FaqItem question="Commercial rights?" answer="Full IP rights are transferred to the holder upon acquisition. You hold the keys, you own the asset." />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 px-6 lg:px-12 border-t border-white/10 bg-[#050505] flex flex-col md:flex-row justify-between items-center gap-6 font-mono text-xs text-white/40 uppercase tracking-widest relative z-10">
        <div>© 2026 RokoRobotic Protocol</div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">X / Twitter</a>
          <a href="#" className="hover:text-white transition-colors">Discord</a>
          <a href="#" className="hover:text-white transition-colors">Opensea</a>
        </div>
        <div>Made by RokoRobo</div>
      </footer>
    </div>
  );
}

function TraitCard({ title, rarity, img, label }: { title: string, rarity: string, img: string, label: string }) {
  const getRarityColor = (r: string) => {
    switch (r.toLowerCase()) {
      case 'common': return 'text-white/40';
      case 'uncommon': return 'text-blue-400';
      case 'rare': return 'text-purple-400';
      case 'mythic': return 'text-orange-400';
      default: return 'text-white/40';
    }
  }

  return (
    <div className="group border border-white/10 bg-[#0a0a0a] overflow-hidden flex flex-col">
      <div className="h-64 relative bg-[#050505] p-6 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10" />
        <Image src={img} alt={title} fill className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 ease-out grayscale group-hover:grayscale-0" />
        {/* Scanline effect */}
        <div className="absolute inset-0 z-20 pointer-events-none opacity-20 bg-[linear-gradient(rgba(255,255,255,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] mix-blend-overlay"></div>
      </div>
      <div className="p-5 border-t border-white/10 flex flex-col gap-2">
        <div className="flex justify-between items-center font-mono text-xs uppercase tracking-widest">
          <span className="text-white/50">{title}</span>
          <span className={getRarityColor(rarity)}>[{rarity}]</span>
        </div>
        <div className="font-bold tracking-wide">{label}</div>
      </div>
    </div>
  )
}

function RoadmapItem({ phase, title, desc, active = false }: { phase: string, title: string, desc: string, active?: boolean }) {
  return (
    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group md:mx-auto md:w-full">
      <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-[#050505] shadow-[0_0_15px_rgba(255,255,255,0.05)] text-xs font-mono font-bold shrink-0 md:order-1 md:mx-auto md:absolute md:left-1/2 md:-translate-x-1/2 z-10 group-hover:border-white/50 transition-colors">
        {phase}
      </div>
      <div className={`w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 border ${active ? 'border-white/20 bg-white/[0.03]' : 'border-white/10 bg-[#050505] group-hover:border-white/20'}`}>
        <h3 className="text-xl font-bold uppercase tracking-widest mb-2 flex items-center gap-3">
          {title}
          {active && <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>}
        </h3>
        <p className="text-white/50 font-mono text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  )
}

function FaqItem({ question, answer }: { question: string, answer: string }) {
  return (
    <details className="group py-6 cursor-pointer">
      <summary className="flex justify-between items-center font-bold text-lg md:text-xl uppercase tracking-widest list-none">
        {question}
        <span className="transition group-open:rotate-45 block w-6 h-6 border border-white/20 flex items-center justify-center rounded-full bg-white/5 text-white/50 group-hover:text-white group-hover:border-white/50">
          <Plus className="w-4 h-4" />
        </span>
      </summary>
      <div className="text-white/60 font-mono text-sm leading-relaxed mt-4 pt-4 border-t border-white/5 max-w-3xl">
        {answer}
      </div>
    </details>
  )
}
