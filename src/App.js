import Home from "./routes/home/home.component";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AudioClasses from "./routes/audio-classes/audio-classes.component";
import YogaPoses from "./routes/yoga-poses/yoga-poses.component";
import About from "./routes/about/about.components";
import NoPage from "./routes/no-page/no-page.component";
import "./App.css";
import Authentication from "./routes/authentication/authentication";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="audio-classes" element={<AudioClasses />} />
        <Route path="yoga-poses" element={<YogaPoses />} />
        <Route path="about" element={<About />} />
        <Route path="sign-in" element={<Authentication />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
