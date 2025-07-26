// src/pages/Home.js
import React, { useContext, useState } from "react";
import { ItemContext } from "../context/ItemContext";
import ItemCard from "../components/ItemCard";
import "./Home.css";

function Home() {
  const { items } = useContext(ItemContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("");

  // Filter and sort logic
  const filteredItems = items
    .filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "category") return a.category.localeCompare(b.category);
      if (sortBy === "owner") return a.owner.localeCompare(b.owner);
      return 0;
    });

  return (
    <div className="home-container">
      <h1>Neighborhood Item Catalog</h1>

      <div className="filters">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="" disabled hidden>Sort By</option>
          <option value="name">Name</option>
          <option value="category">Category</option>
          <option value="owner">Owner</option>
        </select>
      </div>

      <div className="item-grid">
        {filteredItems.length > 0 ? (
          filteredItems.map(item => (
            <ItemCard key={item.id} item={item} />
          ))
        ) : (
          <p>No items found.</p>
        )}
      </div>
    </div>
  );
}

export default Home;
