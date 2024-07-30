import { makeObservable, observable, action } from 'mobx';
import City from '../../types/City';
import axios from 'axios';

const saveJournalInputToLocalStorage = (inputData: string) => {
    let prevJournalInputs = JSON.parse(localStorage.getItem("prevJournalInputs") || "[]");
    const index = prevJournalInputs.indexOf(inputData);
    if (index !== -1) {
        prevJournalInputs.splice(index, 1);
    }
    prevJournalInputs.unshift(inputData);
    if (prevJournalInputs.length > 5) { 
        prevJournalInputs = prevJournalInputs.slice(0, 5);
    }
    localStorage.setItem("prevJournalInputs", JSON.stringify(prevJournalInputs));
}

class JournalDataStore {
    
    journalData: City | null = null;
    isLoading: boolean = false;

    constructor() {
        makeObservable(this, {
            journalData: observable,
            isLoading: observable,
            fetchJournalData: action,
            // clearJournalData: action
        });
    }

    fetchJournalData = async (cityName: string) => {
        this.isLoading = true;
        try {
            await new Promise<void>((resolve) => {
                setTimeout(() => {
                    axios.get(`http://localhost:9000/citiesJournalData?name=${cityName}`)
                        .then((response) => {
                            if (response.data.length > 0) {
                                this.journalData = response.data[0];
                                saveJournalInputToLocalStorage(cityName);
                                console.log('в журнал стор загрузились данные о', cityName);
                            } else {
                                console.error('Данные о погоде JournalDataStore не найдены', cityName);
                                this.journalData = null;
                            }
                            this.isLoading = false;
                            resolve();
                        })
                        .catch((error) => {
                            console.error('Ошибка при получении данных в журнал стор:', error);
                            this.isLoading = false;
                            resolve();
                        });
                }, 1000); // Искусственная задержка в 1 секунду
            });
        } catch (error) {
            console.error('Ошибка при получении данных в журнал стор:', error);
            this.isLoading = false;
        }
    };

    // clearJournalData = () => {
    //     this.journalData = null;
    // }
}

export default new JournalDataStore();