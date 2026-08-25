
import React, { useState } from 'react';
import OpeningExperience from '@/components/wedding/OpeningExperience';
import MainWebsite from '@/components/wedding/MainWebsite';

const WeddingApp: React.FC = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [preferences, setPreferences] = useState<{ language: 'en' | 'hi'; relation: string } | null>(null);

  const handleOpeningComplete = (p: { language: 'en' | 'hi'; relation: string }) => {
    setPreferences(p);
    setIsOpened(true);
  };

  if (!isOpened) {
    return <OpeningExperience onComplete={handleOpeningComplete} />;
  }

  return (
    <MainWebsite 
      language={preferences?.language || 'en'} 
      relation={preferences?.relation || ''} 
    />
  );
};

export default WeddingApp;
