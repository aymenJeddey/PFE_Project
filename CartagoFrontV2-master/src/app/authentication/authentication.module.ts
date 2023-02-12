import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { ConnexionComponent } from './connexion/connexion.component';
import {NbAlertModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbInputModule} from '@nebular/theme';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser'


@NgModule({
  declarations: [],
    imports: [
      FormsModule,
      ReactiveFormsModule,
        CommonModule,
        AuthenticationRoutingModule,
        NbAlertModule,
        BrowserModule,
        NbCheckboxModule,
        NbCardModule,
        NbInputModule,
      NbButtonModule,
      CommonModule,

    ],

})
export class AuthenticationModule { }
