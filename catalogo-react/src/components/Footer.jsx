import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return (
        <footer id="site-footer">
            <div className="social-boxes">
                <a href="https://github.com/paaulo-13?tab=repositories" target="_blank" rel="noreferrer" className="social-box" aria-label="GitHub">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="https://www.linkedin.com/in/paulosergio13/" target="_blank" rel="noreferrer" className="social-box" aria-label="LinkedIn">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
                <a href="mailto:thepaulo1313@gmail.com" className="social-box" aria-label="E-mail">
                    <FontAwesomeIcon icon={faEnvelope} />
                </a>
                <a href="tel:+5571986277069" className="social-box" aria-label="Telefone">
                    <FontAwesomeIcon icon={faPhone} />
                </a>
            </div>

            <div className="footer-credits">
                <p className="footer-name">Paulo Moreira</p>
                <p className="footer-year">© 2026</p>
            </div>
        </footer>
    );
}

export default Footer;