import { Link } from "react-router-dom"

export function Navbar() {
    return (
        <nav className="h-16 bg-black text-white flex items-center justify-center text-xl">
            <Link to="/" className="px-2 py-0.5 mx-5 rounded bg-purple-600 text-2xl">home</Link>
            <Link to="/login" className="px-2 py-0.5 mx-5 rounded bg-purple-600 text-2xl">login</Link>
            <Link to="/signup" className="px-2 py-0.5 mx-5 rounded bg-purple-600 text-2xl">signup</Link>
            <Link to="/profile" className="px-2 py-0.5 mx-5 rounded bg-purple-600 text-2xl">profile</Link>
        </nav>
    )
}