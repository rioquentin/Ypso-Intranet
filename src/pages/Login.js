import React from 'react';
import {Auth0Provider, useAuth0} from '@auth0/auth0-react';
import AuthLogin from "../Components/Login/AuthLogin";
import { Navigate } from "react-router-dom"
import home from "./Home";


function LoginButton() {
  return (
        <Auth0Provider
                domain="dev-m47mu2bvpvwkeaq1.us.auth0.com"
                clientId="V09MOT4DfJbq1Smr31FkUNs2fPOMDeid"
                authorizationParams={{
                redirect_uri: window.location.origin
                }}
            >
            <AuthLogin className="LogButton"></AuthLogin>
        </Auth0Provider>


  )
}

export default LoginButton;