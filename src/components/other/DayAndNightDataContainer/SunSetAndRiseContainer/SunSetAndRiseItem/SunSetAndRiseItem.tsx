import { useContext } from 'react';
import { ThemeContext } from '../../../../themes/ThemeContext/ThemeContext';
import styled from '@emotion/styled';

interface SunSetAndRiseItemProps {
    title: string;
    dataNormal: string;
    dataUTC: number;
}

const SunSetAndRiseItem: React.FC<SunSetAndRiseItemProps> = ({ title, dataNormal, dataUTC }) => {

    const {darkMode} = useContext(ThemeContext);

    return (
        <SunSetAndRiseItemWrapper>
            <SunSetAndRiseItemTitle>{title}</SunSetAndRiseItemTitle>
            <SunSetAndRiseItemData darkMode={darkMode}>В обычном формате: {dataNormal}</SunSetAndRiseItemData>
            <SunSetAndRiseItemData darkMode={darkMode}>В формате UTC: {dataUTC}</SunSetAndRiseItemData>
        </SunSetAndRiseItemWrapper>
    );
};

export default SunSetAndRiseItem;

const SunSetAndRiseItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const SunSetAndRiseItemTitle = styled.div`
    color: #007bff;
    font-size: 200%;
    font-weight: 900;
    text-align: center;
`;

const SunSetAndRiseItemData = styled.div<{darkMode: boolean}>`
    margin-top: 20px;
    color: ${(props) => (props.darkMode ? "#bbbbbb" : "#333")};
    font-weight: 100;
    font-size: 130%;
    text-align: center;
`;