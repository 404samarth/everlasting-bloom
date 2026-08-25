import { useEffect, useState } from "react";

export interface Countdown {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
}

function diff(target: number): Countdown {
  const ms = target - Date.now();
  if (ms <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true };
  const s = Math.floor(ms / 1000);
  return {
    days: Math.floor(s / 86400),
    hours: Math.floor((s % 86400) / 3600),
    minutes: Math.floor((s % 3600) / 60),
    seconds: s % 60,
    isPast: false,
  };
}

export function useCountdown(targetISO: string): Countdown {
  const target = new Date(targetISO).getTime();
  const [value, setValue] = useState<Countdown>(() => diff(target));

  useEffect(() => {
    const id = window.setInterval(() => setValue(diff(target)), 1000);
    return () => window.clearInterval(id);
  }, [target]);

  return value;
}
