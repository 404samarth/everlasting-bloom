
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '@/lib/wedding-data';
import Countdown from './Countdown';
import { Instagram, MapPin, Clock, Calendar, Heart, Download, Upload } from 'lucide-react';

interface MainWebsiteProps {
  language: 'en' | 'hi';
  relation: string;
}

const MainWebsite: React.FC<MainWebsiteProps> = ({ language, relation }) => {
  const [blessing, setBlessing] = useState({ name: '', message: '' });

  const fadeInUp = {
    initial: { y: 60, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <div className="bg-[#121212] text-cream min-h-screen font-serif selection:bg-gold/30 selection:text-gold">
      
      {/* Hero Section */}
      <section className="h-svh relative flex flex-col items-center justify-center text-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 2 }}
          className="absolute inset-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1600&auto=format&fit=crop" 
            className="w-full h-full object-cover"
            alt="Wedding Background"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black/80" />
        </motion.div>

        <div className="relative z-10 px-6 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <p className="text-gold/80 text-sm tracking-[0.3em] uppercase mb-6">Saving the Date</p>
            <h1 className="text-5xl md:text-8xl font-light mb-4 flex flex-col gap-2">
              <span>{weddingData.brideName}</span>
              <span className="text-2xl md:text-4xl italic text-gold">&</span>
              <span>{weddingData.groomName}</span>
            </h1>
            <div className="w-12 h-px bg-gold/50 mx-auto my-8" />
            <p className="text-xl md:text-2xl italic font-light mb-8 text-cream/90">
              {weddingData.hero[language]}
            </p>
            <div className="text-lg tracking-widest text-gold/80">
              18.11.2024
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gold/40"
        >
          <div className="w-px h-12 bg-gradient-to-b from-gold/40 to-transparent" />
        </motion.div>
      </section>

      {/* Countdown Section */}
      <section className="py-24 bg-wine/10 relative">
        <motion.div {...fadeInUp} className="container mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl mb-12 italic font-light">The Beginning of Forever In...</h2>
          <Countdown language={language} />
        </motion.div>
      </section>

      {/* Our Story */}
      <section className="py-32 bg-[#0d0d0d] relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div {...fadeInUp} className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 relative">
               <div className="absolute -inset-4 border border-gold/10 -z-10 translate-x-4 translate-y-4" />
               <img 
                 src="https://images.unsplash.com/photo-1591604466107-ec97de577afd?q=80&w=800&auto=format&fit=crop" 
                 alt="Our Story"
                 className="w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-700"
               />
            </div>
            <div className="w-full md:w-1/2 space-y-6">
               <h2 className="text-4xl text-gold font-light">{weddingData.story[language].title}</h2>
               <p className="text-lg leading-relaxed text-cream/70 font-light italic">
                 {weddingData.story[language].content}
               </p>
               <div className="flex gap-4 pt-4">
                 <Heart className="text-wine w-5 h-5 fill-wine" />
                 <Heart className="text-wine w-5 h-5 fill-wine" />
                 <Heart className="text-wine w-5 h-5 fill-wine" />
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Meet the Families */}
      <section className="py-32 bg-black">
        <div className="container mx-auto px-6">
          <motion.h2 {...fadeInUp} className="text-3xl md:text-5xl text-center mb-20 font-light">Meet the Families</motion.h2>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
             {/* Bride's Family */}
             <motion.div {...fadeInUp} className="space-y-8">
               <div className="aspect-video bg-wine/5 border border-white/5 p-2 overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover opacity-60" alt="Bride Family" />
               </div>
               <div className="text-center">
                 <h3 className="text-2xl text-gold mb-2">{weddingData.families.bride.title[language]}</h3>
                 {weddingData.families.bride.members.map((m, i) => (
                   <p key={i} className="text-cream/60 italic">{m.name} ({m.relation[language]})</p>
                 ))}
               </div>
             </motion.div>

             {/* Groom's Family */}
             <motion.div {...fadeInUp} className="space-y-8">
               <div className="aspect-video bg-wine/5 border border-white/5 p-2 overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover opacity-60" alt="Groom Family" />
               </div>
               <div className="text-center">
                 <h3 className="text-2xl text-gold mb-2">{weddingData.families.groom.title[language]}</h3>
                 {weddingData.families.groom.members.map((m, i) => (
                   <p key={i} className="text-cream/60 italic">{m.name} ({m.relation[language]})</p>
                 ))}
               </div>
             </motion.div>
          </div>
        </div>
      </section>

      {/* Wedding Functions */}
      <section className="py-32 bg-[#0a0a0a] relative">
        <div className="container mx-auto px-6">
          <motion.h2 {...fadeInUp} className="text-3xl md:text-5xl text-center mb-20 font-light">Celebrations</motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {weddingData.functions.map((func, idx) => (
              <motion.div 
                key={idx}
                {...fadeInUp}
                transition={{ delay: idx * 0.1 }}
                className="group p-8 border border-white/5 bg-white/[0.02] hover:bg-wine/10 hover:border-gold/20 transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 text-gold/10 group-hover:text-gold/20 transition-colors">
                  <Calendar size={48} />
                </div>
                <h3 className="text-2xl text-gold mb-4 uppercase tracking-wider">{func.name[language]}</h3>
                <div className="space-y-4 text-cream/70">
                  <div className="flex items-center gap-3">
                    <Calendar size={16} className="text-gold/60" />
                    <span>{func.date}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock size={16} className="text-gold/60" />
                    <span>{func.time}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin size={16} className="text-gold/60 shrink-0 mt-1" />
                    <span>{func.venue}</span>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-white/5">
                  <p className="text-sm uppercase tracking-widest text-gold/40 mb-1">Dress Code</p>
                  <p className="italic">{func.dressCode[language]}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Invitation */}
      <section className="py-40 bg-wine/20 relative overflow-hidden">
         <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />
         <div className="container mx-auto px-6 max-w-3xl text-center relative z-10">
           <motion.div {...fadeInUp} className="space-y-8">
             <h2 className="text-3xl md:text-4xl leading-relaxed italic font-light">
               "{weddingData.invitation[language].title}"
             </h2>
             <div className="w-16 h-px bg-gold/40 mx-auto" />
             <p className="text-xl text-gold/90 uppercase tracking-[0.2em]">
               {weddingData.invitation[language].subtitle}
             </p>
             <p className="text-lg text-cream/80 leading-loose">
               {weddingData.invitation[language].message}
             </p>
             <div className="pt-8">
                <button className="px-10 py-4 bg-gold text-black uppercase tracking-widest text-sm hover:bg-cream transition-colors flex items-center gap-3 mx-auto">
                   <Download size={18} />
                   Digital Card
                </button>
             </div>
           </motion.div>
         </div>
      </section>

      {/* Blessings & Shared Memories */}
      <section className="py-32 bg-black">
        <div className="container mx-auto px-6 max-w-6xl">
           <div className="grid md:grid-cols-2 gap-20">
              {/* Blessings Form */}
              <motion.div {...fadeInUp} className="space-y-8">
                 <h2 className="text-3xl font-light">Share Your Blessings</h2>
                 <form className="space-y-4">
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      className="w-full bg-white/5 border border-white/10 p-4 focus:border-gold/50 outline-none transition-colors"
                    />
                    <textarea 
                      placeholder="Your Blessing" 
                      rows={4}
                      className="w-full bg-white/5 border border-white/10 p-4 focus:border-gold/50 outline-none transition-colors"
                    />
                    <button className="w-full py-4 bg-white/5 border border-gold/20 text-gold uppercase tracking-widest hover:bg-gold/10 transition-all">
                      Send Love
                    </button>
                 </form>
              </motion.div>

              {/* Upload Memory */}
              <motion.div {...fadeInUp} className="space-y-8">
                 <h2 className="text-3xl font-light">Share a Memory</h2>
                 <p className="text-cream/60 italic">Do you have a photo with the bride or groom? Share it with us ❤️</p>
                 <div className="border-2 border-dashed border-white/10 aspect-video flex flex-col items-center justify-center gap-4 hover:border-gold/30 transition-colors cursor-pointer group">
                    <Upload className="text-gold/40 group-hover:text-gold transition-colors" size={32} />
                    <span className="text-sm uppercase tracking-widest text-gold/40">Choose Photo</span>
                 </div>
              </motion.div>
           </div>
        </div>
      </section>

      {/* Instagram */}
      <section className="py-24 border-t border-white/5 text-center">
         <motion.div {...fadeInUp} className="container mx-auto px-6">
           <Instagram className="mx-auto mb-6 text-gold" size={40} />
           <h2 className="text-2xl mb-8 font-light">Follow our journey on Instagram</h2>
           <a 
             href={weddingData.instagramLink} 
             target="_blank" 
             rel="noopener noreferrer"
             className="inline-block px-8 py-3 border border-gold/40 text-gold hover:bg-gold hover:text-black transition-all"
           >
             {weddingData.instagramHandle}
           </a>
         </motion.div>
      </section>

      <footer className="py-12 bg-black text-center border-t border-white/5">
        <p className="text-gold/40 text-sm tracking-widest uppercase">Made with love for {weddingData.brideName} & {weddingData.groomName}</p>
      </footer>
    </div>
  );
};

export default MainWebsite;
