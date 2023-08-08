import { Link } from "react-router-dom"

export function Home(){
    return (
        <section className="flex flex-col">
            <div className="self-center m-5 text-2xl">
                <select className="mx-5 bg-gray-600 rounded">
                    <option>Cat 1</option>
                    <option>Cat 2</option>
                    <option>Cat 3</option>
                </select>
                <Link to="/post" className="px-5 py-0.5 mx-5 rounded bg-purple-600 text-2xl">post</Link>
            </div>

            <div className="self-center">
                <h1>POSTS</h1>
                <h1>POSTS</h1>
                <h1>POSTS</h1>
            </div>

            <div className="self-center m-5">
                <button className="px-4 py-0.5 mx-5 rounded bg-purple-600 text-xl">more</button>
            </div>
        </section>
    )
}