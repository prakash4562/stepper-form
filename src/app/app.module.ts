import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormComponentComponent } from './form-component/form-component.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { MatStepperModule } from "@angular/material/stepper";
import { StepperFormComponent } from './stepper-form/stepper-form.component';


@NgModule({
  declarations: [
    AppComponent,
    FormComponentComponent,
    ReactiveFormComponent,
    StepperFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

