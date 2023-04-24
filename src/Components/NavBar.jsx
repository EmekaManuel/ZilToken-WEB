import { useRef, useState } from 'react';
// import companyLogo from '../images/navigationImages/BOLDIN_LOGO.webp'
// import Contact from './Contact';
import FullScreenNav from './FullScreenNav';
import '../ComponentStyles/NavBar.css';

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [hellocontact, setHellocontact] = useState(false);

    const handleClick = () => {
        setToggle(!toggle);
    }
    const helloThere = () => {
        setHellocontact(!hellocontact);
        console.log("mallam")
    }
  return (
    <>
    {/* <nav className={!toggle ? "navigation home-navigation d-flex jcsb default-padding active" : "navigation home-navigation d-flex jcsb default-padding"}> */}
      <nav className="navigation home-navigation d-flex jcsb default-padding">
        <div className="logo">  
            {/* <img src={companyLogo} alt="mallam" /> logo goes here */} 
            <h3>ZilDoge</h3>
        </div>
        <div className="menu d-flex x-center y-center">
            <a href='#' className="contact-link link hover-bold hover-rocket" onClick={helloThere}>BUY ZDOGE</a>
            <div className="menu-toggler-alt" onClick={handleClick}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </nav>
      <FullScreenNav className={toggle} />
      {/* <Contact className={hellocontact} /> */}
      </>
  );
}
// className2={fullnavalt => setFullnavalt(fullnavalt)}
export default Navbar;