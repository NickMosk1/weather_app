import { useContext } from 'react';
import DateDataIsNotFoundErrorImage from './DateDataIsNotFoundErrorImage/DateDataIsNotFoundErrorImage.png';
import { ThemeContext } from '../../themes/ThemeContext/ThemeContext';
import styled from '@emotion/styled';

interface DateDataIsNotFoundErrorProps{
    additionalData: string;
}

const DateDataIsNotFoundError: React.FC<DateDataIsNotFoundErrorProps> = ({additionalData}) => {

    const {darkMode} = useContext(ThemeContext);

    return(
        <DateDataIsNotFoundErrorWrapper>
            <ErrorMessage> Упс... Кажется, данных о погоде <br/> за выбранный период у нас нет! </ErrorMessage>
            <ErrorImage src={DateDataIsNotFoundErrorImage} alt="DateDataIsNotFound"/>
            {darkMode ? 
            <DarkModeErrorMessageDetails> В скором времени постараемся <br/> снабдить вас погодными данными {additionalData}. </DarkModeErrorMessageDetails> 
            : 
            <ErrorMessageDetails> В скором времени постараемся <br/> снабдить вас погодными данными {additionalData}. </ErrorMessageDetails>}
        </DateDataIsNotFoundErrorWrapper>
    );
}

export default DateDataIsNotFoundError;

const DateDataIsNotFoundErrorWrapper = styled.div`
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