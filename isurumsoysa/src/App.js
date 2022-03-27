import './App.css';
import MenuBar from "./Components/MenuBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from "react-bootstrap";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Graphics from "./Components/Graphics";
import Projects from "./Components/Projects";
import Experience from "./Components/Experience";
import UIdesigns from "./Components/UIdesigns";
import Copyright from "./Components/Copyright";
import Recommendation from "./Components/Recommendation";
import Skills from "./Components/Skills";

function App() {
  return (
    <Container fluid>
        <Router>
                <MenuBar/>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/graphics" element={<Graphics/>} />
                <Route path="/skills" element={<Skills/>} />
                {/*<Route path="/projects" element={<Projects/>} />*/}
                <Route path="/experience" element={<Experience/>} />
                <Route path="/myprojects" element={<UIdesigns/>} />
                <Route path="/recommendation" element={<Recommendation/>} />
            </Routes>
                <Copyright/>
        </Router>
    </Container>


  );
}

export default App;
