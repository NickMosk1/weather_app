import styled from '@emotion/styled';
import SunSetAndRiseImagePNG from './SunSetAndRiseImage.png';

const SunSetAndRiseImage = () => {
    return(
        <SunSetAndRiseImageWrapper src={SunSetAndRiseImagePNG} alt="SunSetAndRiseImage"/>
    )
}

export default SunSetAndRiseImage;

const SunSetAndRiseImageWrapper = styled.img`
    width: 180px;
    height: 180px;
`;