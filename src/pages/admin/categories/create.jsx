import { useState } from "react";
import { api } from "../../../utils/api";
import { useNavigate } from "react-router-dom";

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
                alert("Error creating category");
            });
        } else {
            alert(message);
        }
    }

    return (
      <section className="">
        <h1 className="self-center text-2xl m-5">Create a new Category</h1>
        <form onSubmit={handleSubmit} className="self-center m-5">
            <div className="my-5 w-96">
                <label className="text-xl" htmlFor="inp1">Name:</label>
                <input type="text" value={category.name} onChange={(e) => handleChange("name", e.target.value)} className="bg-gray-500 rounded text-xl mx-2 text-yellow-50" id="inp1"/>
            </div>
            <button className="bg-purple-600 rounded text-xl px-4 py-1">Create</button>
        </form>
      </section>
    )
  }
