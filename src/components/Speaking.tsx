import React from 'react';
import { Calendar, MapPin, Mic2 } from 'lucide-react';

const Speaking = () => {
  const engagements = [
    {
      title: "The Future of Conscious Leadership",
      event: "Global Leadership Summit 2024",
      date: "Oct 12, 2024",
      location: "New York, NY",
      type: "Keynote"
    },
    {
      title: "Scaling with Integrity",
      event: "Tech Founders Conference",
      date: "Aug 25, 2024",
      location: "San Francisco, CA",
      type: "Panel Session"
    },
    {
      title: "Emotional Intelligence in AI Era",
      event: "Executive Retreat",
      date: "June 15, 2024",
      location: "London, UK",
      type: "Workshop"
    }
  ];

  return (
    <section id="speaking" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-16 items-start">
          <div className="lg:col-span-2">
            <span className="text-[#D4AF37] font-bold tracking-widest uppercase text-sm">Speaking</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-6 leading-tight">Inspiring Audiences Worldwide</h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Collins Munir is a sought-after speaker for corporate events, retreats, and international conferences, delivering high-impact messages that resonate and drive action.
            </p>
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-video">
               <img 
                 src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/1de79085-df8d-48c5-bb20-5902983075bb/speaking-engagement-1-238272ff-1772026282398.webp" 
                 alt="Speaking on stage" 
                 className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-slate-900/20 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer hover:bg-white/50 transition-all">
                    <Mic2 className="w-8 h-8 text-white" />
                  </div>
               </div>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Upcoming & Recent Engagements</h3>
            {engagements.map((item, idx) => (
              <div 
                key={idx}
                className="group p-8 rounded-2xl border border-slate-100 hover:border-[#D4AF37]/30 hover:bg-slate-50 transition-all duration-300"
              >
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <span className="px-3 py-1 bg-[#D4AF37]/10 text-[#D4AF37] text-xs font-bold uppercase tracking-wider rounded-full">
                    {item.type}
                  </span>
                  <div className="flex items-center text-slate-400 text-sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    {item.date}
                  </div>
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-[#D4AF37] transition-colors">
                  {item.title}
                </h4>
                <div className="flex items-center text-slate-500 font-medium">
                  <span className="mr-4">{item.event}</span>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1 text-slate-400" />
                    {item.location}
                  </div>
                </div>
              </div>
            ))}
            <div className="pt-8">
               <button className="text-[#D4AF37] font-bold border-b-2 border-[#D4AF37] pb-1 hover:text-slate-900 hover:border-slate-900 transition-all">
                 Request Speaking Information
               </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Speaking;