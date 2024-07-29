import { Switch as MaterialUISwitch } from '@mui/material';
import { styled } from '@mui/material/styles';
import Sun from '../DayNightIconImages/Sun.png';
import Moon from '../DayNightIconImages/Moon.png';

const StyledMaterialUISwitch = styled(MaterialUISwitch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,

    '& .MuiSwitch-switchBase': {
        margin: 1,
        padding: 0,
        transform: 'translateX(6px)',

        '&.Mui-checked': {
        color: '#fff',
        transform: 'translateX(22px)',

        '& .MuiSwitch-thumb:before': {
            backgroundImage: `url(${Moon})`,
            backgroundSize: 'contain', 
            backgroundPosition: 'center', 
            backgroundRepeat: 'no-repeat', 
            backgroundColor: '#007bff', 
            borderRadius: '50%',
        },

        '& + .MuiSwitch-track': {
            opacity: 1,
            backgroundColor: theme.palette.mode === 'dark' ? '#bbbbbb' : '#007bff',
        },
        },
    },

    '& .MuiSwitch-thumb': {
        backgroundColor: theme.palette.mode === 'dark' ? '#007bff' : '#bbbbbb',
        width: 32,
        height: 32,

        '&::before': {
        content: '""',
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        },
    },

    '& .MuiSwitch-thumb::before': {
        backgroundImage: `url(${Sun})`,
        backgroundSize: 'contain', 
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat', 
        backgroundColor: '#ffffff', 
        borderRadius: '50%',
    },

    '& .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#bbbbbb' : '#fff',
        borderRadius: 20 / 2,
    },
}));

export default StyledMaterialUISwitch;