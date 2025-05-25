import Home from "./pages/Home";
import Redirect from "./pages/Redirect";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/:id" element={<Redirect />}/>
        <Route path="/404" element={<div>404 Not found</div>}/>
      </Routes>
    </BrowserRouter>
  );
}
