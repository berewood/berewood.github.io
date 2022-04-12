import {Routes, Route} from "react-router";
import BookingForm from "./booking";
import Directions from "./directions";
import Home from "./home";
import About from "./about";
import Images from "./image";

const Router = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/book" element={<BookingForm />} />
        <Route path="/directions" element={<Directions />} />
        <Route path="/images" element={<Images />} />
    </Routes>
);

export default Router;
