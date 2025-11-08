import { Routes } from '@angular/router';
import { ApprovisionnementComponent } from './approvisionnement/approvisionnement.component';
import { AddApprovisionnementComponent } from './approvisionnement/add-approvisionnement/add-approvisionnement.component';

export const routes: Routes = [
  { path: '', redirectTo: 'approvisionnement', pathMatch: 'full' },
  { path: 'approvisionnement', component: ApprovisionnementComponent },
  { path: 'approvisionnement/new', component: AddApprovisionnementComponent },
];
