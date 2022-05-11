import React from "react";
import styles from "../styles/navbar.module.css";

import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <ul>
        <Link href="/">
          <a>
            <li>home</li>
          </a>
        </Link>
        <Link href="/blogs">
          <a>
            <li>all blogs</li>
          </a>
        </Link>
        <Link href="/about-us">
          <a>
            <li>about us</li>
          </a>
        </Link>
        <Link href="/contact">
          <a>
            <li>contact us </li>
          </a>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
