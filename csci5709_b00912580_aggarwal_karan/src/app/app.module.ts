import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landingPage/landingPage.component';
import { CruiseHeaderComponent } from './cruise-header/cruise-header.component';
import { CruiseFooterComponent } from './cruise-footer/cruise-footer.component';
import { CruiseLeaseComponent } from './cruise-lease/cruise-lease.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { UpdatedComponent } from './updated/updated.component';
import { LeaseCancelComponent } from './lease-cancel/lease-cancel.component';

@NgModule({
  declarations: [								
    AppComponent,
      LandingPageComponent,
      CruiseHeaderComponent,
      CruiseFooterComponent,
      CruiseLeaseComponent,
      ConfirmationComponent,
      UpdatedComponent,
      LeaseCancelComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
