import CityIsNotFoundError from "../../../../components/errorScreens/CityIsNotFoundError/CityIsNotFoundError";
import DateDataIsNotFoundError from "../../../../components/errorScreens/DateDataIsNotFoundError/DateDataIsNotFoundError";
import IncorrectInputError from "../../../../components/errorScreens/IncorrectInputError/IncorrectInputError";

interface ErrorDetailsContainerProps{
    additionalData: string;
    errorType: ErrorTypes;
};

type ErrorTypes = 'cityIsNotFound' | 'dateDataIsNotFound' | 'incorrectInput';

const getErrorComponent = (errorType: 'cityIsNotFound' | 'dateDataIsNotFound' | 'incorrectInput'): React.ElementType => {
    switch (errorType) {
        case 'cityIsNotFound':
            return CityIsNotFoundError;
        case 'dateDataIsNotFound':
            return DateDataIsNotFoundError;
        case 'incorrectInput':
            return IncorrectInputError;
        default:
            throw new Error('Unknown error type');
    }
};

const ErrorDetailsContainer: React.FC<ErrorDetailsContainerProps> = ({ errorType, additionalData }) => {

    const ErrorComponent = getErrorComponent(errorType);
    
    return (
        <>
            <ErrorComponent additionalData={additionalData}/>
        </>
    );
};
  
export default ErrorDetailsContainer;