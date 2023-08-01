import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesComponent } from './services/services.component';
import { ServiceItemComponent } from './services/service-item/service-item.component';
import { PackagesComponent } from './packages/packages.component';

const routes: Routes = [
  {path: '', component: ServicesComponent, pathMatch: 'full'},
  {path: 'packages', component: PackagesComponent},
  {path: ':id', component: ServiceItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
