import { Component } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from 'src/app/Ayudas/auth.service'; 

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }

  canActivate(): boolean {
    if (this.authService.isLoggedIn()) {
      return true; // El usuario está autenticado, permite la navegación
    } else {
      this.router.navigate(['/login']); // El usuario no está autenticado, redirige al componente de inicio de sesión
      return false;
    }
  }
}
