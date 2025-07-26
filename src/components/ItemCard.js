import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ItemContext } from "../context/ItemContext";
import "./ItemCard.css";

const currentUser = "Alice Johnson"; // 🔐 Mocked owner

function ItemCard({ item }) {
  const navigate = useNavigate();
  const { setItems } = useContext(ItemContext);

  const handleMarkAsSold = () => {
    setItems(prevItems =>
      prevItems.map(i =>
        i.id === item.id ? { ...i, sold: true, available: false } : i
      )
    );
  };

  return (
    <div className={`item-card ${item.sold || !item.available ? "unavailable" : ""}`}>
      <img src={item.image} alt={item.name} />
      <h3>{item.name}</h3>
      <p><strong>Category:</strong> {item.category}</p>
      <p><strong>Owner:</strong> {item.owner}</p>
      <p><strong>Status:</strong> {item.sold ? "Sold" : item.available ? "Available" : "Borrowed"}</p>

      <div style={{ marginTop: "10px" }}>
        <button onClick={() => navigate(`/items/${item.id}`)}>
  View Details
</button>


        {item.owner === currentUser && !item.sold && (
          <button
            onClick={handleMarkAsSold}
            className="sold-btn"
            style={{ marginLeft: "10px", background: "#dc3545" }}
          >
            Mark as Sold
          </button>
        )}
      </div>
    </div>
  );
}

export default ItemCard;
