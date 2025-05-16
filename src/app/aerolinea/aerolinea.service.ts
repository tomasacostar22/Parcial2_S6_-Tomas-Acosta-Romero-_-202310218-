import { Injectable } from '@angular/core';
import { Vuelo } from '../vuelo/vuelo.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Aerolinea } from './aerolinea.model';

@Injectable({
    providedIn: 'root'
})
export class AerolineaService {

    private direccion: string = 'https://raw.githubusercontent.com/NoNameLab/ISIS2603_Parcial2_S6_202510/refs/heads/main/flights';
    
    constructor(private http: HttpClient) { }

    getAerolineas(): Observable<Aerolinea[]> {

        return this.http.get<Aerolinea[]>(this.direccion + '.json')
    }

    getAerolinea(id: string): Observable<Aerolinea>{

        return this.http.get<Aerolinea>(this.direccion + '/' + id + '.json');
            
    }

}