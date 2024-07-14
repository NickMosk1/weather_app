import classes from './WeatherDataItem.module.css';

type PrecipType = 'rain' | 'snow' | null;

interface WeatherDataItemProps{
    title: string;
    data: string | number | PrecipType;
}

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