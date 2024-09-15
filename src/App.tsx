import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div className="min-h-screen  bg-gray-100">
        <Routes>
          {/* Ruta para la página de Login */}
          <Route path="/login" element={<Login />} />
          {/*Ruta para la página de registro */}
          <Route path="/register" element={<Register />} />
          {/*Ruta por defecto que rediriga aquí*/}
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
