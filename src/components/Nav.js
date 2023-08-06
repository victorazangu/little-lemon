import React from "react";
import styles from "./index.module.css";

const Nav = () => {
	return (
		<nav className={styles.nav}>
			<ul className={styles.nav_ul}>
				<li className={styles.nav_li}>
					<a href="./">Home</a>
				</li>
				<li className={styles.nav_li}>
					<a href="./">About</a>
				</li>
				<li className={styles.nav_li}>
					<a href="./">Menu</a>
				</li>
				<li className={styles.nav_li}>
					<a href="./">Reservation</a>
				</li>
				<li className={styles.nav_li}>
					<a href="./">Contact Me</a>
				</li>
				<li className={styles.nav_li}>
					<a href="./">Login</a>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
