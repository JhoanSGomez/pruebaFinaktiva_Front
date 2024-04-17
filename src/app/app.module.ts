import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { RegisterEvent } from './pages/register-event/register-event.component';
import { ConsultEvent } from './pages/consult-event/consult-event.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SignInModule } from './pages/auth/sign-in/sign-in.module';
import { SignUpModule } from './pages/auth/sign-up/sign-up.module';


@NgModule({
  declarations: [
    AppComponent,
    ConsultEvent,
    RegisterEvent
  ],
  imports: [
    SignInModule,
    SignUpModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      preventDuplicates: true,
      positionClass: 'toast-top-right',
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
