import { makeObservable, observable, action } from 'mobx';
import City from '../../../types/City';
import axios from 'axios';

const calculateCityDate = (tzoffset: number): string => {
    const cityTime = new Date(Date.now() + tzoffset * 3600000); 
    return cityTime.toISOString().split('T')[0]; 
};

class ForecastDataStore {
    
    forecastData: City | null = null;
    todayDate: string = '';

    constructor() {
        makeObservable(this, {
            forecastData: observable,
            todayDate: observable,
            fetchForecastData: action,
            clearForecastData: action
        });
    }

    fetchForecastData = async (cityName: string) => {
        try {
            const response = await axios.get(`http://localhost:8000/citiesForecastData?name=${cityName}`);
            if (response.data.length > 0) {
                this.forecastData = response.data[0];
                this.todayDate = calculateCityDate(response.data[0].tzoffset);
                console.log('в форкаст стор загрузились данные о', cityName);
            } else {
                console.error('Данные о погоде не найдены', cityName);
                this.forecastData = null;
                this.todayDate = '';
            }
        } catch (error) {
            console.error('Ошибка при получении данных о погоде:', error);
        }
    };
    
    clearForecastData = () => {
        this.forecastData = null;
    }
}

export default new ForecastDataStore();