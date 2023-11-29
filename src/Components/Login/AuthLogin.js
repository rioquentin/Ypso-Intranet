import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import "./Log.css"
import {Button} from "@mui/material";

const AuthLogin = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Button variant="contained"
            disableElevation
            color="primary"
      className="btn btn-primary btn-block"
      onClick={() => loginWithRedirect()}>

      Connecte toi </Button>

  );

};

export default AuthLogin;