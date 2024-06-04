import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import EagleBot from "./components/EagleBot";
import FlipCards from "./components/FlipCards";

function App() {

  return (
    <div className="bg-red-500">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="eagle-bot" element={<EagleBot />} />
            <Route path="flip-cards" element={<FlipCards />} />
            <Route path="about-us" element={<FlipCards />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </div>


  )
}

export default App
