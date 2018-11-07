import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonPremierComponent } from './mon-premier/mon-premier.component';
import { ListAppareilsComponent } from './list-appareils/list-appareils.component';
import { ListAppareilsItemComponent } from './list-appareils-item/list-appareils-item.component';

import  { AppareilsService} from './services/Appareils.service';
import { AuthComponent } from './auth/auth.component';
import { ErrorNavComponent } from './error-nav/error-nav.component';
import { ViewAppareilComponent } from './view-appareil/view-appareil.component';
import { AddAppareilComponent } from './add-appareil/add-appareil.component';

@NgModule({
  declarations: [
    AppComponent,
    MonPremierComponent,
    ListAppareilsComponent,
    ListAppareilsItemComponent,
    AuthComponent,
    ErrorNavComponent,
    ViewAppareilComponent,
    AddAppareilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AppareilsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
