import React, { useEffect, useState } from 'react';

import axios from 'axios';

import City from '../../../types/City';

import CityPreview from './CityPreview/CItyPreview';

interface CityPageContainerProps {

  cityName: string;

}

const CityPageContainer: React.FC<CityPageContainerProps> = ({ cityName }) => {

  const [weatherData, setWeatherData] = useState<City | null>(null);

  useEffect(() => {

    const fetchData = async () => {

      try {

        const response = await axios.get(`http://localhost:8000/cities?name=${cityName}`);

        if (response.data && response.data.length > 0) {

          setWeatherData(response.data[0]);

        } else {

          console.error('Данные о погоде не найдены');

        }

      } catch (error) {

        console.error('Ошибка при получении данных о погоде:', error);

      }

    };

    fetchData();

  }, [cityName]);

  if (!weatherData) {

    return <div> Загрузка данных о погоде... </div>;

  }

  return (

    <>

      <CityPreview weatherData={weatherData}/>

    </>

  );

};

export default CityPageContainer;