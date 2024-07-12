import City from '../../../../../types/City';

import classes from './WeatherDataItemColumn.module.css';

import WeatherDataItem from './WeatherDataItem/WeatherDataItem';

interface WeatherDataItemColumnProps {

  weatherData: City;

  item1: string;

  item2: string;

  item3: string;

  todayDate: string; 

}

const WeatherDataItemColumn: React.FC<WeatherDataItemColumnProps> = ({ weatherData, item1, item2, item3, todayDate }) => {

  const todayWeather = weatherData.days.find(day => day.datetime === todayDate);

  if (!todayWeather) {

    return <div> Данные о погоде на текущую дату не найдены </div>; {/* дописать переадресацию на страницу ошибки */}

  }

  return (

    <div className={classes.weatherDataItemColumn}>

      <WeatherDataItem title={item1} data={String(todayWeather[item1])} />

      <WeatherDataItem title={item2} data={String(todayWeather[item2])} />

      <WeatherDataItem title={item3} data={String(todayWeather[item3])} />

    </div>

  );

};

export default WeatherDataItemColumn;