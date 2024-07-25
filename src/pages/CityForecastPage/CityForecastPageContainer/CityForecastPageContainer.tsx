import { useEffect } from 'react';
import classes from './CityForecastPageContainer.module.css';
import CityForecastAnalytics from './CityForecastAnalytics/CityForecastAnalytics';
import SingleDayCityPreview from './SingleDayCityPreview/SingleDayCityPreview';
import LinearPageLoader from '../../../components/pageLoaders/LinearPageLoader/LinearPageLoader';
import ForecastDataStore from '../../../components/stores/ForecastDataStore/ForecastDataStore';
import { observer } from 'mobx-react';

interface CityForecastPageContainerProps {
  cityName: string;
}

const CityForecastPageContainer: React.FC<CityForecastPageContainerProps> = observer(({cityName}) => {

  const {weatherData, todayDate} = ForecastDataStore;

  useEffect(() => {
    
    ForecastDataStore.fetchData(cityName);
    
  }, [cityName]);

  if (!weatherData) {return (<LinearPageLoader/>);} 

  return (
    <div className={classes.cityForecastPageContainer}>
      <SingleDayCityPreview weatherData={weatherData} todayDate={todayDate} />
      <CityForecastAnalytics weatherData={weatherData} todayDate={todayDate} />
    </div>
  );
});

export default CityForecastPageContainer;