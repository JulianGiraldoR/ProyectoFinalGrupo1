import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//components
import{ProductsComponent} from './components/products/products.component'
import{PrivateProductsComponent} from './components/private-products/private-products.component'
import{LoginComponent} from './components/login/login.component'
import{RegisterComponent} from './components/register/register.component'

import {AuthGuard} from './auth.guard'
import { FormComponent } from './components/form/form.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: '/products',
    pathMatch:'full'
  },
  {
    path:'products',
    component:ProductsComponent
  },
  {
    path:'private',
    component:PrivateProductsComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'form',
    component:FormComponent,
   
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
