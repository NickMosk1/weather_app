import { useState, useEffect } from 'react';
import styled from '@emotion/styled';

interface ClockProps {
    tzoffset: number;
}

const calculateCityTime = (tzoffset: number) => {
    const utcTime = Date.now() + new Date().getTimezoneOffset() * 60000;
    return new Date(utcTime + tzoffset * 3600000);
};

const Clock: React.FC<ClockProps> = ({ tzoffset }) => {

    const [time, setTime] = useState<Date>(calculateCityTime(tzoffset));

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(calculateCityTime(tzoffset));
            }, 1000);
        return () => {clearInterval(timer);};
    }, [tzoffset]);

    return (
        <StyledClock>
            {time.toLocaleTimeString()}
        </StyledClock>
    );
};

export default Clock;

const StyledClock = styled.div`
    color: #007bff;
    font-weight: 900;
    font-size: 600%;
    text-align: center;
`;