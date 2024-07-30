import { useContext } from 'react';
import { ThemeContext } from '../../../themes/ThemeContext/ThemeContext';
import styled from '@emotion/styled';

interface MoonPhaseDataContainerProps {
    moonPhaseData: number;
}

const getMoonPhaseName = (phase: number): string => {
    if (phase === 0 || phase === 1) return "новолуние";
    if (phase === 0.25) return "первая четверть";
    if (phase === 0.5) return "полнолуние";
    if (phase === 0.75) return "последняя четверть";
    if (phase > 0 && phase < 0.25) return "растущий серп";
    if (phase > 0.25 && phase < 0.5) return "растущая Луна";
    if (phase > 0.5 && phase < 0.75) return "убывающая Луна";
    if (phase > 0.75 && phase < 1) return "убывающий серп";
    return "неизвестная фаза";
};

const MoonPhaseDataContainer: React.FC<MoonPhaseDataContainerProps> = ({ moonPhaseData }) => {
  
    const {darkMode} = useContext(ThemeContext);
    const moonPhaseName = getMoonPhaseName(moonPhaseData);

    return (
        <MoonPhaseDataContainerWrapper>
            <MoonPhaseDataContainerTitle>Фаза Луны</MoonPhaseDataContainerTitle>
            <MoonPhaseDataContainerData darkMode={darkMode}>Коэффициент: {moonPhaseData}</MoonPhaseDataContainerData>
            <MoonPhaseDataContainerData darkMode={darkMode}>Название: {moonPhaseName}</MoonPhaseDataContainerData>
        </MoonPhaseDataContainerWrapper>
    );
};

export default MoonPhaseDataContainer;

const MoonPhaseDataContainerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const MoonPhaseDataContainerTitle = styled.div`
    color: #007bff;
    font-size: 200%;
    font-weight: 900;
    text-align: center;
`;

const MoonPhaseDataContainerData= styled.div<{darkMode: boolean}>`
    color: ${(props) => (props.darkMode ? "#bbbbbb" : "#333")};
    margin-top: 20px;
    font-weight: 100;
    font-size: 130%;
    text-align: center;
`;