import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    // providePrimeNG({
    //   theme: {
    //     preset: Aura,
    //   },
    // }),
    providePrimeNG({
      theme: {
          preset: Aura,
          options: {
              cssLayer: {
                  name: 'primeng',
                  order: 'theme, base, primeng'
              }
          }
      }
  }),
    provideZoneChangeDetection({ eventCoalescing: true }),
  ],
};
