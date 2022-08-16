import {Col, Nav, Navbar, Row} from "react-bootstrap";
import {useState} from "react";
import {Link} from "react-router-dom";
import isumso from "../Images/isumsoP.png";

function App() {

     const [clickedTab,setClickedTab] = useState(localStorage.getItem('tab'));


    const handleMenuClick = (tabName) => {
        setClickedTab(tabName);
        localStorage.setItem('tab', tabName);
    }

    return (
       <Row>
           <Col>
               <Row>
                   <Col className="logo text-center pt-3">
                       <img src={isumso}
                            width="10%"
                            height="auto"
                            alt='Greet' />
                   </Col>
               </Row>
               <Row>
                   <div className="MenuBar">
                       <Navbar collapseOnSelect expand="lg" variant="dark" >
                           <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                           <Navbar.Collapse id="responsive-navbar-nav" >
                               <Nav className="pt-2 pb-4" >
                                   {
                                       (clickedTab === "Home") ?
                                           <Link to="/" className=" px-4 mx-2"
                                                 onClick={()=>handleMenuClick("Home")}
                                                 style={{borderBottom:"3px solid #9818f3", color:"#9818f3"}}>
                                               <label className="menu-tab-select py-1" >Home</label>
                                           </Link> :
                                           <Link to="/"
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
                                                 style={{borderBottom:"3px solid #9818f3", color:"#9818f3"}}>
                                               <label className="menu-tab-select py-1" >About</label>
                                           </Link> :
                                           <Link to="/about"
                                                 onClick={()=>handleMenuClick("About")}
                                                 className="menu-tab px-4 mx-2" >
                                               <label
                                                   className="menu-tab-select py-1">About</label>
                                           </Link>
                                   }
                                   {/*{*/}
                                   {/*    (clickedTab === "Projects") ?*/}
                                   {/*        <Link to="/projects" className=" px-4 mx-2"*/}
                                   {/*              onClick={()=>handleMenuClick("Projects")}*/}
                                   {/*              style={{borderBottom:"3px solid #9818f3", color:"#9818f3"}}>*/}
                                   {/*            <label className="menu-tab-select py-1" >Projects</label>*/}
                                   {/*        </Link> :*/}
                                   {/*        <Link to="/projects"*/}
                                   {/*              onClick={()=>handleMenuClick("Projects")}*/}
                                   {/*              className="menu-tab px-4 mx-2" >*/}
                                   {/*            <label*/}
                                   {/*                className="menu-tab-select py-1">Projects</label>*/}
                                   {/*        </Link>*/}
                                   {/*}*/}
                                   {
                                       (clickedTab === "Experience") ?
                                           <Link to="/experience" className=" px-4 mx-2"
                                                 onClick={()=>handleMenuClick("Experience")}
                                                 style={{borderBottom:"3px solid #9818f3", color:"#9818f3"}}>
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
                                           <Link to="/myprojects" className=" px-4 mx-2"
                                                 onClick={()=>handleMenuClick("UI Designs")}
                                                 style={{borderBottom:"3px solid #9818f3", color:"#9818f3"}}>
                                               <label className="menu-tab-select py-1" >Projects</label>
                                           </Link> :
                                           <Link to="/myprojects"
                                                 onClick={()=>handleMenuClick("UI Designs")}
                                                 className="menu-tab px-4 mx-2" >
                                               <label
                                                   className="menu-tab-select py-1">Projects</label>
                                           </Link>
                                   }
                                   {
                                       (clickedTab === "Graphics") ?
                                           <Link to="/graphics" className=" px-4 mx-2"
                                                 onClick={()=>handleMenuClick("Graphics")}
                                                 style={{borderBottom:"3px solid #9818f3", color:"#9818f3"}}>
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
                                       (clickedTab === "Skills") ?
                                           <Link to="/skills" className=" px-4 mx-2"
                                                 onClick={()=>handleMenuClick("Skills")}
                                                 style={{borderBottom:"3px solid #9818f3", color:"#9818f3"}}>
                                               <label className="menu-tab-select py-1" >Skill Wallet</label>
                                           </Link> :
                                           <Link to="/skills"
                                                 onClick={()=>handleMenuClick("Skills")}
                                                 className="menu-tab px-4 mx-2" >
                                               <label
                                                   className="menu-tab-select py-1">Skill Wallet</label>
                                           </Link>
                                   }
                                   {
                                       (clickedTab === "Recommendation") ?
                                           <Link to="/recommendation" className=" px-4 mx-2"
                                                 onClick={()=>handleMenuClick("Recommendation")}
                                                 style={{borderBottom:"3px solid #9818f3", color:"#9818f3"}}>
                                               <label className="menu-tab-select py-1" >Recommendations</label>
                                           </Link> :
                                           <Link to="/recommendation"
                                                 onClick={()=>handleMenuClick("Recommendation")}
                                                 className="menu-tab px-4 mx-2" >
                                               <label
                                                   className="menu-tab-select py-1">Recommendations</label>
                                           </Link>
                                   }
                               </Nav>
                           </Navbar.Collapse>
                       </Navbar>
                   </div>
               </Row>
           </Col>
       </Row>

    );
}

export default App;
