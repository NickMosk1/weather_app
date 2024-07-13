import { styled } from '@mui/system';

const BarChartPatternStyled = styled('div')({

    width: '70%',
    height: 350,
    backgroundColor: '#fff',
    color: '#007bff',
    paddingTop: '20px',
    margin: '20px',
    '& .recharts-text': {
      fill: '#007bff',
      fontSize: '14px', 
      fontWeight: 'bold', 
    },
    '& .recharts-cartesian-axis-tick-line': {
      stroke: '#007bff',
      strokeWidth: 2, 
    },
    '& .recharts-cartesian-axis-line': {
      stroke: '#007bff',
      strokeWidth: 2, 
    },
    '& .recharts-tooltip-wrapper': {
      color: '#007bff',
    },
    '& .recharts-legend-item text': {
      fill: '#007bff',
      fontSize: '14px', 
      fontWeight: 'bold', 
    },
  
});

export default BarChartPatternStyled;