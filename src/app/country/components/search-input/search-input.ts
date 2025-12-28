import { Component, input, output } from '@angular/core';

@Component({
    selector: 'country-search-input',
    imports: [],
    templateUrl: './search-input.html',
    styleUrl: './search-input.css',
})
export class SearchInput {
    placeholder = input<string>('Buscar');
    value = output<string>();

    // onSearch(value: string) {
    //     this.value.emit(value);
    // }
}
