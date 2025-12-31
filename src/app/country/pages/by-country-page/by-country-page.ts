import { Component, inject, linkedSignal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
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

    activatedRoute = inject(ActivatedRoute);
    router = inject(Router);

    queryParam = this.activatedRoute.snapshot.queryParamMap.get('query') ?? '';
    query = linkedSignal(() => this.queryParam);

    countryResource = rxResource({
        params: () => ({
            query: this.query(),
        }),
        stream: ({ params }) => {
            console.log(this.queryParam);
            if (!params.query) return of([]);
            this.router.navigate(['/country/by-country'], {
                queryParams: {
                    query: params.query,
                },
            });
            return this.countryService.searchByCountry(params.query);
        },
    });

    // countryResorce = resource({
    //     params: () => ({
    //         query: this.query(),
    //     }),
    //     loader: async ({ params }) => {
    //         if (!params.query) return [];

    //         return await firstValueFrom(this.countryService.searchByCountry(params.query));
    //     },
    // });
}
