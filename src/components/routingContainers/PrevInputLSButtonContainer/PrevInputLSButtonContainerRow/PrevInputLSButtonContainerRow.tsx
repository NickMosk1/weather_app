import classes from './PrevInputLSButtonContainerRow.module.css';
import PrevInputLSButton from '../../../buttons/PrevInputLSButton/PrevInputLSButton';
import DeleteButton from '../../../buttons/DeleteButton/DeleteButton';

interface PrevInputLSButtonContainerRowProps{
    lastRecords: string[];
    deleteLastRecords: () => void;
}

const PrevInputLSButtonContainerRow: React.FC<PrevInputLSButtonContainerRowProps> = ({lastRecords, deleteLastRecords}) => {
    return(
        <div className={classes.prevInputLSButtonContainerRow}>
            {lastRecords.map((id: string) => (<PrevInputLSButton key={id} itemData={id}/>))}
            <DeleteButton deleteFunc={deleteLastRecords}/>
        </div>
    ) 
}

export default PrevInputLSButtonContainerRow;