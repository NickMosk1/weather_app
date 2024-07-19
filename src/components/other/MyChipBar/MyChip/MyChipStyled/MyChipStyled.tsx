import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';

interface MyChipStyledProps {
    selected: boolean;
    darkMode: boolean;
}

const MyChipStyled = styled(({ selected, darkMode, ...other }: MyChipStyledProps) => (<Chip {...other}/>))
    (({ selected, darkMode }) => ({
    backgroundColor: darkMode ? (selected ? '#007bff' : '#333') : (selected ? '#007bff' : '#fff'),
    color: darkMode ? (selected ? '#dddddd' : '#dddddd') : (selected ? '#fff' : '#333'),
    fontWeight: '100',
    fontSize: '125%',
    width: 'fit-content',
    textAlign: 'center',
    margin: '30px',
    padding: '10px',
    height: 'fit-content',
}));

export default MyChipStyled;