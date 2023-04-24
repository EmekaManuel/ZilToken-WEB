import spaceman from '../images/headerImages/spaceman.svg'
import '../ComponentStyles/Header.css';

function Hero() {
    return (
        <header className="header default-padding-4">
        <div className="header-row d-flex jcsb">
            <div className="header-text y-center column-45">
                <h4>Zilica x Meme <span>ZIL-DOGE</span></h4>
                <p> The First Community Meme Token On Zilica BlockChain</p>
                <a href="#" className="btn btn-primary hover-rocket">BUY ZDOGE</a>
            </div>  
            <div className="header-image column-45">
                <img src={spaceman} alt="Boldin's spaceman greeting you"/>
            </div>  
        </div>
      
    </header>
    )
}

export default Hero
