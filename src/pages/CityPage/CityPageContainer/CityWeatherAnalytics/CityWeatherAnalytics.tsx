import React, { useState } from 'react';

import { Paper } from '@mui/material';

import MyCityPageChip from './MyCityPageChip/MyCityPageChip';

import City from '../../../../types/City';

import TodayScreen from './MyWeatherChipScreens/TodayScreen/TodayScreen';

interface CityWeatherAnalyticsProps{

  weatherData: City;

  todayDate: string;

}

const CityWeatherAnalytics: React.FC<CityWeatherAnalyticsProps> = ({weatherData, todayDate}) => {

  const [selectedOption, setSelectedOption] = useState('today');

  const handleChipClick = (option: string) => {

    setSelectedOption(option);

  };

  return (

    <>

      <Paper style={{ backgroundColor: 'unset', boxShadow: 'unset', padding: '16px', textAlign: 'center' }}>

        <div>

          <MyCityPageChip
            label="Сегодня"
            selected={selectedOption === 'today'}
            clickable={true}
            onClick={() => handleChipClick('today')}
          />

          <MyCityPageChip
            label="На 3 дня"
            selected={selectedOption === 'threeDays'}
            clickable={true}
            onClick={() => handleChipClick('threeDays')}
          />

          <MyCityPageChip
            label="На неделю"
            selected={selectedOption === 'week'}
            clickable={true}
            onClick={() => handleChipClick('week')}
          />

          <MyCityPageChip
            label="На 2 недели"
            selected={selectedOption === 'twoWeeks'}
            clickable={true}
            onClick={() => handleChipClick('twoWeeks')}
          />

        </div>

        <div style={{ marginTop: '16px' }}>

          {selectedOption === 'today' && <TodayScreen weatherData={weatherData} todayDate={todayDate}/>}

          {selectedOption === 'threeDays' && <div>Аналитика погоды на 3 дня вперед</div>}

          {selectedOption === 'week' && <div>Аналитика погоды на неделю вперед</div>}

          {selectedOption === 'twoWeeks' && <div>Аналитика погоды на 2 недели вперед</div>}

        </div>

      </Paper>

    </>

  );

};

export default CityWeatherAnalytics;
