import React from 'react';
import classes from './SunSetAndRiseContainer.module.css';

interface SunSetAndRiseContainerProps {
  sunSetAndRiseData: { sunrise?: string; sunset?: string }[];
}

const SunSetAndRiseContainer: React.FC<SunSetAndRiseContainerProps> = ({ sunSetAndRiseData }) => {
  const sunriseData = sunSetAndRiseData.find(data => data.sunrise);
  const sunsetData = sunSetAndRiseData.find(data => data.sunset);

  return (
    <>
      {sunriseData && (
        <div className={classes.sunInfo}>
          Восход: {sunriseData.sunrise}
        </div>
      )}
      {sunsetData && (
        <div className={classes.sunInfo}>
          Закат: {sunsetData.sunset}
        </div>
      )}
      <div>
        {sunriseData && <img src="/path/to/sunrise.png" alt="Sunrise" className={classes.sunIcon} />}
        {sunsetData && <img src="/path/to/sunset.png" alt="Sunset" className={classes.sunIcon} />}
      </div>
    </>
  );
};

export default SunSetAndRiseContainer;