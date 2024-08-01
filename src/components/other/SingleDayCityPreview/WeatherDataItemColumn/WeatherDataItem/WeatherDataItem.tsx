import { useContext } from 'react';
import { ThemeContext } from '../../../../themes/ThemeContext/ThemeContext';
import styled from '@emotion/styled';

type PrecipType = 'rain' | 'snow' | 'null';

interface WeatherDataItemProps{
    title: string;
    data: string | number | PrecipType;
}

const getPrecipDescription = (precipType: PrecipType): string[] => {
    switch (precipType) {
        case "rain":
            return ['Осадки в виде', 'дождя'];
        case "snow":
            return ['Осадки в виде', 'снега'];
        case 'null':
            return ['Осадков', 'нет'];
        default:
            return ['неизвестно', 'неизвестно'];
    }
};

const WeatherDataItem: React.FC<WeatherDataItemProps> = ({ title, data }) => {
    
    const { darkMode } = useContext(ThemeContext);
    
    switch (title) {
        case "tempmax":
            title = "Максимальная температура";
            data += " °C";
            break;
        case "tempmin":
            title = "Минимальная температура";
            data += " °C";
            break;
        case "temp":
            title = "Средняя температура";
            data += " °C";
            break;
        case "windgust":
            title = "Cкорость порывов ветра";
            data += " м/с";
            break;
        case "pressure":
            title = "Атмосферное давление";
            data += " мм";
            break;
        case "humidity":
            title = "Влажность воздуха";
            data += " %";
            break;
        case "dew":
            title = "Значение точки росы";
            data += " °C";
            break;
        case "preciptype":
            title = `${getPrecipDescription(data as PrecipType)[0]}`;
            data = `${getPrecipDescription(data as PrecipType)[1]}`;
            break;
        default:
            title = "Неизвестно"
            data = "Неизвестно"
            break
    }

    return(
        <WeatherDataItemWrapper>
            <WeatherDataItemTitle darkMode={darkMode}> {title} </WeatherDataItemTitle>
            <WeatherDataItemData> {data} </WeatherDataItemData>
        </WeatherDataItemWrapper>
    )
}

export default WeatherDataItem;

const WeatherDataItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: fit-content;
    justify-content: center;
`;

const WeatherDataItemTitle = styled.div<{darkMode: boolean}>`
    color: ${(props) => (props.darkMode ? "#bbbbbb" : "#333")};
    font-weight: 100;
    font-size: 150%;
    height: 10%;
    width: 100%;
    text-align: center;
    margin-top: 40px;
`;

const WeatherDataItemData = styled.div`
    color: #007bff;
    font-weight: 800;
    font-size: 250%;
    height: 10%;
    width: 100%;
    text-align: center;
    margin-top: 20px;
`;