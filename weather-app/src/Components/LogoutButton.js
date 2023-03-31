import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
     <button data-text="Awesome" className="login-buttons" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
    <span class="actual-text">&nbsp;LogOut&nbsp;</span>
    <span class="hover-text" aria-hidden="true">&nbsp;LogOut&nbsp;</span>
</button>
  );
};

export default LogoutButton;