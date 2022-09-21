import React, {useEffect} from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const AuthContext = React.createContext([null, () => {}]);

export const AuthProvider = (props) => {
  const [auth, setAuth] = useLocalStorage("apiAuthKey", null);

  useEffect(() => {
    setAuth(auth)
  }, [])

  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
