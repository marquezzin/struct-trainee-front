import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../../utils/api";

export function AdminCreateCategoriesPage() {
    const navigate = useNavigate()
    const [category, setCategory] = useState({
        name: ""
    })

    function validateCategory(cat){
        if(!cat.name)
            return{valid: false, message:"Category needs name"}

        return{valid: true,message:"Category created!"}
    }
    function handleChange(key,value){
        setCategory((prevCategory) => {
            return {...prevCategory,[key]:value}
        })
    }

    function handleSubmit(e) {
        e.preventDefault();

        const { valid, message } = validateCategory(category);

        if(valid) {
            api.post("categories/create", {
                category,
            }).then(() => {
                alert("Category created successfully");
                navigate ('/categories')/* ir para página de categorias após criar uma */

            }).catch((err) => {
                console.error("Error creating category:", err);
                alert("Error creating category: " + err.message)
            });
        } else {
            alert(message);
        }
    }

    return (
      <section className="flex flex-col">
        <h1 className="self-center text-3xl m-7">Create a new Category</h1>
        <form onSubmit={handleSubmit} className="flex flex-col self-center mx-5">
            <div className="my-5 w-96 flex flex-col">
                <label className="text-xl self-center" htmlFor="inp1">Name:</label>
                <input type="text" value={category.name} onChange={(e) => handleChange("name", e.target.value)} className="bg-white rounded text-xl mx-2 text-black px-2" id="inp1"/>
            </div>
            <button className="self-center text-black bg-gray-100 rounded text-xl px-4 py-1">CREATE</button>
        </form>
      </section>
    )
  }
