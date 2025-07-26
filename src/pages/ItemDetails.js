import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { ItemContext } from "../context/ItemContext";
import "./ItemDetails.css";

const currentUser = "Alice Johnson"; // Same mock user

function ItemDetails() {
  const { id } = useParams();
  const { items, setItems } = useContext(ItemContext);

  const item = items.find((itm) => itm.id === id);

  if (!item) {
    return (
      <div style={{ padding: "2rem" }}>
        <h2>Item not found</h2>
        <Link to="/">Go back</Link>
      </div>
    );
  }

  const handleRequest = () => {
    if (item.available && !item.sold && !item.borrowedBy) {
      const updatedItems = items.map((itm) =>
        itm.id === id ? { ...itm, available: false, borrowedBy: currentUser } : itm
      );
      setItems(updatedItems);
      alert("Request to borrow sent successfully (mock)");
    }
  };

  return (
    <div className="details-container">
      <h2>{item.name}</h2>
      <img src={item.image} alt={item.name} />
      <p><strong>Description:</strong> {item.description}</p>
      <p><strong>Category:</strong> {item.category}</p>
      <p><strong>Condition:</strong> {item.condition}</p>
      <p><strong>Owner:</strong> {item.owner}</p>
      <p><strong>Status:</strong> {item.sold ? "Sold" : item.available ? "Available" : `Borrowed by ${item.borrowedBy}`}</p>

      {item.available && !item.sold ? (
        <button onClick={handleRequest} className="request-btn">Request to Borrow</button>
      ) : (
        <button disabled style={{ opacity: 0.6 }}>Not Available</button>
      )}

      <br /><br />
      <Link to="/" className="back-link">← Back to Catalog</Link>
    </div>
  );
}

export default ItemDetails;
