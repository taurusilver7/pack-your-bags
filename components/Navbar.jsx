import Link from "next/link";
import Image from "next/image";
import React from "react";
import logo from "../public/logo.png";

const Navbar = () => {
  return (
    <nav className="nav-container">
      <div className="nav-item-container">
        <Link href="/">
          <Image src={logo} alt="logo" width={140} height={140} />
        </Link>
      </div>
      Navbar
    </nav>
  );
};

export default Navbar;
