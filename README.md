# 📦 Neighborhood Share

**Neighborhood Share** is a community-driven web application that allows users to list, request, and share items within their local neighborhood. Whether it's tools, games, or kitchen appliances, this platform helps neighbors connect and collaborate.

---

## 🚀 Features

- 🛠️ Add and manage shareable items  
- 🔍 Filter and sort by name, category, and owner  
- 📍 View item locations on an interactive map  
- 🙋 Request to borrow available items  
- 👤 View profile and personal item listings  
- 📦 Status indicators: Available, Borrowed, Sold

---

## 🧰 Tech Stack

- **Frontend**: React (with Context API)  
- **Styling**: CSS3  
- **Maps**: Leaflet + OpenStreetMap  
- **Deployment**: GitHub + Vercel

---

## 📁 Folder Structure

src/
├── components/
│ ├── Navbar.js
│ └── ItemCard.js
├── context/
│ └── ItemContext.js
├── data/
│ └── mockItems.js
│ └── mapItems.js
├── pages/
│ ├── AddItem.js
│ ├── Home.js
│ ├── ItemDetails.js
│ ├── MapView.js
│ ├── MyRequest.js
│ ├── NotFound.js
│ ├── UserProfile.js
├── App.js
└── index.js


---

## 🧪 Getting Started

**Clone the repository**

```bash
git clone https://github.com/ou786/neighborhood-resource-sharing
cd neighborhood-share


Install dependencies

bash
Copy
Edit
npm install
Start development server

bash
Copy
Edit
npm start