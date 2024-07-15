import City from '../../../../types/City';
import classes from './CityPreview.module.css';
import CityInfo from './CityInfo/CityInfo';
import WeatherDataItemColumn from './WeatherDataItemColumn/WeatherDataItemColumn';

interface CityPreviewProps {
  weatherData: City;
  todayDate: string;
}

const CityPreview: React.FC<CityPreviewProps> = ({ weatherData, todayDate }) => {

  const todayWeather = weatherData.days.find(day => day.datetime === todayDate);
  const cityInfoData: [string, string, number] = [weatherData.name, weatherData.resolvedAddress.slice(weatherData.name.length + 2), weatherData.tzoffset]; {/* тут обрезаем спереди название города, подстраиваюсь под формат данных от API */}

  if (!todayWeather) {return (<div> Данные о погоде на текущую дату не найдены </div>)} {/* в будущем нужно добавить обработчик ошибок */}

  return (
    <div className={classes.cityPreview}>  {/* здесь задаем параметры (по названием полей из формата json файла от VisCrossWeather), которые хотим отобразить */}
      <WeatherDataItemColumn todayWeather={todayWeather} items={["tempmax", "temp", "tempmin", "pressure"]} />
      <CityInfo cityInfoData={cityInfoData} />
      <WeatherDataItemColumn todayWeather={todayWeather} items={["dew", "humidity", "windgust", "preciptype"]} />
    </div>
  );
};

export default CityPreview;