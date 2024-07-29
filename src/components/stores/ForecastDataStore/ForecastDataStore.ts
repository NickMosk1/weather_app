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
        try{
            await new Promise<void>((resolve) => (
                axios.get(`http://localhost:8000/citiesForecastData?name=${cityName}`)
                    .then((response) => {
                        if (response.data.length > 0) {
                            this.forecastData = response.data[0];
                            this.todayDate = calculateCityDate(response.data[0].tzoffset);
                            console.log('в форкаст стор загрузились данные о', cityName);
                        } else {
                            console.error('Данные о погоде ForecastDataStore не найдены', cityName);
                            this.forecastData = null;
                        }
                        resolve();
                    })
                    .catch((error) => {
                        console.error('Ошибка при получении данных в журнал стор:', error);
                        resolve();
                    })
            ))
        } catch (error) {
            console.error('Ошибка при получении данных в форкаст стор:', error);
        }
    }

    clearForecastData = () => {
        this.forecastData = null;
    }
}

export default new ForecastDataStore();