import { Link } from "react-router-dom"
import { useUserContext } from "../utils/UserContext"

export function Navbar() {
    const { user, logout } = useUserContext()

    return (
        <nav className="h-16  bg-black text-black flex items-center justify-center text-xl">
            <img src="/logo.png" alt="logo" className="w-10 h-10 mr-16"  style={{animation: "rotate 5s linear infinite", // 5 segundos de duração, linear e repetição infinita
    }}/>
            <Link to="/" className="  px-6 py-1 mx-10 rounded bg-white " style={{ fontFamily: "-moz-initial", fontSize: "34px" }}>HOME</Link>
            {user ? <></> : <Link to="/user/login" className="px-6 py-1 mx-10 rounded bg-white "style={{ fontFamily: "-moz-initial", fontSize: "34px" }}>LOGIN</Link>}
            {user ? <></> : <Link to="/user/signup" className="px-6 py-1 mx-10 rounded bg-white "style={{ fontFamily: "-moz-initial", fontSize: "34px" }}>SIGNUP</Link>}
            {user ? <Link to={`/user/dados`} className="px-6 py-1 mx-10 rounded bg-white "style={{ fontFamily: "-moz-initial", fontSize: "34px" }}>PROFILE</Link> : <></>}
            {user ? <button onClick={logout} className="px-6 py-1 mx-10 rounded bg-white "style={{ fontFamily: "-moz-initial", fontSize: "34px" }}>LOGOUT</button> : <></>}
            {user && user.is_admin ? <Link to={`/categories`} className="px-6 py-1 mx-10 rounded bg-white "style={{ fontFamily: "-moz-initial", fontSize: "34px" }}>CATEGORIES</Link> : <></>}
        </nav>
    )
}
