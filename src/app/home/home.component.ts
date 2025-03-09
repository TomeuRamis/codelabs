import { Component, ElementRef, inject, Inject, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housing-location';
import { HousingService } from '../housing.service';
import { from, fromEvent, map, Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <section>
      <form>
        <input id="filter" type="text" placeholder="Filter by city" #filter>
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
  @ViewChild('filter') filterInput: ElementRef | null= null;

  constructor(){
    from(this.housingService.getAllHousingLocations())
    .subscribe( (housingLocationList) => {
      this.housingLocationList = housingLocationList;
      this.filterHousingLocationList = this.housingLocationList;
    })
  }

  ngAfterViewInit() {
    fromEvent<InputEvent>(this.filterInput?.nativeElement, 'input')
    .pipe(map((event: InputEvent) => { return this.filterInput?.nativeElement.value}))
    .subscribe((filter: string) => {
      this.filterResults(filter);
    });
  }

  filterResults(filter: string) {
    if (!filter) this.filterHousingLocationList = this.housingLocationList;

    this.filterHousingLocationList = this.housingLocationList.filter(
      (housingLocation) => this.filterHousingLocation(housingLocation, filter)
    )
  }

  filterHousingLocation(housingLocation: HousingLocation, filter: string): boolean {  
    return housingLocation?.city.toLocaleLowerCase().includes(filter.toLocaleLowerCase()) ||
    housingLocation?.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()) ||
    housingLocation?.state.toLocaleLowerCase().includes(filter.toLocaleLowerCase());
  }
}
