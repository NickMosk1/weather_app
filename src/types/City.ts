import Day from "./Day";

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

export default City;