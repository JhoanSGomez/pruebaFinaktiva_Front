import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

@Injectable({ providedIn: 'root' })
export class AuthLoginGuard implements CanActivate {
  constructor(private readonly router: Router) { }
  canActivate(): boolean {
    if (localStorage.getItem('token')) {
      this.router.navigate(['/navigation']);
      return false;
    }
    return true;
  }
}