


interface CityPageContainerProps{

    cityName: string;

}

const CityPageContainer: React.FC<CityPageContainerProps> = ({cityName}) => {

    return(

        <>
        
            {cityName}
        
        </>

    )

}

export default CityPageContainer;