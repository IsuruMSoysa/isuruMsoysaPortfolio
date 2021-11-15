import { Nav, Navbar} from "react-bootstrap";
import {useState} from "react";
import {Link} from "react-router-dom";

function App() {

    const [clickedTab,setClickedTab] = useState("Home");

    const handleMenuClick = (tabName) => {
        setClickedTab(tabName);
    }

    return (
        <div className="MenuBar pt-2">
            <Navbar collapseOnSelect expand="lg"  >
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="py-4" >
                                {
                                    (clickedTab === "Home") ?
                                        <Link to="/home" className=" px-4 mx-2"
                                                  onClick={()=>handleMenuClick("Home")}
                                                  style={{borderBottom:"3px solid #6F10B4", color:"#6F10B4"}}>
                                            <label className="menu-tab-select py-1" >Home</label>
                                        </Link> :
                                        <Link to="/home"
                                            onClick={()=>handleMenuClick("Home")}
                                            className="menu-tab px-4 mx-2" >
                                            <label
                                                className="menu-tab-select py-1">Home</label>
                                        </Link>
                                }
                                {
                                    (clickedTab === "About") ?
                                        <Link to="/about" className=" px-4 mx-2"
                                              onClick={()=>handleMenuClick("About")}
                                              style={{borderBottom:"3px solid #6F10B4", color:"#6F10B4"}}>
                                            <label className="menu-tab-select py-1" >About</label>
                                        </Link> :
                                        <Link to="/about"
                                              onClick={()=>handleMenuClick("About")}
                                              className="menu-tab px-4 mx-2" >
                                            <label
                                                className="menu-tab-select py-1">About</label>
                                        </Link>
                                }
                                {
                                    (clickedTab === "Graphics") ?
                                        <Link to="/graphics" className=" px-4 mx-2"
                                              onClick={()=>handleMenuClick("Graphics")}
                                              style={{borderBottom:"3px solid #6F10B4", color:"#6F10B4"}}>
                                            <label className="menu-tab-select py-1" >Graphics</label>
                                        </Link> :
                                        <Link to="/graphics"
                                              onClick={()=>handleMenuClick("Graphics")}
                                              className="menu-tab px-4 mx-2" >
                                            <label
                                                className="menu-tab-select py-1">Graphics</label>
                                        </Link>
                                }
                                {
                                    (clickedTab === "Projects") ?
                                        <Link to="/projects" className=" px-4 mx-2"
                                              onClick={()=>handleMenuClick("Projects")}
                                              style={{borderBottom:"3px solid #6F10B4", color:"#6F10B4"}}>
                                            <label className="menu-tab-select py-1" >Projects</label>
                                        </Link> :
                                        <Link to="/projects"
                                              onClick={()=>handleMenuClick("Projects")}
                                              className="menu-tab px-4 mx-2" >
                                            <label
                                                className="menu-tab-select py-1">Projects</label>
                                        </Link>
                                }
                                {
                                    (clickedTab === "Experience") ?
                                        <Link to="/experience" className=" px-4 mx-2"
                                              onClick={()=>handleMenuClick("Experience")}
                                              style={{borderBottom:"3px solid #6F10B4", color:"#6F10B4"}}>
                                            <label className="menu-tab-select py-1" >Experience</label>
                                        </Link> :
                                        <Link to="/experience"
                                              onClick={()=>handleMenuClick("Experience")}
                                              className="menu-tab px-4 mx-2" >
                                            <label
                                                className="menu-tab-select py-1">Experience</label>
                                        </Link>
                                }
                                {
                                    (clickedTab === "UI Designs") ?
                                        <Link to="/uidesigns" className=" px-4 mx-2"
                                              onClick={()=>handleMenuClick("UI Designs")}
                                              style={{borderBottom:"3px solid #6F10B4", color:"#6F10B4"}}>
                                            <label className="menu-tab-select py-1" >UI Designs</label>
                                        </Link> :
                                        <Link to="/uidesigns"
                                              onClick={()=>handleMenuClick("UI Designs")}
                                              className="menu-tab px-4 mx-2" >
                                            <label
                                                className="menu-tab-select py-1">UI Designs</label>
                                        </Link>
                                }
                            </Nav>
                        </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default App;
