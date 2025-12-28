import { Component, inject } from '@angular/core';
import { List } from '../../components/list/list';
import { SearchInput } from '../../components/search-input/search-input';
import { CountryService } from '../../services/country-service';

@Component({
    selector: 'app-by-capital-page',
    imports: [SearchInput, List],
    templateUrl: './by-capital-page.html',
    styleUrl: './by-capital-page.css',
})
export class ByCapitalPage {
    countryService = inject(CountryService);

    onSearch(query: string) {
        // console.log(query);
        this.countryService.searchByCapital(query).subscribe((resp) => {
            console.log(resp);
        });
    }
}
