import { useState } from "react";
import { api } from "../../../utils/api";

export function AdminCreateCategoriesPage() {
    const [category, setCategory] = useState({
        name: ""
    })

    function validateCategory(cat){
        
    }

    function handleSubmit(e) {
        e.preventDefault();

        const { valid, message } = validateCategory(category); 

        if(valid) {
            api.post("categories/create", {
                category,
            }).then(() => {
                alert("Category created successfully");
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
                <input type="text" value={category.name} onChange={(e) => handleChange("name", e.target.value)} className="bg-gray-500 rounded text-xl mx-2" id="inp1"/>
            </div>
            <button className="bg-purple-600 rounded text-xl px-4 py-1">Create</button>
        </form>
      </section>
    )
  }
  