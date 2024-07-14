import React from 'react';
import classes from './CustomTooltip.module.css';

interface CustomTooltipProps {
  data: {value: number; index: number;};
  label: string;
  unitName: string;
  dates?: string[];
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({ data, label, unitName, dates }) => {
  return (
    <div className={classes.customTooltip}>
      <div className={classes.customTooltipText}>{`${dates ? dates[Math.floor(data.index / 24)] : ''}`}</div>
      <div className={classes.customTooltipText}>{`${label}`}</div>
      <div className={classes.customTooltipText}>{`${data.value} ${unitName}`}</div>
    </div>
  );
};

export default CustomTooltip;