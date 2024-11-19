import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { CardsComponent } from './cards/cards.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CardsComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
],
  exports:[
    CardsComponent
  ]
})
export class CardsModule { }
