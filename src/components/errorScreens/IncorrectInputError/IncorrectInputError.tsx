import { useContext } from 'react';
import IncorrectInputErrorImage from './IncorrectInputErrorImage/IncorrectInputErrorImage.png';
import { ThemeContext } from '../../themes/ThemeContext/ThemeContext';
import styled from '@emotion/styled';

interface IncorrectInputErrorProps{
    additionalData: string;
}

const IncorrectInputError: React.FC<IncorrectInputErrorProps> = ({additionalData}) => {

    const {darkMode} = useContext(ThemeContext);

    return(
        <IncorrectInputErrorWrapper>
            <ErrorMessage> Чел ааа, данные ввода некорректны! </ErrorMessage>
            <ErrorImage src={IncorrectInputErrorImage} alt="IncorrectInput"/>
            {darkMode ? 
            <DarkModeErrorMessageDetails> Время не может идти вспять. <br/> Перепроверьте точность выбранных границ диапазона {additionalData}. </DarkModeErrorMessageDetails> 
            : 
            <ErrorMessageDetails> Время не может идти вспять. <br/> Перепроверьте точность выбранных границ диапазона {additionalData}. </ErrorMessageDetails>}
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
    margin-top: 30px;
    margin-bottom: 45px;
    color: #007bff;
    font-size: 300%;
    font-weight: 900;
    text-align: center;
`;

const ErrorImage = styled.img`
    width: 250px;
    height: 250px;
    margin-top: 30px;
    margin-bottom: 30px;
`;

const ErrorMessageDetails = styled.div`
    margin-top: 45px;
    margin-bottom: 30px;
    color: #333;
    font-weight: 100;
    font-size: 130%;
    text-align: center;
`;

const DarkModeErrorMessageDetails = styled(ErrorMessageDetails)`
    color: #bbbbbb;
`;