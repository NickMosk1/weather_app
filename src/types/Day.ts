import Hour from "./Hour";

type PrecipType = 'rain' | 'snow' | null;

interface Day {
    [key: string]: any; //исправило проблему с item1 2 3
    datetime: string;
    datetimeEpoch: number;
    tempmax: number; 
    tempmin: number; 
    temp: number; 
    feelslikemax: number;
    feelslikemin: number;
    feelslike: number;
    dew: number;
    humidity: number; 
    precip: number;
    precipprob: number;
    precipcover: number;
    preciptype: PrecipType[];
    snow: number;
    snowdepth: number;
    windgust: number;
    windspeed: number; 
    winddir: number;
    pressure: number; 
    cloudcover: number;
    visibility: number;
    solarradiation: number;
    solarenergy: number;
    uvindex: number;
    severerisk: number;
    sunrise: string;
    sunriseEpoch: number;
    sunset: string;
    sunsetEpoch: number;
    moonphase: number;
    conditions: string;
    description: string;
    stations: string[];
    source: string;
    hours: Hour[];
}

export default Day;