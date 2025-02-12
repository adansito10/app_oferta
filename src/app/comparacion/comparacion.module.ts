import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComparacionPageRoutingModule } from './comparacion-routing.module';

import { ComparacionPage } from './comparacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComparacionPageRoutingModule
  ],
  declarations: [ComparacionPage]
})
export class ComparacionPageModule {}
