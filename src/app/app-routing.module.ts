import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { AuthService } from './Ayudas/auth.service';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'perfil', component: PerfilComponent }, // Ruta protegida por el guardia de autenticación
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
