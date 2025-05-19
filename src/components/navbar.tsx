import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo2 from "../assets/logo2.png";
import { logo, menu, close } from "../assets";
import { NAV_LINKS } from "../constants";
import { styles } from "../styles";
import { cn } from "../utils/lib";

type NavbarProps = {
  hide: boolean;
};

export const Navbar = ({ hide }: NavbarProps) => {
  // state variables
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [visible, setVisible] = useState(true); // Add this state to control visibility

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > prevScrollY) {
        // If scrolling down, hide the navbar
        setVisible(false);
      } else {
        // If scrolling up, show the navbar
        setVisible(true);
      }
      setPrevScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollY]);

  return (
    <nav
  className={cn(
    styles.paddingX,
    "w-full fixed top-0 z-20 flex items-center py-2",
    "bg-white/10 backdrop-blur-md shadow-md border-b border-white/20 rounded-none", // full width, glass effect
    "transition-all duration-300 ease-in-out", // smooth animation
    visible ? "translate-y-0" : "-translate-y-[70px]",
    isAtBottom || hide ? "mt-0" : "mt-20"
  )}
>

  

  
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo2} alt="Logo" className="w-12 h-12 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Manikant&nbsp;<span className="sm:block hidden">| Inventor</span>
          </p>
        </Link>

        {/* Nav Links (Desktop) */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {NAV_LINKS.map((link) => (
            <li
              key={link.id}
              className={cn(
                active === link.title ? "text-white" : "text-secondary",
                "hover:text-white text-[18px] font-medium cursor-pointer transition duration-300 hover:scale-105 hover:shadow-[0_0_10px_#ff4500,0_0_20px_#ff6a00]"
              )}
              onClick={() => !link.link && setActive(link.title)}
            >
              {link.link ? (
                <a href={link.link} target="_blank" rel="noreferrer noopener">
                  {link.title}
                </a>
              ) : (
                <a href={`#${link.id}`}>{link.title}</a>
              )}
            </li>
          ))}
        </ul>

        {/* Hamburger Menu (Mobile) */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="Menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={cn(
              !toggle ? "hidden" : "flex",
              "p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl"
            )}
          >
            {/* Nav Links (Mobile) */}
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <li
                  key={link.id}
                  className={cn(
                    active === link.title ? "text-white" : "text-secondary",
                    "font-poppins font-medium cursor-pointer text-[16px]"
                  )}
                  onClick={() => {
                    !link.link && setToggle(!toggle);
                    !link.link && setActive(link.title);
                  }}
                >
                  {link.link ? (
                    <a
                      href={link.link}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      {link.title}
                    </a>
                  ) : (
                    <a href={`#${link.id}`}>{link.title}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
