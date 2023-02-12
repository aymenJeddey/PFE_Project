import { NgModule } from '@angular/core';
import { NbActionsModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbDatepickerModule, NbIconLibraries, NbIconModule, NbInputModule, NbMenuModule, NbRadioModule, NbSelectModule, NbTabsetComponent, NbTreeGridModule, NbUserModule } from '@nebular/theme';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';

import { AuthenticationService } from '../services/authentication.service';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    NbCardModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,

  ],
  declarations: [
    PagesComponent,


  ],
})
export class PagesModule { constructor(iconsLibrary: NbIconLibraries , private authService: AuthenticationService) {
  iconsLibrary.registerSvgPack('i1', { 'checkbook': '<img src="../../assets/icons/checkbook.png" width="24px" class="text-center">' });
  iconsLibrary.registerSvgPack('i2', { 'checkbooks': '<img src="../../assets/icons/checkbooks.png" width="24px" class="text-center">  ' });
  iconsLibrary.registerSvgPack('i3', { 'gCheckbook': '<img src="../../assets/icons/gCheckbook.png" width="24px" class="text-center">' });
  iconsLibrary.registerSvgPack('i4', { 'aCheque': '<img src="../../assets/icons/annulerCheque.png" width="24px" class="text-center">' });
  iconsLibrary.registerSvgPack('i5', { 'group': '<img src="../../assets/icons/group.png" width="24px" class="text-center">' });
  iconsLibrary.registerSvgPack('i6', { 'type': '<img src="../../assets/icons/type.png" width="24px" class="text-center">' });
  iconsLibrary.registerSvgPack('i7', { 'oppositionCheque': '<img src="../../assets/icons/oppositionCheque.png" width="24px" class="text-center">' });
  iconsLibrary.registerSvgPack('i8',
    { 'validationOpposition': '<img src="../../assets/icons/validationOpposition.png"' + ' width="24px" class="text-center">' });
  iconsLibrary.registerSvgPack('i9',
    { 'annulationOpposition': '<img src="../../assets/icons/annulationOpposition.png"' + ' width="24px" class="text-center">' });
  iconsLibrary.registerSvgPack('i10', { 'opFinance': '<img src="../../assets/icons/opFinance.png"' + ' width="24px" class="text-center">' });
  iconsLibrary.registerSvgPack('i11', { 'opCaisse': '<img src="../../assets/icons/opCaisse.png"' + ' width="24px" class="text-center">' });
  iconsLibrary.registerSvgPack('i12', { 'deposit': '<img src="../../assets/icons/deposit.png"' + ' width="24px" class="text-center">' });
  iconsLibrary.registerSvgPack('i13', { 'withdraw': '<img src="../../assets/icons/withdraw.png"' + ' width="24px" class="text-center">' });
  iconsLibrary.registerSvgPack('i14', { 'transfert': '<img src="../../assets/icons/transfer.png"' + ' width="24px" class="text-center">' });
  iconsLibrary.registerSvgPack('i15', { 'tiers': '<img src="../../assets/icons/tiers.png"' + ' width="24px" class="text-center">' });
  iconsLibrary.registerSvgPack('i16', { 'particulier': '<img src="../../assets/icons/particulier.png"' + ' width="24px" class="text-center">' });
  iconsLibrary.registerSvgPack('i17', { 'bank': '<img src="../../assets/icons/bank.png"' + ' width="24px" class="text-center">' });
  iconsLibrary.registerSvgPack('i18', { 'account': '<img src="../../assets/icons/account.png"' + ' width="24px" class="text-center">' });
  iconsLibrary.registerSvgPack('i19', { 'createAccount': '<img src="../../assets/icons/createAccount.png"' + ' width="24px" class="text-center">' });
  iconsLibrary.registerSvgPack('i20', { 'affectationCaisse': '<img src="../../assets/icons/affectationCaisse.png"' + ' width="24px" class="text-center">' });
  iconsLibrary.registerSvgPack('i21', { 'affectationHis': '<img src="../../assets/icons/affectationHis.png"' + ' width="24px" class="text-center">' });
  iconsLibrary.registerSvgPack('i22', { 'bankCash': '<img src="../../assets/icons/bankCash.png"' + ' width="24px" class="text-center">' });
  iconsLibrary.registerSvgPack('i23', { 'ouvrirCaisse': '<img src="../../assets/icons/ouvrirCaisse.png"' + ' width="24px" class="text-center">' });
  iconsLibrary.registerSvgPack('i24', { 'suspendreCaisse': '<img src="../../assets/icons/suspendre.png"' + ' width="24px" class="text-center">' });
  iconsLibrary.registerSvgPack('i25', { 'stopCaisse': '<img src="../../assets/icons/stop.png"' + ' width="24px" class="text-center">' });
  iconsLibrary.registerSvgPack('i26', { 'clotureCaisse': '<img src="../../assets/icons/cloture.png"' + ' width="24px" class="text-center">' });
  iconsLibrary.registerSvgPack('i27', { 'opCai': '<img src="../../assets/icons/opCai.png"' + ' width="24px" class="text-center">' });
  iconsLibrary.registerSvgPack('i28', { 'demandeApp': '<img src="../../assets/icons/demandeApp.png"' + ' width="24px" class="text-center">' });
  iconsLibrary.registerSvgPack('i29', { 'validerApp': '<img src="../../assets/icons/validerApp.png"' + ' width="24px" class="text-center">' });
  iconsLibrary.registerSvgPack('i30', { 'soldeCaisse': '<img src="../../assets/icons/soldeCaisse.png"' + ' width="24px" class="text-center">' });
  iconsLibrary.registerSvgPack('i31', { 'coupure': '<img src="../../assets/icons/coupure.png"' + ' width="24px" class="text-center">' });
  iconsLibrary.registerSvgPack('i32', { 'arretesCaisse': '<img src="../../assets/icons/arretesCaisse.png"' + ' width="24px" class="text-center">' });
  iconsLibrary.registerSvgPack('i33', { 'consultation': '<img src="../../assets/icons/consultation.png"' + ' width="24px" class="text-center">' });
  iconsLibrary.registerSvgPack('i34', { 'cashmvt': '<img src="../../assets/icons/cashmvt.png"' + ' width="24px" class="text-center">' });
  iconsLibrary.registerSvgPack('i35', { 'appmvt': '<img src="../../assets/icons/appmvt.png"' + ' width="24px" class="text-center">' });
  iconsLibrary.registerSvgPack('i36', { 'opNonFin': '<img src="../../assets/icons/opNonFin.png"' + ' width="24px" class="text-center">' });
  iconsLibrary.registerSvgPack('i37', { 'paramCB': '<img src="../../assets/icons/paramCB.png"' + ' width="24px" class="text-center">' });
  iconsLibrary.registerSvgPack('i38', { 'nombreCheque': '<img src="../../assets/icons/nombreCheque.png"' + ' width="24px" class="text-center">' });
  iconsLibrary.registerSvgPack('i39', { 'faconnier': '<img src="../../assets/icons/faconnier.png"' + ' width="24px" class="text-center">' });
  iconsLibrary.registerSvgPack('i40', { 'chequeRequest': '<img src="../../assets/icons/chequeRequest.png"' + ' width="24px" class="text-center">' });
  iconsLibrary.registerSvgPack('i41', { 'validationRequest': '<img src="../../assets/icons/validationRequest.png"' + ' width="24px" class="text-center">' });
  iconsLibrary.registerSvgPack('i42', { 'demandeRequest': '<img src="../../assets/icons/demandeRequest.png"' + ' width="24px" class="text-center">' });
  iconsLibrary.registerSvgPack('i43', { 'validationCaisse': '<img src="../../assets/icons/validationCaisse.png"' + ' width="24px" class="text-center">' });
  iconsLibrary.registerSvgPack('i44', { 'validationBook': '<img src="../../assets/icons/validationBook.png"' + ' width="24px" class="text-center">' });
  iconsLibrary.registerSvgPack('i45', { 'chequeBook': '<img src="../../assets/icons/chequeBook.png"' + ' width="24px" class="text-center">' });
  iconsLibrary.registerSvgPack('i46', { 'chequeBooks': '<img src="../../assets/icons/chequeBooks.png"' + ' width="24px" class="text-center">' });
  iconsLibrary.registerSvgPack('i47', { 'gChequeBook': '<img src="../../assets/icons/gChequeBook.png"' + ' width="24px" class="text-center">' });
  iconsLibrary.registerSvgPack('i48', { 'gestionCaisse': '<img src="../../assets/icons/gestionCaisse.png"' + ' width="24px" class="text-center">' });
  iconsLibrary.registerSvgPack('i49', { 'caisseElementaire': '<img src="../../assets/icons/caisseElementaire.png"' + ' width="24px" class="text-center">' });
  iconsLibrary.registerSvgPack('i50', { 'cashier': '<img src="../../assets/icons/cashier.png"' + ' width="24px" class="text-center">' });
  iconsLibrary.registerSvgPack('i51', { 'adminSecurity': '<img src="../../assets/icons/adminSecurity.png"' + ' width="24px" class="text-center">' });
  iconsLibrary.registerSvgPack('i52', { 'userDonnee': '<img src="../../assets/icons/userDonnee.png"' + ' width="24px" class="text-center">' });
  iconsLibrary.registerSvgPack('i53', { 'userSec': '<img src="../../assets/icons/userSec.png"' + ' width="24px" class="text-center">' });
  iconsLibrary.registerSvgPack('i54', { 'userRole': '<img src="../../assets/icons/userRole.png"' + ' width="24px" class="text-center">' });
  iconsLibrary.registerSvgPack('i55', { 'batch': '<img src="../../assets/icons/batch.png"' + ' width="24px" class="text-center">' });
  iconsLibrary.registerSvgPack('i56', { 'gestionCA': '<img src="../../assets/icons/creditAmor.png"' + ' width="24px" class="text-center">' });
  iconsLibrary.registerSvgPack('i57', { 'consuCP': '<img src="../../assets/icons/consuCP.png"' + ' width="24px" class="text-center">' });
  iconsLibrary.registerSvgPack('i58', { 'mepCA': '<img src="../../assets/icons/mepCA.png"' + ' width="24px" class="text-center">' });
  iconsLibrary.registerSvgPack('i59', { 'constCP': '<img src="../../assets/icons/constCP.png"' + ' width="24px" class="text-center">' });
  iconsLibrary.registerSvgPack('i60', { 'addCP': '<img src="../../assets/icons/addCP.png"' + ' width="24px" class="text-center">' });
  iconsLibrary.registerSvgPack('i61', { 'exOp': '<img src="../../assets/icons/exOp.png"' + ' width="24px" class="text-center">' });
  iconsLibrary.registerSvgPack('i62', { 'devise': '<img src="../../assets/icons/devise.png"' + ' width="24px" class="text-center">' });
  iconsLibrary.registerSvgPack('i63', { 'consuVirement': '<img src="../../assets/icons/consuVirement.png"' + ' width="24px" class="text-center">' });
  iconsLibrary.registerSvgPack('i64', { 'VP': '<img src="../../assets/icons/VP.png"' + ' width="24px" class="text-center">' });
  iconsLibrary.registerSvgPack('i65', { 'VS': '<img src="../../assets/icons/VS.png"' + ' width="24px" class="text-center">' });
  iconsLibrary.registerSvgPack('i66', { 'enterprise': '<img src="../../assets/icons/enterprise.png"' + ' width="24px" class="text-center">' });
  iconsLibrary.registerSvgPack('i67', { 'consuAll': '<img src="../../assets/icons/consuAll.png"' + ' width="24px" class="text-center">' });
  iconsLibrary.registerSvgPack('i68', { 'batchExec': '<img src="../../assets/icons/batchExec.png"' + ' width="24px" class="text-center">' });
  iconsLibrary.registerSvgPack('i69', { 'customer': '<img src="../../assets/icons/customer.png"' + ' width="24px" class="text-center">' });
  iconsLibrary.registerSvgPack('i70', { 'employee': '<img src="../../assets/icons/employee.png"' + ' width="24px" class="text-center">' });
  iconsLibrary.registerSvgPack('i71', { 'calendar': '<img src="../../assets/icons/calendar.png"' + ' width="24px" class="text-center">' });


} }
