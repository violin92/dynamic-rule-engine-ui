// src/app/keycloak.config.ts

const keycloakConfig = {
    url: 'http://localhost:8180/', // Keycloak server URL
    realm: 'dre-app', // Your realm name
    clientId: 'angular-app', // Your client ID
};

export default keycloakConfig;
