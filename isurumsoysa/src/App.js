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

function App() {
  return (
    <Container fluid>
        <Router>
                <MenuBar/>
            <Routes>
                <Route path="/home" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/graphics" element={<Graphics/>} />
                <Route path="/projects" element={<Projects/>} />
                <Route path="/experience" element={<Experience/>} />
                <Route path="/uidesigns" element={<UIdesigns/>} />
            </Routes>
        </Router>
    </Container>


  );
}

export default App;
