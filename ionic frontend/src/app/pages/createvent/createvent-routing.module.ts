import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateventPage } from './createvent.page';

const routes: Routes = [
  {
    path: '',
    component: CreateventPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateventPageRoutingModule {}
