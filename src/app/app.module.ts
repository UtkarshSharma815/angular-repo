

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FirstComponent} from './firstcomp';
import { LuckynumberComponent } from './luckynumber/luckynumber.component';
import { EmployeeComponent } from './employee/employee.component';
import {HelloName} from "./helloname"
import { FormsModule } from '@angular/forms';
import { PrintNameComponent } from './print-name.component';
import { DirectivecompComponent } from './directivecomp/directivecomp.component';
import { GreetingsComponent } from './greetings/greetings.component';
import { LoginComponent } from './login/login.component';
import { TestCodilityComponent } from './test-codility/test-codility.component';
import { Testcodility2Component } from './testcodility2/testcodility2.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    LuckynumberComponent,
    EmployeeComponent,
    HelloName,
    PrintNameComponent,
    DirectivecompComponent,
    GreetingsComponent,
    LoginComponent,
    TestCodilityComponent,
    Testcodility2Component],
  imports: [
    BrowserModule,
    FormsModule],
  providers: [],
 bootstrap: [AppComponent]
//  bootstrap: [FirstComponent]
})
export class AppModule { }
