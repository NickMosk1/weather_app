import { useContext } from 'react';
import { ReactNode, ButtonHTMLAttributes } from 'react';
import { ThemeContext } from '../../themes/ThemeContext/ThemeContext';
import styled from '@emotion/styled';

interface RoutingButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    routeFunc: () => void;
}

const RoutingButton: React.FC<RoutingButtonProps> = ({ children, routeFunc}) => {
    
    const {darkMode} = useContext(ThemeContext);
    
    return (
        <>
            <StyledRoutingButton darkMode={darkMode} onClick={routeFunc}> 
                {children} 
            </StyledRoutingButton>
        </>
    );
};

export default RoutingButton;

const StyledRoutingButton = styled.button<{darkMode: boolean}>`
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