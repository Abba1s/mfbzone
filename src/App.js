import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home"

function App() {
  return (
    <BrowserRouter>
        <Header />
    <Routes>
          <Route path="/" Component={Home}></Route>
    </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
