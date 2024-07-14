import React from 'react';
import classes from './CustomTooltip.module.css';

interface CustomTooltipProps {
  data: {value: number; index: number;};
  label: string;
  unitName: string;
  dates?: string[];
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({ data, label, unitName, dates }) => {
  console.log('Tooltip data:', data);
  console.log('Tooltip date:', dates ? dates[Math.floor(data.index / 24)] : '');

  return (
    <div className={classes.customTooltip}>
      <div className={classes.customTooltipText}>{`${dates ? dates[Math.floor(data.index / 24)] : ''}`}</div>
      <div className={classes.customTooltipText}>{`${label}`}</div>
      <div className={classes.customTooltipText}>{`${data.value} ${unitName}`}</div>
    </div>
  );
};

export default CustomTooltip;