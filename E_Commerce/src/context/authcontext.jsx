import React, { createContext, useState } from 'react'

export const AuthContext=createContext();
const AuthcontextProvider = ({children}) => {
    const [isAuth, setIsAuth]=useState(true);
    
  return (
    <>
      <AuthContext.Provider value={{isAuth, setIsAuth}}>
        {children}
      </AuthContext.Provider>
    </>
  )
}

export default AuthcontextProvider
