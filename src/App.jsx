import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Terminal, Zap, CheckCircle2, Shield, Activity, BarChart, Database, Network } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// --- UTILITIES ---

const MagneticButton = ({ children, className = '', variant = 'accent', onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`magnetic-btn rounded-full px-8 py-4 font-heading font-bold text-lg inline-flex items-center gap-2 ${
        variant === 'accent' ? 'bg-accent text-white accent-btn' : 'bg-dark text-background dark-btn'
      } ${className}`}
    >
      <div className="bg-slide"></div>
      <span>{children}</span>
    </button>
  );
};

const Noise = () => (
  <svg className="noise-overlay" xmlns="http://www.w3.org/2000/svg">
    <filter id="noiseFilter">
      <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
    </filter>
    <rect width="100%" height="100%" filter="url(#noiseFilter)" />
  </svg>
);

// --- COMPONENTS ---

const Navbar = () => {
  const navRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        start: 'top -100',
        onUpdate: (self) => {
          if (self.direction === 1) {
            gsap.to(navRef.current, { backgroundColor: 'rgba(245, 243, 238, 0.9)', backdropFilter: 'blur(16px)', color: '#111111', border: '1px solid rgba(17, 17, 17, 0.1)', duration: 0.4 });
          } else if (self.progress === 0) {
            gsap.to(navRef.current, { backgroundColor: 'transparent', backdropFilter: 'blur(0px)', color: '#F5F3EE', border: '1px solid transparent', duration: 0.4 });
          }
        }
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <nav ref={navRef} className="fixed top-6 left-1/2 -translate-x-1/2 z-50 rounded-full px-6 py-4 flex items-center justify-between w-[90%] max-w-5xl transition-colors text-background border border-transparent">
      <div className="font-heading font-bold text-xl tracking-tight">HumanyXAi</div>
      <div className="hidden md:flex gap-8 font-heading text-sm font-medium">
        <a href="#features" className="link-hover">Features</a>
        <a href="#protocol" className="link-hover">Protocol</a>
        <a href="#get-started" className="link-hover">Get Started</a>
      </div>
      <MagneticButton variant="accent" className="!px-6 !py-2 !text-sm hidden md:flex" onClick={() => document.getElementById('prototype')?.scrollIntoView({ behavior: 'smooth' })}>
        Command Now
      </MagneticButton>
    </nav>
  );
};

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-elem', {
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: 'power3.out',
        delay: 0.2
      });
      // Add a subtle scanning effect to the grid
      gsap.to('.grid-scan', {
        y: '100dvh',
        duration: 8,
        repeat: -1,
        ease: 'none'
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-[100dvh] min-h-[700px] w-full flex items-end pb-16 pt-32 px-8 md:px-16 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[#0a0a0a]">
        {/* High-tech abstract AI image */}
        <img 
          src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2000&auto=format&fit=crop" 
          alt="AI Automation Architecture" 
          className="w-full h-full object-cover grayscale opacity-30 object-center"
        />
        {/* Tech Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_40%,transparent_100%)]"></div>
        {/* Scanning Laser */}
        <div className="grid-scan absolute top-0 left-0 w-full h-[2px] bg-accent/30 shadow-[0_0_15px_#E63B2E]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/90 to-transparent"></div>
      </div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col justify-end h-full">
        <div className="max-w-4xl">
          <div className="hero-elem inline-flex items-center gap-3 mb-6 bg-white/5 border border-white/10 rounded-full px-4 py-2">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
            <p className="font-data text-white/80 tracking-widest uppercase text-xs">Autonomous Agent Protocol Active</p>
          </div>
          <h1 className="text-background leading-none tracking-tighter mb-8 mt-12 md:mt-0">
            <span className="hero-elem block font-heading font-bold text-5xl md:text-[6rem] lg:text-[8rem] drop-shadow-lg mb-2 md:mb-4">Command the</span>
            <span className="hero-elem block font-drama italic text-6xl md:text-[7rem] lg:text-[10rem] text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">Revenue.</span>
          </h1>
          <p className="hero-elem font-data text-primary/70 text-lg md:text-xl max-w-2xl mb-12 border-l-2 border-accent pl-6 leading-relaxed">
            We engineer custom AI automation infrastructure for high-rev ($50,000+/mo) B2B agencies. Automate operations, obliterate manual workflows, and scale infinitely without adding headcount.
          </p>
          <div className="hero-elem flex flex-wrap items-center gap-6">
            <MagneticButton variant="accent" onClick={() => document.getElementById('get-started')?.scrollIntoView({ behavior: 'smooth' })}>
              Book a Growth Call <ArrowRight className="w-5 h-5 inline-block ml-1" />
            </MagneticButton>
            <div className="hidden sm:block font-data text-xs text-white/30 tracking-widest">
              [ SYS_READY ]
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TrustBar = () => (
  <div className="w-full border-b border-dark/5 bg-background py-8">
    <div className="max-w-7xl mx-auto px-8 md:px-16 flex flex-col md:flex-row items-center justify-between gap-8 opacity-60 grayscale font-data text-sm uppercase tracking-widest text-dark/70">
      <span>Trusted by multibillion dollar portfolios</span>
      <div className="flex flex-wrap gap-6 md:gap-16 font-bold text-dark">
        <span>Enterprise</span>
        <span>Venture-Backed</span>
        <span>High-Rev B2B</span>
      </div>
    </div>
  </div>
);

const Shuffler = () => {
  const cards = [
    { title: "Custom Infrastructure", desc: "Tailor-made autonomous workflows.", icon: <Zap className="text-accent" /> },
    { title: "Operational Dominance", desc: "Eliminate bottlenecks in delivery & sales.", icon: <Database className="text-accent" /> },
    { title: "Enterprise Grade", desc: "Battle-tested security and reliability.", icon: <Activity className="text-accent" /> }
  ];
  
  const [activeCards, setActiveCards] = useState(cards);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCards(prev => {
        const next = [...prev];
        const last = next.pop();
        next.unshift(last);
        return next;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-dark/5 relative h-[400px] overflow-hidden flex flex-col">
      <div className="mb-6 z-10 relative">
        <h3 className="font-heading font-bold text-2xl mb-2">AI Agent</h3>
        <p className="font-heading text-dark/70 text-sm">We start sending on Day 1.</p>
      </div>
      
      <div className="relative flex-1">
        {activeCards.map((card, i) => (
          <div 
            key={card.title}
            className="absolute left-0 right-0 bg-background rounded-xl p-6 border border-dark/10 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] flex items-center gap-4"
            style={{
              top: `${i * 20}px`,
              scale: 1 - (i * 0.05),
              opacity: 1 - (i * 0.2),
              zIndex: 10 - i,
            }}
          >
            <div className="p-3 bg-white rounded-lg shadow-sm">{card.icon}</div>
            <div>
              <div className="font-heading font-bold text-dark">{card.title}</div>
              <div className="font-data text-xs text-dark/60 mt-1">{card.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Typewriter = () => {
  const [text, setText] = useState('');
  const fullText = "> Initializing AI models...\n> Personalizing payload...\n> Applying preferred pricing...\n> Acquisition cost optimized.\n> Awaiting command.";
  
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 50);
    
    // Restart every 15s
    const restart = setInterval(() => {
      i = 0;
      setText('');
    }, 15000);
    
    return () => {
      clearInterval(interval);
      clearInterval(restart);
    }
  }, []);

  return (
    <div className="bg-dark rounded-[2rem] p-8 shadow-xl relative h-[400px] flex flex-col">
      <div className="mb-6 flex justify-between items-start">
        <div>
          <h3 className="font-heading font-bold text-2xl mb-2 text-white">Lowest Acquisition Costs</h3>
          <p className="font-heading text-primary/70 text-sm">AI personalization at scale & preferred discounts.</p>
        </div>
        <div className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
          <span className="font-data text-xs text-white">Live Feed</span>
        </div>
      </div>
      
      <div className="flex-1 bg-black/50 rounded-xl p-6 font-data text-sm text-primary/80 whitespace-pre-wrap overflow-y-auto typewriter-scroll border border-white/5">
        {text}<span className="inline-block w-2 h-4 bg-accent ml-1 animate-pulse align-middle"></span>
      </div>
    </div>
  );
};

const Scheduler = () => {
  const containerRef = useRef(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
      
      // Reset
      tl.set('.cursor', { x: 0, y: 0, scale: 1 });
      tl.set('.grid-cell', { backgroundColor: 'transparent' });
      
      // Move to cell
      tl.to('.cursor', { x: 120, y: 80, duration: 1, ease: 'power2.inOut' });
      
      // Click
      tl.to('.cursor', { scale: 0.9, duration: 0.1 });
      tl.to('.grid-cell-active', { backgroundColor: '#E63B2E', duration: 0.2 }, '<');
      tl.to('.cursor', { scale: 1, duration: 0.1 });
      
      // Move to button
      tl.to('.cursor', { x: 200, y: 180, duration: 1, ease: 'power2.inOut', delay: 0.5 });
      
      // Click save
      tl.to('.cursor', { scale: 0.9, duration: 0.1 });
      tl.to('.save-btn', { scale: 0.95, duration: 0.1 }, '<');
      tl.to('.cursor', { scale: 1, duration: 0.1 });
      tl.to('.save-btn', { scale: 1, duration: 0.1 }, '<');
      
      // Fade out
      tl.to('.cursor', { opacity: 0, duration: 0.5, delay: 0.5 });
      tl.to('.cursor', { x: 0, y: 0, opacity: 1, duration: 0 });
      
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-dark/5 relative h-[400px] flex flex-col">
      <div className="mb-6">
        <h3 className="font-heading font-bold text-2xl mb-2">Proven Vendor</h3>
        <p className="font-heading text-dark/70 text-sm">Worked with multibillion dollar portfolio companies.</p>
      </div>
      
      <div className="flex-1 bg-background rounded-xl p-6 border border-dark/10 relative overflow-hidden flex flex-col items-center justify-center">
        <div className="grid grid-cols-7 gap-2 w-full max-w-[250px] mb-6">
          {['S','M','T','W','T','F','S'].map(d => (
            <div key={d} className="text-center font-data text-xs font-bold text-dark/40">{d}</div>
          ))}
          {Array.from({length: 14}).map((_, i) => (
            <div 
              key={i} 
              className={`aspect-square rounded border border-dark/10 grid-cell ${i === 10 ? 'grid-cell-active' : ''}`}
            ></div>
          ))}
        </div>
        
        <div className="save-btn bg-dark text-white font-data text-xs px-6 py-2 rounded">
          Deploy System
        </div>
        
        <svg className="cursor absolute top-0 left-0 w-8 h-8 text-dark drop-shadow-md z-20" style={{ transformOrigin: 'top left' }} viewBox="0 0 24 24" fill="currentColor">
          <path d="M7 2l12 11.2-5.8.5 3.3 7.3-2.2.9-3.2-7.4-4.4 4.3z" />
        </svg>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <section id="features" className="pt-40 pb-32 px-8 md:px-16 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="font-heading font-bold text-5xl md:text-6xl text-dark tracking-tight mb-6">Functional Artifacts.</h2>
          <p className="font-heading text-xl text-dark/70 max-w-2xl">
            Precision engineering applied to B2B revenue generation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Shuffler />
          <Typewriter />
          <Scheduler />
        </div>
      </div>
    </section>
  );
};

const Philosophy = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.phil-line', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 60%',
        },
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="pt-48 pb-40 px-8 md:px-16 bg-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
          alt="Abstract Architecture" 
          className="w-full h-full object-cover grayscale"
        />
      </div>
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <p className="phil-line font-data text-accent mb-8 uppercase tracking-widest text-sm">The Paradigm Shift</p>
        <h2 className="phil-line font-heading text-2xl md:text-4xl text-primary/60 mb-8 max-w-3xl mx-auto leading-relaxed">
          Most agencies focus on: slow manual outreach and high overhead.
        </h2>
        <h2 className="phil-line font-drama italic text-4xl md:text-5xl lg:text-7xl text-white leading-tight">
          We focus on: <span className="text-accent">AI-driven autonomous scale.</span>
        </h2>
      </div>
    </section>
  );
};

const ProtocolCard = ({ step, title, desc, animType }) => {
  return (
    <div className="protocol-card w-full h-[80vh] sticky top-[10vh] rounded-[3rem] bg-white border border-dark/10 shadow-2xl p-12 flex flex-col justify-between overflow-hidden transform-gpu">
      <div className="flex justify-between items-start">
        <div className="font-data text-6xl text-dark/10 font-bold">{step}</div>
        <div className="font-heading font-bold text-3xl max-w-sm text-right leading-tight">{title}</div>
      </div>
      
      <div className="flex-1 flex items-center justify-center relative">
        {animType === 'rotate' && (
          <div className="w-64 h-64 border-2 border-dark/20 rounded-full flex items-center justify-center animate-[spin_20s_linear_infinite]">
            <div className="w-48 h-48 border-2 border-accent rounded-full border-dashed animate-[spin_15s_linear_infinite_reverse]"></div>
          </div>
        )}
        {animType === 'scan' && (
          <div className="w-full max-w-md h-32 bg-background border border-dark/10 relative overflow-hidden grid grid-cols-12 grid-rows-4 gap-1 p-2">
            {Array.from({length: 48}).map((_, i) => <div key={i} className="bg-dark/5 rounded-sm"></div>)}
            <div className="absolute top-0 left-0 w-2 h-full bg-accent animate-[ping_3s_ease-in-out_infinite_alternate] shadow-[0_0_15px_#E63B2E]"></div>
          </div>
        )}
        {animType === 'pulse' && (
          <svg className="w-full max-w-lg h-32" viewBox="0 0 400 100">
            <path 
              d="M0,50 L100,50 L120,20 L150,90 L180,10 L210,80 L230,50 L400,50" 
              fill="none" 
              stroke="#E63B2E" 
              strokeWidth="3"
              className="animate-[dash_3s_linear_infinite]"
              strokeDasharray="400"
              strokeDashoffset="400"
            />
            <style>{`@keyframes dash { to { stroke-dashoffset: 0; } }`}</style>
          </svg>
        )}
      </div>
      
      <p className="font-heading text-xl text-dark/70 max-w-xl">
        {desc}
      </p>
    </div>
  );
};

const Protocol = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.protocol-card');
      
      cards.forEach((card, i) => {
        if (i === cards.length - 1) return; // Skip last card
        
        ScrollTrigger.create({
          trigger: card,
          start: 'top 10%',
          endTrigger: cards[i + 1],
          end: 'top 10%',
          pin: false,
          pinSpacing: false,
          scrub: true,
          animation: gsap.to(card, {
            scale: 0.9,
            opacity: 0.5,
            filter: 'blur(10px)',
            ease: 'none'
          })
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="protocol" ref={containerRef} className="pt-40 pb-32 px-8 md:px-16 bg-background relative">
      <div className="max-w-5xl mx-auto">
        <div className="mb-24 text-center">
          <h2 className="font-heading font-bold text-5xl md:text-6xl text-dark tracking-tight mb-6">Stacking Archive.</h2>
          <p className="font-heading text-xl text-dark/70">The methodology behind the machine.</p>
        </div>
        
        <div className="space-y-[5vh] pb-[10vh]">
          <ProtocolCard 
            step="01" 
            title="System Integration" 
            desc="We connect directly into your infrastructure. AI payload generators and routing systems are configured to your unique offering."
            animType="rotate"
          />
          <ProtocolCard 
            step="02" 
            title="Payload Generation" 
            desc="Our AI engines synthesize massive datasets to craft hyper-personalized outreach at unmatchable scale."
            animType="scan"
          />
          <ProtocolCard 
            step="03" 
            title="Revenue Command" 
            desc="Infrastructure activates. Preferred pricing ensures minimal acquisition cost. Meetings are booked. Deals are closed."
            animType="pulse"
          />
        </div>
      </div>
    </section>
  );
};

const GetStarted = () => {
  return (
    <section id="get-started" className="pt-40 pb-32 px-8 md:px-16 bg-primary border-t border-dark/10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-heading font-bold text-5xl md:text-7xl text-dark mb-8 tracking-tighter">
          Ready to Deploy?
        </h2>
        <p className="font-heading text-xl md:text-2xl text-dark/70 mb-8 max-w-2xl mx-auto">
          Command your revenue stream with our proven systems. We only work with high-rev B2B agencies ready for scale.
        </p>
        <div className="flex items-center justify-center gap-2 mb-12 font-data text-sm text-dark/70">
          <Shield className="w-5 h-5 text-accent" />
          <span>Zero infrastructure fees. Pure performance scaling.</span>
        </div>
        <MagneticButton variant="accent" className="!px-12 !py-6 !text-2xl">
          Book a growth mapping call
        </MagneticButton>
      </div>
    </section>
  );
};

const AIPrototype = () => {
  const [workflow, setWorkflow] = useState('');
  const [status, setStatus] = useState('idle'); 
  const [logs, setLogs] = useState([]);
  const [blueprint, setBlueprint] = useState('');
 
  const runAutomation = async () => {
    if (!workflow) return;
    setStatus('running');
    setLogs([]);
    setBlueprint('');
 
    const sequence = [
      { msg: `[SYS] Analyzing workflow constraints...`, delay: 500 },
      { msg: `[SYS] Mapping legacy system integration points...`, delay: 1200 },
      { msg: `[SYS] Designing autonomous routing architecture...`, delay: 2000 },
      { msg: `[SYS] Selecting optimal LLM for reasoning tasks...`, delay: 2800 },
      { msg: `[SYS] Calculating estimated latency reduction...`, delay: 3500 },
      { msg: `[SYS] Finalizing deployment protocol...`, delay: 4200 },
    ];
 
    for (let i = 0; i < sequence.length; i++) {
      setTimeout(() => {
        setLogs(prev => [...prev, sequence[i].msg]);
      }, sequence[i].delay);
    }
 
    setTimeout(() => {
      setStatus('complete');
      setBlueprint(`AUTOMATION BLUEPRINT GENERATED\n\nPhase 1: Ingestion\n- Deploy secure webhook to intercept incoming data.\n- Trigger optical character recognition / data extraction node.\n\nPhase 2: AI Reasoning\n- Pass payload to fine-tuned LLM for contextual analysis and decision making.\n- Validate output against strict agency compliance rules.\n\nPhase 3: Execution\n- Autonomous database update via REST API.\n- Trigger alert notification to relevant stakeholders.\n\nProjected Impact: 95% reduction in manual touchpoints. 24/7 continuous operation.`);
    }, 5000);
  };
 
  return (
    <section id="prototype" className="pt-32 pb-40 px-8 md:px-16 bg-[#050505] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"></div>
      
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-white mb-4 tracking-tight">Test the Protocol</h2>
          <p className="font-data text-white/50 text-sm tracking-widest uppercase">Live Automation Blueprint Generator</p>
        </div>
 
        <div className="bg-[#0a0a0a] border border-white/10 rounded-[2rem] p-8 md:p-12 shadow-2xl relative">
          <div className="flex flex-col md:flex-row gap-4 mb-12">
            <input 
              type="text" 
              placeholder="Describe a manual workflow (e.g. 'We manually review 500 invoices')" 
              value={workflow}
              onChange={(e) => setWorkflow(e.target.value)}
              disabled={status === 'running'}
              className="flex-1 bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white font-data focus:outline-none focus:border-accent transition-colors disabled:opacity-50"
            />
            <button 
              onClick={runAutomation}
              disabled={status === 'running' || !workflow}
              className="bg-accent text-white font-heading font-bold px-8 py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-accent/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'running' ? (
                <><Activity className="w-5 h-5 animate-pulse" /> PROCESSING...</>
              ) : (
                <><Zap className="w-5 h-5" /> DESIGN SYSTEM</>
              )}
            </button>
          </div>
 
          <div className="bg-black rounded-xl p-6 border border-white/5 font-mono text-sm min-h-[300px] flex flex-col">
            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-white/10">
              <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
              <span className="ml-4 text-white/30 font-data text-xs">sys_architect.sh</span>
            </div>
 
            <div className="flex-1 space-y-2 text-white/70">
              {logs.length === 0 && status === 'idle' && (
                <div className="text-white/30 italic">&gt; System idle. Awaiting workflow description...</div>
              )}
              {logs.map((log, i) => (
                <div key={i} className="opacity-100 transition-opacity duration-300">&gt; {log}</div>
              ))}
              {status === 'running' && (
                <div className="animate-pulse text-accent">&gt; _</div>
              )}
            </div>
 
            {status === 'complete' && (
              <div className="mt-8 p-6 bg-accent/10 border border-accent/20 rounded-lg">
                <div className="text-accent font-data tracking-widest text-xs uppercase mb-4">Generated Asset: Automation Blueprint</div>
                <div className="whitespace-pre-wrap text-white font-data text-sm leading-relaxed">
                  {blueprint}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
 
const CaseStudy = () => {
  return (
    <section className="pt-40 pb-32 px-8 md:px-16 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-heading font-bold text-5xl md:text-6xl text-dark tracking-tight mb-8">The Proof is in the Pipeline.</h2>
            <p className="font-heading text-xl text-dark/70 mb-8 leading-relaxed">
              We don't just sell software; we deploy battle-tested revenue engines. See how a high-rev B2B agency scaled their operations using our autonomous protocols.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" />
                <div>
                  <h4 className="font-heading font-bold text-lg">90% Reduction in Manual Labor</h4>
                  <p className="font-data text-sm text-dark/60 mt-1">Custom operations AI deployed seamlessly.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" />
                <div>
                  <h4 className="font-heading font-bold text-lg">Instant ROI Validation</h4>
                  <p className="font-data text-sm text-dark/60 mt-1">Through custom internal tools and optimized routing.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-dark text-white rounded-[3rem] p-12 relative overflow-hidden shadow-2xl">
             <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 blur-[100px] rounded-full"></div>
             <div className="relative z-10">
               <div className="font-data text-accent text-xs tracking-widest uppercase mb-8">Deployment Report</div>
               <div className="space-y-8">
                 <div>
                   <div className="text-5xl font-drama italic mb-2">$142,000</div>
                   <div className="font-data text-white/50 text-xs">Annual Savings Generated</div>
                 </div>
                 <div className="w-full h-px bg-white/10"></div>
                 <div>
                   <div className="text-5xl font-drama italic mb-2">0 Hours</div>
                   <div className="font-data text-white/50 text-xs">Wasted on Repetitive Tasks</div>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  )
}
 
const Footer = () => {
  return (
    <footer className="bg-dark text-white rounded-t-[4rem] pt-24 pb-12 px-8 md:px-16 -mt-8 relative z-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 mb-24">
        <div className="md:col-span-6">
          <h3 className="font-heading font-bold text-4xl mb-4">HumanyXAi</h3>
          <p className="font-heading text-primary/60 max-w-sm">
            Growth systems for high-rev ($50,000+/mo) B2B agencies.
          </p>
          <div className="mt-8 flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-4 py-2 w-fit">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="font-data text-xs tracking-widest text-primary/80 uppercase">System Operational</span>
          </div>
        </div>
        
        <div className="md:col-span-3">
          <h4 className="font-data text-accent text-sm mb-6 uppercase tracking-widest">Navigation</h4>
          <ul className="space-y-4 font-heading text-primary/70">
            <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
            <li><a href="#protocol" className="hover:text-white transition-colors">Protocol</a></li>
            <li><a href="#get-started" className="hover:text-white transition-colors">Get Started</a></li>
          </ul>
        </div>
        
        <div className="md:col-span-3">
          <h4 className="font-data text-accent text-sm mb-6 uppercase tracking-widest">Legal</h4>
          <ul className="space-y-4 font-heading text-primary/70">
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-data text-xs text-primary/40">© {new Date().getFullYear()} HumanyXAi. All rights reserved.</p>
        <p className="font-data text-xs text-primary/40">Protocol v1.0.4</p>
      </div>
    </footer>
  );
};
 
const RevenueCalculator = () => {
  const [revenue, setRevenue] = useState(0);
  const [hours, setHours] = useState(0);
  
  const additionalRev = Math.floor(revenue * 0.42);
  const hoursSaved = Math.floor(hours * 0.85);
  
  const formatCurrency = (val) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val);
 
  return (
    <section className="py-24 px-8 md:px-16 bg-background">
      <div className="max-w-5xl mx-auto bg-[#0a0a0a] rounded-[3rem] p-12 md:p-16 relative overflow-hidden shadow-2xl border border-dark/10 group hover:border-accent/50 transition-colors duration-500">
        {/* Tech grid bg */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)] opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
        
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 mb-4 bg-white/5 border border-white/10 rounded-full px-3 py-1">
              <Activity className="w-4 h-4 text-accent" />
              <span className="font-data text-white/80 tracking-widest uppercase text-xs">Live Telemetry</span>
            </div>
            <h3 className="font-heading font-bold text-4xl text-white mb-4">Project Your Impact</h3>
            <p className="font-data text-primary/70 text-sm mb-10">Calibrate your current run rate and manual effort to calculate autonomous ROI.</p>
            
            <div className="mb-8">
              <div className="mb-4 flex justify-between text-white font-heading">
                <span>Current Monthly Revenue</span>
                <span className="font-data text-accent text-xl">{formatCurrency(revenue)}</span>
              </div>
              
              <input 
                type="range" 
                min="0" 
                max="500000" 
                step="10000" 
                value={revenue} 
                onChange={(e) => {
                  const val = Number(e.target.value);
                  setRevenue(val);
                  setHours(Math.floor(val / 500));
                }}
                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer outline-none"
                style={{ accentColor: '#E63B2E' }}
              />
              <div className="flex justify-between text-white/30 font-data text-xs mt-3">
                <span>$0</span>
                <span>$500k+</span>
              </div>
            </div>
 
            <div>
              <div className="mb-4 flex justify-between text-white font-heading">
                <span>Manual Hours/Month</span>
                <span className="font-data text-accent text-xl">{hours} hrs</span>
              </div>
              
              <input 
                type="range" 
                min="0" 
                max="1000" 
                step="20" 
                value={hours} 
                onChange={(e) => {
                  const val = Number(e.target.value);
                  setHours(val);
                  setRevenue(Math.floor(val * 500));
                }}
                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer outline-none"
                style={{ accentColor: '#E63B2E' }}
              />
              <div className="flex justify-between text-white/30 font-data text-xs mt-3">
                <span>0</span>
                <span>1000+</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 space-y-8 backdrop-blur-sm">
            <div>
              <div className="font-data text-white/50 text-xs tracking-widest uppercase mb-2">Projected +30 Day Rev</div>
              <div className="font-drama italic text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">
                +{formatCurrency(additionalRev)}
              </div>
            </div>
            
            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            
            <div>
              <div className="font-data text-white/50 text-xs tracking-widest uppercase mb-2">Manual Hours Eliminated</div>
              <div className="font-heading font-bold text-4xl text-white flex items-baseline gap-3">
                {hoursSaved} <span className="text-xl text-accent font-data tracking-widest">HRS/MO</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
 
function App() {
  return (
    <>
      <Noise />
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Features />
        <RevenueCalculator />
        <Philosophy />
        <Protocol />
        <CaseStudy />
        <AIPrototype />
        <GetStarted />
      </main>
      <Footer />
    </>
  );
}
 
export default App;
