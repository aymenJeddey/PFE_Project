import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExceptionalService } from '../../services/referenciel/exceptional.service';

import { AddRoleComponent } from '../layout/add-role/add-role.component';
import { AddclientComponent } from './addclient/addclient.component';
import { AddAgenceComponent } from './agence/add-agence/add-agence.component';
import { AgenceComponent } from './agence/agence.component';
import { AmortissementTableComponent } from './amortissement-table/amortissement-table.component';
import { AddBanqueComponent } from './banque/add-banque/add-banque.component';
import { BanqueComponent } from './banque/banque.component';
import { UpdateBanqueComponent } from './banque/update-banque/update-banque.component';
import { AddCalendrierComponent } from './Calendier/add-calendrier/add-calendrier.component';
import { CalendrierDetailComponent } from './Calendier/calendrier-detail/calendrier-detail.component';
import { AnnuelleComponent } from './Calendier/update-calendar/annuelle/annuelle.component';
import { ExceptionnelleComponent } from './Calendier/update-calendar/exceptionnelle/exceptionnelle.component';
import { HebdomadairesComponent } from './Calendier/update-calendar/hebdomadaires/hebdomadaires.component';
import { UpdateCalendarComponent } from './Calendier/update-calendar/update-calendar.component';
import { ClientDetailComponent } from './client-detail/client-detail.component';
import { AddComptesComponent } from './comptes/add-comptes/add-comptes.component';
import { ComptesDetailsComponent } from './comptes/comptes-details/comptes-details.component';
import { AddDeviseComponent } from './Devices/add-devise/add-devise.component';
import { DevisesDetailsComponent } from './Devices/devises-details/devises-details.component';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import { EmployeeComponent } from './employee/employee.component';
import { GroupAddComponent } from './Group/group-add/group-add.component';
import { GroupDetailComponent } from './Group/group-detail/group-detail.component';
import { AddEngagementComponent } from './add-engagement/add-engagement.component';
import { MiscellaneousComponent } from './miscellaneous.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RoleAddComponent } from './Role/role-add/role-add.component';
import { RoleDetailsComponent } from './Role/role-details/role-details.component';
import { UpdateClientComponent } from './update-client/update-client.component';
import { ValidationCompteComponent } from './validation-compte/validation-compte.component';
import { EngagementListComponent } from './engagement-list/engagement-list.component';
import { ValidationCreditComponent } from './validation-credit/validation-credit.component';
import { UpdateComptesComponent } from './comptes/update-comptes/update-comptes.component';

const routes: Routes = [
  {
    path: '',
    component: MiscellaneousComponent,
    children: [
      {
        path: 'Client',
        component: ClientDetailComponent,
      },
      {
        path: 'AddClient',
        component: AddclientComponent,
      },
      {
        path: 'UpdateClient',
        component: UpdateClientComponent,
      },
      {
        path: 'Bank',
        component: BanqueComponent,
      },
      {
        path: 'AddBank',
        component: AddBanqueComponent,
      },
      {
        path: 'UpdateBank',
        component: UpdateBanqueComponent,
      },
      {
        path: 'Roole',
        component: RoleDetailsComponent,
      },
      {
        path: 'AdRole',
        component: RoleAddComponent,
      },
      {
        path: 'Group',
        component: GroupDetailComponent,
      },
      {
        path: 'AddGroup',
        component: GroupAddComponent,
      },
      {
        path: 'Comptes',
        component: ComptesDetailsComponent,
      },
      {
        path: 'AddComptes',
        component: AddComptesComponent,
      },
      {
        path: 'Calendrier',
        component: CalendrierDetailComponent,
      },
      {
        path: 'AddCalendrier',
        component: AddCalendrierComponent,
      },
      {
        path: 'UpdateCalendar',
        component: UpdateCalendarComponent,
      },
      {
        path: 'AddAnnual',
        component: AnnuelleComponent,
      },
      {
        path: 'AddExceptional',
        component: ExceptionnelleComponent,
      },
      {
        path: 'AddHebdo',
        component: HebdomadairesComponent,
      },
      {
        path: 'Devise',
        component: DevisesDetailsComponent,
      },
      {
        path: 'AddDevise',
        component: AddDeviseComponent,
      },
      {
        path: 'Agence',
        component: AgenceComponent,
      },
      {
        path: 'AddAgence',
        component: AddAgenceComponent,
      },
      {
        path: 'Employe',
        component: EmployeeComponent,
      },
      {
        path: 'AddEmploye',
        component: AddEmployeeComponent,
      },
      {
        path: "validationCompte",
        component: ValidationCompteComponent,
      },
      {
        path: "AddEngagement",
        component: AddEngagementComponent,
      },
      {
        path: "EngagementList",
        component: EngagementListComponent,
      },
      {
        path: "EngagementValidation",
        component: ValidationCreditComponent,
      },
      {
        path: "updateCompte",
        component: UpdateComptesComponent,
      },


    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MiscellaneousRoutingModule {
}
