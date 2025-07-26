import React, { useState, useContext } from "react";
import { ItemContext } from "../context/ItemContext";
import { useNavigate } from "react-router-dom";
import "./AddItem.css";

const currentUser = "Alice Johnson";

function AddItem() {
  const { setItems } = useContext(ItemContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    description: "",
    category: "",
    condition: "",
    image: ""
  });

  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, description, category, condition, image } = form;

    if (!name || !description || !category || !condition || !image) {
      setError("All fields are required.");
      return;
    }
    setError("");
    const success = Math.random() < 0.8;

    if (success) {
      const newItem = {
        id: `itm${Date.now()}`,
        ...form,
        owner: currentUser,
        available: true,
        borrowedBy: null,
        sold: false
      };

      setItems(prev => [...prev, newItem]);
      setMessage("Item added successfully!");

      // Optionally navigate back after 2 sec
      setTimeout(() => navigate("/"), 2000);
    } else {
      setMessage("Oops! Failed to add item. Please try again.");
    }
  };

  return (
    <div className="add-container">
      <h2>Add New Item</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Item Name" value={form.name} onChange={handleChange} />
        <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} />
        <select name="category" value={form.category} onChange={handleChange}>
          <option value="">Select Category</option>
          <option value="Tools">Tools</option>
          <option value="Outdoors">Outdoors</option>
          <option value="Kitchen">Kitchen</option>
          <option value="Fitness">Fitness</option>
          <option value="Games">Games</option>
        </select>
        <input name="condition" placeholder="Condition (e.g. Good, New)" value={form.condition} onChange={handleChange} />
        <input name="image" placeholder="Image URL" value={form.image} onChange={handleChange} />

        <button type="submit">Add Item</button>
      </form>

      {error && <p className="error">{error}</p>}
      {message && <p className="message">{message}</p>}
    </div>
  );
}

export default AddItem;
