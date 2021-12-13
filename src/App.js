import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import Books from "./components/Pages/Books/Books";
import Electronics from "./components/Pages/Electronics/Electronics";
import GiftFinder from "./components/Pages/GiftFinder/GiftFinder";
import InstitutionalOrder from "./components/Pages/InstitutionalOrder/InstitutionalOrder";
import Stationery from "./components/Pages/Stationery/Stationery";
import Blog from "./components/Pages/Blog/Blog";
import Offers from "./components/Pages/Offers/Offers";
import Login from "./components/Pages/Login/Login";
import ViewAll from "./components/Pages/ViewAll/ViewAll";

import { useSelector } from "react-redux";
import Admin from "./admin/Admin/Admin";

import Prodcutdet from "./components/Pages/Products/Prodcutdet";
import Cart from "./components/Pages/Cart/Cart";

function App() {
  const { role } = useSelector((state) => state.persistedStorage.currentUser);
  console.log(role);
  return (
    <>
      {role === "user" || role === "" ? (
        <div>
          <div className="navbar-fix">
            <Navbar />
          </div>
          <div className="contents">
            <Routes>
              <Route path="/" element={<Books />} />
              <Route path="/books" element={<Books />} />
              <Route path="/electronics" element={<Electronics />} />
              <Route path="/giftfinder" element={<GiftFinder />} />
              <Route
                path="/institutionalorder"
                element={<InstitutionalOrder />}
              />
              <Route path="/stationery" element={<Stationery />} />
              <Route path="/offers" element={<Offers />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/login" element={<Login />} />
              <Route path="/viewall" element={<ViewAll />} />
              <Route path="/product/:id" element={<Prodcutdet />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
            <div className="footer-down ">
              <Footer />
            </div>
          </div>
        </div>
      ) : (
        <Admin />
      )}
    </>
  );
}

export default App;
