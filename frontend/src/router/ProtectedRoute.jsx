import { AuthContext } from "../context/AuthContext";

import { useContext } from "react"

export default function ProtectedRoute({ children }) {
    const { authenticated, loading } = useContext(AuthContext)

    if(loading) {
        return <div>Loading...</div>
    }

    if(!authenticated) {
        return <Navigate to='/' />
    }

    return children
}