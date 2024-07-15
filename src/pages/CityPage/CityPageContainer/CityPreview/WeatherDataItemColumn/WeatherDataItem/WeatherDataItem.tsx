import classes from './WeatherDataItem.module.css';

type PrecipType = 'rain' | 'snow' | null;

interface WeatherDataItemProps{
    title: string;
    data: string | number | PrecipType;
}

const getPrecipitationDescription = (precipType: PrecipType): string[] => {
    if (precipType === 'rain') {
        return ['Осадки в виде', 'дождя'];
    } else if (precipType === 'snow') {
        return ['Осадки в виде', 'дождя'];
    } else {
        return ['Осадков', 'нет'];
    }
  };

const WeatherDataItem: React.FC<WeatherDataItemProps> = ({title, data}) => {

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
            title = `${getPrecipitationDescription(data as PrecipType)[0]}`;
            data = `${getPrecipitationDescription(data as PrecipType)[1]}`;
            break;
        default:
            title="Неизвестно"
            data="Неизвестно"
            break
    }

    return(
        <div className={classes.weatherDataItem}>
            <div className={classes.weatherDataItemTitle}> {title} </div>
            <div className={classes.weatherDataItemData}> {data} </div>
        </div>
    )
}

export default WeatherDataItem;