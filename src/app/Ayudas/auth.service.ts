import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { v4 as uuidv4 } from 'uuid';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string = ''; // Nueva propiedad para almacenar el token
  constructor(private cookieService: CookieService) { }
  

  login(username: string, password: string): void {
    this.token = uuidv4(); // Asigna el token generado a la propiedad token
    // Aquí puedes realizar la lógica de autenticación simulada
    // Comprobar las credenciales, realizar validaciones, etc.

    if (username === 'derikaranda@gmail.com' && password === 'admin') {
      const token = uuidv4(); // Generar un token aleatorio
      const expirationDate = new Date(); // Fecha de expiración
      expirationDate.setDate(expirationDate.getDate() + 7); // El token expira en 7 días

      // Almacena el token en una cookie con una fecha de expiración
      this.cookieService.set('token', token, expirationDate);
      console.log('Token almacenado en la cookie');
    } else {
      console.error('Credenciales inválidas');
    }
  }

  logout(): void {
    // Elimina la cookie de token al cerrar sesión
    this.cookieService.delete('token');
    this.token = ''; // Borra el valor del token en la propiedad token del servicio
    console.log('Sesión cerrada');
  }

  isLoggedIn(): boolean {
    // Verifica si el usuario está autenticado comprobando la existencia del token en la cookie
    return this.cookieService.check('token');
  }
}
