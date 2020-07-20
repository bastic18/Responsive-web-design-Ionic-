import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisibilityPage } from './visibility.page';

const routes: Routes = [
  {
    path: '',
    component: VisibilityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisibilityPageRoutingModule {}
