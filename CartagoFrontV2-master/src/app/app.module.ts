/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CoreModule } from './@core/core.module';
import { ThemeModule } from './@theme/theme.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  NbChatModule,
  NbDatepickerModule,
  NbDialogModule,
  NbMenuModule,
  NbCheckboxModule,
  NbSidebarModule,
  NbToastrModule,
  NbWindowModule,
  NbCardModule,
  NbAlertModule,
  NbButtonModule,
  NbIconModule,
  NbInputModule,
  NbOptionModule,
  NbSelectModule,
} from '@nebular/theme';
import { ConnexionComponent } from './authentication/connexion/connexion.component';
import { UtilisateurComponent } from './pages/tables/utilisateur/utilisateur.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { GroupeRoleComponent } from './pages/tables/groupe-role/groupe-role.component';


@NgModule({
  declarations: [AppComponent, ConnexionComponent,  GroupeRoleComponent,
    UtilisateurComponent,
     ],
  imports: [
    BrowserModule,
    NbCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    Ng2SmartTableModule,
    NbCardModule,
    HttpClientModule,
    AppRoutingModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    NbChatModule.forRoot({
      messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY',
    }),
    CoreModule.forRoot(),
    ThemeModule.forRoot(),
    NbAlertModule,
    NbInputModule,
    NbCheckboxModule,
    NbIconModule,
    NbCardModule,
    NbButtonModule,
    Ng2SmartTableModule,
    NbOptionModule,
    NbSelectModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
