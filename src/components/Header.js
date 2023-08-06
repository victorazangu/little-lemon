import React from "react";
import Nav from "./Nav";
import styles from "./index.module.css";
import Logo from "../assets/image.png";

const Header = () => {
	return (
		<header className={styles.header}>
			<img src={Logo} alt="Logo" />
			<Nav />
		</header>
	);
};

export default Header;
