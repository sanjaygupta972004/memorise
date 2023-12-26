import { createContext,useContext } from "react";

import { useState } from "react";

const AuthContext = createContext()

export const AuthProvider = ({children}) => {

   const [accessToken, setAccessToken] = useState(localStorage.getItem("accessToken")) || null
   const [refreshToken, setRefreshToken] = useState(localStorage.getItem("refreshToken")) || null

   const localStoreAccessToken =(tokenServer)=>{
      return localStorage.setItem("accessToken", tokenServer)
   }

   const localStoreRefreshToken =(tokenServer)=>{
      return localStorage.setItem("refreshToken", tokenServer)
   }

  let  isLoggedIn = !!accessToken
  console.log("accessToken",isLoggedIn);

   const logoutUser = () => {
      setAccessToken("")
      setRefreshToken("")

    const accessToken=  localStorage.removeItem("accessToken")
    const refreshToken=   localStorage.removeItem("refreshToken")

    return {accessToken,refreshToken}

   }

   return (
      <AuthContext.Provider value={{localStoreAccessToken, localStoreRefreshToken,logoutUser,isLoggedIn}}>
         {children}
      </AuthContext.Provider>
   )

}

export const useAuth = () => useContext(AuthContext)
