import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../../utils/api";

export function AdminEditCategoriesPage() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [category, setCategory] = useState({
    name: ""
  });

  useEffect(() => {
    api.get(`categories/show/${id}`)
      .then((res) => setCategory(res.data))
      .catch((err) => alert("Error fetching category details."));
  }, [id]);

  function validateCategory(cat) {
    if (!cat.name)
      return { valid: false, message: "Category needs a name" };

    return { valid: true, message: "Category updated!" };
  }

  function handleChange(key, value) {
    setCategory((prevCategory) => {
      return { ...prevCategory, [key]: value };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const { valid, message } = validateCategory(category);

    if (valid) {
      api.patch(`categories/update/${id}`, {
        category,
      })
        .then(() => {
          alert("Category updated successfully");
          navigate("/categories");
        })
        .catch((err) => {
          alert("Error updating category");
        });
    } else {
      alert(message);
    }
  }

  return (
    <section className="flex flex-col">
      <h1 className="self-center text-2xl m-5 text-black ">EDIT CATEGORY</h1>
      <form onSubmit={handleSubmit} className="flex flex-col self-center mx-5">
        <div className="my-5 w-96 flex flex-col">
          <label className="text-2xl self-center text-black" htmlFor="inp1">NAME:</label>
          <input
            type="text"
            value={category.name}
            onChange={(e) => handleChange("name", e.target.value)}
            className="bg-white text-black rounded-2xl  border-black text-xl mx-2"
            id="inp1"
          />
        </div>
        <button className="bg-white text-black rounded-2xl text-xl px-4 py-1 self-center">UPDATE</button>
      </form>
    </section>
  );
}
