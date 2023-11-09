import Aboutme from "./components/Aboutme";
import First from "./components/First";
import Lang from "./components/Lang";
import Merger from "./components/Merger";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
function App() {
  return (
    <div>
      <Nav />
      <Merger />
      <First />
      <Aboutme />
      <Lang />
      <Projects />
    </div>
  );
}

export default App;
