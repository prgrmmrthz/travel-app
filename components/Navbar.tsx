"use client";

import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { useState } from "react";

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className="border-2 border-black flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>
      <ul className={`${openMenu && "hidden"} h-full gap-12 flex md:flex-row`}>
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-500 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <div className= 'hidden lg:flexCenter'>
        <Button
            type='button'
            title="Login"
            icon='user.svg'
            variant="btn_dark_green"
        />
      </div>
      <Image
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
        onClick={() => setOpenMenu(!openMenu)}
      />
    </nav>
  );
};
2;
export default Navbar;
