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

function App() {
  return (
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
          <Route path="/institutionalorder" element={<InstitutionalOrder />} />
          <Route path="/stationery" element={<Stationery />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
