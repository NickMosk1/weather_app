
import classes from './CityPage.module.css'

import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

const CityPage = () => {

  const { cityName } = useParams();

  const [cityData, setCityData] = useState(null);

  useEffect(() => {

    fetch(`http://localhost:3000/${cityName}`)

      .then((response) => response.json())

      .then((data) => setCityData(data))

      .catch((error) => console.error('Ошибка:', error));

  }, [cityName]);

  return (

    <div>


      data 


    </div>

  );

};

export default CityPage;