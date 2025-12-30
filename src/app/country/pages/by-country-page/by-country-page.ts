import { Component, inject, resource, signal } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { List } from '../../components/list/list';
import { SearchInput } from '../../components/search-input/search-input';
import { CountryService } from '../../services/country-service';

@Component({
    selector: 'app-by-country-page',
    imports: [SearchInput, List],
    templateUrl: './by-country-page.html',
    styleUrl: './by-country-page.css',
})
export class ByCountryPage {
    countryService = inject(CountryService);
    query = signal('');

    countryResorce = resource({
        params: () => ({
            query: this.query(),
        }),
        loader: async ({ params }) => {
            if (!params.query) return [];

            return await firstValueFrom(this.countryService.searchByCountry(params.query));
        },
    });
    // onSearch(value: string) {
    //     console.log(value);
    // }
}
