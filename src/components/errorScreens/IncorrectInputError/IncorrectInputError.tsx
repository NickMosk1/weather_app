import { useContext } from 'react';
import IncorrectInputErrorImage from './IncorrectInputErrorImage/IncorrectInputErrorImage.png';
import { ThemeContext } from '../../themes/ThemeContext/ThemeContext';
import styled from '@emotion/styled';

interface IncorrectInputErrorProps{
    additionalData: string;
}

const IncorrectInputError: React.FC<IncorrectInputErrorProps> = ({ additionalData }) => {

    const {darkMode} = useContext(ThemeContext);

    return(
        <IncorrectInputErrorWrapper>
            <ErrorMessage> Чел ааа, данные ввода некорректны! </ErrorMessage>
            <ErrorImage src={IncorrectInputErrorImage} alt="IncorrectInput"/>
            <ErrorMessageDetails darkMode={darkMode}> 
                Время не может идти вспять. <br/> Перепроверьте точность выбранных границ диапазона {additionalData}. 
            </ErrorMessageDetails>
        </IncorrectInputErrorWrapper>
    );
}

export default IncorrectInputError;

const IncorrectInputErrorWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ErrorMessage = styled.div`
    margin-top: 40px;
    margin-bottom: 40px;
    color: #007bff;
    font-size: 300%;
    font-weight: 900;
    text-align: center;
`;

const ErrorImage = styled.img`
    width: 250px;
    height: 250px;
    margin-top: 40px;
    margin-bottom: 40px;
`;

const ErrorMessageDetails = styled.div<{darkMode: boolean}>`
    margin-top: 40px;
    margin-bottom: 40px;
    color: ${(props) => (props.darkMode ? "#bbbbbb" : "#333")};
    font-weight: 100;
    font-size: 130%;
    text-align: center;
`;