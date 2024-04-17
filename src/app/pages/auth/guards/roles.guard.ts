import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';

@Injectable({ providedIn: 'root' })
export class RolesGuard implements CanActivate {
  constructor(private readonly router: Router, private readonly toastrSvc: ToastrService) { }
  canActivate(route: ActivatedRouteSnapshot): boolean {
    return this.checkUserlLogin(route);
  }

  checkUserlLogin(route: ActivatedRouteSnapshot): boolean {
    const expectedRole = route.data['role'];
    const currentRole = localStorage.getItem('role');

    if( expectedRole.includes(currentRole)){
      return true;  
    }
    this.toastrSvc.warning("No tiene permisos para ingresar a esta pagina", "Advertencia");
    //this.router.navigate(['/navigation']);
    return false;
  }
}