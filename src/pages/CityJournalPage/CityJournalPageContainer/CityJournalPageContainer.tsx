import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper } from "@mui/material";
import MyChipBar from "../../../components/other/MyChipBar/MyChipBar";
import JournalRangeScreen from "./JournalScreens/JournalRangeScreen";
import WeatherStore from "../../../components/stores/WeatherStore/WeatherStore";
import LinearPageLoader from "../../../components/pageLoaders/LinearPageLoader/LinearPageLoader";
import classes from './CityJournalPageContainer.module.css';
import SingleDayScreen from "./JournalScreens/SingleDayScreen";

interface ChipData {
  label: string;
  value: string;
}

const CityJournalPageContainer = () => {
  
  const [selectedOption, setSelectedOption] = useState<string>('singleDay');
  const { weatherData } = WeatherStore;
  const navigate = useNavigate();
  
  useEffect(() => {
    if (selectedOption === 'backToForecast' && weatherData !== null) {
      const cityName = weatherData.name;
      navigate(`/city`, { state: { cityName } });
    }
  }, [selectedOption]);

  const chips: ChipData[] = [
    { label: 'Данные конкретной даты', value: 'singleDay' },
    { label: 'Аналитика диапазона', value: 'journalRange' },
    { label: 'Обратно к прогнозу', value: 'backToForecast' }
  ];
  
  if (!weatherData) {return (<LinearPageLoader/>);} 

  return (
    <div className={classes.cityJournalPageContainer}>
      <Paper style={{ backgroundColor: 'unset', boxShadow: 'unset', textAlign: 'center' }}>
        <MyChipBar selectedOption={selectedOption} setSelectedOption={setSelectedOption} chips={chips} />
        <div >
          {selectedOption === 'singleDay' && <SingleDayScreen/>}
          {selectedOption === 'journalRange' && <JournalRangeScreen/>}
        </div>
      </Paper>
    </div>
  );
};

export default CityJournalPageContainer;