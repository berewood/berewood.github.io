import {Routes, Route} from "react-router";
import BookingForm from "./booking";
import Directions from "./directions";
import Home from "./home";
import About from "./about";


const Router = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/book" element={<BookingForm />} />
        <Route path="/directions" element={<Directions />} />
    </Routes>
);

export default Router;
