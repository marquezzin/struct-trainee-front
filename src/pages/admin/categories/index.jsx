import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../../utils/api.js";

export function AdminIndexCategoriesPage() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        api.get("categories/index").then((res) => { setCategories(res.data); }).catch((err) => alert("error"));
    }, []);

    return (
        <div>
            <h1 className="m-5 text-3xl">Categories:</h1>
            <table className="m-5 w-96">
                <thead className="text-left">
                    <tr className="text-2xl">
                        <th className="">Id</th>
                        <th className="">Name</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map((cat) => { 
                        return(
                            <tr key={cat.id} className="text-xl">
                                <td>{cat.id}</td>
                                <td>{cat.name}</td>
                            </tr>
                        ); 
                    })}
                </tbody>
            </table>
            <Link className="text-xl text-purple-600 m-4" to="/categories/create">Create new</Link>
        </div>
    )
}
