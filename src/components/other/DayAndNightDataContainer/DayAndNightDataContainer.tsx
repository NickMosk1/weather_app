import SunSetAndRiseContainer from './SunSetAndRiseContainer/SunSetAndRiseContainer';
import MoonPhaseDataContainer from './MoonPhaseData/MoonPhaseDataContainer';
import styled from '@emotion/styled';

interface SunSetAndRiseContainerProps {
    sunSetAndRiseData: { time: string, epoch: number }[];
    moonPhaseData: number;
}

const DayAndNightDataContainer: React.FC<SunSetAndRiseContainerProps> = ({ sunSetAndRiseData, moonPhaseData }) => {
    return (
        <DayAndNightDataContainerWrapper>
            <SunSetAndRiseContainer sunSetAndRiseData={sunSetAndRiseData}/>
            <MoonPhaseDataContainer moonPhaseData={moonPhaseData}/>
        </DayAndNightDataContainerWrapper>
    );
};

export default DayAndNightDataContainer;

const DayAndNightDataContainerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 40px;
`;