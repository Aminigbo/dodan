import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Homepage />} />
      </Routes>
    </>
  );
}

export default App;
