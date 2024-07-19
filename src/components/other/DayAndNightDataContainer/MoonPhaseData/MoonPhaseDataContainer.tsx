import { useContext } from 'react';
import { ThemeContext } from '../../../themes/ThemeContext/ThemeContext';
import classes from './MoonPhaseDataContainer.module.css';

interface MoonPhaseDataContainerProps {
  moonPhaseData: number;
}

const getMoonPhaseName = (phase: number): string => {
  if (phase === 0 || phase === 1) return "новолуние";
  if (phase === 0.25) return "первая четверть";
  if (phase === 0.5) return "полнолуние";
  if (phase === 0.75) return "последняя четверть";
  if (phase > 0 && phase < 0.25) return "растущий серп";
  if (phase > 0.25 && phase < 0.5) return "растущая Луна";
  if (phase > 0.5 && phase < 0.75) return "убывающая Луна";
  if (phase > 0.75 && phase < 1) return "убывающий серп";
  return "неизвестная фаза";
};

const MoonPhaseDataContainer: React.FC<MoonPhaseDataContainerProps> = ({ moonPhaseData }) => {
  
  const {darkMode} = useContext(ThemeContext);

  const moonPhaseName = getMoonPhaseName(moonPhaseData);

  return (
    <div className={classes.moonPhaseDataContainer}>
      <div className={classes.moonPhaseDataContainerTitle}>Фаза Луны</div>
      <div className={`${classes.moonPhaseDataContainerData} ${darkMode && classes['moonPhaseDataContainerData--dark']}`}>Коэффициент: {moonPhaseData}</div>
      <div className={`${classes.moonPhaseDataContainerData} ${darkMode && classes['moonPhaseDataContainerData--dark']}`}>Название: {moonPhaseName}</div>
    </div>
  );
};

export default MoonPhaseDataContainer;