import City from '../../../types/City';
import classes from './SingleDayCityPreview.module.css';
import CityInfo from './CityInfo/CityInfo';
import WeatherDataItemColumn from './WeatherDataItemColumn/WeatherDataItemColumn';

interface SingleDayCityPreviewProps {
  weatherData: City;
  todayDate: string;
  leftColumn: string[];
  rightColumn: string[];
}

const SingleDayCityPreview: React.FC<SingleDayCityPreviewProps> = ({ weatherData, todayDate, leftColumn, rightColumn}) => {

  const todayWeather = weatherData.days.find(day => day.datetime === todayDate);
  const cityInfoData: [string, string, number] = [weatherData.name, weatherData.resolvedAddress.slice(weatherData.name.length + 2), weatherData.tzoffset]; 

  if (!todayWeather) {return (<div> Теоретически невозможный исход </div>)} 

  return (
    <div className={classes.singleDayCityPreview}>  
      <WeatherDataItemColumn todayWeather={todayWeather} items={leftColumn} />
      <CityInfo cityInfoData={cityInfoData} />
      <WeatherDataItemColumn todayWeather={todayWeather} items={rightColumn} />
    </div>
  );
};

export default SingleDayCityPreview;