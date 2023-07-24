import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/Ayudas/token.service';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/Ayudas/auth.service';
import { CanActivate, CanActivateFn, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  token: string = ''; 
  username: string = '';
  password: string = '';


  constructor(private router: Router, private authService: AuthService, private tokenService: TokenService, private http: HttpClient, private cookieService: CookieService) { }

  
  login(): void {
    this.authService.login(this.username, this.password);
    this.token = this.authService.token; // Asigna el token del servicio a la propiedad token del componente
    this.router.navigate(['home']); // Redirige al componente HomeComponent si el usuario está autenticado
  }

  logout(): void {
    this.authService.logout();
    this.token = '';
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

}
