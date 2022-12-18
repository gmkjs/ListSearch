import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OffersRoutingModule } from './offers-routing.module';
import { OfferComponent } from './offer/offer.component';
// import { RouterModule,Routes } from '@angular/router';


@NgModule({
  declarations: [
    OfferComponent
  ],
  imports: [
    CommonModule,
    OffersRoutingModule
  ]
})
export class OffersModule { }
