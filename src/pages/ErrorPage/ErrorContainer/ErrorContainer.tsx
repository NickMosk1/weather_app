import { Link } from 'react-router-dom';
import ErrorDetailsContainer from './ErrorDetailsContainer/ErrorDetailsContainer';
import RoutingHomeButton from '../../../components/buttons/RoutingHomeButton/RoutingHomeButton';
import styled from '@emotion/styled';
import PrevInputLSButtonContainer from '../../../components/routingContainers/PrevInputLSButtonContainer/PrevInputLSButtonContainer';

type ErrorTypes = 'cityIsNotFound' | 'dateDataIsNotFound' | 'incorrectInput';

interface ErrorContainerProps{
    additionalData: string;
    errorType: ErrorTypes;
};

const ErrorContainer: React.FC<ErrorContainerProps> = ({ errorType, additionalData }) => {
    return (
        <ErrorContainerWrapper>
            <ErrorDetailsContainer errorType={errorType} additionalData={additionalData}/>
            <ButtonContainer>
                <RoutingHomeButton>
                    <Link to="/" style={{textDecoration: "none", color: "inherit"}}> Вернуться к начальной странице </Link> {/* по другому не получается стилиховать :( */}
                </RoutingHomeButton>
            </ButtonContainer>
            <PrevInputLSButtonContainer recordShown={3}/>
        </ErrorContainerWrapper>
    );
};
  
export default ErrorContainer;

const ButtonContainer = styled.div`
    margin-top: 40px;
`;

const ErrorContainerWrapper = styled.div`
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70%;
`;