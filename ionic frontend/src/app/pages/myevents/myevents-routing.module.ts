import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyeventsPage } from './myevents.page';

const routes: Routes = [
  {
    path: '',
    component: MyeventsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyeventsPageRoutingModule {}
