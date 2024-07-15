import Clock from '../../../../../components/other/Clock/Clock';
import classes from './CityInfo.module.css';

interface CityInfoProps{
    cityInfoData: [string, string, number]; //название города, подробный адрес, смещение по часовому поясу
}

const CityInfo: React.FC<CityInfoProps> = ({cityInfoData}) => {
    return (
        <div className={classes.cityInfo}>
            <div className={classes.cityName}> {cityInfoData[0]} </div>
            <div className={classes.resolvedCityAddress}> {cityInfoData[1]} </div>
            <Clock tzoffset={cityInfoData[2]}/>
        </div>
    );
}

export default CityInfo;