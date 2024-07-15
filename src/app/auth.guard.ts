import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { KeycloakAuthGuard, KeycloakService } from 'keycloak-angular';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard extends KeycloakAuthGuard implements CanActivate {

    constructor(protected override readonly router: Router, protected readonly keycloak: KeycloakService) {
        super(router, keycloak);
    }

    public async isAccessAllowed(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
        if (!this.authenticated) {
            await this.keycloak.login();
        }

        const requiredRoles: string[] = route.data['roles'];
        if (!requiredRoles || requiredRoles.length === 0) {
            return true;
        }

        return requiredRoles.some((role: string) => this.roles.includes(role));
    }
}
