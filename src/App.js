import "./App.css";
import React from "react";
import { Navbar } from "./Navbar";
import { Dashboard } from "./Dashboard";
import { useSelector } from "react-redux";

function App() {
  const toggle = useSelector((state) => state.toggleReducer);

  return (
    <div className={`App ${toggle ? "overflow-hidden" : "overflow-auto"}`}>
      <section className={`w-full relative`}>
        <Navbar />
        <Dashboard />
      </section>
    </div>
  );
}

export default App;
