import { DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { useContext } from 'react';
import { ThemeContext } from '../../../themes/ThemeContext/ThemeContext';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs, { Dayjs } from 'dayjs';
import styled from "@emotion/styled";
import theme from './DateInputTheme/DateInputTheme';
import { ThemeProvider } from '@mui/material/styles';

interface DateInputProps {
    choosenDate: string;
    setChoosenDate: (date: string) => void;
}

const DateInput: React.FC<DateInputProps> = ({ choosenDate, setChoosenDate }) => {

    const { darkMode } = useContext(ThemeContext);

    const handleInputChange = (date: dayjs.Dayjs | null) => {
        if (date) {
            setChoosenDate(date.format('YYYY-MM-DD'));
        } else {
            setChoosenDate('');
        }
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <ThemeProvider theme={theme}>
                <DateInputStyled
                    darkMode={darkMode}
                    defaultValue={dayjs(choosenDate)}
                    onChange={handleInputChange}
                />
            </ThemeProvider>
        </LocalizationProvider>
    );
};

export default DateInput;

const DateInputStyled = styled(DatePicker)<{darkMode: boolean, defaultValue: Dayjs, onChange: (date: dayjs.Dayjs | null) => void}>`
    background-color: ${(props) => (props.darkMode ? '#333333' : '#fff')};
    color: ${(props) => (props.darkMode ? '#bbbbbb' : '#007bff')};
    width: 320px;

    & input {
        background-color: ${(props) => (props.darkMode ? '#333333' : '#fff')};
        color: ${(props) => (props.darkMode ? '#bbbbbb' : '#007bff')};
    }

    & button {
        color: ${(props) => (props.darkMode ? '#ffffff' : '#007bff')};
    }
`;