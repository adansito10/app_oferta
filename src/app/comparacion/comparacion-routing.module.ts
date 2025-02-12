import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComparacionPage } from './comparacion.page';

const routes: Routes = [
  {
    path: '',
    component: ComparacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComparacionPageRoutingModule {}
