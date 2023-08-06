import React from "react";
import "./footer.css";
import Logo from "../assets/image.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faMeta,
	faTwitter,
	faFacebook,
	faInstagram,
	faGithub,
	faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer__addr">
				<img src={Logo} alt="Logo" className="footer__logo" />
			</div>

			<ul className="footer__nav">
				<li className="nav__item">
					<h2 className="nav__title">Domant Navigation</h2>
					<ul className="nav__ul">
						<li>
							<a href="#">Home</a>
						</li>
						<li>
							<a href="#">About</a>
						</li>
						<li>
							<a href="#">Menu</a>
						</li>
						<li>
							<a href="#">Reservation</a>
						</li>
						<li>
							<a href="#">Contact Me</a>
						</li>
						<li>
							<a href="#">Login</a>
						</li>
					</ul>
				</li>

				<li className="nav__item">
					<h2 className="nav__title">Contacts</h2>
					<ul className="nav__ul">
						<li>
							<a href="#">0726262033</a>
						</li>
						<li>
							<a href="#">victorsazangu@gmail.com</a>
						</li>
						<li>
							<a href="#">little@lemon.com</a>
						</li>
					</ul>
				</li>

				<li className="nav__item">
					<ul className="nav__ul socials">
						<li>
							<a href="#">
								<FontAwesomeIcon icon={faMeta} />
							</a>
						</li>
						<li>
							<a href="#">
								<FontAwesomeIcon icon={faTwitter} />
							</a>
						</li>
						<li>
							<a href="#">
								<FontAwesomeIcon icon={faFacebook} />
							</a>
						</li>
						<li>
							<a href="#">
								<FontAwesomeIcon icon={faInstagram} />
							</a>
						</li>
						<li>
							<a href="#">
								<FontAwesomeIcon icon={faGithub} />
							</a>
						</li>
						<li>
							<a href="#">
								<FontAwesomeIcon icon={faLinkedin} />
							</a>
						</li>
					</ul>
				</li>
			</ul>

			<div className="legal">
				<p>&copy; 2023 Little Lemon. All rights reserved.</p>
			</div>
		</footer>
	);
};

export default Footer;
