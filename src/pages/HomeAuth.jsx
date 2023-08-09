import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../utils/api";
import { Post } from "./posts/Post";

export function HomeAuth(){
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        api.get("categories/index")
            .then((res) => { setCategories(res.data); })
            .catch((err) => alert("Error fetching categories."));
    }, []);

    const select = document.getElementById('select');
    if(select){
        select.addEventListener('change', function handleChange(event) {
            console.log(event.target.value);
            const valor = event.target.value;
        });
    }

    return (
        <section className="flex flex-col">
            <div className="self-center m-5 text-2xl">
                <select id="select" className="mx-5 px-2 py-1 bg-white text-black rounded-2xl">
                    <option className="text-black" value="all">Todas Categorias</option>
                    {categories.map((cat) => (
                        <option className="text-black" value={cat.id}>{cat.name}</option>
                    ))}
                </select>
            </div>
            <div className="self-center m-5 text-2xl">
                <Link to="/createpost" className="px-5 py-1 mx-5 rounded-2xl text-black bg-white text-2xl">POST</Link>
            </div>

            <div className="self-center w-auto">
                <div>
                    <Post cat={1}/>
                </div>
            </div>
            <div className="self-center m-5 text-2xl">
                <Link to="/user/dados" className="px-5 py-1 mx-5 rounded-2xl text-black bg-white text-2xl">PROFILE</Link>
            </div>
        </section>
    )
}
