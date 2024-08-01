import { useContext } from 'react';
import Clock from '../Clock/Clock';
import { ThemeContext } from '../../themes/ThemeContext/ThemeContext';
import styled from '@emotion/styled';

type CityInfoData = {
    cityNameInfo: string;
    cityResolvedAddress: string;
    cityTzoffset: number;
}

interface CityInfoProps {
    cityInfoData: CityInfoData; 
}

const CityInfo: React.FC<CityInfoProps> = ({ cityInfoData }) => {

    const { darkMode } = useContext(ThemeContext);

    return (
        <CityInfoWrapper>
            <CityName> {cityInfoData.cityNameInfo} </CityName>
            <ResolvedCityAddress darkMode={darkMode}> {cityInfoData.cityResolvedAddress} </ResolvedCityAddress>
            <Clock tzoffset={cityInfoData.cityTzoffset} />
        </CityInfoWrapper>
    );
};

export default CityInfo;

const CityInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 60%;
    justify-content: center;
`;

const CityName = styled.div`
    color: #007bff;
    font-weight: 900;
    font-size: 600%;
    text-align: center;
`;

const ResolvedCityAddress = styled.div<{darkMode: boolean}>`
    color: ${(props) => (props.darkMode ? "#bbbbbb" : "#333")};
    font-weight: 300;
    font-size: 180%;
    text-align: center;
    margin-top: 30px;
    margin-bottom: 30px;
`;