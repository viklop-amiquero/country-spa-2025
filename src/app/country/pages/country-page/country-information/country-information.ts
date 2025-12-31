import { DecimalPipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { Country } from '../../../interfaces/country.interface';

@Component({
    selector: 'country-information-page',
    imports: [DecimalPipe],
    templateUrl: './country-information.html',
    styleUrl: './country-information.css',
})
export class CountryInformation {
    country = input.required<Country>();
}
