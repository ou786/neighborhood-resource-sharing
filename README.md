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

### 1. Clone the Repository


```bash
git clone https://github.com/ou786/neighborhood-resource-sharing.git
cd neighborhood-resource-sharing
```
### 2. Install dependencies
```bash
npm install
```
### 3. Start development server
```bash
npm start
```