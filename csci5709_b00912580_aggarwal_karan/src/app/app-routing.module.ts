import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CruiseLeaseComponent } from './cruise-lease/cruise-lease.component';
import { LandingPageComponent } from './landingPage/landingPage.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { UpdatedComponent } from './updated/updated.component';
import { LeaseCancelComponent } from './lease-cancel/lease-cancel.component';

const routes: Routes = [
  { path: 'lease', component: CruiseLeaseComponent },
  { path: 'landing-page', component: LandingPageComponent },
  { path: 'confirmation', component: ConfirmationComponent },
  { path: 'update', component: UpdatedComponent },
  { path: 'cancel', component: LeaseCancelComponent },
  { path: '',   redirectTo: '/landing-page', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
