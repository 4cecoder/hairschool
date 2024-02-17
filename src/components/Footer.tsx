import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookF, faInstagram, faTwitter, faYoutube} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <>
            {/* Footer with daisyUI */}
            <footer className="p-10 footer bg-gray-700 text-white">
                <div>
                    <span className="footer-title">Social</span>
                    <div className="grid grid-flow-col gap-4">
                        <a href="https://facebook.com" className="link link-hover">
                            <FontAwesomeIcon icon={faFacebookF}/> Facebook
                        </a>
                        <a href="https://twitter.com" className="link link-hover">
                            <FontAwesomeIcon icon={faTwitter}/> Twitter
                        </a>
                        <a href="https://instagram.com" className="link link-hover">
                            <FontAwesomeIcon icon={faInstagram}/> Instagram
                        </a>
                        <a href="https://youtube.com" className="link link-hover">
                            <FontAwesomeIcon icon={faYoutube}/> YouTube
                        </a>
                    </div>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <Link to="/about" className="link link-hover">About us</Link>
                    <Link to="/contact" className="link link-hover">Contact</Link>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <Link to="/terms" className="link link-hover">Terms of Use</Link>
                    <Link to="/privacy" className="link link-hover">Privacy Policy</Link>
                </div>
                <div>
                    <span className="footer-title">Get in touch</span>
                    <p>Join our newsletter for the latest updates.</p>
                    <div className="form-control w-80">
                        <label className="label">
                            <span className="label-text text-white">Enter your email</span>
                        </label>
                        <div className="relative">
                            <input type="text" placeholder="username@site.com"
                                   className="input input-bordered w-full pr-16"/>
                            <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );

};

export default Footer;