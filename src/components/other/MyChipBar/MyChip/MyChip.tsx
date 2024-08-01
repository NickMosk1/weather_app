import { ThemeContext } from "../../../themes/ThemeContext/ThemeContext";
import { useContext } from 'react';
import { Chip } from '@mui/material';
import styled from "@emotion/styled";

interface MyChipProps {
    label: string;
    selected: boolean;
    clickable: boolean;
    onClick: () => void;
}

const MyChip: React.FC<MyChipProps> = ({label, selected, clickable, onClick}) => {

    const {darkMode} = useContext(ThemeContext);

    return ( 
        <MyChipStyled darkMode={darkMode} selected={selected} clickable={clickable} label={label} onClick={onClick}/>
    );
};

export default MyChip;

const MyChipStyled = styled(Chip)<{ darkMode: boolean, selected: boolean, label: string, clickable: boolean, onClick: () => void}>`
    background-color: ${(props) => (props.darkMode ? (props.selected ? "#007bff" : "#333") : (props.selected ? "#007bff" : "#fff"))};
    color: ${(props) => (props.darkMode ? (props.selected ? "#dddddd" : "#dddddd") : (props.selected ? "#fff" : "#333"))};
    font-weight: 100;
    font-size: 125%;
    width: fit-content;
    text-align: center;
    margin-left: 20px;
    margin-right: 20px;
    padding: 10px;
    height: fit-content;
`;