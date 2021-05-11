const Footer = () => {
    const d = new Date();
    return (
        <footer className="footer">
            <ul className="nav">
                <li className="nav__item"><a href="#" className="nav__link">Find your dream home</a></li>
                <li className="nav__item"><a href="#" className="nav__link">Request proposal</a></li>
                <li className="nav__item"><a href="#" className="nav__link">Download home planner</a></li>
                <li className="nav__item"><a href="#" className="nav__link">Contact us</a></li>
                <li className="nav__item"><a href="#" className="nav__link">Submit your property</a></li>
                <li className="nav__item"><a href="#" className="nav__link">Come work with us!</a></li>
            </ul>

            <p className="copyright">
                © Copyright {d.getFullYear()} by Cherin Piyumantha
            </p>
        </footer>
     );
}
 
export default Footer;