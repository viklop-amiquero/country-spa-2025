import { Component, inject, signal } from '@angular/core';
import { List } from '../../components/list/list';
import { SearchInput } from '../../components/search-input/search-input';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country-service';

@Component({
    selector: 'app-by-capital-page',
    imports: [SearchInput, List],
    templateUrl: './by-capital-page.html',
    styleUrl: './by-capital-page.css',
})
export class ByCapitalPage {
    countryService = inject(CountryService);

    isLoading = signal(false);
    isError = signal<string | null>(null);
    countries = signal<Country[]>([]);

    onSearch(query: string) {
        if (this.isLoading()) return;
        this.isLoading.set(true);
        this.isError.set(null);

        this.countryService.searchByCapital(query).subscribe((countries) => {
            this.isLoading.set(false);
            this.countries.set(countries);
        });
    }
}
