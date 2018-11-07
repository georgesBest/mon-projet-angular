import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListAppareilsComponent } from './list-appareils/list-appareils.component';
import { AuthComponent } from './auth/auth.component';
import { ErrorNavComponent } from './error-nav/error-nav.component';
import { ViewAppareilComponent } from './view-appareil/view-appareil.component';
import { AddAppareilComponent } from './add-appareil/add-appareil.component'

const routes: Routes = [{path:'appareils',component:ListAppareilsComponent},
          {path:'appareils/:index',component:ViewAppareilComponent},
          {path:'add',component:AddAppareilComponent},
          {path:'auth',component:AuthComponent},
          {path:'',redirectTo: 'appareils', pathMatch: 'full'},
          {path:'**',component:ErrorNavComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
