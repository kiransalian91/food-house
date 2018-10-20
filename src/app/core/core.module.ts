import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

import { HttpService } from './services/http.service';
import { LoggerService } from './services/logger.service';
import { ValidatorsService } from './services/validators.service';
import { CommonService } from './services/common.services';

import { CommonComponentsComponent } from './common-components/common-components.component';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from './../shared/shared.module';
import { NotificationsComponent } from './notifications/notifications.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BsDropdownModule,
    SharedModule
  ],
  exports: [
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    CommonComponentsComponent,
    HeaderComponent
  ],
  providers: [HttpService, LoggerService, ValidatorsService, CommonService],
  declarations: [CommonComponentsComponent, HeaderComponent, NotificationsComponent]
})
export class CoreModule { }
