import styled from '@emotion/styled';

interface PreferenceProps {
    image: string;
    text: string;
}

const Preference: React.FC<PreferenceProps> = ({ image, text }) => {
    return (
        <PreferenceWrapper>
            <PreferenceImage src={image} alt="Preference Image"/>
            <PreferenceTitle> {text} </PreferenceTitle>
        </PreferenceWrapper>
    );
};

export default Preference;

const PreferenceWrapper = styled.div`
    width: 15%;
    height: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`;

const PreferenceImage = styled.img`
    width: 80px;
    height: 80px;
`;

 const PreferenceTitle = styled.div`
    color: #007bff;
    font-weight: 400;
    font-size: 150%;
    margin-top: 10px;
`;