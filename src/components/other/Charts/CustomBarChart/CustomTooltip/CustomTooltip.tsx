import { useContext } from 'react';
import { ThemeContext } from '../../../../themes/ThemeContext/ThemeContext';
import styled from '@emotion/styled';

interface CustomTooltipProps {
    data: {value: number; index?: number;};
    label: string;
    unitName: string;
    dates?: string[];
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({ data, label, unitName, dates }) => {

    const date = dates && data.index !== undefined ? dates[Math.floor(data.index / 24)] : '';

    const {darkMode} = useContext(ThemeContext);

    return (
        <StyledCustomTooltip darkMode={darkMode}>
            <CustomTooltipText>{date}</CustomTooltipText>
            <CustomTooltipText>{label}</CustomTooltipText>
            <CustomTooltipText>{`${data.value} ${unitName}`}</CustomTooltipText>
        </StyledCustomTooltip>
    );
};

export default CustomTooltip;

const StyledCustomTooltip = styled.div<{darkMode: boolean}>`
    background-color: ${(props) => (props.darkMode ? "#333333" : "#fff")};
    padding: 20px;
    border-radius: 10px;
    font-size: 150%;
    font-weight: 900;
    color: #007bff;
    text-align: center;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

const CustomTooltipText = styled.div`
    margin: auto 5px;
`;