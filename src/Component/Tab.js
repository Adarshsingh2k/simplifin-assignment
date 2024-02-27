import React, { useEffect, useState } from "react";
import Search from "./Search";
import Giphy from "./Giphy";
import Sticker from "./Sticker";

const Tab = () => {
  const [activeTab, setActiveTab] = useState(
    localStorage.getItem("activeTab") || "Gifs"
  );

  useEffect(() => {
    localStorage.setItem("activeTab", activeTab);
  }, [activeTab]);
  return (
    <div style={{ gap: "20px" }}>
      <button onClick={() => setActiveTab("Gifs")}>GIFs</button>
      <button onClick={() => setActiveTab("Stickers")}>Stickers</button>
      <button onClick={() => setActiveTab("Search")}>Search</button>
      {activeTab === "Gifs" && <Giphy />}
      {activeTab === "Stickers" && <Sticker />}
      {activeTab === "Search" && <Search />}
    </div>
  );
};

export default Tab;
