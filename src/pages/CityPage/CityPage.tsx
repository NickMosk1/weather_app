import { useLocation } from 'react-router-dom';
import CityPageContainer from './CityPageContainer/CityPageContainer';

const CityPage = () => {
  return (
    <>  
      <CityPageContainer cityName={useLocation().state.cityName as string}/> 
    </>    
  );
};

export default CityPage;