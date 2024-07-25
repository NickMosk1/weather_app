import ErrorContainer from "./ErrorContainer/ErrorContainer";
import { useLocation } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <>
      <ErrorContainer errorType={useLocation().state.errorType} additionalData={useLocation().state.additionalData}/> 
    </>    
  );
};

export default ErrorPage;