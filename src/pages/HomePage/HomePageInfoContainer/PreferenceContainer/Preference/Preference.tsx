import classes from './Preference.module.css';

interface PreferenceProps {
  image: string;
  text: string;
}

const Preference: React.FC<PreferenceProps> = ({ image, text }) => {
  return (
    <div className={classes.preference}>
      <img src={image} alt="Preference Image" className={classes.preferenceImage}/>
      <div className={classes.preferenceTitle}> {text} </div>
    </div>
  );
};

export default Preference;