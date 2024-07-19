import { Link } from 'react-router-dom';
import classes from './ErrorContainer.module.css'
import RoutingButton from '../../../components/buttons/RoutingButton/RoutingButton';
import ErrorDetailsContainer from './ErrorDetailsContainer/ErrorDetailsContainer';
import { useContext } from 'react';
import { ThemeContext } from '../../../components/themes/ThemeContext/ThemeContext';

type ErrorContainerProps = {
  cityName: string;
  errorType: string;
};

const ErrorContainer: React.FC<ErrorContainerProps> = ({ errorType, cityName }) => {

    const {darkMode} = useContext(ThemeContext);

    return (
      <>
        <ErrorDetailsContainer errorType={errorType} cityName={cityName}/>
        <div className={classes.buttonContainer}>
          <RoutingButton darkMode={darkMode}>
            <Link to="/" className={classes.routingButtonText}> Вернуться к начальной странице </Link>
          </RoutingButton>
        </div>
      </>
    );
};
  
export default ErrorContainer;