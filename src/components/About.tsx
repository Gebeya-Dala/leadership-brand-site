import React from 'react';
import { motion } from 'framer-motion';
import { Target, Award, Users } from 'lucide-react';

const About = () => {
  const pillars = [
    {
      icon: <Target className="w-6 h-6 text-[#D4AF37]" />,
      title: "Strategic Vision",
      text: "Aligning your personal mission with organizational goals for exponential growth."
    },
    {
      icon: <Award className="w-6 h-6 text-[#D4AF37]" />,
      title: "Impact Leadership",
      text: "Cultivating a legacy of excellence and ethical influence in every interaction."
    },
    {
      icon: <Users className="w-6 h-6 text-[#D4AF37]" />,
      title: "Global Network",
      text: "Access to a worldwide community of high-performers and change-makers."
    }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#D4AF37] font-bold tracking-widest uppercase text-sm">Our Philosophy</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-8 leading-tight">
              Transforming Potential into <br className="hidden md:block" /> Sustained Excellence
            </h2>
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                With over 15 years of experience coaching Fortune 500 executives and startup founders, Collins Munir brings a unique blend of strategic acumen and emotional intelligence to the table.
              </p>
              <p>
                The coaching philosophy is rooted in the belief that true leadership starts from within. By mastering your inner landscape, you unlock the ability to navigate external complexities with grace, decisiveness, and impact.
              </p>
              <p>
                "Collins is not just about the destination; it's about who you become in the process of reaching it."
              </p>
            </div>
            
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
               {pillars.map((pillar, idx) => (
                 <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="mb-3">{pillar.icon}</div>
                    <h4 className="font-bold text-slate-900 mb-1">{pillar.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">{pillar.text}</p>
                 </div>
               ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
               <img 
                 src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/1de79085-df8d-48c5-bb20-5902983075bb/hero-success-ituma-e637ccaa-1772026282300.webp" 
                 alt="Leadership session" 
                 className="w-full h-full object-cover"
               />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-[#D4AF37] p-8 rounded-2xl text-white shadow-xl hidden lg:block">
              <p className="text-4xl font-bold mb-1">15+</p>
              <p className="text-sm font-medium opacity-90 uppercase tracking-wider">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;