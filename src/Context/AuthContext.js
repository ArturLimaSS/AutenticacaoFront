import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from '@mui/material/Backdrop';
import { createContext, useContext, useEffect, useState } from "react";
import userServices from "../Api/apiServices";
export const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isLogged, setIsLogged] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const auth_token = localStorage.getItem('auth_token');

  const Login = (data) => {
    userServices.login(data).then(async (response) => {
      if (response.data.error) {
        alert(response.data.error)
      } else {
        localStorage.setItem('auth_token', response.data.data.token)
        localStorage.setItem('user', response.data.data.user);

        await userServices.user({
          headers: {
            'Authorization': `Bearer ${ response.data.data.token }`
          }
        })
          .then((response) => {
            if (response.status === 200 && response.data) {
              console.log(response.data)
              setUser(response.data)
              console.log(user)
              setIsLogged(true);
            } else {
              localStorage.clear('auth_token')
              localStorage.clear('user')
              setIsLogged(false)
            }
          })
          .catch((error) => {
            console.error(error);
          });
      }
    });
  }

  useEffect(() => {
    const loadingStoreData = async () => {
      setIsLoading(true);

      if (auth_token !== null) {
        const headers = {
          headers: {
            'Authorization': `Bearer ${ auth_token }`
          }
        };

        try {
          const response = await userServices.user(headers);
          if (response.status === 200 && response.data) {
            setUser(response.data);
            setIsLogged(true);
          }
        }
        catch (error) {
          console.error(error);
          localStorage.removeItem('auth_token');
          setUser(null);
          setIsLogged(false);
        }
      }
      setIsLoading(false)
    };

    loadingStoreData();
  }, [auth_token]);


  return (
    <AuthContext.Provider value={{ user, signed: !!user, isLogged, Login, auth_token, setUser, setIsLogged }}>
      {isLoading ? (
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open="true"
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : (
        children
      )}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext);
};