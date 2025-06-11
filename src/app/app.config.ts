import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { OktaAuth } from '@okta/okta-auth-js';
import myAppConfig from './config/my-app-config';
import { OKTA_CONFIG, OktaAuthModule } from '@okta/okta-angular';

const oktaAuth = new OktaAuth(myAppConfig.oidc);


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    
    //  Required for Okta SDK to work
    importProvidersFrom(OktaAuthModule),

    //  Provide the OktaAuth configuration
    {
      provide: OKTA_CONFIG,
      useValue: { oktaAuth }
    },
    provideClientHydration(),
    
    provideHttpClient(withFetch())]
};
