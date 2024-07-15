import classes from './PreferencesContainer.module.css';
import data from './PreferenceImages/data.png';
import forecast from './PreferenceImages/forecast.png';
import journal from './PreferenceImages/journal.png';
import comfort from './PreferenceImages/comfort.png';
import Preference from './Preference/Preference';

const PreferencesContainer = () => {
    return(
        <>
            <div className={classes.preferencesContainer}>
                <Preference image={data} text={'Точные данные'}/>
                <Preference image={forecast} text={'Детальные прогнозы'}/>
                <Preference image={journal} text={'Журнал погоды'}/>
                <Preference image={comfort} text={'Удобный интерфейс'}/>
            </div>
        </>
    )
}

export default PreferencesContainer;