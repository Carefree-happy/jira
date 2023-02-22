import React from "react";
import { AuthenticatedApp } from "authenticatedApp";
import { useAuth } from "context/auth-context";
import { UnauthenticatedApp } from "unauthenticated-app";

function App() {
  const { user } = useAuth();
  return <>{user ? <AuthenticatedApp /> : <UnauthenticatedApp />}</>;
}

export default App;
