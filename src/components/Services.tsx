import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Zap, Globe, TrendingUp, ShieldCheck, Cpu } from 'lucide-react';

const services = [
  {
    icon: <Briefcase className="w-10 h-10 text-[#D4AF37]" />,
    title: "Executive Coaching",
    description: "One-on-one sessions designed for C-suite leaders to refine their strategy and leadership style.",
    link: "#"
  },
  {
    icon: <Zap className="w-10 h-10 text-[#D4AF37]" />,
    title: "Performance Breakthrough",
    description: "Intensive workshops to eliminate bottlenecks and accelerate individual and team productivity.",
    link: "#"
  },
  {
    icon: <Globe className="w-10 h-10 text-[#D4AF37]" />,
    title: "Global Leadership",
    description: "Strategies for leading diverse, cross-cultural teams in a globalized business environment.",
    link: "#"
  },
  {
    icon: <TrendingUp className="w-10 h-10 text-[#D4AF37]" />,
    title: "Strategic Advisory",
    description: "Expert guidance on organizational growth, culture building, and long-term visioning.",
    link: "#"
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-[#D4AF37]" />,
    title: "Resilience Training",
    description: "Building the mental and emotional fortitude required to lead through crisis and change.",
    link: "#"
  },
  {
    icon: <Cpu className="w-10 h-10 text-[#D4AF37]" />,
    title: "Digital Transformation",
    description: "Helping leaders navigate and leverage technology for organizational success.",
    link: "#"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#D4AF37] font-bold tracking-widest uppercase text-sm">Our Services</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-6">Tailored Solutions for Modern Leaders</h2>
          <p className="text-slate-600 text-lg">
            We provide comprehensive coaching and advisory services designed to meet the unique challenges of today's fast-paced business world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-slate-100 group"
            >
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                {service.description}
              </p>
              <a 
                href={service.link}
                className="text-slate-900 font-bold flex items-center group-hover:text-[#D4AF37] transition-colors"
              >
                Learn More
                <motion.span
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  →
                </motion.span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;