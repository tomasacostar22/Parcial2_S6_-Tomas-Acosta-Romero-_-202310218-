import {Vuelo } from '../vuelo/vuelo.model';


export interface Aerolinea {
    id: number;
    airlineName: string;
    country: string;
    city: string;
    address: string;
    slogan: string;
    vuelos?: Vuelo[]

}