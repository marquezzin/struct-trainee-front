import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../utils/api";
import { Post } from "./posts/Post";

export function Home(){
    const [categories, setCategories] = useState([]);
    const [valor, setValor] = useState("all");

    useEffect(() => {
        api.get("categories/index")
            .then((res) => { setCategories(res.data); })
            .catch((err) => alert("Error fetching categories."));
    }, []);

    const select = document.getElementById('select');
    if(select){
        select.addEventListener('change', function handleChange(event) {
            setValor(event.target.value)
        });
    }

    return (
        <section className="flex flex-col">
            <div className="flex self-center m-8">
                <div className="self-center text-2xl">
                    <select id="select" className="px-5 py-1.5 mx-5 bg-gray-100 text-black rounded-xl">
                        <option  className="text-black" value="all">Todas as Ligas</option>
                        {categories.map((cat) => (
                            <option className="text-black" value={cat.id}>{cat.name}</option>
                        ))}
                    </select>
                </div>
                <div className="self-center m-5 text-2xl">
                    <Link to="/createpost" className="px-5 py-1.5 mx-5 rounded-xl text-black bg-gray-100 text-2xl">POST</Link>
                </div>
            </div>

            <div className="self-center w-auto">
                <div>
                    <Post catId={valor}/>
                </div>
            </div>
        </section>
    )
}
