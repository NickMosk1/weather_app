import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper } from "@mui/material";
import MyChipBar from "../../../components/other/MyChipBar/MyChipBar";
import JournalRangeScreen from "./JournalScreens/JournalRangeScreen";
import WeatherStore from "../../../components/stores/WeatherStore/WeatherStore";
import LinearPageLoader from "../../../components/pageLoaders/LinearPageLoader/LinearPageLoader";

interface ChipData {
  label: string;
  value: string;
}

const CityJournalPageContainer = () => {
  
  const [selectedOption, setSelectedOption] = useState<string>('journalRange');
  
  const { weatherData, todayDate } = WeatherStore;

  const navigate = useNavigate();
  
  useEffect(() => {
    if (selectedOption === 'backToForecast' && weatherData !== null) {
      const cityName = weatherData.name;
      navigate(`/city`, { state: { cityName } });
    }
  }, [selectedOption]);

  const chips: ChipData[] = [
    { label: 'Аналитика диапазона', value: 'journalRange' },
    { label: 'Данные конкретной даты', value: 'singleDay' },
    { label: 'Обратно к прогнозу', value: 'backToForecast' }
  ];
  
  if (!weatherData) {return (<LinearPageLoader/>);} 

  return (
    <>
      <Paper style={{ backgroundColor: 'unset', boxShadow: 'unset', textAlign: 'center' }}>
        <MyChipBar selectedOption={selectedOption} setSelectedOption={setSelectedOption} chips={chips} />
        <div >
          {selectedOption === 'journalRange' && <JournalRangeScreen/>}
          {selectedOption === 'singleDay' && <div>один день</div>}
          {selectedOption === 'backToForecast' && <div>вернуться назад на страницу форкаста</div>}
        </div>
      </Paper>
    </>
  );
};

export default CityJournalPageContainer;