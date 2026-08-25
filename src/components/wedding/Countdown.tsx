
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '@/lib/wedding-data';

const Countdown: React.FC<{ language: 'en' | 'hi' }> = ({ language }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const weddingDate = new Date(weddingData.weddingDate).getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const labels = {
    en: ['Days', 'Hours', 'Minutes', 'Seconds'],
    hi: ['Din', 'Ghante', 'Minut', 'Second']
  };

  return (
    <div className="flex gap-4 md:gap-8 justify-center">
      {Object.entries(timeLeft).map(([key, value], idx) => (
        <div key={key} className="flex flex-col items-center">
          <motion.div 
            key={value}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-3xl md:text-5xl font-light text-gold mb-1"
          >
            {value.toString().padStart(2, '0')}
          </motion.div>
          <div className="text-[10px] md:text-xs uppercase tracking-widest text-cream/60">
            {labels[language][idx]}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Countdown;
