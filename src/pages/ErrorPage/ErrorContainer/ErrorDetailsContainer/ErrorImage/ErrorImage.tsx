import classes from './ErrorImage.module.css';
import ErrorImagePNG from './ErrorImage.png';

const ErrorImage = () => {
    return(
        <>
            <img src={ErrorImagePNG} alt="Sad face" className={classes.errorImage}/>
        </>
    )
}

export default ErrorImage;