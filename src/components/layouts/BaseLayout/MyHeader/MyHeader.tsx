import { ThemeContext } from '../../../themes/ThemeContext/ThemeContext';
import { useContext } from 'react';
import DayNightThemeSwitch from '../../../switches/DayNightThemeSwitch/DayNightThemeSwitch';
import styled from '@emotion/styled';

const MyHeader = () => {
  
    const { darkMode, toggleDarkMode } = useContext(ThemeContext);

    return (
        <MyHeaderWrapper darkMode={darkMode}>
            <HeaderContainer>
                <HeaderItem darkMode={darkMode}> MyMeteo </HeaderItem>
                <DayNightThemeSwitch checked={darkMode} onChange={toggleDarkMode}/>
            </HeaderContainer>
        </MyHeaderWrapper>
    );
};

export default MyHeader;

const MyHeaderWrapper = styled.div<{darkMode: boolean}>`
    background-color: ${(props) => (props.darkMode ? "#333333" : "#007bff")};
    color: #fff;
    width: 100%;
    height: fit-content;
    padding-top: 20px;
    padding-bottom: 20px;
`;

const HeaderContainer= styled.div`
    margin-left: 15%;
    margin-right: 15%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const HeaderItem = styled.div<{darkMode: boolean}>`
    color: ${(props) => (props.darkMode ? "#007bff" : "#fff")};
    font-weight: 900;
    font-size: 300%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;