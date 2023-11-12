import Aboutme from "./components/Aboutme";
import Contact from "./components/Contact";
import First from "./components/First";
import Lang from "./components/Lang";
import Merger from "./components/Merger";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Start from "./components/Start";
function App() {
  return (
    <div>
      <Start />
      {/* <First /> */}
      <Aboutme />
      <Projects />
      <Lang />
      <Contact />
    </div>
  );
}

export default App;
