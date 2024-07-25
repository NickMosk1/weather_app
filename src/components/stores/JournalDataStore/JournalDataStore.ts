import { makeObservable, observable, action } from 'mobx';
import City from '../../../types/City';
import axios from 'axios';

class JournalDataStore {
  
  weatherData: City | null = null;

  constructor() {
    makeObservable(this, {
      weatherData: observable,
      fetchData: action
    });
  }

  fetchData = async (cityName: string) => {
    try {
      setTimeout(async () => {
        const response = await axios.get(`http://localhost:9000/citiesJournalData?name=${cityName}`);
        if (response.data.length > 0) {
          this.weatherData = response.data[0];
        } else {
          console.error('Данные о погоде не найдены', cityName);
          this.weatherData = null;
        }
      }, 0);
    } catch (error) {
      console.error('Ошибка при получении данных о погоде:', error);
    }
  };
}

export default new JournalDataStore();