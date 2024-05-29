import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./components/Home";
import MarketPlace from "./components/MarketPlace";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";
import Collection from "./components/Collection";
import Clients from "./components/Clients";
import CreateAndSell from "./components/CreateAndSell";
import Choose from "./components/Choose";
import NFTform from "./components/NFTform";
import MintNFT from "./components/MintNFT";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar/>
      <Routes>
        <Route path="/" element={<><Home /> <Collection/> <MarketPlace/> </>} />
        <Route path="/marketplace" element={<MarketPlace />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/create-and-sell" element={<CreateAndSell />} />
        <Route path="/choose" element={<Choose />} />
        <Route path="/nft-management" element={<NFTform />} />
        <Route path="/mint-nft" element={<MintNFT/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
