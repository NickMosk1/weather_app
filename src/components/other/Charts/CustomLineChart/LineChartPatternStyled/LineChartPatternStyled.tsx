import { styled } from '@mui/system';

interface LineChartPatternStyledProps {
    darkMode: boolean;
}

const LineChartPatternStyled = styled('div')<LineChartPatternStyledProps>(({ darkMode }) => ({
    width: '70%',
    height: 350,
    color: darkMode ? '#bbbbbb' : '#007bff',
    marginTop: '30px',
    '& .recharts-text': {
        fill: darkMode ? '#bbbbbb' : '#007bff',
        fontSize: '14px',
        fontWeight: 'bold',
    },
    '& .recharts-cartesian-axis-tick-line': {
        stroke: darkMode ? '#bbbbbb' : '#007bff',
        strokeWidth: 2,
    },
    '& .recharts-cartesian-axis-line': {
        stroke: darkMode ? '#bbbbbb' : '#007bff',
        strokeWidth: 2,
    },
    '& .recharts-tooltip-wrapper': {
        color: darkMode ? '#bbbbbb' : '#007bff',
    },
    '& .recharts-legend-item text': {
        fill: darkMode ? '#bbbbbb' : '#007bff',
        fontSize: '14px',
        fontWeight: 'bold',
    },
}));

export default LineChartPatternStyled;