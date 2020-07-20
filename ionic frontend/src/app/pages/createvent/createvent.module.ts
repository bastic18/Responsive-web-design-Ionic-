import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateventPageRoutingModule } from './createvent-routing.module';

import { CreateventPage } from './createvent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateventPageRoutingModule
  ],
  declarations: [CreateventPage]
})
export class CreateventPageModule {}
