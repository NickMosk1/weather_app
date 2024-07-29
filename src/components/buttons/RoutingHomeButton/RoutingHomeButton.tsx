import { useContext } from 'react';
import { ReactNode, ButtonHTMLAttributes } from 'react';
import { ThemeContext } from '../../themes/ThemeContext/ThemeContext';
import ForecastDataStore from '../../stores/ForecastDataStore/ForecastDataStore';
import JournalDataStore from '../../stores/JournalDataStore/JournalDataStore';
import styled from '@emotion/styled';

interface RoutingHomeButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
}

const RoutingHomeButton: React.FC<RoutingHomeButtonProps> = ({ children }) => {
    
    const {darkMode} = useContext(ThemeContext);

    const {clearJournalData} = JournalDataStore;
    const {clearForecastData} = ForecastDataStore;

    const clearForecastAndJournalStores = (event: React.MouseEvent<HTMLButtonElement>) => {
        clearJournalData();
        clearForecastData(); //вот тут тоже мб вытащить надо?
    };
    
    return (
        <>
            <StyledRoutingHomeButton onClick={clearForecastAndJournalStores} darkMode={darkMode}> 
                {children} 
            </StyledRoutingHomeButton>
        </>
    );
};

export default RoutingHomeButton;

const StyledRoutingHomeButton = styled.button<{darkMode: boolean}>`
    color: #007bff; 
    background-color: ${(props) => (props.darkMode ? "#333333" : "#fff")};
    padding: 10px 20px;
    border: none; 
    border-radius: 15px;
    font-size: 125%;
    font-weight: 100;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 123, 255, 0.2);
    width: 'fit-content';
    height: 'fit-content';
    cursor: pointer;
    transition: box-shadow 0.3s ease, transform 0.3s ease, color 0.3s ease, background-color 0.3s ease;

    &:hover {
        box-shadow: 0 6px 12px rgba(0, 123, 255, 0.3);
        color: ${(props) => (props.darkMode ? "#fff" : "#dddddd")};
        background-color: #007bff; 
        transform: scale(1.1); 
    }
`;