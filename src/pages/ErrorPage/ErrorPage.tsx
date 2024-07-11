import ErrorContainer from "./ErrorContainer/ErrorContainer";

import { useLocation } from 'react-router-dom';

const ErrorPage = () => {

  return (

    <>  

      <ErrorContainer errorType={useLocation().state.errorType as string} cityName={useLocation().state.cityName as string}/> 

    </>    
    
  );

};

export default ErrorPage;