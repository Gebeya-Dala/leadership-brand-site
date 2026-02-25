import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { toast } from 'sonner';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Executive Coaching',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! Your message has been sent. Collins will contact you shortly.");
    setFormData({ name: '', email: '', service: 'Executive Coaching', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <span className="text-[#D4AF37] font-bold tracking-widest uppercase text-sm">Get in Touch</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-8">Let's Start a Conversation</h2>
            <p className="text-slate-600 text-lg mb-12 max-w-md">
              Whether you're interested in individual coaching, corporate workshops, or speaking engagements, I'd love to hear from you.
            </p>

            <div className="space-y-8">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center mr-4 border border-slate-100">
                  <Mail className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Email</h4>
                  <p className="text-slate-600">hello@collinsmunir.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center mr-4 border border-slate-100">
                  <Phone className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Direct</h4>
                  <p className="text-slate-600">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center mr-4 border border-slate-100">
                  <MapPin className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Office</h4>
                  <p className="text-slate-600">88 Madison Ave, New York, NY</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 p-8 md:p-12 rounded-[2rem] border border-slate-100 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Jane Doe"
                    className="w-full px-5 py-4 rounded-xl border-slate-200 focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent outline-none bg-white transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="jane@company.com"
                    className="w-full px-5 py-4 rounded-xl border-slate-200 focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent outline-none bg-white transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Interested In</label>
                <select 
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                  className="w-full px-5 py-4 rounded-xl border-slate-200 focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent outline-none bg-white transition-all appearance-none"
                >
                  <option>Executive Coaching</option>
                  <option>Performance Breakthrough</option>
                  <option>Strategic Advisory</option>
                  <option>Speaking Engagement</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Your Message</label>
                <textarea 
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="How can Collins help you?"
                  className="w-full px-5 py-4 rounded-xl border-slate-200 focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent outline-none bg-white transition-all"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-slate-900 text-white py-5 rounded-xl font-bold text-lg hover:bg-slate-800 transition-all flex items-center justify-center group"
              >
                Send Message
                <Send className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;