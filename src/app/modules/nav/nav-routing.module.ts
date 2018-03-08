import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', loadChildren: 'app/modules/home/home.module#HomeModule',
  },
  {
    path: 'buttons-section', loadChildren: 'app/modules/buttons/buttons.module#ButtonsModule'
  },
  {
    path: 'hotels', loadChildren: 'app/modules/hotels/hotels.module#HotelsModule'
  },
  {
    path: '', redirectTo: '', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class NavRoutingModule { }
