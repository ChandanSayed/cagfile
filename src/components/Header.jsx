import logo from '/public/images/logo.svg';
import logoBlue from '/public/images/logo-blue.svg';
import separator from '/public/images/separator5.svg';

import Container from './Container';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import MobileMenu from './MobileMenu';
import ContactLinks from './ContactLinks';

const Header = () => {
  const [activeWhiteBg, setActiveWhiteBg] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    // Function to handle scroll events
    function scrollFunction() {
      if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        setActiveWhiteBg(true);
      } else {
        setActiveWhiteBg(false);
      }
    }

    // Add the scroll event listener when the component mounts
    window.addEventListener('scroll', scrollFunction);

    // Remove the event listener when the component unmounts to prevent memory leaks
    return () => {
      window.removeEventListener('scroll', scrollFunction);
    };
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 left-0 right-0 ${activeWhiteBg && 'bg-white pb-4'}`}>
      <Container>
        <nav className="flex justify-between items-center lg:items-start py-4">
          <Link href={`/`}>
            <Image src={activeWhiteBg ? logoBlue : logo} className=" w-11 h-[52px] lg:h-[90px] object-cover lg:w-[78px]" alt="Logo" />
          </Link>
          <div className="max-w-[1247px] hidden xl:block">
            <ContactLinks classes={`text-center`} activeWhiteBg={activeWhiteBg} />
            <Image src={separator} alt="Separator" />
            <ul className={`text-center xl:flex xl:justify-between mt-6 ${activeWhiteBg ? 'text-primaryColor' : 'text-white'}`}>
              <li>
                <Link className={`text-lg font-bold hover:opacity-80 leading-[27px] bg-white px-5 py-[10px] rounded-full text-primaryColor ${activeWhiteBg && 'border-[2px] border-primaryColor'}`} href="/">
                  Proč s námi
                </Link>
              </li>
              <li>
                <Link className="text-lg font-bold hover:opacity-80 leading-[27px]" href="/">
                  Interiérové dveře
                </Link>
              </li>
              <li>
                <Link className="text-lg font-bold hover:opacity-80 leading-[27px]" href="/">
                  Zárubně
                </Link>
              </li>
              <li>
                <Link className="text-lg font-bold hover:opacity-80 leading-[27px]" href="/">
                  Dveřní doplňky
                </Link>
              </li>
              <li>
                <Link className="text-lg font-bold hover:opacity-80 leading-[27px]" href="/">
                  Fotogalerie
                </Link>
              </li>
              <li>
                <Link className="text-lg font-bold hover:opacity-80 leading-[27px]" href="/">
                  Průvodce výběrem dveří
                </Link>
              </li>
              <li>
                <Link className="text-lg font-bold hover:opacity-80 leading-[27px] bg-primaryColor px-5 py-[10px] rounded-full text-white" href="/">
                  Konfigurátor dveří
                </Link>
              </li>
            </ul>
          </div>
          {activeWhiteBg ? (
            <svg onClick={() => setShowMenu(true)} className="lg:hidden cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 20" fill="none">
              <path d="M0 10H24" stroke="#008271" strokeWidth="3" strokeLinejoin="round" />
              <path d="M0 2H24" stroke="#008271" strokeWidth="3" strokeLinejoin="round" />
              <path d="M0 18H24" stroke="#008271" strokeWidth="3" strokeLinejoin="round" />
            </svg>
          ) : (
            <svg onClick={() => setShowMenu(true)} className="lg:hidden cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 20" fill="none">
              <path d="M0 10H24" stroke="white" strokeWidth="3" strokeLinejoin="round" />
              <path d="M0 2H24" stroke="white" strokeWidth="3" strokeLinejoin="round" />
              <path d="M0 18H24" stroke="white" strokeWidth="3" strokeLinejoin="round" />
            </svg>
          )}
          <MobileMenu setShowMenu={setShowMenu} classes={`lg:hidden bg-white absolute top-[100px] ${showMenu ? 'right-0' : '-right-[225px]'}`} />
        </nav>
      </Container>
    </header>
  );
};

export default Header;
