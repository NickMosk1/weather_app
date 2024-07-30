import MyChipStyled from './MyChipStyled/MyChipStyled';
import { ThemeContext } from "../../../themes/ThemeContext/ThemeContext";
import { useContext } from 'react';

interface MyChipProps {
    label: string;
    selected: boolean;
    clickable: boolean;
    onClick: () => void;
}

const MyChip: React.FC<MyChipProps> = (props) => {

    const {darkMode} = useContext(ThemeContext);

    return <MyChipStyled {...props} darkMode={darkMode}/>;
};

export default MyChip;