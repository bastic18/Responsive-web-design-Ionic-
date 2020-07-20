import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyeventsPageRoutingModule } from './myevents-routing.module';

import { MyeventsPage } from './myevents.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyeventsPageRoutingModule
  ],
  declarations: [MyeventsPage]
})
export class MyeventsPageModule {}
