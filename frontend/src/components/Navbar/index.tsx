import {ReactComponent as GitHubIcon} from 'assets/img/github.svg';
import './styles.css';

function Navbar() {
    
    return (
        <header>
            <nav className = "container">
            <div className = "dsmovie-nav-content">
                <h1>DsMovie</h1>
                <a href="https://github.com/MarquinhoCF">
                <div className = "dsmovie-contact-container">
                    <GitHubIcon />
                    <p className = "dsmovie-contact-link">/MarquinhoCF</p>
                </div>
                </a>
            </div>
            </nav>
        </header>
    );
}

export default Navbar;