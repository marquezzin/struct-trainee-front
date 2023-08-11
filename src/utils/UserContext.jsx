import Cookies from "js-cookie";
import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../utils/api";
import { useNavigate } from "react-router-dom";

const userContext = createContext(null);
const navigate = useNavigate()

 function handleSetDefaultHeaders(email, authentication_token){
     api.defaults.headers.common["X-User-Email"] = email
     api.defaults.headers.common["X-User-Token"] = authentication_token
 }

export const UserContextProvider = ({children}) => {
    const [user, setUser] = useState();

    async function login({ email, password }){
        return api.post("users/login",{email,password}).then((res)=>{

            // console.log(res.data)
            setUser(res.data)
            handleSetDefaultHeaders(res.data.email, res.data.authentication_token);
                if (res.data.is_admin) {

                    alert("Successfully logged in as admin");
                } else {

                    alert("Successfully logged in");

                }

                // Cookies.set("email", res.data.email)
                // Cookies.set("authentication_token", res.data.authentication_token)
        })
    }

    async function logout(){
        alert("Loggin out...")
        navigate("/")
        // Cookies.remove("email")
        // Cookies.remove("authentication_token")
        handleSetDefaultHeaders("", "");
        setUser(null)
    }

    // useEffect(() => {
    //     const email = Cookies.get("email")
    //     const authentication_token = Cookies.get("authentication_token")
    //     if(email && authentication_token){
    //         handleSetDefaultHeaders(email, authentication_token);
    //         api.get("/users").then((res) => setUser(res.data));
    //     }
    // }, [])


    return (<userContext.Provider value={{ user, login, logout }}>
        {children}
    </userContext.Provider>)
}

export function useUserContext(){
    return useContext(userContext);
}
