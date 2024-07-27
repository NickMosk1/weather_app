import { Link } from 'react-router-dom';
import classes from './ErrorContainer.module.css'
import RoutingButton from '../../../components/buttons/RoutingButton/RoutingButton';
import ErrorDetailsContainer from './ErrorDetailsContainer/ErrorDetailsContainer';

type ErrorTypes = 'cityIsNotFound' | 'dateDataIsNotFound' | 'incorrectInput';

interface ErrorContainerProps{
  additionalData: string;
  errorType: ErrorTypes;
};

const ErrorContainer: React.FC<ErrorContainerProps> = ({ errorType, additionalData }) => {
    return (
      <div className={classes.errorContainer}>
        <ErrorDetailsContainer errorType={errorType} additionalData={additionalData}/>
        <div className={classes.buttonContainer}>
          <RoutingButton>
            <Link to="/" className={classes.routingButtonText}> Вернуться к начальной странице </Link>
          </RoutingButton>
        </div>
      </div>
    );
};
  
export default ErrorContainer;