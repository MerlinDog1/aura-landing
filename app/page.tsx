"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Zap, 
  Shield, 
  TrendingUp, 
  ArrowRight, 
  Activity,
  Globe,
  Cpu,
  Layers,
  LineChart
} from "lucide-react";
import { useRef } from "react";

// ============================================
// HERO SECTION
// ============================================
function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient mesh */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-60" />
      
      {/* Radial glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-lime-glow-dim blur-[120px] pointer-events-none" />

      <motion.div
        ref={containerRef}
        style={{ y, opacity }}
        className="relative z-10 max-w-6xl mx-auto px-6 text-center"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Logo/Brand mark */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full">
              <span className="w-2 h-2 rounded-full bg-lime-glow animate-pulse" />
              <span className="text-xs tracking-widest uppercase text-white/60 font-inter">
                Live Analytics Engine
              </span>
            </div>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            variants={itemVariants}
            className="font-grotesk text-6xl md:text-8xl lg:text-9xl font-light tracking-widestHero uppercase text-white mb-6"
          >
            Aura
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl lg:text-3xl font-light text-white/70 tracking-wide font-inter mb-12"
          >
            Predict the invisible. <span className="text-lime-glow">Trade the future.</span>
          </motion.p>

          {/* Subtext */}
          <motion.p
            variants={itemVariants}
            className="text-sm md:text-base text-white/40 max-w-xl mx-auto font-inter font-light leading-relaxed"
          >
            Real-time predictive analytics powered by machine learning. 
            Execute with precision. Stay ahead of the market.
          </motion.p>

          {/* CTA Button */}
          <motion.div variants={itemVariants} className="mt-12">
            <button className="group relative inline-flex items-center gap-3 px-8 py-4 bg-lime-glow text-obsidian-950 font-inter font-medium text-sm tracking-wider uppercase rounded-none overflow-hidden transition-all duration-500 hover:px-10">
              <span className="relative z-10">Request Access</span>
              <ArrowRight className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border border-white/20 flex justify-center pt-2"
          >
            <div className="w-1 h-2 rounded-full bg-lime-glow/60" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

// ============================================
// THE PULSE - Live Data Visualization
// ============================================
function ThePulse() {
  // Generate fake live data points
  const dataPoints = Array.from({ length: 24 }, (_, i) => ({
    id: i,
    value: Math.random() * 100,
    height: 30 + Math.random() * 70,
  }));

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Section label */}
      <div className="text-center mb-16">
        <span className="text-xs tracking-[0.3em] uppercase text-lime-glow/60 font-inter">
          The Pulse
        </span>
      </div>

      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          {/* Main visualization container with breathing glow */}
          <motion.div
            animate="breathe-glow"
            className="relative bg-obsidian-800/30 rounded-lg p-8 backdrop-blur-sm border border-surface-glass-border"
          >
            {/* Animated border effect */}
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-lime-glow/0 via-lime-glow/10 to-lime-glow/0 opacity-50" />

            {/* Header stats row */}
            <div className="flex flex-wrap justify-between items-center mb-8 pb-6 border-b border-white/5">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-lime-glow" />
                  <span className="text-xs tracking-wider uppercase text-white/50 font-inter">
                    Live Feed
                  </span>
                </div>
                <div className="w-px h-4 bg-white/10" />
                <span className="text-xs text-lime-glow font-inter">●</span>
                <span className="text-xs text-white/40 font-inter">24ms latency</span>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-right">
                  <p className="text-xs text-white/40 uppercase tracking-wider font-inter">Signal</p>
                  <p className="text-lg font-inter font-medium text-lime-glow">+2.4σ</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-white/40 uppercase tracking-wider font-inter">Confidence</p>
                  <p className="text-lg font-inter font-medium text-white">94.7%</p>
                </div>
              </div>
            </div>

            {/* Chart visualization */}
            <div className="relative h-64 flex items-end justify-between gap-1">
              {dataPoints.map((point, index) => (
                <motion.div
                  key={point.id}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${point.height}%` }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.02,
                    ease: "easeOut"
                  }}
                  className="flex-1 bg-gradient-to-t from-lime-glow/30 to-lime-glow/5 rounded-t-sm relative overflow-hidden group"
                >
                  {/* Hover state */}
                  <div className="absolute inset-0 bg-lime-glow/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  
                  {/* Animated gradient overlay */}
                  <motion.div
                    animate={{ opacity: [0.3, 0.7, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: index * 0.1 }}
                    className="absolute inset-0 bg-gradient-to-t from-lime-glow/40 to-transparent"
                  />
                </motion.div>
              ))}
            </div>

            {/* Data stream lines */}
            <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-lime-glow/20 to-transparent" />
            <div className="absolute top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-lime-glow/10 to-transparent" />
            <div className="absolute top-2/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-lime-glow/10 to-transparent" />
          </motion.div>

          {/* Floating stats cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="absolute -left-4 top-1/4 glass px-4 py-3 rounded"
          >
            <p className="text-xs text-white/40 uppercase tracking-wider font-inter mb-1">Alpha Signal</p>
            <p className="text-sm font-inter text-lime-glow">BUY - 0.0042 BTC</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="absolute -right-4 bottom-1/4 glass px-4 py-3 rounded"
          >
            <p className="text-xs text-white/40 uppercase tracking-wider font-inter mb-1">Market Delta</p>
            <p className="text-sm font-inter text-white">+847 vol</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================
// THE EDGE - Three Core Value Props
// ============================================
function TheEdge() {
  const features = [
    {
      icon: Cpu,
      title: "Microsecond Precision",
      description: "Our distributed architecture processes market data at the edge, delivering signals in under 50 microseconds. Be first, every time.",
    },
    {
      icon: TrendingUp,
      title: "Predictive Modeling",
      description: "Proprietary ML models trained on 15+ years of market data identify patterns invisible to human analysis. See what&apos;s coming.",
    },
    {
      icon: Shield,
      title: "Risk Intelligence",
      description: "Real-time position monitoring with automated hedging recommendations. Stay protected against black swan events.",
    },
  ];

  return (
    <section className="relative py-32 bg-obsidian-900/30">
      <div className="text-center mb-20">
        <span className="text-xs tracking-[0.3em] uppercase text-lime-glow/60 font-inter">
          The Edge
        </span>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.2, duration: 0.7 }}
              className="group"
            >
              {/* Icon */}
              <div className="mb-6">
                <feature.icon 
                  className="w-8 h-8 text-lime-glow transition-all duration-500 group-hover:scale-110" 
                  strokeWidth={1.5}
                />
              </div>

              {/* Title */}
              <h3 className="font-grotesk text-xl md:text-2xl font-light tracking-wide text-white mb-4">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-white/50 font-inter font-light leading-relaxed">
                {feature.description}
              </p>

              {/* Hover line indicator */}
              <div className="mt-6 h-px w-12 bg-lime-glow/0 group-hover:bg-lime-glow/40 transition-all duration-500 group-hover:w-20" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================
// THE PROOF - Trust Section
// ============================================
function TheProof() {
  // Partner logos - using brand name text as placeholders (real implementation would use SVGs)
  const partners = [
    { name: "Citadel", type: "Hedge Fund" },
    { name: "Two Sigma", type: "Quant Firm" },
    { name: "Jump Trading", type: "Market Maker" },
    { name: "DRW", type: "Trading Firm" },
    { name: "Jane Street", type: "Quant Trading" },
    { name: "Virtu", type: "Market Maker" },
    { name: "IMC", type: "Trading Firm" },
    { name: "Tower", type: "Quant Research" },
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background subtle pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs tracking-[0.3em] uppercase text-lime-glow/60 font-inter">
            The Proof
          </span>
          <h2 className="mt-6 font-grotesk text-3xl md:text-4xl font-light tracking-wide text-white">
            Trusted by the world&apos;s most sophisticated traders
          </h2>
        </div>

        {/* Partner grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col items-center justify-center group cursor-default"
            >
              {/* Logo placeholder - geometric mark */}
              <div className="w-16 h-16 flex items-center justify-center mb-4 opacity-40 group-hover:opacity-70 transition-opacity duration-300">
                <div className="w-10 h-10 border border-white/20 group-hover:border-lime-glow/40 group-hover:bg-lime-glow/5 transition-all duration-500 flex items-center justify-center">
                  <span className="font-grotesk text-lg font-light text-white/60 group-hover:text-lime-glow/80">
                    {partner.name.charAt(0)}
                  </span>
                </div>
              </div>
              <span className="text-sm font-inter font-medium text-white/50 group-hover:text-white/80 transition-colors duration-300">
                {partner.name}
              </span>
              <span className="text-xs font-inter text-white/30 mt-1">
                {partner.type}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-20 flex flex-wrap justify-center gap-12 md:gap-20"
        >
          <div className="text-center">
            <p className="font-grotesk text-4xl md:text-5xl font-light text-lime-glow mb-2">$2.4T+</p>
            <p className="text-xs tracking-wider uppercase text-white/40 font-inter">Assets Analyzed Daily</p>
          </div>
          <div className="text-center">
            <p className="font-grotesk text-4xl md:text-5xl font-light text-white mb-2">50μs</p>
            <p className="text-xs tracking-wider uppercase text-white/40 font-inter">Average Latency</p>
          </div>
          <div className="text-center">
            <p className="font-grotesk text-4xl md:text-5xl font-light text-white mb-2">99.99%</p>
            <p className="text-xs tracking-wider uppercase text-white/40 font-inter">Uptime SLA</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================
// THE JUMP - CTA Section
// ============================================
function TheJump() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-lime-glow/5 via-transparent to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-lime-glow-dim blur-[150px] pointer-events-none" />

      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-grotesk text-4xl md:text-6xl font-light tracking-wide text-white mb-6">
            Ready to see the unseen?
          </h2>
          <p className="text-white/50 font-inter font-light text-lg mb-12 max-w-xl mx-auto">
            Join the select group of traders who&apos;ve elevated their edge with Aura. 
            Private beta is now open.
          </p>

          {/* CTA Button with smooth hover transition */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-flex items-center justify-center gap-3 px-12 py-5 bg-lime-glow text-obsidian-950 font-inter font-medium text-sm tracking-[0.2em] uppercase rounded-sm overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(184,255,87,0.3)]"
          >
            <span className="relative z-10">Get Early Access</span>
            <ArrowRight className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
            
            {/* Hover gradient overlay */}
            <motion.div
              initial={{ y: "100%" }}
              whileHover={{ y: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-white/20 z-0"
            />
          </motion.button>

          <p className="mt-6 text-xs text-white/30 font-inter">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================
// FOOTER
// ============================================
function Footer() {
  return (
    <footer className="relative py-16 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <span className="font-grotesk text-lg tracking-widest uppercase text-white/60">
              Aura
            </span>
            <span className="text-xs text-white/30">© 2024</span>
          </div>
          
          <div className="flex items-center gap-8">
            <a href="#" className="text-xs text-white/40 hover:text-white/70 transition-colors font-inter uppercase tracking-wider">
              Privacy
            </a>
            <a href="#" className="text-xs text-white/40 hover:text-white/70 transition-colors font-inter uppercase tracking-wider">
              Terms
            </a>
            <a href="#" className="text-xs text-white/40 hover:text-white/70 transition-colors font-inter uppercase tracking-wider">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ============================================
// MAIN PAGE
// ============================================
export default function Home() {
  return (
    <main className="bg-obsidian-950">
      {/* Custom font styles - would be loaded via next/font in production */}
      <style jsx global>{`
        .font-grotesk {
          font-family: 'Space Grotesk', system-ui, sans-serif;
          font-weight: 300;
        }
      `}</style>
      
      <Hero />
      <ThePulse />
      <TheEdge />
      <TheProof />
      <TheJump />
      <Footer />
    </main>
  );
}
