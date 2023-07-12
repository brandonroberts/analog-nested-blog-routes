import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { provideFileRouter, routes } from '@analogjs/router';

console.log(JSON.stringify(routes, null, 2));
export const appConfig: ApplicationConfig = {
  providers: [
    provideFileRouter(),
    provideHttpClient(),
    provideClientHydration(),
  ],
};
