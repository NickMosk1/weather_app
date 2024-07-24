import { makeObservable, observable, action } from 'mobx';
import City from '../../../types/City';
import axios from 'axios';

const calculateCityDate = (tzoffset: number): string => {
  return '2024-07-07';
};

class WeatherStore {
  weatherData: City | null = null;
  todayDate: string = '';

  constructor() {
    makeObservable(this, {
      weatherData: observable,
      todayDate: observable,
      fetchData: action
    });
  }

  fetchData = async (cityName: string) => {
    try {
      setTimeout(async () => {
        const response = await axios.get(`http://localhost:9000/citiesPastData?name=${cityName}`);
        if (response.data.length > 0) {
          this.weatherData = response.data[0];
          this.todayDate = calculateCityDate(response.data[0].tzoffset);
        } else {
          console.error('Данные о погоде не найдены', cityName);
          this.weatherData = null;
          this.todayDate = '';
        }
      }, 0);
    } catch (error) {
      console.error('Ошибка при получении данных о погоде:', error);
    }
  };
}

export default new WeatherStore();