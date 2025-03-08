import { Component, inject, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housing-location';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" #filter>
        <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
      </form>
    </section>
    <section class="results">
      
      <app-housing-location *ngFor="let housingLocation of filterHousingLocationList" [housingLocation]="housingLocation"></app-housing-location>
    </section>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);
  filterHousingLocationList: HousingLocation[]  = [];

  constructor(){
    this.housingService.getAllHousingLocations()
    .then((housingLocationList: HousingLocation[]) => {
      this.housingLocationList = housingLocationList;
      this.filterHousingLocationList = housingLocationList;
    })
  }

  filterResults(filter: string) {
    if (!filter) this.filterHousingLocationList = this.housingLocationList;

    this.filterHousingLocationList = this.housingLocationList.filter(
      (housingLocation) => housingLocation?.city.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    )
  }
}
