import { useContext } from 'react';
import { ThemeContext } from '../../themes/ThemeContext/ThemeContext';
import classes from './DeleteButton.module.css';
import TrashCan from './DeleteButtonImage/TrashCan.png';

interface DeleteButtonProps{
    deleteFunc: () => void;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({deleteFunc}) => {

    const {darkMode} = useContext(ThemeContext);

    return (
        <>
            <button onClick={deleteFunc} className={`${classes.deleteButton} ${darkMode && classes['deleteButton--dark']}`}>
                <img src={TrashCan} alt="TrashCan" className={classes.trashCan}/>
            </button>
        </>
    )
}
  
export default DeleteButton;