import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import SponsorsModal from "./components/SponsorsModal";
// import VoteModal from "./components/VoteModal";
import Category from "./pages/Category";
import Homepage from "./pages/Homepage";
import Sponsors from "./pages/Sponsors";
import Govs from "./pages/gov";
import Vote from "./pages/vote";
import Mins from "./pages/ministers"
import LGA from "./pages/lga"
import SEN from "./pages/sen"
import ROLE_MODEL from "./pages/role-model"


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
        <Route path="/governors" exact element={<Govs />} />
        <Route path="/vote/:category/:id" exact element={<Vote />} />
        <Route path="/ministers" exact element={<Mins />} />
        <Route path="/lga" exact element={<LGA />} />
        <Route path="/senators" exact element={<SEN />} />
        <Route path="/role-model" exact element={<ROLE_MODEL />} />
      </Routes>
      {/* <VoteModal /> */}
      <SponsorsModal/>
    </>
  );
}

export default App;
