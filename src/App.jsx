import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import "./App.css";
import "./index.css";
import Header from "./components/Header";
import Editor from "./components/Editor";
import Viewer from "./components/Viewer";

function App() {

  return (
    <>

      <Router>
        <Header />
        <Routes>
          <Route path="/guest" element={<Viewer />} />
          <Route path="/editor" element={<Editor />} />
          <Route path="*" element={<Navigate to="/editor" replace />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
