import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import classes from './LinearPageLoader.module.css';
import LinearProgressStyled from './LinearProgressStyled/LinearProgressStyled';

const LinearPageLoader = () => {
  return (
    <div className={classes.linearProgress}>
      <div className={classes.linearProgressQuote}>Секундочку...</div>
      <LinearProgressStyled>
        <Box>
          <LinearProgress />
        </Box>
      </LinearProgressStyled>
    </div>
  );
}

export default LinearPageLoader;