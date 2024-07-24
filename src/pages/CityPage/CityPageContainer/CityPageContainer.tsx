import { useEffect, useState } from 'react';
import axios from 'axios';
import City from '../../../types/City';
import classes from './CityPageContainer.module.css';
import CityWeatherAnalytics from './CityWeatherAnalytics/CityWeatherAnalytics';
import SingleDayCityPreview from './SingleDayCityPreview/SingleDayCityPreview';
import LinearPageLoader from '../../../components/pageLoaders/LinearPageLoader/LinearPageLoader';

interface CityPageContainerProps {
  cityName: string;
}

const calculateCityDate = (tzoffset: number): string => {
  const cityTime = new Date(Date.now() + tzoffset * 3600000); {/* формируем новую дату по текущему времени UTC через .now() + учитываем переданную задержку */}
  return cityTime.toISOString().split('T')[0]; {/*разделяем через T и обрезаем лишнее (HH-MM-SS и какой-то Z), берем только YYYY-MM-DD */}
};

const CityPageContainer: React.FC<CityPageContainerProps> = ({ cityName }) => {

  const [weatherData, setWeatherData] = useState<City | null>(null);
  const [todayDate, setTodayDate] = useState<string>('');

  const fetchData = async () => {
    try {
      setTimeout(async () => {
        const response = await axios.get(`http://localhost:8000/cities?name=${cityName}`);
        if (response.data.length > 0) {
          setWeatherData(response.data[0]);
          setTodayDate(calculateCityDate(response.data[0].tzoffset));
        } else {
          console.error('Данные о погоде не найдены');
        }
      }, 0); 
    } catch (error) {
      console.error('Ошибка при получении данных о погоде:', error);
    }
  };

  useEffect(() => {
    setWeatherData(null);
    setTimeout(() => {}, 0);
    fetchData();
    const millisRemainTillNextHour = (60 - new Date().getMinutes()) * 60 * 1000 - new Date().getSeconds() * 1000 - new Date().getMilliseconds();
    const timeoutId = setTimeout(() => { {/* устанавливаем таймер до наступления следующего часа, как только он отработал, ставим интервал для запроса данных в каждый час */}
      fetchData();
      setInterval(fetchData, 60 * 60 * 1000);
    }, millisRemainTillNextHour);
    return () => clearTimeout(timeoutId); {/* обновляем всю работу таймера при смене cityName или отменяем ее при размонтировании всего компонента */}
  }, [cityName]);

  if (!weatherData) {return (<LinearPageLoader/>);} {/* в будущем надо дописать обработчик ошибок */}

  return (
    <div className={classes.cityPageContainer}>
      <SingleDayCityPreview weatherData={weatherData} todayDate={todayDate} />
      <CityWeatherAnalytics weatherData={weatherData} todayDate={todayDate} />
    </div>
  );
};

export default CityPageContainer;