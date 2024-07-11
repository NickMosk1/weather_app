import { Link } from 'react-router-dom';

import classes from './ErrorContainer.module.css'

import RoutingButton from '../../../components/buttons/RoutingButton/RoutingButton';

import ErrorDetailsContainer from './ErrorDetailsContainer/ErrorDetailsContainer';

type ErrorContainerProps = {

  cityName: string;

  errorType: string;

};

const ErrorContainer: React.FC<ErrorContainerProps> = ({ errorType, cityName }) => {

    return (
  
      <>

        <ErrorDetailsContainer errorType={errorType} cityName={cityName}/>

        <div className={classes.buttonContainer}>

          <RoutingButton>

            <Link to="/" className={classes.routingButtonText}>

              Вернуться к начальной странице
            
            </Link>
            
          </RoutingButton>
        
        </div>

      </>
  
    );
  
};
  
export default ErrorContainer;