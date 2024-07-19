import { ThemeContext } from '../../../themes/ThemeContext/ThemeContext';
import { useContext } from 'react';
import DayNightThemeSwitch from '../../../switches/DayNightThemeSwitch/DayNightThemeSwitch';
import classes from './MyHeader.module.css';

const MyHeader = () => {
  
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <div className={`${classes.myHeader} ${darkMode ? classes['myHeader--dark'] : ''}`}>
      <div className={classes.headerContainer}>
        <div className={`${classes.headerItem} ${darkMode ? classes['headerItem--dark'] : ''}`}>MyMeteo</div>
        <DayNightThemeSwitch checked={darkMode} onChange={toggleDarkMode} />
      </div>
    </div>
  );
};

export default MyHeader;
