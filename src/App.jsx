import { Route, Routes } from "react-router-dom";
import ShopList from "./components/ShopList";
import ShopDetail from "./components/ShopDetail";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import Categories from "./components/Categories";
import HomePage from "./components/HomePage";

function App() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <Routes>
          {/* Add routes here */}

          {/* Login Component */}
          <Route path="/login" element={<Login />} />

          {/* Register Component */}
          <Route path="/register" element={<Register />} />

          {/* ShopDetail Component */}
          <Route path="/shop/:id" element={<ShopDetail />} />

          {/* Homepage Component */}
          <Route path="/" element={<HomePage />} />

          {/* ShopList Component */}
          <Route path="/category/:category" element={<ShopList />} />

          {/* Not Found Component */}
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
