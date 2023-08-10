import { Link } from "react-router-dom"
import { useUserContext } from "../utils/UserContext"

export function Navbar() {
    const { user, logout } = useUserContext()

    return (
        <nav className="h-16 bg-green-800 text-black flex items-center justify-center text-xl">
            <Link to="/" className="px-4 py-1 mx-8 rounded bg-white text-3xl">HOME</Link>
            {user ? <></> : <Link to="/user/login" className="px-4 py-1 mx-8 rounded bg-white text-3xl">LOGIN</Link>}
            {user ? <></> : <Link to="/user/signup" className="px-4 py-1 mx-8 rounded bg-white text-3xl">SIGNUP</Link>}
            {user ? <Link to={`/user/dados`} className="px-4 py-1 mx-8 rounded bg-white text-3xl">PROFILE</Link> : <></>}
            {user ? <button onClick={logout} className="px-4 py-1 mx-8 rounded bg-white text-3xl">LOGOUT</button> : <></>}
        </nav>
    )
}
