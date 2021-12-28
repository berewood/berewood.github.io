import {Routes, Route} from "react-router";
import BookingForm from "./booking";
import Directions from "./directions";

const Router = () => (
    <Routes>
        <Route path="/" element={
            <div style={{flexGrow: 1}}>HOME</div>
        } />
        <Route path="/about" element={
            <div>ABOUT</div>
        } />
        <Route path="/book" element={<BookingForm />} />
        <Route path="/directions" element={<Directions />} />
    </Routes>
)

export default Router;
