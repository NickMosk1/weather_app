import styled from '@emotion/styled';
import SunSetAndRiseImage from './SunSetAndRiseImages/SunSetAndRiseImage';
import SunSetAndRiseItem from './SunSetAndRiseItem/SunSetAndRiseItem';

interface SunSetAndRiseContainerProps {
    sunSetAndRiseData: { time: string, epoch: number }[];
}

const SunSetAndRiseContainer: React.FC<SunSetAndRiseContainerProps> = ({ sunSetAndRiseData }) => {
    
    const sunriseData = sunSetAndRiseData[0] || { time: "Нет данных", epoch: 0 };
    const sunsetData = sunSetAndRiseData[1] || { time: "Нет данных", epoch: 0 };

    return (
        <>
            <SunSetAndRiseContainerTitle>Время восхода и заката</SunSetAndRiseContainerTitle>
            <SunSetAndRiseContainerWrapper>
                <SunSetAndRiseItem title={"Восход"} dataNormal={sunriseData.time} dataUTC={sunsetData.epoch}/>
                <SunSetAndRiseImage />
                <SunSetAndRiseItem title={"Закат"} dataNormal={sunsetData.time} dataUTC={sunsetData.epoch}/>
            </SunSetAndRiseContainerWrapper>
        </>
    );
};

export default SunSetAndRiseContainer;

const SunSetAndRiseContainerTitle = styled.div`
    margin-top: 25px;
    color: #007bff;
    font-size: 200%;
    font-weight: 900;
    text-align: center;
`;

const SunSetAndRiseContainerWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    height: fit-content;
    margin: 70px;
`;