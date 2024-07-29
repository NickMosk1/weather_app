import { useLocation } from 'react-router-dom';
import CityForecastPageContainer from './CityForecastPageContainer/CityForecastPageContainer';

const CityForecastPage = () => {
    return (
        <>  
            <CityForecastPageContainer cityName={useLocation().state.cityName as string}/> 
        </>    
    );
};

export default CityForecastPage;