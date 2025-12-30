import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Country } from '../interfaces/country.interface';
import { RESTCountry } from '../interfaces/rest-country.interface';
import { CountryMapper } from '../mappers/country.mapper';
@Injectable({
    providedIn: 'root',
})
export class CountryService {
    private _http = inject(HttpClient);
    private _api = environment.api_url;

    searchByCapital(query: string): Observable<Country[]> {
        query = query.toLowerCase();

        return this._http.get<RESTCountry[]>(`${this._api}/capital/${query}`).pipe(
            map(CountryMapper.mapRestCountryArrayToCountryArray),
            catchError((err) => {
                // console.log('error fetching', err);
                return throwError(() => new Error(`No se pudo obtener el país para ${query}.`));
            })
        );
    }

    searchByCountry(query: string): Observable<Country[]> {
        return this._http.get<RESTCountry[]>(`${this._api}/name/${query}`).pipe(
            map(CountryMapper.mapRestCountryArrayToCountryArray),
            // delay(3000),
            catchError((err) => {
                console.log('error fetching', err);
                return throwError(() => new Error(`No se encontró país ${query}`));
            })
        );
    }
}
