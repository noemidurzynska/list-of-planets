import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanetListComponent } from './planet-list/planet-list.component';
import { PlanetDetailsComponent } from './planet-details/planet-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/planet-list', pathMatch: 'full' },
  { path: 'planet-list', component: PlanetListComponent },
  { path: ':name/:rotation_period/:orbital_period/:diameter/:climate/:gravity/:terrain/:surface_water/:population/planet-details', component: PlanetDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
