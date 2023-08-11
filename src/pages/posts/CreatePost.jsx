import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../utils/UserContext";
import { api } from "../../utils/api";

export function CreatePost(){
    const {user} = useUserContext()
    const navigate=useNavigate()
    const [categories, setCategories] = useState([]);
    const [formData, setFormData] = useState({
        title: "",
        content: "",
        categoryId: "" // Categoria selecionada
    });
    function handleTitleChange(event) {
        setFormData({ ...formData, title: event.target.value });
    }

    function handleContentChange(event) {
        setFormData({ ...formData, content: event.target.value });
    }

    function handleCategoryChange(event) {
        setFormData({ ...formData, categoryId: event.target.value });
    }
    function handleSubmit(event) {
        event.preventDefault();
        console.log(formData)
        console.log(user)
        api.post("posts/create", {
            post:({
                title: formData.title,
                content: formData.content,
                category_id: formData.categoryId,
                user_id: `${user.id}`
            })
        })
        .then(() => {
            alert("Post created successfully");
            navigate("/")

            // Redirecionar ou realizar outras ações após a criação do post
        }).catch((err) => {
            alert("Error creating post");
        });
    }


    useEffect(() => {
        api.get("categories/index")
            .then((res) => { setCategories(res.data); })
            .catch((err) => alert("Error fetching categories."));
    }, []);

    return (
        <section className="flex flex-col">
            <div className="self-center mt-10 mb-2 text-2xl">
                <select className="px-5 py-1.5 mx-5 bg-gray-100 text-black rounded-xl" value={formData.categoryId}
                onChange={handleCategoryChange}>
                <option value="" className="text-black">Select a Category</option>
                    {categories.map((cat) => (
                        <option className="text-black" key={cat.id} value={cat.id}>{cat.name}</option>
                    ))}
                </select>
            </div>

            <div className="self-center w-96 mb-4 mt-2">
                <h1 className="text-xl"><span>TITLE:</span></h1>
                <form>
                    <textarea value={formData.title} onChange={handleTitleChange} type="text" className="border-solid border-gray-800 border-2 w-96 h-24 text-lg text-black" maxLength={130}></textarea>
                </form>
            </div>

            <div className="self-center w-96 mb-2">
                <h1 className="text-xl"><span>CONTENT:</span> </h1>
                <form>
                    <textarea value={formData.content} onChange={handleContentChange} type="text" className="border-solid border-gray-800 border-2 w-96 h-80 text-lg text-black" maxLength={600}></textarea>
                </form>
            </div>

            <div className="self-center m-2">
                <button onClick={handleSubmit} className="px-5 py-1.5 mx-5 rounded-xl text-black bg-gray-100 text-2xl">POST</button>
            </div>
        </section>
    )
}
