import React, { useState, useEffect } from 'react';

import classes from './Clock.module.css';

const Clock: React.FC = () => {

  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {

    const timer = setInterval(() => {

      setTime(new Date());

    }, 1000);

    return () => {

      clearInterval(timer);

    };

  }, []);

  return (

    <div className={classes.clock}>

      {time.toLocaleTimeString()}

    </div>

  );

};

export default Clock;