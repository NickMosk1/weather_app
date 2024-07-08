
import classes from './SingleDayPage.module.css'

const SingleDayPage = () => {

  return (
    <>

      <div className={classes.geographyDetails}>

        <div className={classes.resolvedAddress}>

          London, England, United Kingdom

        </div>

        <div className={classes.weatherTodayQuote}>

          Погода в London на 07.07.2024

        </div>

      </div>

      <div className={classes.byHourTempDetails}>
        температура по часам, чарты из mui
      </div>

      <div className={classes.sunRiseSunSetDetails}>
        данные о восходе и заходе
      </div>
      
    </>

  );

};

export default SingleDayPage;