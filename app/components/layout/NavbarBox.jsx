import { useState, useEffect, useRef } from "react";
import { IoIosHome } from "react-icons/io";
import { MdArticle } from "react-icons/md";
import { FaFolderOpen } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { BiSolidUserPin } from "react-icons/bi";
import Link from "next/link";

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const navbarTopPos = navbarRef.current ? navbarRef.current.offsetTop : 0;
      const threshold = 200;

      setVisible(
        prevScrollPos > currentScrollPos ||
          currentScrollPos < navbarTopPos + threshold
      );
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <div className="w-full px-6 sm:px-12 md:px-[200px] lg:px-[340px] xl:px-[500px] flex py-3 md:py-4 justify-center fixed z-50 transition-opacity duration-500">
      <nav
        ref={navbarRef}
        className={`navbar w-full py-3 flex rounded-lg bg-black bg-opacity-10 backdrop-blur-lg border border-white border-opacity-40 px-6 transition-all duration-300 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        <ul className="w-full flex flex-row justify-center md:justify-between lg:px-8 xl:px-4 items-center">
          <li>
            <Link href="#home" legacyBehavior>
              <a>
                <IoIosHome size={25} color="#329f9a" />
              </a>
            </Link>
          </li>
          <li>
            <Link href="#home" legacyBehavior>
              <a>
                <BiSolidUserPin size={25} color="#329f9a" />
              </a>
            </Link>
          </li>
          <li>
            <Link href="#blog" legacyBehavior>
              <a>
                <MdArticle size={25} color="#329f9a" />
              </a>
            </Link>
          </li>
          <li>
            <Link href="#project" legacyBehavior>
              <a>
                <FaFolderOpen size={25} color="#329f9a" />
              </a>
            </Link>
          </li>
          <li>
            <Link href="#tools" legacyBehavior>
              <a>
                <FaTools size={25} color="#329f9a" />
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
