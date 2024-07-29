import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../themes/ThemeContext/ThemeContext';
import ForecastDataStore from '../../stores/ForecastDataStore/ForecastDataStore';
import styled from '@emotion/styled';

interface PrevInputLSButtonProps{
    itemData: string;
}

const PrevInputLSButton: React.FC<PrevInputLSButtonProps> = ({itemData}) => {

    const {darkMode} = useContext(ThemeContext);
    const {fetchForecastData} = ForecastDataStore;

    const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        fetchForecastData(itemData); //вот это вытащить на пейджу, надо повысить абстракцию
    };
    
    return (
        <>
            {itemData !== "notFound"? 
            <StyledPrevInputLSButton onClick={buttonHandler} darkMode={darkMode}>
                <Link style={{textDecoration: "none", color: "inherit"}} to="/cityForecast" state={{ cityName: itemData }}> {itemData} </Link>
            </StyledPrevInputLSButton>
            : 
            <></>} 
        </>
    )
}

export default PrevInputLSButton;

const StyledPrevInputLSButton = styled.button<{darkMode: boolean}>`
    color: #007bff;
    background-color: ${(props) => (props.darkMode ? '#333333' : '#fff')};
    padding: 15px 20px;
    border-style: solid;
    border-width: 1px;
    border-color: #007bff;
    border-radius: 15px;
    margin-left: 10px;
    margin-right: 10px;
    font-size: 125%;
    font-weight: 100;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 123, 255, 0.2);
    width: fit-content;
    height: fit-content;
    cursor: pointer;
    transition: box-shadow 0.3s ease, transform 0.3s ease, color 0.3s ease, background-color 0.3s ease;

    &:hover {
        box-shadow: 0 6px 12px rgba(0, 123, 255, 0.3);
        color: ${(props) => (props.darkMode ? '#dddddd' : '#fff')};
        background-color: #007bff;
        transform: scale(1.1);
    }
`;