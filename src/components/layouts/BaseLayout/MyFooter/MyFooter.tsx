import { useContext } from 'react';
import { ThemeContext } from '../../../themes/ThemeContext/ThemeContext';
import classes from './MyFooter.module.css'

const MyFooter = () => {

  const { darkMode } = useContext(ThemeContext);
  
  return (
    <div className={`${classes.myFooter} ${darkMode && classes['myFooter--dark']}`}>
      <div className={`${classes.myMeteoInfo} ${darkMode && classes['myMeteoInfo--dark']}`}>
        Данные о погоде предоставлены сервисом Visual Crossing Weather исключительно для личного некоммерческого использования. <br/> ©MyMeteo 
      </div>
    </div>
  );
};

export default MyFooter;