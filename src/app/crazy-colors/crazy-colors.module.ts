import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CrazycolorsService } from './crazy-colors.service';
import { CrazycolorsRoutingModule } from './crary-colors-routing.module';
import { CrazycolorsComponent } from './crazy-colors/crazy-colors.component';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    CrazycolorsRoutingModule
  ],
  declarations: [
    CrazycolorsComponent],
  providers: [CrazycolorsService]
})
export class crazycolorsModule { }
