import { Link } from "react-router-dom"

export function Navbar() {
    return (
        <nav className="h-16 bg-black text-white flex items-center justify-center text-xl">
            <Link to="/" className="px-4 py-1 mx-5 rounded bg-purple-600 text-3xl">home</Link>
            <Link to="/user" className="px-4 py-1 mx-5 rounded bg-purple-600 text-3xl">user</Link>
        </nav>
    )
}