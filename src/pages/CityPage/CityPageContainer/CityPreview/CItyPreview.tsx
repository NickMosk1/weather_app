import City from '../../../../types/City';

import classes from './CityPreview.module.css';

import CityInfo from './CityInfo/CityInfo';

import WeatherDataItemColumn from './WeatherDataItemColumn/WeatherDataItemColumn';

interface CityPreviewProps{
    
    weatherData: City;

}

const CityPreview: React.FC<CityPreviewProps> = ({weatherData}) => {

    return(

        <div className={classes.cityPreview}> {/* пока что по дефолту везде буду отображать данные за 11 июля*/}

            <WeatherDataItemColumn weatherData={weatherData} item1={"tempmax"} item2={"temp"} item3={"tempmin"}/>

            <CityInfo weatherData={weatherData}/>
            
            <WeatherDataItemColumn weatherData={weatherData} item1={"pressure"} item2={"humidity"} item3={"windspeed"}/>
        
        </div>

    )

}

export default CityPreview;