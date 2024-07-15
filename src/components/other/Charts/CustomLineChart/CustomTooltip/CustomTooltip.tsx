import classes from './CustomTooltip.module.css';

interface CustomTooltipProps {
  data: {value: number; index?: number;};
  label: string;
  unitName: string;
  dates?: string[];
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({ data, label, unitName, dates }) => {
  const date = dates && data.index !== undefined ? dates[Math.floor(data.index / 24)] : '';
  return (
    <div className={classes.customTooltip}>
      <div className={classes.customTooltipText}>{date}</div>
      <div className={classes.customTooltipText}>{label}</div>
      <div className={classes.customTooltipText}>{`${data.value} ${unitName}`}</div>
    </div>
  );
};

export default CustomTooltip;