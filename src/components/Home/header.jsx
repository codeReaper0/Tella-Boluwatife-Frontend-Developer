import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {Logo} from "../../assets/svg/logo";

const navLinks = [
  {
    name: "Dragons",
    path: "/",
  },
  {
    name: "Rockets",
    path: "/",
  },
  {
    name: "Ships",
    path: "/",
  },
  {
    name: "Capsules",
    path: "/",
  },
  {
    name: "Launches",
    path: "/",
  },
];
export default function Header() {
  const [small, setSmall] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSmall(window.scrollY > 500);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <header
      className={`py-5 flex justify-between items-center w-full text-white z-20 max-w-7xl mx-auto ${
        small ? "bg-black backdrop-blur-lg sticky top-0 z-20" : ""
      }`}
    >
      <Link href="/">
        <Logo />
      </Link>

      <nav>
        <ul className="flex gap-6">
          {navLinks.map((link) => {
            return (
              <li key={link.name}>
                <Link
                  href={link.path}
                  className="font-semibold pb-1 hover:border-b hover:border-b-white hover:pb-1 transition-all duration-300 ease-linear"
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <button className="font-bold py-2 px-4 rounded-lg border-2 border-white hover:bg-white hover:text-black transition-all duration-300 ease-in-out z-20">
        Login
      </button>
    </header>
  );
}
