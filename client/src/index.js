import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import {Auth0Provider} from "@auth0/auth0-react"



const domain = process.env.REACT_APP_AUTH0_DOMAIN
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID
console.log("This is the domain: ",domain)
console.log("This is the clientId:",clientId )

ReactDOM.render(
    <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri={window.location.origin}
    >
        <App />
    </Auth0Provider>
    , 
    document.getElementById("root")
    );
registerServiceWorker();
