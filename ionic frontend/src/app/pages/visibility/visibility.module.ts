import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisibilityPageRoutingModule } from './visibility-routing.module';

import { VisibilityPage } from './visibility.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VisibilityPageRoutingModule
  ],
  declarations: [VisibilityPage]
})
export class VisibilityPageModule {}
