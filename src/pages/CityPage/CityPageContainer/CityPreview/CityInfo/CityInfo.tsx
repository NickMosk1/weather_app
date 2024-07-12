import Clock from '../../../../../components/other/Clock/Clock';

import City from '../../../../../types/City';

import classes from './CityInfo.module.css';

interface CityInfoProps{
    
    weatherData: City;

}

const CityInfo: React.FC<CityInfoProps> = ({weatherData}) => {

    const cityNameLength = weatherData.name.length;

    const resolvedCityAddress = weatherData.resolvedAddress.slice(cityNameLength + 2); {/* тут обрезаем навзание города */}
  
    return (

        <div className={classes.cityInfo}>

            <div className={classes.cityName}> {weatherData.name} </div>

            <div className={classes.resolvedCityAddress}> {resolvedCityAddress} </div>

            <Clock tzoffset={weatherData.tzoffset}/>

        </div>

    );

}

export default CityInfo;