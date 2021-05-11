const Header = () => {
    return (
        <header className="header">
            <img src="img/logo.png" alt="logo image" className="header__logo" />
            <h3 className="heading-3">Your own home:</h3>
            <h1 className="heading-1">The ultimate personal freedom</h1>
            <button className="btn header__btn">View our properties</button>
            <div className="header__seenon-text">Seen on</div>

            <div className="header__season-logos">    
                <img src="img/logo-bbc.png" alt="img 1" />
                <img src="img/logo-forbes.png" alt="img 1" />
                <img src="img/logo-techcrunch.png" alt="img 1" />
                <img src="img/logo-bi.png" alt="img 1" />
            </div>
        </header>
     );
}
 
export default Header;