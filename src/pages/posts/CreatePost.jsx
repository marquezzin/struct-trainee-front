import { useEffect, useState } from "react";
import { api } from "../../utils/api";

export function CreatePost(){
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        api.get("categories/index")
            .then((res) => { setCategories(res.data); })
            .catch((err) => alert("Error fetching categories."));
    }, []);

    return (
        <section className="flex flex-col">
            <div className="self-center mt-10 mb-2 text-2xl">
                <select className="px-5 py-1.5 mx-5 bg-gray-100 text-black rounded-xl">
                    {categories.map((cat) => (
                        <option className="text-black" value={cat.id}>{cat.name}</option>
                    ))}
                </select>
            </div>

            <div className="self-center w-96 mb-4">
                <h1 className="text-xl">Title:</h1>
                <form>
                    <textarea type="text" className="border-solid border-white border w-96 h-24 text-lg" maxLength={130}></textarea>
                </form>
            </div>

            <div className="self-center w-96 mb-4">
                <h1 className="text-xl">Content:</h1>
                <form>
                    <textarea type="text" className="border-solid border-white border w-96 h-80" maxLength={600}></textarea>
                </form>
            </div>
            
            <div className="self-center m-4">
                <button className="px-5 py-1.5 mx-5 rounded-xl text-black bg-gray-100 text-2xl">POST</button>
            </div>
        </section>
    )
}