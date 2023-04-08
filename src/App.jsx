import Favs from "./Routes/Favs";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Detail from "./Routes/Detail";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ContextProvider } from "./Components/utils/global.context";

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/favorites" element={<Favs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>

          
        </BrowserRouter>
        <Footer />
      </ContextProvider>
    </div>
  );
}

export default App;