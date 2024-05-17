import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client';
{{#if (isSelectedSecurity options.rootModel.toppingPlatforms)}}
{{#if (isSelectedEgovDefault options.rootModel.toppingPlatforms)}}
import KeycloakProvider from './keycloakProvider';
{{/if}}
import Keycloak from 'keycloak-js';
{{/if}}

const root = createRoot(document.getElementById("root"));

{{#if (isSelectedSecurity options.rootModel.toppingPlatforms)}}
const keycloak = new Keycloak({
  url: 'keycloak-server',
  realm: 'master',
  clientId: 'cliend-id',
  onLoad: 'login-required'
});

keycloak.init({ onLoad: 'login-required' }).then(authenticated => {
  if (!authenticated) {
    window.location.reload();
  } else {
    console.log("Authenticated");

  localStorage.setItem("jwt",keycloak.idToken)
  localStorage.setItem("username",keycloak.idTokenParsed.preferred_username)
  localStorage.setItem("roles",keycloak.tokenParsed.realm_access.roles.join(","))

    root.render(
      <React.StrictMode>
        <KeycloakProvider keycloak={keycloak}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </KeycloakProvider>
      </React.StrictMode>
    );
  }
}).catch(error => {
  console.error("Authentication Failed: ", error);
});
{{else}}
root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
);
{{/if}}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


<function>
window.$HandleBars.registerHelper('isSelectedSecurity', function (selectedSecurity) {
    try{
        var isSelectedSecurity = false
        for(var i=0; i<selectedSecurity.length; i++){
            if(selectedSecurity[i] == 'keycloak-security'){
                isSelectedSecurity =  true;
            }
        }

        return isSelectedSecurity;
    } catch(e){
        console.log(e)
    }
});

window.$HandleBars.registerHelper('isSelectedEgovDefault', function (toppings) {
    try{
        var isSelectedEgovDefault = false
        for(var i=0; i<toppings.length; i++){
            if(toppings[i].includes('egov-default')){
                isSelectedEgovDefault =  true;
            }
        }

        return isSelectedEgovDefault;
    } catch(e){
        console.log(e)
    }
});
</function>
