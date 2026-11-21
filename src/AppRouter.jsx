import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "./App";
import Gallery from "./Gallery";
import { Cards } from "./Cards";
import WishMaker from "./WishMaker";
import Message from "./Message";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/cards" element={<Cards />} />
      <Route path="/wish-maker" element={<WishMaker />} />
      <Route path="/message" element={<Message />} />
    </Routes>
  );
};

export default AppRouter;
