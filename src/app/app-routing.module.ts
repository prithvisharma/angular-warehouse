import { AuthGuardService } from './service/auth-guard.service';
import { LoginComponent } from './auth/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './dashboard/home/home.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },

  { path: 'dashboard', component: HomeComponent, canActivate: [AuthGuardService] },
  {
    path: 'product/:category',
    loadChildren: () => import('./product/product.module')
      .then(m => m.ProductModule), canActivate: [AuthGuardService]
  },
  { path: 'login', component: LoginComponent },
  { path: 'api', loadChildren: () => import('./api/api.module').then(m => m.ApiModule) },
  { path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule), canActivate: [AuthGuardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
