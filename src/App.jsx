import "./App.css";
import Sandbox from "./components/sandbox/Sandbox.jsx";
import HelloWorld from "./components/HelloWorld.jsx";
import MultiSelectAccordian from "./components/accordian/MultiSelectAccordian.jsx";
import SingleSelectAccordian from "./components/accordian/SingleSelectAccordian.jsx";
import RandomColor from "./components/random-color/RandomColor.jsx";
import StarRating from "./components/rating/StarRating.jsx";
import ImageSlider from "./components/image-slider/ImageSlider.jsx";

function App() {
  return (
    <>
      <Sandbox />
      {/* <HelloWorld /> */}
      {/* <SingleSelectAccordian /> */}
      {/* <MultiSelectAccordian /> */}
      {/* <RandomColor /> */}
      {/* <StarRating noOfStars={5} /> */}
      <ImageSlider />
    </>
  );
}

export default App;
