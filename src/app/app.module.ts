import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import {FormsModule}  from '@angular/forms';
import { EmployeelistService } from './employeelist.service';
import {HttpClientModule} from '@angular/common/http';
import { from } from 'rxjs';
@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [EmployeelistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
