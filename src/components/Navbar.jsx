import { Link } from "react-router-dom"
import { useUserContext } from "../utils/UserContext"

export function Navbar() {
    const { user, logout } = useUserContext()

    return (
        <nav className="h-16  bg-black text-black flex items-center justify-center text-xl">
            <img src="/logo.png" alt="logo" className=" absolute w-10 h-10 left-6"  style={{animation: "rotate 5s linear infinite", // 5 segundos de duração, linear e repetição infinita
    }}/>
            <Link to="/" className="  px-6 py-1 mx-10 rounded bg-white " style={{ fontFamily: "-moz-initial", fontSize: "20px" }}>HOME</Link>
            {user ? <></> : <Link to="/user/login" className="px-6 py-1 mx-10 rounded bg-white "style={{ fontFamily: "-moz-initial", fontSize: "20px" }}>LOGIN</Link>}
            {user ? <></> : <Link to="/user/signup" className="px-6 py-1 mx-10 rounded bg-white "style={{ fontFamily: "-moz-initial", fontSize: "20px" }}>SIGNUP</Link>}
            {user ? <Link to={`/user/dados`} className="px-6 py-1 mx-10 rounded bg-white "style={{ fontFamily: "-moz-initial", fontSize: "20px" }}>PROFILE</Link> : <></>}
            {user ? <button onClick={logout} className="px-6 py-1 mx-10 rounded bg-white "style={{ fontFamily: "-moz-initial", fontSize: "20px" }}>LOGOUT</button> : <></>}
            {user && user.is_admin ? <Link to={`/categories`} className="px-6 py-1 mx-10 rounded bg-white "style={{ fontFamily: "-moz-initial", fontSize: "20px" }}>CATEGORIES</Link> : <></>}
        </nav>
    )
}
