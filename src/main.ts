import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent } from './app/app.component';

import { disableDeprecatedForms, provideForms } from '@angular/forms';

if (process.env.ENV === 'production') {
  enableProdMode();
}

bootstrap(AppComponent, [
  disableDeprecatedForms(),
  provideForms()
])
.catch((err: any) => console.error(err));
