import styles from "./Navbar.module.scss";
import { NavLink, Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Navbar = ({ BurgerColour }) => {

    const MenuLink = ({ url, path }) => {
        return <li className={styles.NavLink}>
            <NavLink to={`${url}`} className={({ isActive }) => (isActive ? styles.active : undefined)}>
                {`${path}`}
            </NavLink>
        </li>
    }

    const [isNavOpen, setisNavOpen] = useState(false);
    return (
        <div className={styles.navbar_container}>
            <nav>
                {/* LOGO */}
                <div className={styles.brand_logo}>
                    <Link to="/">Real</Link>
                </div>

                {/* NAV-BURGER */}
                <div className={styles.mobile_menu}
                    style={{ color: BurgerColour }}
                    onClick={() => setisNavOpen(!isNavOpen)}
                >
                    <FaBars />
                </div>

                {/* NAV */}
                <ul className={`${isNavOpen ? styles.ul_active : undefined} ${styles.navbar_ul}`}>

                    <div className={styles.mobile_close} OnClick={() => setisNavOpen(!isNavOpen)}>
                        <FaTimes />
                    </div>

                    {/* LI - MENULINK*/}
                    <MenuLink url="" path="Home" />
                    <MenuLink url="" path="Home" />
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;
