import classes from './ErrorImage.module.css';
import CityNotFoundErrorImage from './CityNotFoundErrorImage.png';

const ErrorImage = () => {
    return(
        <>
            <img src={CityNotFoundErrorImage} alt="Sad face" className={classes.errorImage}/>
        </>
    )
}

export default ErrorImage;