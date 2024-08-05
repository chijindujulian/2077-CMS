import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ArticleList from "./components/ArticleList/ArticleList";
import ArticleDetail from "./components/ArticleDetail/ArticleDetail";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ThemeProviderComponent } from "./components/ThemeContext";
import About from "./components/pages/About";
import SupportUs from "./components/pages/Support";
import OurValues from "./components/pages/Values";

function App() {
  return (
    <ThemeProviderComponent>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Navigate to="/articles" />} />
            <Route path="/articles" element={<ArticleList />} />
            <Route path="/articles/:id" element={<ArticleDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/support" element={<SupportUs />} />
            <Route path="/values" element={<OurValues />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProviderComponent>
  );
}

export default App;
