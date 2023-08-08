import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
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
    <section className="">
      <h1 className="self-center text-2xl m-5">Edit Category</h1>
      <form onSubmit={handleSubmit} className="self-center m-5">
        <div className="my-5 w-96">
          <label className="text-xl" htmlFor="inp1">
            Name:
          </label>
          <input
            type="text"
            value={category.name}
            onChange={(e) => handleChange("name", e.target.value)}
            className="bg-gray-500 rounded text-xl mx-2 text-yellow-50"
            id="inp1"
          />
        </div>
        <button className="bg-purple-600 rounded text-xl px-4 py-1">Update</button>
      </form>
    </section>
  );
}