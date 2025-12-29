import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
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

        return this._http
            .get<RESTCountry[]>(`${this._api}/capital/${query}`)
            .pipe(map(CountryMapper.mapRestCountryArrayToCountryArray));
    }
}
