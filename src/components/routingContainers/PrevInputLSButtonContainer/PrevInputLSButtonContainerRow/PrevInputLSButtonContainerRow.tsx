import PrevInputLSButton from '../../../buttons/PrevInputLSButton/PrevInputLSButton';
import DeleteButton from '../../../buttons/DeleteButton/DeleteButton';
import styled from '@emotion/styled';

interface PrevInputLSButtonContainerRowProps{
    lastRecords: string[];
    deleteLastRecords: () => void;
}

const PrevInputLSButtonContainerRow: React.FC<PrevInputLSButtonContainerRowProps> = ({lastRecords, deleteLastRecords}) => {
    return(
        <PrevInputLSButtonContainerRowWrapper>
            {lastRecords.map((id: string) => (<PrevInputLSButton key={id} itemData={id}/>))}
            <DeleteButton deleteFunc={deleteLastRecords}/>
        </PrevInputLSButtonContainerRowWrapper>
    ) 
}

export default PrevInputLSButtonContainerRow;

const PrevInputLSButtonContainerRowWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;