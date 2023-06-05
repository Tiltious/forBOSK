import { APP_INITIALIZER, NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { ProductService } from './demo/service/product.service';
import { CountryService } from './demo/service/country.service';
import { CustomerService } from './demo/service/customer.service';
import { EventService } from './demo/service/event.service';
import { IconService } from './demo/service/icon.service';
import { NodeService } from './demo/service/node.service';
import { PhotoService } from './demo/service/photo.service';
import { MenuModule } from 'primeng/menu';
import { ToastModule } from 'primeng/toast';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { AuthGuard } from './demo/components/auth/auth.guard';
import { NgxEchartsModule } from 'ngx-echarts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const keycloakService = new KeycloakService();
// function initializeKeycloak(keycloak: KeycloakService) {
//     return () =>
//       keycloak.init({
//         config: {
//           url: 'http://localhost:8081',
//           realm: 'RealmForAll',
//           clientId: 'myClient'
//         },
//         initOptions: {
//           onLoad: 'check-sso',
//           silentCheckSsoRedirectUri:
//             window.location.origin + '/assets/silent-check-sso.html'
//         }
//       });
//   }

@NgModule({
    declarations: [
        AppComponent, NotfoundComponent
    ],
    imports: [
        AppRoutingModule,
        AppLayoutModule,
        KeycloakAngularModule,
        NgxEchartsModule.forRoot({echarts: () => import('echarts'),}),
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        CountryService, CustomerService, EventService, IconService, NodeService,
        PhotoService, ProductService,AuthGuard,
        {
            provide: KeycloakService,
            useValue: keycloakService
          }
    ],
    bootstrap: [AppComponent],
    // entryComponents: [AppComponent],
})
export class AppModule {
  // ngDoBootstrap(app:any) {
  //   keycloakService
  //     .init({
  //       config: {
  //         url: 'https://160.40.204.30:8443',
  //         realm: 'i4bydesign',
  //         clientId: 'i4bydesign_dev',
  //       },
  //       initOptions: {
  //         onLoad: 'check-sso',
  //         checkLoginIframe: false,
  //       },
  //       enableBearerInterceptor: true,
  //       bearerExcludedUrls: [],
  //     })
  //     .then(() => {
  //       app.bootstrap(AppComponent);
  //     })
  //     .catch((error) =>
  //       console.error('[ngDoBootstrap] init Keycloak failed', error)
  //     );
  // }
 }
