import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TopMenu } from '../../components/top-menu/top-menu';

@Component({
    selector: 'app-country-layout',
    imports: [RouterModule, TopMenu],
    templateUrl: './country-layout.html',
    styleUrl: './country-layout.css',
})
export class CountryLayout {}
