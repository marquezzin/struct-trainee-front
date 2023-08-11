import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../../utils/api.js";

export function AdminIndexCategoriesPage() {
    const [categories, setCategories] = useState([]);
    const [updates, setUpdates] = useState(0);

    function forceUpdateIndex() {
        setUpdates(updates + 1);
    }

    useEffect(() => {
        api.get("categories/index")
            .then((res) => { setCategories(res.data); })
            .catch((err) => alert("Error fetching categories."));
    }, [updates]);

    return (
        <div className="flex flex-col">
            <h1 className="mx-5 my-5 text-3xl self-center text-white">CATEGORIES:</h1>
            <div className="self-center">
                <div className="max-w-md">
                    <table className="mx-5 border-collapse">
                        <thead className="text-left">
                            <tr className="text-xl ">
                                <th className="p-2 border-white text-white">Id</th>
                                <th className="p-2 border-white text-white">Name</th>
                                <th className="p-2 border-white text-white">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {categories.map((cat) => (
                                <tr key={cat.id} className="text-lg">
                                    <td className="p-2 border border-white text-white">{cat.id}</td>
                                    <td className="p-2 border border-white text-white">{cat.name}</td>
                                    <td className="p-2 border border-white flex items-center space-x-2">
                                        <Link to={`/categories/update/${cat.id}`} className="text-gray-500">EDIT</Link>
                                        <button className="text-red-500" onClick={() => {
                                            if (window.confirm(`Do you really want to delete the category: ${cat.name}?`)) {
                                                api.delete(`categories/delete/${cat.id}`)
                                                    .then(() => {
                                                        alert(`Category ${cat.name} has been deleted.`);
                                                        forceUpdateIndex();
                                                    })
                                                    .catch(() => alert("An unexpected error occurred while deleting."));
                                            }
                                        }}>DELETE</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="flex flex-col justify-center">
                    <Link className="bg-white text-black text-xl rounded-xl px-4 py-1 m-5 self-center" to="/categories/create">Create new</Link>
                </div>
            </div>
        </div>
    );
}

