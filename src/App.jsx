import React, { useEffect, useRef, useState, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// ─── NAVBAR ─────────────────────────────────────────────────────────────────
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 px-6 py-4 transition-all duration-500 ${scrolled ? 'site-nav' : ''}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="font-mono font-bold text-xl text-white tracking-tight">
          Humany<span className="text-cyan">X</span>AI
        </div>
        <div className="hidden md:flex gap-8 text-sm text-slate-400 font-mono">
          <a href="#services" className="hover:text-cyan transition-colors duration-300">Services</a>
          <a href="#process"  className="hover:text-cyan transition-colors duration-300">Process</a>
          <a href="#results"  className="hover:text-cyan transition-colors duration-300">Results</a>
        </div>
        <a
          href="#contact"
          className="bg-cyan text-bg font-bold text-sm px-5 py-2.5 rounded-full hover:scale-105 transition-all duration-300 font-mono"
        >
          Start Building →
        </a>
      </div>
    </nav>
  );
};

// ─── HERO ────────────────────────────────────────────────────────────────────
const Hero = () => {
  const ref = useRef(null);
  const [hoveredNode, setHoveredNode] = useState(null);

  const systemNodes = [
    { id: 'voice', x: 80, y: 100, label: 'Voice Agent Pipeline', status: 'ACTIVE', detail: 'Cognitive agent running inbound & outbound calls (24/7)', color: '#06B6D4' },
    { id: 'lead', x: 380, y: 120, label: 'Lead Scoring Engine', status: 'ACTIVE', detail: 'Real-time multi-channel lead enrichment & routing', color: '#8B5CF6' },
    { id: 'sync', x: 180, y: 280, label: 'Cognitive CRM Sync', status: 'SYNCHRONIZED', detail: 'Self-correcting data flow & instant sequence trigger', color: '#F59E0B' },
    { id: 'agent', x: 440, y: 280, label: 'Orchestrator Module', status: 'ROUTING', detail: 'Dynamic decision paths & automated project delivery', color: '#10B981' }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-item', {
        y: 50, opacity: 0, duration: 1.1,
        stagger: 0.15, ease: 'power3.out', delay: 0.2,
      });
      // Counter animation
      const counters = [
        { el: '#stat-1', end: 95,  suffix: '%' },
        { el: '#stat-2', end: 10,  suffix: 'x' },
      ];
      counters.forEach(({ el, end, suffix }) => {
        const target = document.querySelector(el);
        if (!target) return;
        gsap.to({ val: 0 }, {
          val: end, duration: 2, delay: 1.2, ease: 'power2.out',
          onUpdate() { target.textContent = Math.round(this.targets()[0].val) + suffix; },
        });
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="min-h-screen flex items-center pt-28 pb-16 px-6 relative overflow-hidden grid-bg">
      {/* Ambient blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet/10 rounded-full blur-[120px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan/10 rounded-full blur-[100px] pointer-events-none animate-pulse-slow" style={{ animationDelay: '1.5s' }} />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 space-y-8">
            {/* Badge */}
            <div className="hero-item inline-flex items-center gap-2 bg-cyan/10 border border-cyan/20 rounded-full px-4 py-2">
              <span className="w-2 h-2 bg-cyan rounded-full animate-pulse" />
              <span className="font-mono text-cyan text-xs tracking-widest">AI ARCHITECTURE // STAGE_1_ACTIVE</span>
            </div>

            {/* Headline */}
            <h1 className="hero-item text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black leading-[0.9] tracking-tighter">
              Engineer<br />
              <span className="font-serif italic gradient-text">Autonomous</span><br />
              <span className="text-white">Revenue.</span>
            </h1>

            {/* Subheading */}
            <p className="hero-item text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed">
              We architect high-fidelity AI voice agents, lead acquisition engines, and custom cognitive pipelines. Built to bypass manual workflows and generate scalable bottom-line results, 24/7.
            </p>

            {/* CTAs */}
            <div className="hero-item flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary">Deploy Your System →</a>
              <a href="#services" className="btn-outline">See What We Build</a>
            </div>

            {/* Stats */}
            <div className="hero-item grid grid-cols-3 gap-8 max-w-2xl pt-4">
              <div>
                <div id="stat-1" className="stat-number text-cyan">0%</div>
                <div className="text-sm text-slate-500 mt-1 font-mono">Manual labor cut</div>
              </div>
              <div>
                <div id="stat-2" className="stat-number text-violet">0x</div>
                <div className="text-sm text-slate-500 mt-1 font-mono">Speed multiplier</div>
              </div>
              <div>
                <div className="stat-number text-amber">24/7</div>
                <div className="text-sm text-slate-500 mt-1 font-mono">Always operational</div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Digital Instrument */}
          <div className="lg:col-span-5 hero-item">
            <div 
              className="rounded-3xl p-6 md:p-8 flex flex-col justify-between relative overflow-hidden backdrop-blur-sm"
              style={{ 
                background: 'linear-gradient(135deg, rgba(13,17,23,0.9), rgba(13,17,23,0.6))', 
                border: '1px solid rgba(6,182,212,0.15)',
                boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
              }}
            >
              {/* Tech Corner Details */}
              <div className="absolute top-4 right-4 font-mono text-[9px] text-slate-600 flex items-center gap-1.5 select-none">
                <span>SYSTEM_MAP // v1.8</span>
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-ping" />
              </div>
              
              {/* Interactive Neural SVG Grid */}
              <div className="relative aspect-[4/3] w-full bg-black/40 rounded-2xl border border-white/5 overflow-hidden flex items-center justify-center">
                <svg className="w-full h-full select-none" viewBox="0 0 520 380">
                  {/* Dynamic Grid Background Lines */}
                  <defs>
                    <pattern id="microgrid" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#microgrid)" />

                  {/* Flow Lines between nodes with glowing moving pulses */}
                  {/* Voice to Lead */}
                  <line x1="80" y1="100" x2="380" y2="120" stroke="rgba(6, 182, 212, 0.15)" strokeWidth="1.5" />
                  <line x1="80" y1="100" x2="380" y2="120" stroke="#06B6D4" strokeWidth="1.5" strokeDasharray="8 12" strokeDashoffset="0">
                    <animate attributeName="strokeDashoffset" values="200;0" dur="4s" repeatCount="indefinite" />
                  </line>

                  {/* Voice to Sync */}
                  <line x1="80" y1="100" x2="180" y2="280" stroke="rgba(6, 182, 212, 0.15)" strokeWidth="1.5" />
                  <line x1="80" y1="100" x2="180" y2="280" stroke="#06B6D4" strokeWidth="1.5" strokeDasharray="6 10" strokeDashoffset="0">
                    <animate attributeName="strokeDashoffset" values="160;0" dur="3s" repeatCount="indefinite" />
                  </line>

                  {/* Lead to Agent */}
                  <line x1="380" y1="120" x2="440" y2="280" stroke="rgba(139, 92, 246, 0.15)" strokeWidth="1.5" />
                  <line x1="380" y1="120" x2="440" y2="280" stroke="#8B5CF6" strokeWidth="1.5" strokeDasharray="8 8" strokeDashoffset="0">
                    <animate attributeName="strokeDashoffset" values="100;0" dur="3.5s" repeatCount="indefinite" />
                  </line>

                  {/* Sync to Agent */}
                  <line x1="180" y1="280" x2="440" y2="280" stroke="rgba(245, 158, 11, 0.15)" strokeWidth="1.5" />
                  <line x1="180" y1="280" x2="440" y2="280" stroke="#F59E0B" strokeWidth="1.5" strokeDasharray="10 10" strokeDashoffset="0">
                    <animate attributeName="strokeDashoffset" values="120;0" dur="5s" repeatCount="indefinite" />
                  </line>

                  {/* Lead to Sync */}
                  <line x1="380" y1="120" x2="180" y2="280" stroke="rgba(139, 92, 246, 0.15)" strokeWidth="1.5" />
                  <line x1="380" y1="120" x2="180" y2="280" stroke="#8B5CF6" strokeWidth="1.5" strokeDasharray="7 7" strokeDashoffset="0">
                    <animate attributeName="strokeDashoffset" values="150;0" dur="4.5s" repeatCount="indefinite" />
                  </line>

                  {/* Render System Nodes */}
                  {systemNodes.map((node) => {
                    const isHovered = hoveredNode?.id === node.id;
                    return (
                      <g 
                        key={node.id} 
                        className="cursor-pointer"
                        onMouseEnter={() => setHoveredNode(node)}
                        onMouseLeave={() => setHoveredNode(null)}
                      >
                        {/* Glowing backdrop on hover */}
                        {isHovered && (
                          <circle 
                            cx={node.x} 
                            cy={node.y} 
                            r="32" 
                            fill={node.color} 
                            opacity="0.12" 
                            className="transition-all duration-300"
                          />
                        )}
                        {/* Secondary animated outer border ring */}
                        <circle 
                          cx={node.x} 
                          cy={node.y} 
                          r={isHovered ? "20" : "14"} 
                          fill="none" 
                          stroke={node.color} 
                          strokeWidth="1"
                          strokeDasharray="4 2" 
                          className="transition-all duration-300"
                          style={{
                            transformOrigin: `${node.x}px ${node.y}px`,
                            animation: 'spin 12s linear infinite'
                          }}
                        />
                        {/* Primary solid dot */}
                        <circle 
                          cx={node.x} 
                          cy={node.y} 
                          r="6" 
                          fill={node.color}
                          className="transition-all duration-300"
                        />
                        {/* Label text adjacent */}
                        <text 
                          x={node.x} 
                          y={node.y - 24} 
                          textAnchor="middle" 
                          fill={isHovered ? '#fff' : '#94a3b8'} 
                          fontSize="9" 
                          fontWeight={isHovered ? 'bold' : 'normal'}
                          fontFamily="monospace"
                          className="transition-all duration-300 pointer-events-none"
                        >
                          {node.id.toUpperCase()}
                        </text>
                      </g>
                    );
                  })}
                </svg>
              </div>

              {/* Live Output Feed console */}
              <div 
                className="mt-6 p-4 rounded-xl border font-mono text-xs space-y-2 select-none"
                style={{ 
                  background: 'rgba(0, 0, 0, 0.6)', 
                  borderColor: hoveredNode ? hoveredNode.color + '40' : 'rgba(255,255,255,0.06)'
                }}
              >
                <div className="flex justify-between text-slate-500 border-b border-white/5 pb-2">
                  <span>COGNITIVE_CORES // SHELL_OUT</span>
                  <span className="text-cyan animate-pulse flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-cyan rounded-full animate-ping" />
                    LIVE_SYS
                  </span>
                </div>
                {hoveredNode ? (
                  <div className="space-y-1">
                    <div className="flex justify-between">
                      <span className="text-slate-400">NODE ID:</span>
                      <span className="text-white font-bold">{hoveredNode.id.toUpperCase()}_NODE</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">MODULE:</span>
                      <span className="text-white">{hoveredNode.label}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">INTEGRITY:</span>
                      <span style={{ color: hoveredNode.color }} className="font-bold">{hoveredNode.status}</span>
                    </div>
                    <div className="flex flex-col gap-0.5 pt-1 border-t border-white/5 mt-1 text-slate-300">
                      <span className="text-[10px] text-slate-500">DESCRIPTION:</span>
                      <span className="text-xs leading-normal">{hoveredNode.detail}</span>
                    </div>
                  </div>
                ) : (
                  <div className="text-slate-500 italic py-2 text-center text-[11px]">
                    Hover system node matrix above to inspect live pipeline feeds.
                  </div>
                )}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// ─── TICKER ──────────────────────────────────────────────────────────────────
const Ticker = () => {
  const items = ['AI VOICE AGENTS','LEAD AUTOMATION','CUSTOM AI PIPELINES','WORKFLOW INTELLIGENCE','CRM INTEGRATION','MULTI-AGENT SYSTEMS'];
  const doubled = [...items, ...items];
  return (
    <div className="ticker-wrap border-y py-4" style={{ borderColor: 'rgba(6,182,212,0.1)', background: 'rgba(13,17,23,0.5)' }}>
      <div className="ticker-track font-mono text-sm text-slate-500 tracking-widest">
        {doubled.map((item, i) => (
          <React.Fragment key={i}>
            <span className="mx-8">{item}</span>
            <span className="mx-4 text-cyan">◆</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

// ─── SERVICES ────────────────────────────────────────────────────────────────
const services = [
  {
    emoji: '🤖', num: '01', color: 'cyan', accentClass: 'text-cyan', bgClass: 'bg-cyan/10',
    title: 'AI Voice Agents',
    desc: 'Deploy intelligent voice bots that handle inbound calls, qualify leads, book appointments, and answer FAQs — with zero human oversight. They never sleep, never take sick days.',
    tags: ['Inbound Handling', 'Appointment Booking', '24/7 Active'],
  },
  {
    emoji: '⚡', num: '02', color: 'violet', accentClass: 'text-violet', bgClass: 'bg-violet/10',
    title: 'Lead Generation Engine',
    desc: 'End-to-end automated outreach pipelines. AI scrapes, scores, sequences, and converts prospects while your team focuses on closing. More pipeline, zero prospecting effort.',
    tags: ['Multi-Channel', 'AI Scoring', 'CRM Sync'],
  },
  {
    emoji: '🔧', num: '03', color: 'amber', accentClass: 'text-amber', bgClass: 'bg-amber/10',
    title: 'Custom AI Automation',
    desc: 'We map your exact workflow and eliminate every manual step. From document processing to complex multi-step decision trees — if humans do it repetitively, we automate it permanently.',
    tags: ['Workflow Mapping', 'API Integration', 'Zero-Touch Ops'],
  },
  {
    emoji: '💬', num: '04', color: 'cyan', accentClass: 'text-cyan', bgClass: 'bg-cyan/10',
    title: 'AI Chat & Support Systems',
    desc: 'Deploy intelligent chatbots on your website, WhatsApp, or internal tools. They resolve support tickets, onboard users, and capture leads — with human-level conversation quality.',
    tags: ['Multi-Platform', 'Smart Routing', 'Live Handoff'],
  },
];

const Services = () => {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.service-anim', {
        scrollTrigger: { trigger: ref.current, start: 'top 60%' },
        y: 60, opacity: 0, duration: 0.9, stagger: 0.15, ease: 'power3.out',
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={ref} className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="service-anim mb-16">
          <p className="font-mono text-cyan text-sm tracking-widest mb-4">// WHAT WE BUILD</p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter">
            Four Systems.<br />
            <span className="font-serif italic gradient-text">Infinite Scale.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s) => (
            <div key={s.num} className="service-anim service-card card-glow rounded-3xl p-8">
              <div className="text-4xl mb-4">{s.emoji}</div>
              <div className={`font-mono ${s.accentClass} text-xs tracking-widest mb-3`}>SYSTEM {s.num}</div>
              <h3 className="text-2xl font-bold mb-3">{s.title}</h3>
              <p className="text-slate-400 leading-relaxed mb-6">{s.desc}</p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map((tag) => (
                  <span key={tag} className={`${s.bgClass} ${s.accentClass} text-xs font-mono px-3 py-1 rounded-full`}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── PROCESS ─────────────────────────────────────────────────────────────────
const steps = [
  { num: '01', color: 'cyan',   accentClass: 'text-cyan',   border: 'border-cyan/20',   bg: 'bg-cyan/10',   title: 'Audit',         desc: 'We dissect your current operations and identify the highest-ROI automation opportunities.' },
  { num: '02', color: 'violet', accentClass: 'text-violet', border: 'border-violet/20', bg: 'bg-violet/10', title: 'Blueprint',      desc: 'We design the full system architecture. Every node, every trigger, every integration mapped precisely.' },
  { num: '03', color: 'amber',  accentClass: 'text-amber',  border: 'border-amber/20',  bg: 'bg-amber/10',  title: 'Build & Test',   desc: 'We engineer and pressure-test the system against real-world edge cases before a single line goes live.' },
  { num: '04', color: 'cyan',   accentClass: 'text-cyan',   border: 'border-cyan/20',   bg: 'bg-cyan/10',   title: 'Deploy & Scale', desc: 'Go live. We monitor, optimize, and scale the system as your operations grow.' },
];

const Process = () => {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.step-anim', {
        scrollTrigger: { trigger: ref.current, start: 'top 65%' },
        y: 50, opacity: 0, duration: 0.8, stagger: 0.18, ease: 'power3.out',
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="process" ref={ref} className="py-32 px-6" style={{ background: 'rgba(13,17,23,0.5)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="step-anim mb-16 text-center">
          <p className="font-mono text-cyan text-sm tracking-widest mb-4">// HOW WE OPERATE</p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter">
            From Zero to<br />
            <span className="font-serif italic gradient-text">Deployed</span> in Weeks.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div key={s.num} className="step-anim text-center">
              <div className={`w-16 h-16 rounded-2xl ${s.bg} border ${s.border} flex items-center justify-center mx-auto mb-4`}>
                <span className={`font-mono font-bold ${s.accentClass} text-xl`}>{s.num}</span>
              </div>
              <h3 className="font-bold text-lg mb-2">{s.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── RESULTS ─────────────────────────────────────────────────────────────────
const results = [
  { num: '↓ 85%', color: 'text-cyan',   title: 'Support Cost Reduction',   desc: 'AI chat agents handle 90% of support queries autonomously, eliminating the need for large support teams.' },
  { num: '↑ 3x',  color: 'text-violet', title: 'Lead Conversion Rate',     desc: 'Automated qualification and instant follow-up sequences convert leads before competitors even respond.' },
  { num: '0 hrs', color: 'text-amber',  title: 'Manual Repetitive Work',   desc: 'Every routine task gets fully automated. Your team reclaims hundreds of hours monthly to focus on growth.' },
];

const Results = () => {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.result-anim', {
        scrollTrigger: { trigger: ref.current, start: 'top 65%' },
        y: 50, opacity: 0, duration: 0.9, stagger: 0.2, ease: 'power3.out',
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="results" ref={ref} className="py-32 px-6 grid-bg">
      <div className="max-w-7xl mx-auto">
        <div className="result-anim mb-16">
          <p className="font-mono text-cyan text-sm tracking-widest mb-4">// WHAT HAPPENS AFTER</p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter">
            Real Systems.<br />
            <span className="font-serif italic gradient-text">Real Numbers.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {results.map((r) => (
            <div key={r.title} className="result-anim cta-grad rounded-3xl p-8">
              <div className={`text-5xl font-black mb-3 ${r.color}`}>{r.num}</div>
              <h3 className="font-bold text-xl mb-3">{r.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── PROTOTYPE / LIVE TOOL ───────────────────────────────────────────────────
const Prototype = () => {
  const [workflow, setWorkflow] = useState('');
  const [status, setStatus] = useState('idle');
  const [logs, setLogs] = useState([]);
  const [blueprint, setBlueprint] = useState('');
  const logsRef = useRef(null);

  const runAutomation = useCallback(() => {
    if (!workflow || status === 'running') return;
    setStatus('running'); setLogs([]); setBlueprint('');

    const sequence = [
      { msg: '[SYS] Analyzing workflow constraints...', delay: 400 },
      { msg: '[SYS] Mapping legacy integration points...', delay: 1100 },
      { msg: '[SYS] Designing autonomous routing architecture...', delay: 1900 },
      { msg: '[SYS] Selecting optimal LLM for reasoning tasks...', delay: 2700 },
      { msg: '[SYS] Calculating latency reduction estimate...', delay: 3400 },
      { msg: '[SYS] Finalizing deployment protocol...', delay: 4100 },
    ];
    sequence.forEach(({ msg, delay }) => {
      setTimeout(() => setLogs(prev => [...prev, msg]), delay);
    });
    setTimeout(() => {
      setStatus('complete');
      setBlueprint(
        'AUTOMATION BLUEPRINT GENERATED\n\nPhase 1: Ingestion\n- Secure webhook intercepts incoming data stream.\n- OCR / data extraction node activated.\n\nPhase 2: AI Reasoning\n- Payload routed to fine-tuned LLM for contextual analysis.\n- Output validated against compliance ruleset.\n\nPhase 3: Execution\n- Autonomous database update via REST API.\n- Stakeholder alert triggered via notification layer.\n\nProjected Impact: 95% reduction in manual touchpoints. 24/7 continuous operation.'
      );
    }, 5000);
  }, [workflow, status]);

  useEffect(() => {
    if (logsRef.current) logsRef.current.scrollTop = logsRef.current.scrollHeight;
  }, [logs]);

  return (
    <section className="py-32 px-6" style={{ background: '#050505' }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-mono text-cyan text-sm tracking-widest mb-4">// LIVE DEMO</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-3">Test the Protocol</h2>
          <p className="text-slate-500 font-mono text-xs tracking-widest uppercase">Live Automation Blueprint Generator</p>
        </div>

        <div className="rounded-3xl p-8 md:p-12" style={{ background: '#0a0a0a', border: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <input
              type="text"
              placeholder="Describe a manual workflow (e.g. 'We manually review 500 invoices')"
              value={workflow}
              onChange={(e) => setWorkflow(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && runAutomation()}
              disabled={status === 'running'}
              className="flex-1 rounded-xl px-6 py-4 font-mono text-sm focus:outline-none transition-colors disabled:opacity-50"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#f1f5f9' }}
            />
            <button
              onClick={runAutomation}
              disabled={status === 'running' || !workflow}
              className="font-bold px-8 py-4 rounded-xl transition-all disabled:opacity-40 disabled:cursor-not-allowed font-mono text-sm"
              style={{ background: '#06B6D4', color: '#030712' }}
            >
              {status === 'running' ? '⏳ PROCESSING...' : '⚡ DESIGN SYSTEM'}
            </button>
          </div>

          <div className="rounded-xl p-6 min-h-64 flex flex-col" style={{ background: '#000', border: '1px solid rgba(255,255,255,0.05)' }}>
            <div className="flex items-center gap-2 mb-5 pb-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
              <span className="ml-3 text-slate-600 font-mono text-xs">sys_architect.sh</span>
            </div>
            <div ref={logsRef} className="flex-1 space-y-2 overflow-y-auto" style={{ maxHeight: '300px' }}>
              {logs.length === 0 && status === 'idle' && (
                <div className="text-slate-600 font-mono text-sm italic">{'>'} System idle. Awaiting workflow description...</div>
              )}
              {logs.map((log, i) => (
                <div key={i} className="text-slate-400 font-mono text-sm">{'>'} {log}</div>
              ))}
              {status === 'running' && (
                <div className="text-cyan font-mono text-sm animate-pulse">{'>'} _</div>
              )}
            </div>
            {status === 'complete' && (
              <div className="mt-6 p-6 rounded-xl" style={{ background: 'rgba(6,182,212,0.05)', border: '1px solid rgba(6,182,212,0.15)' }}>
                <div className="text-cyan font-mono tracking-widest text-xs uppercase mb-4">Generated Asset: Automation Blueprint</div>
                <pre className="text-slate-300 font-mono text-sm leading-relaxed whitespace-pre-wrap">{blueprint}</pre>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── CTA ─────────────────────────────────────────────────────────────────────
const CTA = () => {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.cta-anim', {
        scrollTrigger: { trigger: ref.current, start: 'top 65%' },
        y: 40, opacity: 0, duration: 1, stagger: 0.15, ease: 'power3.out',
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" ref={ref} className="py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="cta-grad rounded-[3rem] p-12 md:p-20">
          <p className="cta-anim font-mono text-cyan text-sm tracking-widest mb-6">// READY TO AUTOMATE</p>
          <h2 className="cta-anim text-4xl md:text-6xl font-black tracking-tighter mb-6">
            Stop Managing.<br />
            <span className="font-serif italic gradient-text">Start Scaling.</span>
          </h2>
          <p className="cta-anim text-slate-400 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Book a free 30-minute system audit. We'll identify exactly which parts of your business are ready for AI automation and build you a roadmap.
          </p>
          <a href="mailto:hello@humanyxai.com" className="cta-anim btn-primary inline-flex text-xl px-10 py-5">
            Book Your Free Audit →
          </a>
          <p className="cta-anim text-slate-600 font-mono text-xs mt-6">No sales pitch. No commitment. Pure strategy.</p>
        </div>
      </div>
    </section>
  );
};

// ─── FOOTER ──────────────────────────────────────────────────────────────────
const Footer = () => (
  <footer className="py-12 px-6" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
      <div>
        <div className="font-mono font-bold text-xl mb-1">
          Humany<span className="text-cyan">X</span>AI
        </div>
        <p className="text-slate-500 text-sm">We build AI that works.</p>
      </div>
      <div className="flex gap-8 text-sm text-slate-500 font-mono">
        <a href="#services" className="hover:text-cyan transition-colors">Services</a>
        <a href="#process"  className="hover:text-cyan transition-colors">Process</a>
        <a href="#contact"  className="hover:text-cyan transition-colors">Contact</a>
      </div>
      <div className="font-mono text-xs text-slate-600">
        © {new Date().getFullYear()} HumanyXAI. All rights reserved.
      </div>
    </div>
  </footer>
);

// ─── APP ─────────────────────────────────────────────────────────────────────
export default function App() {
  // Intersection observer for fade-up
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="grid-bg" style={{ background: '#030712', minHeight: '100vh' }}>
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <Services />
        <Process />
        <Results />
        <Prototype />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}