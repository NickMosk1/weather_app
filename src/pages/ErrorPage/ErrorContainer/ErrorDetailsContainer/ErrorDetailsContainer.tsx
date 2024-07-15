import ErrorImage from './ErrorImage/ErrorImage';
import classes from './ErrorDetailsContainer.module.css';

type ErrorDetailsContainerProps = {
    cityName: string;
    errorType: string;
};
  
const ErrorDetailsContainer: React.FC<ErrorDetailsContainerProps> = ({ errorType, cityName }) => {
    return (
        <> {/* в зависимости от значения errorType сообщение и детали ниже будут разными */}
            <div className={classes.errorMessage}> Упс... Кажется, данных о погоде <br/> в городе {cityName} у нас нет. </div>
            <ErrorImage/>
            <div className={classes.errorMessageDetails}> Возможно, такого города не существует. Попробуйте исправить поисковой запрос. </div>
        </>
    );
};
  
export default ErrorDetailsContainer;