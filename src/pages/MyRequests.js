import React, { useContext, useState } from "react";
import { ItemContext } from "../context/ItemContext";
import "./MyRequests.css";

const currentUser = "Alice Johnson";

function MyRequests() {
  const { items, setItems } = useContext(ItemContext);
  const [message, setMessage] = useState("");

  const myRequests = items.filter(item => item.borrowedBy === currentUser);

  const cancelRequest = (id) => {
    const updatedItems = items.map(item =>
      item.id === id
        ? { ...item, borrowedBy: null, available: true }
        : item
    );
    setItems(updatedItems);
    setMessage("Request cancelled successfully.");
  };

  return (
    <div className="requests-container">
      <h2>My Borrow Requests</h2>

      {myRequests.length === 0 ? (
        <p>You have not requested any items yet.</p>
      ) : (
        <>
          {myRequests.map(item => (
            <div className="request-card" key={item.id}>
              <img src={item.image} alt={item.name} />
              <div>
                <h4>{item.name}</h4>
                <p><strong>Owner:</strong> {item.owner}</p>
                <p><strong>Status:</strong> Pending</p>
                <button onClick={() => cancelRequest(item.id)}>
                  Cancel Request
                </button>
              </div>
            </div>
          ))}
        </>
      )}

      {message && <p className="success-msg">{message}</p>}
    </div>
  );
}

export default MyRequests;
