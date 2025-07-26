import React, { useContext } from "react";
import { ItemContext } from "../context/ItemContext";
import "./UserProfile.css";

const user = {
  userId: "usr123",
  name: "Alice Johnson",
  email: "alice@example.com",
  trustScore: 9.5,
};

function UserProfile() {
  const { items } = useContext(ItemContext);

  const lentItems = items.filter(item => item.owner === user.name);
  const borrowedItems = items.filter(item => item.borrowedBy === user.name);

  return (
    <div className="profile-container">
      <h2>My Profile</h2>
      <div className="profile-box">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Trust Score:</strong> {user.trustScore}/10</p>
        <p><strong>Items Lent:</strong> {lentItems.length}</p>
        <p><strong>Items Borrowed:</strong> {borrowedItems.length}</p>
      </div>

      <div className="profile-items">
        <h3>Items I've Lent</h3>
        {lentItems.length > 0 ? (
          <ul>
            {lentItems.map(item => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        ) : <p>No items lent yet.</p>}

        <h3>Items I've Borrowed</h3>
        {borrowedItems.length > 0 ? (
          <ul>
            {borrowedItems.map(item => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        ) : <p>No items borrowed yet.</p>}
      </div>
    </div>
  );
}

export default UserProfile;
