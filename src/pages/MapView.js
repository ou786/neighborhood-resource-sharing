import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useNavigate } from "react-router-dom";
import mapItems from "../data/mapItems";
import "./MapView.css";

const ResizeFix = () => {
  const map = useMap();
  useEffect(() => {
    map.invalidateSize();
  }, [map]);
  return null;
};

function MapView() {
  const [filter, setFilter] = useState("");
  const navigate = useNavigate();

  const filteredItems = filter
    ? mapItems.filter(item => item.category === filter)
    : mapItems;

  return (
    <div className="map-page">
      <h2 className="map-heading">Item Locations</h2>

      <select
        onChange={(e) => setFilter(e.target.value)}
        value={filter}
        className="map-dropdown"
      >
        <option value="">All Categories</option>
        <option value="Tools">Tools</option>
        <option value="Outdoors">Outdoors</option>
        <option value="Kitchen">Kitchen</option>
      </select>

      <div className="map-wrapper">
        <MapContainer
          center={[28.462, 77.042]}
          zoom={13}
          scrollWheelZoom={true}
          className="map"
        >
          <ResizeFix />
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {filteredItems.map((item) => (
            <Marker key={item.itemId} position={[item.lat, item.lng]}>
              <Popup>
                <strong>{item.name}</strong><br />
                {item.address}<br />
                <button
                  className="details-btn"
                  onClick={() => navigate(`/items/${item.itemId}`)}
                >
                  View Details
                </button>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}

export default MapView;
