import React, { useState, useEffect } from 'react';

import classes from './Clock.module.css';

interface ClockProps {

  tzoffset: number;

}

const Clock: React.FC<ClockProps> = ({ tzoffset }) => {

  const calculateCityTime = (offset: number) => {

    const localTime = new Date();

    const utcTime = localTime.getTime() + localTime.getTimezoneOffset() * 60000;

    return new Date(utcTime + offset * 3600000);

  };

  const [time, setTime] = useState<Date>(calculateCityTime(tzoffset));

  useEffect(() => {

    const timer = setInterval(() => {

      setTime(calculateCityTime(tzoffset));

    }, 1000);

    return () => {

      clearInterval(timer);

    };

  }, [tzoffset]);

  return (

    <div className={classes.clock}>

      {time.toLocaleTimeString()}

    </div>

  );
  
};

export default Clock;