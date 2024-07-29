import Preference from './Preference/Preference';
import styled from '@emotion/styled';

type preferenceData = {
    text: string,
    image: string,
}

interface PreferencesContainerProps {
    preferenceDataArray: preferenceData[];
}

const PreferencesContainer: React.FC<PreferencesContainerProps> = ({ preferenceDataArray }) => {
    return (
        <PreferencesContainerWrapper>
            {preferenceDataArray.map((preferenceData, index) => (
                <Preference key={index} text={preferenceData.text} image={preferenceData.image}/>
            ))}
        </PreferencesContainerWrapper>
    )
}

export default PreferencesContainer;

const PreferencesContainerWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 75px;
`;