import { NgModule } from '@angular/core';
import { NbButtonModule, NbCardModule, NbCheckboxModule, NbDatepickerModule, NbIconModule, NbSelectModule, NbTabsetModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { MiscellaneousRoutingModule } from './miscellaneous-routing.module';
import { MiscellaneousComponent } from './miscellaneous.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ClientDetailComponent } from './client-detail/client-detail.component';
import { AddclientComponent } from './addclient/addclient.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { UpdateClientComponent } from './update-client/update-client.component';
import { RoleDetailsComponent } from './Role/role-details/role-details.component';
import { RoleAddComponent } from './Role/role-add/role-add.component';
import { GroupAddComponent } from './Group/group-add/group-add.component';
import { GroupDetailComponent } from './Group/group-detail/group-detail.component';
import { ComptesDetailsComponent } from './comptes/comptes-details/comptes-details.component';
import { AddComptesComponent } from './comptes/add-comptes/add-comptes.component';
import { CalendrierDetailComponent } from './Calendier/calendrier-detail/calendrier-detail.component';
import { AddCalendrierComponent } from './Calendier/add-calendrier/add-calendrier.component';
import { UpdateCalendarComponent } from './Calendier/update-calendar/update-calendar.component';
import { AnnuelleComponent } from './Calendier/update-calendar/annuelle/annuelle.component';
import { ExceptionnelleComponent } from './Calendier/update-calendar/exceptionnelle/exceptionnelle.component';
import { HebdomadairesComponent } from './Calendier/update-calendar/hebdomadaires/hebdomadaires.component';
import { DevisesDetailsComponent } from './Devices/devises-details/devises-details.component';
import { AddDeviseComponent } from './Devices/add-devise/add-devise.component';
import { AgenceComponent } from './agence/agence.component';
import { EmployeeComponent } from './employee/employee.component';
import { AddAgenceComponent } from './agence/add-agence/add-agence.component';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import { BanqueComponent } from './banque/banque.component';
import { AddBanqueComponent } from './banque/add-banque/add-banque.component';
import { UpdateBanqueComponent } from './banque/update-banque/update-banque.component';
import { ValidationCompteDetailsComponent } from './validation-compte-details/validation-compte-details.component';
import { ValidationCompteComponent } from './validation-compte/validation-compte.component';
import { AddEngagementComponent } from './add-engagement/add-engagement.component';
import { ValidationCreditComponent } from './validation-credit/validation-credit.component';
import { NumAccountSelectComponent } from './num-account-select/num-account-select.component';
import { EngagementListComponent } from './engagement-list/engagement-list.component';
import { ConsultationCreditDetailsComponent } from './consultation-credit-details/consultation-credit-details.component';
import { TiersComponent } from './tiers/tiers.component';
import { DeviseSelectComponent } from './Devices/devise-select/devise-select.component';
import { AmortissementTableComponent } from './amortissement-table/amortissement-table.component';
import { ValidationCreditDetailsComponent } from './validation-credit-details/validation-credit-details.component';
import { UpdateComptesComponent } from './comptes/update-comptes/update-comptes.component';

@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    NbButtonModule,
    NbCheckboxModule,
    MiscellaneousRoutingModule,
    Ng2SmartTableModule,
    NbSelectModule,
    NbTabsetModule,
    NbIconModule,
    NbDatepickerModule.forRoot(),

    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    MiscellaneousComponent,
    NotFoundComponent,
    ClientDetailComponent,
    AddclientComponent,
    UpdateClientComponent,
    RoleDetailsComponent,
    RoleAddComponent,
    GroupAddComponent,
    GroupDetailComponent,
    ComptesDetailsComponent,
    AddComptesComponent,
    CalendrierDetailComponent,
    AddCalendrierComponent,
    UpdateCalendarComponent,
    AnnuelleComponent,
    ExceptionnelleComponent,
    HebdomadairesComponent,
    DevisesDetailsComponent,
    AddDeviseComponent,
    AgenceComponent,
    EmployeeComponent,
    AddAgenceComponent,
    AddEmployeeComponent,
    BanqueComponent,
    AddBanqueComponent,
    UpdateBanqueComponent,
    ValidationCompteComponent,
    ValidationCompteDetailsComponent,
    AddEngagementComponent,
    ValidationCreditComponent,
    NumAccountSelectComponent,
    EngagementListComponent,
    ConsultationCreditDetailsComponent,
    TiersComponent,
    DeviseSelectComponent,
    AmortissementTableComponent,
    ValidationCreditComponent,
    ValidationCompteDetailsComponent,
    ValidationCreditDetailsComponent,
    UpdateComptesComponent


  ],
})
export class MiscellaneousModule { }
