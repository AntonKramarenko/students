import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from "./Components/header/Header";
import StudentsPage from "./pages/StudentsPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' exact element={<StudentsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
