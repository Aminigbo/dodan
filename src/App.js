import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import SponsorsModal from "./components/SponsorsModal";
import VoteModal from "./components/VoteModal";
import Category from "./pages/Category";
import Homepage from "./pages/Homepage";
import Sponsors from "./pages/Sponsors";

function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/category/:id" exact element={<Category />} />
        <Route path="/sponsor/:id" exact element={<Sponsors />} />
      </Routes>
      <VoteModal />
      <SponsorsModal/>
    </>
  );
}

export default App;
