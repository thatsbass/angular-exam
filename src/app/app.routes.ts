import { Routes } from '@angular/router';
import { ApprovisionnementComponent } from './features/approvisionnement/approvisionnement.component';
import { AddApprovisionnementComponent } from './features/approvisionnement/add-approvisionnement/add-approvisionnement.component';
import { MainLayoutComponent } from './layout/main-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: 'approvisionnement', pathMatch: 'full' },
      { path: 'approvisionnement', component: ApprovisionnementComponent },
      { path: 'approvisionnement/new', component: AddApprovisionnementComponent },
    ],
  },
];
