import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button data-text="Awesome" className="login-buttons" onClick={() => loginWithRedirect()}>
    <span class="actual-text">&nbsp;Login&nbsp;</span>
    <span class="hover-text" aria-hidden="true">&nbsp;Login&nbsp;</span>
</button>
};

export default LoginButton;