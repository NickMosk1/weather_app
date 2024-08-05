import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

const LinearPageLoader = () => {
    return (
        <LinearProgressWrapper>
            <LinearProgressQuote>Секундочку...</LinearProgressQuote>
            <BoxStyled>
                <LinearProgress />
            </BoxStyled>
        </LinearProgressWrapper>
    );
}

export default LinearPageLoader;

const BoxStyled = styled(Box)`
    width: 100%;
    background-color: #fff;
    color: #007bff;
    margin-top: 120px;
    margin-bottom: 300px;
`;

const LinearProgressWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const LinearProgressQuote = styled.div`
    margin-top: 300px;
    font-weight: 900;
    font-size: 300%;
    color: #007bff;
`;