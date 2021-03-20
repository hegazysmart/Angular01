import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration/registration.component';
import { LogginComponent } from './loggin/loggin.component';



@NgModule({
  declarations: [RegistrationComponent, LogginComponent],
  imports: [
    CommonModule
  ]
})
export class AuthModuleModule { }
