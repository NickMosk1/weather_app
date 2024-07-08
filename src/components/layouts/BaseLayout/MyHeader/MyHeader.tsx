import classes from './MyHeader.module.css'

const MyHeader = () => {

  return (

    <div className={classes.myHeader}>

      <div className={classes.headerContainer}>
          
          <div className={classes.logo}>
              
            MyMeteo

          </div>

          <div className={classes.themeBrightnessToggle}>
              
            b/d

          </div>
            
      </div>

    </div>

  );

};

export default MyHeader;