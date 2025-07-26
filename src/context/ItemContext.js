import React, { createContext, useState, useEffect } from "react";
import mockItems from "../data/mockItems";

export const ItemContext = createContext();

export const ItemProvider = ({ children }) => {
  const [items, setItems] = useState(() => {
    const localData = localStorage.getItem("items");
    return localData ? JSON.parse(localData) : mockItems;
  });

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <ItemContext.Provider value={{ items, setItems }}>
      {children}
    </ItemContext.Provider>
  );
};
