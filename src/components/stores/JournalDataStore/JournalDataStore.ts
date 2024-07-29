import { makeObservable, observable, action } from 'mobx';
import City from '../../../types/City';
import axios from 'axios';

class JournalDataStore {
    
    journalData: City | null = null;

    constructor() {
        makeObservable(this, {
            journalData: observable,
            fetchJournalData: action,
            clearJournalData: action
        });
    }

    fetchJournalData = async (cityName: string) => {
        try {
            await new Promise<void>((resolve) => {
                axios.get(`http://localhost:9000/citiesJournalData?name=${cityName}`)
                    .then((response) => {
                        if (response.data.length > 0) {
                            this.journalData = response.data[0];
                            console.log('в журнал стор загрузились данные о', cityName);
                        } else {
                            console.error('Данные о погоде JournalDataStore не найдены', cityName);
                            this.journalData = null;
                        }
                        resolve();
                    })
                    .catch((error) => {
                        console.error('Ошибка при получении данных в журнал стор:', error);
                        resolve();
                    });
            });
        } catch (error) {
            console.error('Ошибка при получении данных в журнал стор:', error);
        }
    };

    clearJournalData = () => {
        this.journalData = null;
    }
}

export default new JournalDataStore();