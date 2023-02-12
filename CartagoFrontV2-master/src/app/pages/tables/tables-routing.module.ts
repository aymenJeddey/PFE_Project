import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablesComponent } from './tables.component';
import { SmartTableComponent } from './smart-table/smart-table.component';
import { TreeGridComponent } from './tree-grid/tree-grid.component';
import { GroupeRoleComponent } from './groupe-role/groupe-role.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';

const routes: Routes = [{
  path: '',
  component: TablesComponent,
  children: [

    {
      path: 'utilisateur1',
      component: UtilisateurComponent,
    },
    {
      path: 'GroupeRole',
      component: GroupeRoleComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablesRoutingModule { }

export const routedComponents = [
  TablesComponent,
  SmartTableComponent,
  TreeGridComponent,

];
