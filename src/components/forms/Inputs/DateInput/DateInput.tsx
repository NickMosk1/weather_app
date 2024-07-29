import { DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import DateInputStyled from './DateInputStyled/DateInputStyled';
import { useContext } from 'react';
import { ThemeContext } from '../../../themes/ThemeContext/ThemeContext';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

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
        <DateInputStyled darkMode={darkMode}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoItem>
                    <DatePicker
                        defaultValue={dayjs(choosenDate)}
                        onChange={handleInputChange}
                    />
                </DemoItem>
            </LocalizationProvider>
        </DateInputStyled>
    );
};

export default DateInput;