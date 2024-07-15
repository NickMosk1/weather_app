import classes from './MyFooter.module.css'

const MyFooter = () => {
  return (
    <div className={classes.myFooter}>
      <div className={classes.MyMeteoInfo}>
        Данные о погоде предоставлены сервисом Visual Crossing Weather исключительно для личного некоммерческого использования.
      </div>
      <div className={classes.MyMeteoInfo}> ©MyMeteo </div>
    </div>
  );
};

export default MyFooter;