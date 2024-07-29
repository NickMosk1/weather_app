import { useContext } from 'react';
import SearchCityInput from '../../forms/Inputs/SearchCityInput/SearchCityInput';
import { ThemeContext } from '../../themes/ThemeContext/ThemeContext';
import styled from '@emotion/styled';

const CityRoutingContainer = () => {

    const {darkMode} = useContext(ThemeContext);

    return (
        <CityRoutingContainerWrapper>
            <CityRoutingContainerTitle>
                Хотите узнать, какая погода в других уголках мира?
            </CityRoutingContainerTitle>
            <CityRoutingContainerDetails darkMode={darkMode}>
                Не упустите возможность исследовать погоду в самых интересных городах планеты! <br/>
                Узнайте, как одеваться в Лондоне, планируйте отпуск в Париже или просто посмотрите, как солнечно в Дубае. <br/>
                Введите название города в поисковую строку и отправляйтесь в увлекательное путешествие по погодным условиям разных городов! <br/>
                Попробуйте прямо сейчас! <br/>
                Бесплатно!
            </CityRoutingContainerDetails>
            <SearchCityInputContainer>
                <SearchCityInput placeholder="Введите название города"/>
            </SearchCityInputContainer>
        </CityRoutingContainerWrapper>
    );
};

export default CityRoutingContainer;

const CityRoutingContainerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 80px;
`;

const CityRoutingContainerTitle = styled.div`
    color: #007bff;
    font-weight: 900;
    font-size: 200%;
    text-align: center;
    margin-top: 40px;
    margin-bottom: 40px;
`;

const CityRoutingContainerDetails = styled.div<{darkMode: boolean}>`
    color: ${(props) => (props.darkMode ? '#bbbbbb' : '#333')};
    font-weight: 100;
    font-size: 135%;
    text-align: center;
    margin-bottom: 40px;
    margin-top: 40px;
`;

const SearchCityInputContainer = styled.div`
    margin-top: 40px;
    width: 20%;
`;