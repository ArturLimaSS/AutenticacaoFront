import React from "react";
import userServices from "../../Api/apiServices";
import { useAuth } from "../../Context/AuthContext";
import { Button } from "@mui/material";

const Logout = () => {
    const { setIsLogged, setUser } = useAuth();
    const auth_token = localStorage.getItem('auth_token')
    const handleLogout = async () => {
        try {
            const response = await userServices.logout(auth_token);
            console.log(response)
            if (response.data.status === "success") {
                localStorage.removeItem('auth_token');
                localStorage.removeItem('user');
                setUser(null);
                setIsLogged(false);
                window.location.reload();
                alert(response.data.message)
                
            } else {
                console.error(response.data.error);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (

        <Button onClick={handleLogout}>Logout</Button>
    );
};

export default Logout;