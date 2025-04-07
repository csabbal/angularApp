import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { InMemoryScrollingFeature, InMemoryScrollingOptions, RouterModule, provideRouter, withInMemoryScrolling } from '@angular/router';
import { routes } from './app/app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';


const scrollConfig: InMemoryScrollingOptions = {
  scrollPositionRestoration: 'disabled',
  anchorScrolling: 'enabled',
};

const inMemoryScrollingFeature: InMemoryScrollingFeature = withInMemoryScrolling(scrollConfig);

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [provideRouter(routes, inMemoryScrollingFeature), provideHttpClient(withFetch())],
})
  .catch((err) => console.error(err));
