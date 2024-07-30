import { useContext } from 'react';
import { ThemeContext } from '../../../themes/ThemeContext/ThemeContext';
import styled from '@emotion/styled';

const MyFooter = () => {

    const { darkMode } = useContext(ThemeContext);
    
    return (
        <MyFooterWrapper darkMode={darkMode}>
            <MyMeteoInfo darkMode={darkMode}>
                Данные о погоде предоставлены сервисом Visual Crossing Weather исключительно для личного некоммерческого использования. <br/> ©MyMeteo 
            </MyMeteoInfo>
        </MyFooterWrapper>
    );
};

export default MyFooter;

const MyFooterWrapper = styled.div<{darkMode: boolean}>`
    background-color: ${(props) => (props.darkMode ? "#222222" : "#f8f9fa")};
    text-align: center;
    height: fit-content;
    padding-top: 20px;
    padding-bottom: 20px;
`;

const MyMeteoInfo = styled.div<{darkMode: boolean}>`
    color: ${(props) => (props.darkMode ? "#bbbbbb" : "#333")};
    font-weight: 300;
    font-size: 100%;
`;