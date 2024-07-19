import { useContext } from 'react';
import { ThemeContext } from '../../../../themes/ThemeContext/ThemeContext';
import classes from './SunSetAndRiseItem.module.css';

interface SunSetAndRiseItemProps {
    title: string;
    dataNormal: string;
    dataUTC: number;
}

const SunSetAndRiseItem: React.FC<SunSetAndRiseItemProps> = ({ title, dataNormal, dataUTC }) => {

  const {darkMode} = useContext(ThemeContext);

  return (
    <div className={classes.sunSetAndRiseItem}>
      <div className={classes.sunSetAndRiseItemTitle}>{title}</div>
      <div className={`${classes.sunSetAndRiseItemData} ${darkMode && classes['sunSetAndRiseItemData--dark']}`}>В обычном формате: {dataNormal}</div>
      <div className={`${classes.sunSetAndRiseItemData} ${darkMode && classes['sunSetAndRiseItemData--dark']}`}>В формате UTC: {dataUTC}</div>
    </div>
  );
};

export default SunSetAndRiseItem;