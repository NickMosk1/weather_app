import { useContext } from "react";
import { ThemeContext } from "../../themes/ThemeContext/ThemeContext";
import PrevInputLSButtonContainerRow from "./PrevInputLSButtonContainerRow/PrevInputLSButtonContainerRow";
import styled from '@emotion/styled';

interface PrevInputLSButtonContainerProps{
    buttonData: string[];
    deleteFunc: () => void;
    redirectToPage: (itemData: string) => void;
}

const PrevInputLSButtonContainer: React.FC<PrevInputLSButtonContainerProps> = ({buttonData, deleteFunc, redirectToPage}) => {

    const {darkMode} = useContext(ThemeContext);

    return(
        <PrevInputLSButtonContainerWrapper>
            {buttonData.length? 
                (
                    <>
                        <RecordsTitle darkMode={darkMode}> 
                            Ваши сохраненные запросы: 
                        </RecordsTitle>
                        <PrevInputLSButtonContainerRow buttonData={buttonData} deleteFunc={deleteFunc} redirectToPage={redirectToPage}/>
                    </>
                )
                :
                (
                    <>
                        <RecordsNotFoundWarning darkMode={darkMode}> 
                            Сохраненных запросов пока нет. <br/> Введите название города и мы запомним его для Ваших будущих посещений сайта! 
                        </RecordsNotFoundWarning>
                    </>
                )
            }
        </PrevInputLSButtonContainerWrapper>
    ) 
}

export default PrevInputLSButtonContainer;

const PrevInputLSButtonContainerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
    margin-bottom: 80px;
`;

const RecordsTitle = styled.div<{darkMode: boolean}>`
    color: ${(props) => (props.darkMode ? '#bbbbbb' : '#333')};
    font-weight: 100;
    font-size: 130%;
    margin-bottom: 80px;
    text-align: center;
`;

const RecordsNotFoundWarning = styled.div<{darkMode: boolean}>`
    color: ${(props) => (props.darkMode ? '#bbbbbb' : '#333')};
    font-weight: 100;
    font-size: 130%;
    text-align: center;
`;