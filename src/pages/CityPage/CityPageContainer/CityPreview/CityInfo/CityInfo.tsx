import React, { useContext } from 'react';
import Clock from '../../../../../components/other/Clock/Clock';
import classes from './CityInfo.module.css';
import { ThemeContext } from '../../../../../components/themes/ThemeContext/ThemeContext';

interface CityInfoProps {
  cityInfoData: [string, string, number]; // название города, подробный адрес, смещение по часовому поясу
}

const CityInfo: React.FC<CityInfoProps> = ({ cityInfoData }) => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={`${classes.cityInfo} ${darkMode ? classes['cityInfo--dark'] : ''}`}>
      <div className={`${classes.cityName} ${darkMode ? classes['cityName--dark'] : ''}`}> {cityInfoData[0]} </div>
      <div className={`${classes.resolvedCityAddress} ${darkMode ? classes['resolvedCityAddress--dark'] : ''}`}> {cityInfoData[1]} </div>
      <Clock tzoffset={cityInfoData[2]} />
    </div>
  );
};

export default CityInfo;