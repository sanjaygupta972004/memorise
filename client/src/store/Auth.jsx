import { createContext,useContext } from "react";

const AuthContext = createContext()

export const AuthProvider = ({children}) => {
   const localStoreAccessToken =(tokenServer)=>{
      return localStorage.setItem("accessToken", tokenServer)
   }
   const localStoreRefreshToken =(tokenServer)=>{
      return localStorage.setItem("refreshToken", tokenServer)
   }


   return (
      <AuthContext.Provider value={{localStoreAccessToken, localStoreRefreshToken}}>
         {children}
      </AuthContext.Provider>
   )

}

export const useAuth = () => useContext(AuthContext)
