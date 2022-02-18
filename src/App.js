import React from "react";
import { Route, Routes } from "react-router-dom";
import VoteModal from "./components/VoteModal";
import Category from "./pages/Category";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/category/:id" exact element={<Category />} />
      </Routes>
      <VoteModal />
    </>
  );
}

export default App;
