import classes from './DayAndNightDataContainer.module.css';
import SunSetAndRiseContainer from './SunSetAndRiseContainer/SunSetAndRiseContainer';
import MoonPhaseDataContainer from './MoonPhaseData/MoonPhaseDataContainer';

interface SunSetAndRiseContainerProps {
  sunSetAndRiseData: { time: string, epoch: number }[];
  moonPhaseData: number;
}

const DayAndNightDataContainer: React.FC<SunSetAndRiseContainerProps> = ({ sunSetAndRiseData, moonPhaseData }) => {

  return (
    <div className={classes.dayAndNightDataContainer}>
        <SunSetAndRiseContainer sunSetAndRiseData={sunSetAndRiseData}/>
        <MoonPhaseDataContainer moonPhaseData={moonPhaseData}/>
    </div>
  );
};

export default DayAndNightDataContainer;