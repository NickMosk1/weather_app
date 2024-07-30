import { useLocation } from 'react-router-dom';
import CityJournalPageContainer from './CityJournalPageContainer/CityJournalPageContainer';

const CityJournalPage = () => {
    return (
        <>  
            <CityJournalPageContainer cityName={useLocation().state.cityName as string}/> 
        </>    
    );
};

export default CityJournalPage;