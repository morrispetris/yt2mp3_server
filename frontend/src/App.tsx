import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Converter from "./components/Converter";
import AvailableDownloads from "./components/AvailableDownloads";
import LoadingView from "./components/LoadingView";
import Header from "./components/Header";

function App() {
  return (
    <div className="AppWrapper">
      <div className="App">
        <Router>
          <Header />
          <Routes>
            <Route path="" element={<Converter />} />
            <Route path="/view/downloads" element={<AvailableDownloads />} />
            <Route
              path="/view/downloads/:downloadId"
              element={<LoadingView />}
            />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
