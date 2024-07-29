import { useContext } from 'react';
import { ThemeContext } from '../../themes/ThemeContext/ThemeContext';
import TrashCan from './DeleteButtonImage/TrashCan.png';
import styled from '@emotion/styled';

interface DeleteButtonProps{
    deleteFunc: () => void;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ deleteFunc }) => {

    const {darkMode} = useContext(ThemeContext);

    return (
        <>
            <StyledDeleteButton onClick={deleteFunc} darkMode={darkMode}>
                <StyledTrashCan src={TrashCan} alt="TrashCan"/>
            </StyledDeleteButton>
        </>
    )
}

const StyledDeleteButton = styled.button<{darkMode: boolean}>`
    color: ${(props) => (props.darkMode ? "#dddddd" : "007bff")};
    background-color:  ${(props) => (props.darkMode ? "#333333" : "#fff")};
    padding: 10px 15px;
    border-style: solid;
    border-width: 1px;
    border-color: #007bff;
    border-radius: 15px;
    margin-left: 10px;
    margin-right: 10px;
    font-size: 125%;
    font-weight: 100;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 123, 255, 0.2);
    cursor: pointer;
    transition: box-shadow 0.3s ease, transform 0.3s ease, color 0.3s ease, background-color 0.3s ease;

    &:hover {
        box-shadow: 0 6px 12px rgba(0, 123, 255, 0.3);
        transform: scale(1.1);
    }
`;

const StyledTrashCan = styled.img`
    height: 25px;
    width: 22px;
`;

export default DeleteButton;