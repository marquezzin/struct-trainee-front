import { Link } from "react-router-dom"
import { useUserContext } from "../utils/UserContext"

export function Navbar() {
    const { user, logout } = useUserContext()

    return (
        <nav className="h-16 bg-gray-800 text-black flex items-center justify-center text-xl">
            <img src="/logo.png" alt="logo" className="absolute w-10 h-10 left-6" style={{animation: "rotate 5s linear infinite"}}/>

            <Link to="/" className="px-4 py-1 mx-10 rounded bg-white " style={{ fontFamily: "-moz-initial", fontSize: "24px" }}>HOME</Link>

            {user ? <></> : <Link to="/user/login" className="px-4 py-1 mx-10 rounded bg-white "style={{ fontFamily: "-moz-initial", fontSize: "24px" }}>LOGIN</Link>}
            {user ? <></> : <Link to="/user/signup" className="px-4 py-1 mx-10 rounded bg-white "style={{ fontFamily: "-moz-initial", fontSize: "24px" }}>SIGNUP</Link>}

            {user ? <Link to={`/user/profile`} className="px-4 py-1 mx-10 rounded bg-white "style={{ fontFamily: "-moz-initial", fontSize: "24px" }}>PROFILE</Link> : <></>}
            {user ? <button onClick={logout} className="px-4 py-1 mx-10 rounded bg-white "style={{ fontFamily: "-moz-initial", fontSize: "24px" }}>LOGOUT</button> : <></>}
            
            {user && user.is_admin ? <Link to={`/categories`} className="px-4 py-1 mx-10 rounded bg-white "style={{ fontFamily: "-moz-initial", fontSize: "24px" }}>CATEGORIES</Link> : <></>}
        </nav>
    )
}
