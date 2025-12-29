import { Component, input } from '@angular/core';
import { Country } from '../../interfaces/country.interface';

@Component({
    selector: 'country-list',
    imports: [],
    templateUrl: './list.html',
    styleUrl: './list.css',
})
export class List {
    countries = input.required<Country[]>();
}
