import { Link } from "react-router-dom"

export function Navbar() {
    return (
        <nav className="h-16 bg-green-800 text-black flex items-center justify-center text-xl">
            <Link to="/" className="px-4 py-1 mx-8 rounded bg-white text-3xl">HOME</Link>
            <Link to="/user/login" className="px-4 py-1 mx-8 rounded bg-white text-3xl">LOGIN</Link>
            <Link to="/user/signup" className="px-4 py-1 mx-8 rounded bg-white text-3xl">SIGNUP</Link>
        </nav>
    )
}
