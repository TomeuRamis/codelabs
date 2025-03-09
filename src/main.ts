import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import routeConfig from './routes';
import { provideStore } from '@ngrx/store';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routeConfig),
    provideStore()
]
}).catch(err => console.error(err));
