import PrevInputLSButton from '../../../buttons/PrevInputLSButton/PrevInputLSButton';
import DeleteButton from '../../../buttons/DeleteButton/DeleteButton';
import styled from '@emotion/styled';

interface PrevInputLSButtonContainerRowProps{
    buttonData: string[];
    deleteFunc: () => void;
    redirectToPage: (itemData: string) => void;
}

const PrevInputLSButtonContainerRow: React.FC<PrevInputLSButtonContainerRowProps> = ({buttonData, deleteFunc, redirectToPage}) => {
    return(
        <PrevInputLSButtonContainerRowWrapper>
            {buttonData.map((id: string) => (
                <PrevInputLSButton key={id} itemData={id} redirectToPage={redirectToPage}/>
            ))}
            <DeleteButton deleteFunc={deleteFunc}/>
        </PrevInputLSButtonContainerRowWrapper>
    ) 
}

export default PrevInputLSButtonContainerRow;

const PrevInputLSButtonContainerRowWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;