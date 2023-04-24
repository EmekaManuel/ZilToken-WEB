import { useEffect } from 'react'

import AOS from 'aos'
import "aos/dist/aos.css";
import ServicesCards from './ServicesCards';
import '../ComponentStyles/Services.css'
import Imagegif from '../assets/deploy-token.gif'



  
function Services() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
      return (
        <section id="services" className="services default-padding-4">
            <h3 className="section-title" data-aos="fade-right">Our Utilities</h3>
            <p className="section-text" data-aos="fade-right">The First Meme Token On Zilica With Cross-chain Utilities <br /> <a href="#" className="read-more hover-bold hover-rocket"> White-paper Doc</a></p>
            <div className="services-carousel swiper">
                <div className="services-cards swiper-wrapper d-flex jcsb">
                    <ServicesCards image={Imagegif} text="Product" text2="Discovery" />
                </div>
            </div>
            
    </section>
    )
}

export default Services
