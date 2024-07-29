import { useContext, useState } from "react";
import { ThemeContext } from "../../themes/ThemeContext/ThemeContext";
import PrevInputLSButtonContainerRow from "./PrevInputLSButtonContainerRow/PrevInputLSButtonContainerRow";
import styled from '@emotion/styled';

interface PrevInputLSButtonContainerProps{
    recordShown: number;
}

const getLastRecords = (recordShown: number) => {
    const prevInputs = JSON.parse(localStorage.getItem("prevInputs") || "[]");
    const lastRecords = prevInputs.slice(0, recordShown);
    return lastRecords;
}

const PrevInputLSButtonContainer: React.FC<PrevInputLSButtonContainerProps> = ({recordShown}) => {

    const {darkMode} = useContext(ThemeContext);
    const [lastRecords, setLastRecords] = useState<string[]>(getLastRecords(recordShown));

    const deleteLastRecords = () => {
        localStorage.removeItem("prevInputs"); 
        setLastRecords([]);
    }

    return(
        <PrevInputLSButtonContainerWrapper>
            {lastRecords.length? 
                (
                    <>
                        <RecordsTitle darkMode={darkMode}> 
                            Ваши сохраненные запросы: 
                        </RecordsTitle>
                        <PrevInputLSButtonContainerRow lastRecords={lastRecords} deleteLastRecords={deleteLastRecords}/>
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
    padding-top: 80px;
    padding-bottom: 80px;
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