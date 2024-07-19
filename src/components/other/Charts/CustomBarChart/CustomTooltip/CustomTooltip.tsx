import { useContext } from 'react';
import classes from './CustomTooltip.module.css';
import { ThemeContext } from '../../../../themes/ThemeContext/ThemeContext';

interface CustomTooltipProps {
  data: {value: number; index?: number;};
  label: string;
  unitName: string;
  dates?: string[];
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({ data, label, unitName, dates }) => {

  const date = dates && data.index !== undefined ? dates[Math.floor(data.index / 24)] : '';

  const {darkMode} = useContext(ThemeContext);

  return (
    <div className={`${classes.customTooltip} ${darkMode && classes['customTooltip--dark']}`}>
      <div className={classes.customTooltipText}>{date}</div>
      <div className={classes.customTooltipText}>{label}</div>
      <div className={classes.customTooltipText}>{`${data.value} ${unitName}`}</div>
    </div>
  );
};

export default CustomTooltip;