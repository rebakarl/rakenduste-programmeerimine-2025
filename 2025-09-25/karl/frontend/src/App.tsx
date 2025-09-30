import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Cats from "./components/Cats";
import Todos from "./components/Todos";
import AdminTodos from "./components/AdminTodos";

function App() {
  return (
    <Router>
      <nav style={{ display: 'flex', gap: '2rem', marginBottom: '2rem', fontSize: '1.2rem' }}>
        <Link to="/">Cats</Link>
        <Link to="/todos">Todos</Link>
        <Link to="/admin">Admin TODO Panel</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Cats />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/admin" element={<AdminTodos />} />
      </Routes>
    </Router>
  );
}

export default App;
