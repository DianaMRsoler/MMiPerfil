import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilComponent } from './Pages/perfil/perfil.component';

import { ExitoComponent } from './Pages/exito/exito.component';

const routes: Routes = [
  { path: '', redirectTo: 'mi_perfil', pathMatch: 'full' },
  { path: 'mi_perfil', component: PerfilComponent, },
  { path: 'exito', component: ExitoComponent, },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
