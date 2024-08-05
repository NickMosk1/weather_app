import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { useContext } from 'react';
import { ThemeContext } from '../../../themes/ThemeContext/ThemeContext';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import styled from "@emotion/styled";
import IconButton from '@mui/material/IconButton';
import { PickersDay } from '@mui/x-date-pickers/PickersDay';
import { PickersMonth } from '@mui/x-date-pickers/MonthCalendar/PickersMonth';
import { PickersYear } from '@mui/x-date-pickers/YearCalendar/PickersYear';
import { PickersCalendarHeader, PickersLayout } from '@mui/x-date-pickers';

interface DateInputProps {
    choosenDate: string;
    setChoosenDate: (date: string) => void;
}

interface CustomSlots {
    openPickerButton: (props: any) => JSX.Element;
    day: (props: any) => JSX.Element;
    monthButton: (props: any) => JSX.Element;
    yearButton: (props: any) => JSX.Element;
    layout: (props: any) => JSX.Element;
    calendarHeader: (props: any) => JSX.Element;
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
            <DateInputStyled
                darkMode={darkMode}
                defaultValue={dayjs(choosenDate)}
                onChange={handleInputChange}
                slots={{
                    openPickerButton: (props) => <StyledButton darkMode={darkMode} {...props} />,
                    day: (props) => <StyledDay darkMode={darkMode} {...props} />,
                    monthButton: (props) => <StyledMonth darkMode={darkMode} {...props} />,
                    yearButton: (props) => <StyledYear darkMode={darkMode} {...props} />,
                    layout: (props) => <StyledPickersLayout darkMode={darkMode} {...props} />,
                    calendarHeader: (props) => <StyledCalendarHeader darkMode={darkMode} {...props} />,
                } as CustomSlots}
            />     
        </LocalizationProvider>
    );
};

export default DateInput;

const StyledButton = styled(IconButton)<{darkMode: boolean}>`
    background-color: ${(props) => (props.darkMode ? '#333333' : '#fff')};
    color: ${(props) => (props.darkMode ? '#bbbbbb' : '#007bff')};
`;

const StyledDay = styled(PickersDay)<{darkMode: boolean}>`
    background-color: ${(props) => (props.darkMode ? '#333333' : '#fff')};
    color: ${(props) => (props.darkMode ? '#bbbbbb' : '#007bff')};
`;

const StyledMonth = styled(PickersMonth)<{darkMode: boolean}>`
    background-color: ${(props) => (props.darkMode ? '#333333' : '#fff')};
    color: ${(props) => (props.darkMode ? '#bbbbbb' : '#007bff')};
`;

const StyledYear = styled(PickersYear)<{darkMode: boolean}>`
    background-color: ${(props) => (props.darkMode ? '#333333' : '#fff')};
    color: ${(props) => (props.darkMode ? '#bbbbbb' : '#007bff')};
`;

const StyledPickersLayout = styled(PickersLayout)<{darkMode: boolean}>`
    background-color: ${(props) => (props.darkMode ? '#333333' : '#fff')};
    color: ${(props) => (props.darkMode ? '#bbbbbb' : '#007bff')};
`;

const StyledCalendarHeader = styled(PickersCalendarHeader)<{darkMode: boolean}>`
    background-color: ${(props) => (props.darkMode ? '#333333' : '#fff')};
    color: ${(props) => (props.darkMode ? '#bbbbbb' : '#007bff')};
`;

const DateInputStyled = styled(DatePicker)<{darkMode: boolean}>`
    background-color: ${(props) => (props.darkMode ? '#333333' : '#fff')};
    color: ${(props) => (props.darkMode ? '#bbbbbb' : '#007bff')};
    width: 320px;

    & input {
        background-color: ${(props) => (props.darkMode ? '#333333' : '#fff')};
        color: ${(props) => (props.darkMode ? '#bbbbbb' : '#007bff')};
    }
`;