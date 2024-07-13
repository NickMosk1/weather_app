import classes from './CustomTooltip.module.css';

type CustomTooltipProps = {
  active?: boolean;
  payload?: { value: number }[];
  label?: string;
  unitName: string;
};

const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload, label, unitName }) => {

  if (active && payload && payload.length) {

    return (

      <div className={classes.customTooltip}>

        <div className={classes.customTooltipText}>{`${label}`}</div>

        <div className={classes.customTooltipText}>{`${payload[0].value} ${unitName}`}</div>

      </div>

    );

  }

  return null;

};

export default CustomTooltip;