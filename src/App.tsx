import './App.css';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from 'react';

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));

function App() {
  return (
    <div className="App">
      <BrowserRouter basename='/ghpagereact'>
      <nav>
        <ul>
          <li>
            <Link to="">Home</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
        </ul>
      </nav>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
