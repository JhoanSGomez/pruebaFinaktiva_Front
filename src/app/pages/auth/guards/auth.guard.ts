import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';

@Injectable({ providedIn : 'root' })
export class AuthGuard implements CanActivate{
  constructor(private readonly router: Router, private readonly toastrSvc: ToastrService){}
  canActivate(): boolean{
    if (!localStorage.getItem('token')){
      this.toastrSvc.warning("Debe iniciar sesión", "Advertencia");
      this.router.navigate(['/sign-in']);
      return false;
    }
    return true;
  }
}