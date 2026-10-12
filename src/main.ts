import 'hammerjs';
import {
  enableProdMode,
  importProvidersFrom,
  provideZonelessChangeDetection,
} from '@angular/core';

import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { provideAnimations } from '@angular/platform-browser/animations';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    provideZonelessChangeDetection(),
    importProvidersFrom(BrowserModule, MatButtonModule, MatDialogModule),
    provideAnimations(),
  ],
}).catch((err) => console.error(err));
