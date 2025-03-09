import { Injectable } from '@angular/core';
import { HousingLocation } from '../store/models';
import { delay, last } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  
  url = "http://localhost:3000/locations";

  constructor() { }

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.url);
    // Simulate late server response
    await new Promise(f => setTimeout(f, 3000));
    return await data.json() ?? [];
  }

  async getHousingLocationById(id: Number): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    await new Promise(f => setTimeout(f, 1000));
    return await data.json() ?? [];
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(firstName)
    console.log(lastName)
    console.log(email)
  }
}
