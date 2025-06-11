import { pkce } from "@okta/okta-auth-js";

const myAppConfig = {
  oidc: {
        clientId: '0oap4pct8qTjg9JQl5d7',
        issuer:'https://dev-40471649.okta.com/oauth2/default',
        redirectUri: 'http://localhost:4200/login/callback',
        scopes:['openid','profile','email'],
        pkce: true
    }
};

export default myAppConfig;
