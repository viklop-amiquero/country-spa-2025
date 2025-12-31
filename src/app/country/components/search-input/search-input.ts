import { Component, input, linkedSignal, output } from '@angular/core';

@Component({
    selector: 'country-search-input',
    imports: [],
    templateUrl: './search-input.html',
    styleUrl: './search-input.css',
})
export class SearchInput {
    placeholder = input<string>('Buscar');
    value = output<string>();

    initialValue = input<string>();
    inputValue = linkedSignal<string>(() => this.initialValue() ?? '');

    // onSearch(value: string) {
    //     this.value.emit(value);
    // }
}
