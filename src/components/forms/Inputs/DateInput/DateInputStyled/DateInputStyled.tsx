import { styled } from '@mui/material/styles';

interface DateInputStyledProps{
    darkMode: boolean;
}

const DateInputStyled = styled('div')<DateInputStyledProps>(({darkMode}) => ({
    backgroundColor: darkMode ? '#333333' : '#fff',
    color: darkMode ? '#bbbbbb' : '#007bff',
    width: 320,
    '& input': {
        backgroundColor: darkMode ? '#333333' : '#ffffff',
        color: darkMode ? '#bbbbbb' : '#007bff',
    },
    '& button': {
        color: darkMode ? '#ffffff' : '#007bff',
    },
    '& .MuiPaper-root': {
        border: "1px solid black",
        padding: 2,
        marginTop: 1,
        backgroundColor: '#007bff'
    },
    '& .MuiDateCalendar-root': {
        color: '#bbdefb',
        borderRadius: '2px',
        borderWidth: '1px',
        borderColor: '#2196f3',
        border: '1px solid',
        backgroundColor: '#0d47a1',
    },
    '& .MuiPickersDay-dayWithMargin': {
        color: 'rgb(229,228,226)',
        backgroundColor: 'rgba(50, 136, 153)'
    },
    '& .MuiTabs-root': { backgroundColor: 'rgba(120, 120, 120, 0.4)' }
}));

export default DateInputStyled;