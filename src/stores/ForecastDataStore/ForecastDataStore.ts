import { makeObservable, observable, action } from 'mobx';
import City from '../../types/City';
import axios from 'axios';

const calculateCityDate = (tzoffset: number): string => {
    const cityTime = new Date(Date.now() + tzoffset * 3600000); 
    return cityTime.toISOString().split('T')[0]; 
};

const saveForecastInputToLocalStorage = (inputData: string) => {
    let prevForecastInputs = JSON.parse(localStorage.getItem("prevForecastInputs") || "[]");
    const index = prevForecastInputs.indexOf(inputData);
    if (index !== -1) {
        prevForecastInputs.splice(index, 1);
    }
    prevForecastInputs.unshift(inputData);
    if (prevForecastInputs.length > 5) { 
        prevForecastInputs = prevForecastInputs.slice(0, 5);
    }
    localStorage.setItem("prevForecastInputs", JSON.stringify(prevForecastInputs));
}

class ForecastDataStore {
    
    forecastData: City | null = null;
    isLoading: boolean = false;
    todayDate: string = '';

    constructor() {
        makeObservable(this, {
            forecastData: observable,
            todayDate: observable,
            isLoading: observable,
            fetchForecastData: action,
            // clearForecastData: action
        });
    }

    fetchForecastData = async (cityName: string) => {
        this.isLoading = true;
        try {
            await new Promise<void>((resolve) => {
                setTimeout(() => {
                    axios.get(`http://localhost:8000/citiesForecastData?name=${cityName}`)
                        .then((response) => {
                            if (response.data.length > 0) {
                                this.forecastData = response.data[0];
                                this.todayDate = calculateCityDate(response.data[0].tzoffset);
                                saveForecastInputToLocalStorage(cityName);
                                console.log('в форкаст стор загрузились данные о', cityName);
                            } else {
                                console.error('Данные о погоде ForecastDataStore не найдены', cityName);
                                this.forecastData = null;
                            }
                            this.isLoading = false;
                            resolve();
                        })
                        .catch((error) => {
                            console.error('Ошибка при получении данных в журнал стор:', error);
                            this.isLoading = false;
                            resolve();
                        })
                }, 1000); // Искусственная задержка в 1 секунду
            });
        } catch (error) {
            console.error('Ошибка при получении данных в форкаст стор:', error);
            this.isLoading = false;
        }
    }

    // clearForecastData = () => {
    //     this.forecastData = null;
    // }
}

export default new ForecastDataStore();