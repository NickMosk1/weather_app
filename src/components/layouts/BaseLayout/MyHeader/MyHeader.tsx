import classes from './MyHeader.module.css'

const MyHeader = () => {
  return (
    <div className={classes.myHeader}>
      <div className={classes.headerContainer}>
        <div className={classes.headerItem}>MyMeteo</div>
      </div>
    </div>
  );
};

export default MyHeader;