import classes from './HomePageInfoDetails.module.css';

interface HomePageInfoDetailsProps{
    textDetails: string;
}

const HomePageInfoDetails: React.FC<HomePageInfoDetailsProps> = ({textDetails}) => {
    return (
        <>
            <div className={classes.homePageInfoDetails}> {textDetails} </div>
        </>
    );
};
  
export default HomePageInfoDetails;