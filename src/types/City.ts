import Day from "./Day";

export default City;

interface City {
    latitude: number;
    longitude: number;
    resolvedAddress: string;
    address: string;
    timezone: string;
    tzoffset: number;
    name: string;
    days: Day[];
}