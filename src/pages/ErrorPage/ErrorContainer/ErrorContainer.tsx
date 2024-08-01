import { useNavigate } from 'react-router-dom';
import RoutingButton from '../../../components/buttons/RoutingButton/RoutingButton';
import ErrorDetailsContainer from './ErrorDetailsContainer/ErrorDetailsContainer';
import styled from '@emotion/styled';

type ErrorTypes = 'cityIsNotFound' | 'dateDataIsNotFound' | 'incorrectInput';

interface ErrorContainerProps{
    additionalData: string;
    errorType: ErrorTypes;
};

const ErrorContainer: React.FC<ErrorContainerProps> = ({ errorType, additionalData }) => {

    const navigate = useNavigate();

    const routeToHomePage = () => { 
        window.scrollTo({ top: 0, behavior: 'smooth' });
        navigate(`/`);
    }

    return (
        <ErrorContainerWrapper>
            <ErrorDetailsContainer errorType={errorType} additionalData={additionalData}/>
            <ButtonContainer>
                <RoutingButton routeFunc={routeToHomePage}> Вернуться к начальной странице </RoutingButton>
            </ButtonContainer>
        </ErrorContainerWrapper>
    );
};
  
export default ErrorContainer;

const ButtonContainer = styled.div`
    margin-top: 40px;
    margin-bottom: 80px;
`;

const ErrorContainerWrapper = styled.div`
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70%;
`;