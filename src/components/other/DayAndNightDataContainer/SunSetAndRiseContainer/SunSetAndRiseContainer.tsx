import React from 'react';
import classes from './SunSetAndRiseContainer.module.css';
import SunSetAndRiseImage from './SunSetAndRiseImages/SunSetAndRiseImage';
import SunSetAndRiseItem from './SunSetAndRiseItem/SunSetAndRiseItem';

interface SunSetAndRiseContainerProps {
  sunSetAndRiseData: { time: string, epoch: number }[];
}

const SunSetAndRiseContainer: React.FC<SunSetAndRiseContainerProps> = ({ sunSetAndRiseData }) => {
  
  const sunriseData = sunSetAndRiseData[0] || { time: "Нет данных", epoch: 0 };
  const sunsetData = sunSetAndRiseData[1] || { time: "Нет данных", epoch: 0 };

  return (
    <>
      <div className={classes.sunSetAndRiseContainerTitle}>Время восхода и заката</div>
      <div className={classes.sunSetAndRiseContainer}>
        <SunSetAndRiseItem title={"Восход"} dataNormal={sunriseData.time} dataUTC={sunsetData.epoch}/>
        <SunSetAndRiseImage />
        <SunSetAndRiseItem title={"Закат"} dataNormal={sunsetData.time} dataUTC={sunsetData.epoch}/>
      </div>
    </>
  );
};

export default SunSetAndRiseContainer;
