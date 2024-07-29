import { useContext } from 'react';
import CityIsNotFoundErrorImage from './CityIsNotFoundErrorImage/CityIsNotFoundErrorImage.png';
import { ThemeContext } from '../../themes/ThemeContext/ThemeContext';
import styled from '@emotion/styled';

interface CityIsNotFoundErrorProps{
    additionalData: string;
}

const CityIsNotFoundError: React.FC<CityIsNotFoundErrorProps> = ({additionalData}) => {

    const {darkMode} = useContext(ThemeContext);

    return(
        <CityIsNotFoundErrorWrapper>
            <ErrorMessage> Упс... Кажется, данных о погоде <br/> в городе {additionalData} у нас нет! </ErrorMessage>
            <ErrorImage src={CityIsNotFoundErrorImage} alt="CityNotFound"/>
            {darkMode ? 
            <DarkModeErrorMessageDetails> Возможно, такого города не существует. <br/> Попробуйте исправить поисковой запрос. </DarkModeErrorMessageDetails> 
            : 
            <ErrorMessageDetails> Возможно, такого города не существует. <br/> Попробуйте исправить поисковой запрос. </ErrorMessageDetails>}
        </CityIsNotFoundErrorWrapper>
    );
}

export default CityIsNotFoundError;

const CityIsNotFoundErrorWrapper = styled.div`
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