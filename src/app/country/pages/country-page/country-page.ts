import { Component, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../services/country-service';

@Component({
    selector: 'app-country-page',
    imports: [],
    templateUrl: './country-page.html',
    styleUrl: './country-page.css',
})
export class CountryPage {
    countryCode = inject(ActivatedRoute).snapshot.params['code'];
    CountryService = inject(CountryService);

    countryResource = rxResource({
        params: () => ({ code: this.countryCode }),
        stream: ({ params }) => {
            return this.CountryService.searchCountryByAlphaCode(params.code);
        },
    });
}
