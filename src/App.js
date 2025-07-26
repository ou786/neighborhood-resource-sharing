import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ItemDetails from './pages/ItemDetails';
import AddItem from './pages/AddItem';
import NotFound from './pages/NotFound';
import Navbar from "./components/Navbar";
import MyRequests from './pages/MyRequests';
import UserProfile from './pages/UserProfile';
import MapView from './pages/MapView';



function App() {
  return (

    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/items/:id" element={<ItemDetails />} />
      <Route path="/add-item" element={<AddItem />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/my-requests" element={<MyRequests />} />
      <Route path="/profile" element={<UserProfile />} />
      <Route path="/map" element={<MapView />} />
    </Routes>
    </>
  );
}

export default App;
