import { DecimalPipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Country } from '../../interfaces/country.interface';

@Component({
    selector: 'country-list',
    imports: [DecimalPipe, RouterLink],
    templateUrl: './list.html',
    styleUrl: './list.css',
})
export class List {
    countries = input.required<Country[]>();
}
