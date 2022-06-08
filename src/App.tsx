import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./AppRouter";
import Footer from "./sections/Footer/Footer";
import Header from "./sections/Header/Header";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <AppRouter />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
