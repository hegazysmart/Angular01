import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { ItemComponent } from './item/item.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'home',component: HomeComponent},
  {path:'profile',component: ProfileComponent},
  {path:'home/:id',component: ItemComponent},
  {path:'cart', component: CartComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
