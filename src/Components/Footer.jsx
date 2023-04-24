import {Link} from "react-router-dom"
// import Contact from './Contact'
// import companyLogo from '../images/footerImages/BOLDIN_LOGO.webp'
import '../ComponentStyles/FooterStyles.css'

function Footer() {
    return (
        <footer id="footer" className="footer default-padding-4">
            {/* <Contact /> */}
            <div className="footer-inner d-flex jcsb">
                <div className="footer-logo column-25">
                    <div className="logo">
                        {/* <img src={companyLogo} alt="Company's Logo" /> */}
                        <h2>ZIL DOGE  </h2>
                    </div>
                </div>
                <div className="footer-links-container d-flex flex-column column-15">
                    <ul className="footer-links">
                        <li><a href="#">Work with us</a></li>
                        <li><Link to="/about-us">About ZDoge</Link></li>
                    </ul>
                    <a href="#" className="footer-social-link">Github</a>
                </div>
                <div className="footer-links-container d-flex flex-column column-15">
                    <ul className="footer-links">
                        <li><Link to="/our-services">Services</Link></li>
                        <li><Link to="/contact-us">Contact us</Link></li>
                    </ul>
                    <a href="#" className="footer-social-link">Twitter</a>
                </div>
                <div className="footer-links-container d-flex flex-column column-15">
                    <ul className="footer-links">
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Cookies Policy</a></li>
                    </ul>
                    <a href="#" className="footer-social-link">Reddit</a>
                </div>
                <div className="footer-address column-15">
                    <div>
                        <h5><a href="mailto:hello@boldin.co">hello@zildoge.co</a></h5>
                        <h5><a href="tel:+234 90651 33849" className="telephone">215-647-5795</a></h5>
                        <span className="address">
                                2489, Mandan Road, Philadelphia, <br /> United States.
                        </span>
                    </div>
                </div>
            </div>
                <div className="footer-credits">
                    &copy; 2023 ZILDoge.
                </div>
        </footer>
    )
}

export default Footer