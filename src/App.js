import "./App.css";
import { SampleLogo } from "./components/NewGame/SampleLogo";
import { GreenRectangle } from "./components/NewGame/GreenRectangle";

import { SomeQuoteHere } from "./components/NewGame/SomeQuoteHere";
import { Button } from "./components/NewGame/Button";
function App() {
  return (
    <div className="container-centrer-horizontal">
      <div className="sample-wireframe screen">
        <div className="navigation-c">
          <SampleLogo spanText="DB" spanText2="agency"></SampleLogo>
        </div>
        <div className="hero-e">
          <div className="overlap-group1">
            <GreenRectangle></GreenRectangle>
            <SomeQuoteHere quote="2022 JTI كون نتا و لانتي الفائز معانا بهدايا "></SomeQuoteHere>
            <Button label="إبدإ اللعب"></Button>
            <p style={{ zIndex: "1" }}>جميع الحقوق محفوظة © 2022</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
