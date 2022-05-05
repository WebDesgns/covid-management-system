import React, { useContext, useState, useEffect } from "react"
import { auth } from "../firebase";


const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [user, setUser] = useState()

    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }

    function logout() {
        return auth.auth().signOut()
    }

    function resetPassword(email) {
        return auth.auth().sendPasswordResetEmail(email)
    }

    function updateEmail(email) {
        return user.updateEmail(email)
    }

    function updatePassword(password) {
        return user.updatePassword(password)
    }

    useEffect(() => {
        console.log("hello");
        const unsubscribe = auth.onAuthStateChanged((currentUser) => {
            setUser(currentUser)
        })

        return unsubscribe
    }, [setUser])

    const value = {
        user,
        setUser,
        login,
        signup,
        logout,
        resetPassword,
        updateEmail,
        updatePassword
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}