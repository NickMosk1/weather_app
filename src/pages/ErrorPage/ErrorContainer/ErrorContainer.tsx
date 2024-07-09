import { Link } from 'react-router-dom';

import classes from './ErrorContainer.module.css'

import sadFace from './ErrorImages/sadFace.png'

import RoutingButton from '../../../components/buttons/RoutingButton/RoutingButton';

const ErrorContainer = () => {

    return (
  
      <div className={classes.messageContainer}>

        <div className={classes.errorMessage}>
          
          Упс... Кажется, данных о погоде в таком городе у нас нет. 
          
        </div>

        <img src={sadFace} alt="Sad face" className={classes.sadFaceImage}/>

        <div className={classes.errorMessageDetails}>
          
          Возможно, такого города не существует. Попробуйте исправить поисковой запрос.
          
        </div>

        <div className={classes.errorMessageDetails}>
          
          Ну или изучите погоду в London New-York San-Francisko
          
        </div>

        <div className={classes.buttonContainer}>

          <RoutingButton>

            <Link to="/" className={classes.routingButtonText}>

              Вернуться к начальной странице
            
            </Link>
            
          </RoutingButton>
        
        </div>

      </div>
  
    );
  
  };
  
  export default ErrorContainer;