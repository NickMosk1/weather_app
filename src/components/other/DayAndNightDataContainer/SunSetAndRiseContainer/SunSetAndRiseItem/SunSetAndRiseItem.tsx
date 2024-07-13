import classes from './SunSetAndRiseItem.module.css';

interface SunSetAndRiseItemProps {
    title: string;
    dataNormal: string;
    dataUTC: number;
}

const SunSetAndRiseItem: React.FC<SunSetAndRiseItemProps> = ({ title, dataNormal, dataUTC }) => {
  return (
    <div className={classes.sunSetAndRiseItem}>
      <div className={classes.sunSetAndRiseItemTitle}>{title}</div>
      <div className={classes.sunSetAndRiseItemData}>В обычном формате: {dataNormal}</div>
      <div className={classes.sunSetAndRiseItemData}>В формате UTC: {dataUTC}</div>
    </div>
  );
};

export default SunSetAndRiseItem;