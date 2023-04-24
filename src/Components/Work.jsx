import {useEffect } from 'react'
import AOS from 'aos'
import "aos/dist/aos.css";
import spaceman from '../images/headerImages/spaceman.svg'
import '../ComponentStyles/Work.css'

function Work() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return (
    <section id="work" className="work default-padding-4">
        <div className="work-heading">
            <h3 className="section-title" data-aos="fade-right">Our Roadmap</h3>
            <p className="section-text" data-aos="fade-right">Being The First Meme Token on Zilica BlockChain, <br /> Our Utilities Have No Bounds. <br /> <a href="#" className="read-more hover-bold hover-rocket"> <span>... Coming Soon</span> </a></p>
        </div>
        <div className="work-showcase d-flex jcsb">
            <div className="work-showcase_text  column-45">
            <img src={spaceman} alt="Showcase of our work" data-aos="zoom-in" />

            </div>
            <div className="work-showcase_image column-40">
            <h3 className="section-title" data-aos="fade-right">ZIL DOGE</h3>
                <p className="section-text" data-aos="fade-right">Zilica First Meme-Token with Cross Platform Utilities.</p>
                <a href="#" className="buy-zdoge btn btn-secondary hover-bold hover-rocket">Buy ZilDOGE</a>
            </div>
        </div>
    </section>
    )
}

export default Work;
