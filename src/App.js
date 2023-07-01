import Nav from "./components/Nav";
import Hero from "./pages/Hero";
import Explore from "./pages/Explore";
import { Route, Routes } from "react-router-dom";
import Search from "./pages/Search";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Nav />
      <main className="container mx-auto max-w-5xl px-6">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Explore />
              </>
            }
          />
          <Route path="explore" element={<Explore />} />
          <Route path="search/:key" element={<Search />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
