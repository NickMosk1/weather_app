import { useEffect } from 'react';
import classes from './CityForecastPageContainer.module.css';
import CityForecastAnalytics from './CityForecastAnalytics/CityForecastAnalytics';
import SingleDayCityPreview from '../../../components/other/SingleDayCityPreview/SingleDayCityPreview';
import LinearPageLoader from '../../../components/pageLoaders/LinearPageLoader/LinearPageLoader';
import ForecastDataStore from '../../../components/stores/ForecastDataStore/ForecastDataStore';
import { observer } from 'mobx-react';

interface CityForecastPageContainerProps {
  cityName: string;
}

const CityForecastPageContainer: React.FC<CityForecastPageContainerProps> = observer(({cityName}) => {

  const {forecastData, todayDate} = ForecastDataStore;

  useEffect(() => { 
    setTimeout(() => {}, 2000);
    const millisRemainTillNextHour = (60 - new Date().getMinutes()) * 60 * 1000 - new Date().getSeconds() * 1000 - new Date().getMilliseconds();
    const timeoutId = setTimeout(() => { 
      ForecastDataStore.fetchData(cityName);
      setInterval(() => {ForecastDataStore.fetchData(cityName)}, 60 * 60 * 1000);
    }, millisRemainTillNextHour);
    return () => clearTimeout(timeoutId); 
  }, [cityName]);

  if (!forecastData) {return (<LinearPageLoader/>);} 

  return (
    <div className={classes.cityForecastPageContainer}>
      <SingleDayCityPreview 
        weatherData={forecastData} 
        todayDate={todayDate} 
        leftColumn={["tempmax", "temp", "tempmin", "pressure"]}
        rightColumn={["dew", "humidity", "windgust", "preciptype"]}
      />
      <CityForecastAnalytics/>
    </div>
  );
});

export default CityForecastPageContainer;