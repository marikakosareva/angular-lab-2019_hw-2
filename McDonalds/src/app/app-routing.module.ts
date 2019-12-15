import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { CartComponent } from './components/cart/cart.component';


const routes: Routes = [
  { path: 'menu', component: MenuComponent },
  // { path: 'prodects/:id', component: HeroDetailComponent },
  { path: 'cart', component: CartComponent },
  { path: '',
    redirectTo: '/menu',
    pathMatch: 'full'
  },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
