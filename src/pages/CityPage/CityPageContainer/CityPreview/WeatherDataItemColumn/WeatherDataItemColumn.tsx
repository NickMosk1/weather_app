import City from '../../../../../types/City';

import classes from './WeatherDataItemColumn.module.css';

import WeatherDataItem from './WeatherDataItem/WeatherDataItem';

interface WeatherDataItemColumnProps{
    
    weatherData: City;

    item1: string;
    
    item2: string;
    
    item3: string;

}

const WeatherDataItemColumn: React.FC<WeatherDataItemColumnProps> = ({weatherData, item1, item2, item3}) => {

    return(

        <div className={classes.weatherDataItemColumn}>

            <WeatherDataItem title={item1} data={String(weatherData.days[0][item1])} />

            <WeatherDataItem title={item2} data={String(weatherData.days[0][item2])} />
            
            <WeatherDataItem title={item3} data={String(weatherData.days[0][item3])} />
        
        </div>

    )

}

export default WeatherDataItemColumn;