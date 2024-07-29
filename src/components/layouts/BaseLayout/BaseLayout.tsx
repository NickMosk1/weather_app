import { ReactNode, useContext } from 'react';
import MyFooter from './MyFooter/MyFooter';
import MyHeader from './MyHeader/MyHeader';
import { ThemeContext } from '../../themes/ThemeContext/ThemeContext';
import styled from '@emotion/styled';

interface BaseLayoutProps {
    children: ReactNode;
}

const BaseLayout = ({ children }: BaseLayoutProps) => {
  
    const { darkMode } = useContext(ThemeContext);

    return (
        <>
            <MyHeader/>
            <MainWrapper darkMode={darkMode}>
                {children} 
            </MainWrapper>
            <MyFooter/>
        </>
    );
};

export default BaseLayout;

const MainWrapper = styled.main<{darkMode: boolean}>`
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${(props) => (props.darkMode ? "#1b1b1b" : "#fff")};
`;