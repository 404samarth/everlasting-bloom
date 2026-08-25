
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { weddingData } from '@/lib/wedding-data';

interface OpeningExperienceProps {
  onComplete: (preferences: { language: 'en' | 'hi'; relation: string }) => void;
}

const OpeningExperience: React.FC<OpeningExperienceProps> = ({ onComplete }) => {
  const [scene, setScene] = useState(1);
  const [language, setLanguage] = useState<'en' | 'hi'>('en');
  const [relation, setRelation] = useState('');
  const [showResponse, setShowResponse] = useState(false);

  useEffect(() => {
    if (scene === 1) {
      const timer = setTimeout(() => setScene(2), 3000);
      return () => clearTimeout(timer);
    }
    if (scene === 2) {
      const timer = setTimeout(() => setScene(3), 4000);
      return () => clearTimeout(timer);
    }
  }, [scene]);

  const handleLanguageSelect = (lang: 'en' | 'hi') => {
    setLanguage(lang);
    setScene(5);
  };

  const handleDateChoice = (choice: 'yes' | 'no') => {
    setShowResponse(true);
    setTimeout(() => {
      setShowResponse(false);
      setScene(7);
    }, 2000);
  };

  const handleRelationSelect = (relId: string) => {
    setRelation(relId);
    onComplete({ language, relation: relId });
  };

  const containerVariants = {
    exit: { opacity: 0, transition: { duration: 1 } }
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#0a0a0a] text-cream flex items-center justify-center overflow-hidden font-serif">
      <AnimatePresence mode="wait">
        {scene === 1 && (
          <motion.div
            key="scene1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative flex flex-col items-center"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-wine/10 to-transparent blur-3xl" />
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, delay: 0.5 }}
              className="text-2xl tracking-[0.2em] font-light italic"
            >
              {weddingData.openingScenes.scene1.text}
            </motion.p>
          </motion.div>
        )}

        {scene === 2 && (
          <motion.div
            key="scene2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center px-8 text-center"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 2 }}
              className="relative w-64 h-64 mb-8"
            >
              {/* Luxury Ganesh Illustration Placeholder */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-wine/40 to-gold/20 blur-2xl animate-pulse" />
              <img 
                src="https://images.unsplash.com/photo-1567591974574-e85263d44271?q=80&w=800&auto=format&fit=crop" 
                alt="Ganesh Ji"
                className="w-full h-full object-contain relative z-10 mix-blend-lighten"
              />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1.5 }}
              className="text-sm tracking-widest uppercase text-gold/80"
            >
              Shubh Aarambh
            </motion.p>
          </motion.div>
        )}

        {scene === 3 && (
          <motion.div
            key="scene3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center px-10 text-center space-y-6"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              className="text-xl"
            >
              {weddingData.openingScenes.scene3.hi.line1}
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1.5 }}
              className="text-2xl font-light italic text-gold/90"
            >
              "{weddingData.openingScenes.scene3.hi.line2}"
            </motion.p>
            <motion.button
              onClick={() => setScene(4)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.5 }}
              className="mt-8 px-8 py-3 border border-gold/30 text-gold/80 text-sm tracking-widest uppercase hover:bg-gold/10 transition-colors"
            >
              Continue
            </motion.button>
          </motion.div>
        )}

        {scene === 4 && (
          <motion.div
            key="scene4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center w-full h-full"
          >
             <div className="absolute inset-0">
               <img 
                src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop" 
                alt="Couple"
                className="w-full h-full object-cover blur-[20px] opacity-40"
              />
              <div className="absolute inset-0 bg-black/60" />
            </div>
            
            <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-12">
              <p className="text-xl tracking-wide">{weddingData.openingScenes.scene4.hi}</p>
              <div className="flex flex-col items-center space-y-8">
                <p className="text-lg italic font-light text-gold/70">Ek chhoti si choice...</p>
                <div className="flex gap-8">
                  <button 
                    onClick={() => handleLanguageSelect('en')}
                    className="text-2xl font-serif hover:text-gold transition-colors"
                  >
                    English
                  </button>
                  <span className="w-px h-8 bg-white/20" />
                  <button 
                    onClick={() => handleLanguageSelect('hi')}
                    className="text-2xl font-serif hover:text-gold transition-colors"
                  >
                    हिंदी
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {scene === 5 && (
          <motion.div
            key="scene5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center w-full h-full"
          >
             <motion.div 
               initial={{ filter: 'blur(20px)', opacity: 0.4 }}
               animate={{ filter: 'blur(8px)', opacity: 0.6 }}
               transition={{ duration: 3 }}
               className="absolute inset-0"
             >
               <img 
                src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop" 
                alt="Couple"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
            </motion.div>
            
            <div className="relative z-10 flex flex-col items-center justify-center h-full px-10 text-center">
              <motion.h2 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1 }}
                className="text-3xl mb-12 font-light"
              >
                {weddingData.openingScenes.scene6[language].question}
              </motion.h2>
              
              <AnimatePresence mode="wait">
                {!showResponse ? (
                  <motion.div 
                    key="buttons"
                    exit={{ opacity: 0 }}
                    className="flex gap-12"
                  >
                    <button 
                      onClick={() => handleDateChoice('yes')}
                      className="group flex flex-col items-center gap-2"
                    >
                      <span className="text-4xl group-hover:scale-110 transition-transform">❤️</span>
                      <span className="text-sm uppercase tracking-widest text-gold/80">Yes</span>
                    </button>
                    <button 
                      onClick={() => handleDateChoice('no')}
                      className="group flex flex-col items-center gap-2"
                    >
                      <span className="text-4xl group-hover:scale-110 transition-transform">👀</span>
                      <span className="text-sm uppercase tracking-widest text-gold/80">No</span>
                    </button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="response"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-2xl italic text-gold"
                  >
                    {weddingData.openingScenes.scene6[language].yesResponse}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}

        {scene === 7 && (
          <motion.div
            key="scene7"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center w-full min-h-full p-6"
          >
            <h2 className="text-2xl mb-10 text-center font-light italic">
              {weddingData.openingScenes.scene7[language]}
            </h2>
            
            <div className="grid grid-cols-1 gap-4 w-full max-w-xs">
              {weddingData.openingScenes.scene7.options.map((option, idx) => (
                <motion.button
                  key={option.id}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  onClick={() => handleRelationSelect(option.id)}
                  className="w-full py-4 px-6 border border-gold/20 bg-wine/5 hover:bg-wine/20 text-cream/90 text-left transition-all group relative overflow-hidden"
                >
                  <span className="relative z-10">{option.label[language]}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-gold/5 to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default OpeningExperience;
