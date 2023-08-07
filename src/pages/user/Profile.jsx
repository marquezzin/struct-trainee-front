import { Link } from "react-router-dom"

export function Profile() {
    return (
        <section className="flex flex-col">
            <img className="self-center m-5 w-32 h-32" src="../../../public/H.png"></img>
            <div className="self-center flex m-5">
                <p className="self-center text-xl mx-2">@username</p>
                <button className="text-purple-600 mx-2 text-sm">edit username</button>
            </div>
            <p className="self-center text-xl m-2">X points earned</p>
            <div className="self-center flex flex-col m-5">
                <p className="self-center text-2xl w-72">bio</p>
                <p className="self-center text-lg w-72 text-justify m-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel cupiditate a aspernatur ipsam tempore vero porro rem fugit tenetur deleniti veniam, maxime eius autem voluptas ratione modi quae ducimus maiores.</p>
                <button className="text-purple-600 text-sm">edit bio</button>
            </div>
            <div className="self-center py-5">
                <Link to="/login" className="px-4 py-1 mx-5 rounded bg-purple-600 text-xl">login</Link>
                <Link to="/signup" className="px-4 py-1 mx-5 rounded bg-purple-600 text-xl">signup</Link>
            </div>
        </section>
    )
}