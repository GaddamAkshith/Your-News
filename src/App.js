import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import NavBar from "./components/NavBar/NavBar";
import News from "./components/News/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { router } from "./config/config";
import Search from "./components/Search/Search";
import Footer from "./components/Images/Footer/Footer";
import { useSelector } from "react-redux";


function App() {
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Router>
        <NavBar />
        <div style={{ flex: 1 }}>
          <Routes>
            {router.map((path) => (
              <Route
                exact
                key={uuidv4()}
                path={path.path}
                element={
                  <News
                    key={path.key}
                    newscategory={path.category}
                    country={path.country}
                  />
                }
              />
            ))}
            <Route path="/search/:query" element={<Search />} />
          </Routes>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
