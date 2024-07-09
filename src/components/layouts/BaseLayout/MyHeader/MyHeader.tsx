import Clock from './Clock/Clock';

import classes from './MyHeader.module.css'

const MyHeader = () => {

  return (

    <div className={classes.myHeader}>

      <div className={classes.headerContainer}>
          
          <div className={classes.headerItem}>

            MyMeteo

          </div>

          <Clock/>

          <div className={classes.headerItem}>
              
            Светлая

          </div>
            
      </div>

    </div>

  );

};

export default MyHeader;