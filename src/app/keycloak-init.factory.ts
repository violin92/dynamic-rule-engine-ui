// src/app/keycloak-init.factory.ts

import { KeycloakService } from 'keycloak-angular';
import keycloakConfig from './keycloak.config';

export function initializeKeycloak(keycloak: KeycloakService) {
    return () =>
        keycloak.init({
            config: keycloakConfig,
            initOptions: {
                onLoad: 'check-sso',
                checkLoginIframe: false
            }
        });
}
