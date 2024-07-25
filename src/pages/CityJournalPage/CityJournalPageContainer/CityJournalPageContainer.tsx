import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper } from "@mui/material";
import MyChipBar from "../../../components/other/MyChipBar/MyChipBar";
import JournalRangeScreen from "./JournalScreens/JournalRangeScreen";
import SingleDayScreen from "./JournalScreens/SingleDayScreen";
import JournalDataStore from "../../../components/stores/JournalDataStore/JournalDataStore";
import classes from './CityJournalPageContainer.module.css';
import { observer } from "mobx-react";

interface ChipData {
  label: string;
  value: string;
}

const CityJournalPageContainer = observer(() => {
  
  const [selectedOption, setSelectedOption] = useState<string>('singleDay');
  const {weatherData} = JournalDataStore;
  const navigate = useNavigate();
  
  useEffect(() => {
    if (selectedOption === 'backToForecast' && weatherData !== null) {
      const cityName = weatherData.name;
      navigate(`/cityForecast`, { state: { cityName } });
    }
  }, [selectedOption]);

  const chips: ChipData[] = [
    { label: 'Данные конкретной даты', value: 'singleDay' },
    { label: 'Аналитика диапазона', value: 'journalRange' },
    { label: 'Обратно к прогнозу', value: 'backToForecast' }
  ];

  return (
    <div className={classes.cityJournalPageContainer}>
      <Paper style={{ backgroundColor: 'unset', boxShadow: 'unset', textAlign: 'center' }}>
        <MyChipBar selectedOption={selectedOption} setSelectedOption={setSelectedOption} chips={chips} />
        <>
          {selectedOption === 'singleDay' && <SingleDayScreen/>}
          {selectedOption === 'journalRange' && <JournalRangeScreen/>}
        </>
      </Paper>
    </div>
  );
});

export default CityJournalPageContainer;