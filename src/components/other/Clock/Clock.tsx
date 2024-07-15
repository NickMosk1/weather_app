import { useState, useEffect } from 'react';
import classes from './Clock.module.css';

interface ClockProps {
  tzoffset: number;
}

const calculateCityTime = (tzoffset: number) => {
  const utcTime = Date.now() + new Date().getTimezoneOffset() * 60000;
  return new Date(utcTime + tzoffset * 3600000);
};

const Clock: React.FC<ClockProps> = ({ tzoffset }) => {

  const [time, setTime] = useState<Date>(calculateCityTime(tzoffset));

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(calculateCityTime(tzoffset));
    }, 1000);
    return () => {clearInterval(timer);};
  }, [tzoffset]);

  return (
    <div className={classes.clock}>
      {time.toLocaleTimeString()}
    </div>
  );
};

export default Clock;