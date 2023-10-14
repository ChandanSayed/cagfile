import { Arimo } from 'next/font/google';
import logo from '/public/images/logo.svg';
import logoBlue from '/public/images/logo-blue.svg';
import separator from '/public/images/separator5.svg';
import line from '/public/images/line.svg';
import Container from './Container';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const arimo = Arimo({
  weight: ['400'],
  subsets: ['latin']
});

const Header = () => {
  const [activeWhiteBg, setActiveWhiteBg] = useState(false);

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
    <header className={`fixed top-0 w-full z-10 left-0 right-0 ${activeWhiteBg && 'bg-white pb-4'}`}>
      <Container>
        <nav className="flex justify-between py-4">
          <Link href={`/`}>
            <Image src={activeWhiteBg ? logoBlue : logo} className="h-[90px] object-cover w-[78px]" alt="Logo" />
          </Link>
          <div className="max-w-[1247px] hidden xl:block">
            <ul className={`text-center xl:flex xl:justify-end xl:gap-6 mb-4 ${arimo.className} ${activeWhiteBg ? 'text-primaryColor' : 'text-white'}`}>
              <li>
                <a className="text-sm hover:opacity-80 flex items-center gap-2" href="tel:800 262 929">
                  <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                    <path d="M4.52222 8.65556C6.12222 11.8 8.7 14.3667 11.8444 15.9778L14.2889 13.5333C14.5889 13.2333 15.0333 13.1333 15.4222 13.2667C16.6667 13.6778 18.0111 13.9 19.3889 13.9C20 13.9 20.5 14.4 20.5 15.0111V18.8889C20.5 19.5 20 20 19.3889 20C8.95556 20 0.5 11.5444 0.5 1.11111C0.5 0.5 1 0 1.61111 0H5.5C6.11111 0 6.61111 0.5 6.61111 1.11111C6.61111 2.5 6.83333 3.83333 7.24444 5.07778C7.36667 5.46667 7.27778 5.9 6.96667 6.21111L4.52222 8.65556Z" fill="#008271" />
                  </svg>
                  800 262 929
                </a>
              </li>
              <li>
                <a className="text-sm hover:opacity-80 flex items-center gap-2" href="mailto:info@dverecag.cz">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="22" viewBox="0 0 30 22" fill="none">
                    <path d="M29.5109 3.35703L21.9453 11.0633C21.8891 11.1195 21.8891 11.2039 21.9453 11.2602L27.2398 16.8992C27.5984 17.2578 27.5984 17.8344 27.2398 18.193C27.0641 18.3688 26.825 18.4602 26.593 18.4602C26.3609 18.4602 26.1219 18.3688 25.9461 18.193L20.6727 12.575C20.6164 12.5188 20.525 12.5188 20.4687 12.575L19.182 13.8828C18.1062 14.9727 16.6789 15.5773 15.1461 15.5844C13.5922 15.5914 12.1156 14.9375 11.0258 13.8336L9.78828 12.575C9.73203 12.5187 9.64062 12.5187 9.58437 12.575L4.31094 18.193C4.13515 18.3687 3.89609 18.4602 3.66406 18.4602C3.43203 18.4602 3.19297 18.3687 3.01719 18.193C2.65859 17.8344 2.65859 17.2578 3.01719 16.8992L8.31172 11.2602C8.36094 11.2039 8.36094 11.1195 8.31172 11.0633L0.739063 3.35703C0.647656 3.26563 0.5 3.32891 0.5 3.45547V18.875C0.5 20.1125 1.5125 21.125 2.75 21.125H27.5C28.7375 21.125 29.75 20.1125 29.75 18.875V3.45547C29.75 3.32891 29.5953 3.27266 29.5109 3.35703Z" fill="#008271" />
                    <path d="M15.1248 13.7492C16.1654 13.7492 17.1428 13.3414 17.874 12.5961L28.9061 1.36719C28.5193 1.05781 28.0412 0.875 27.5139 0.875H2.74277C2.21543 0.875 1.73027 1.05781 1.35059 1.36719L12.3826 12.5961C13.1068 13.3344 14.0842 13.7492 15.1248 13.7492Z" fill="#008271" />
                  </svg>
                  info@dverecag.cz
                </a>
              </li>
              <li>
                <Image src={line} alt="Line" />
              </li>
              <li>
                <Link className="text-sm hover:opacity-80 flex items-center gap-2" href="/">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M14.2453 12.5715H13.3338L12.9915 12.2857C14.0744 10.9716 14.7583 9.31417 14.7583 7.42859C14.7582 3.31417 11.4529 0 7.35078 0C3.30479 0 0 3.31417 0 7.42859C0 11.543 3.30479 14.8571 7.40755 14.8571C9.23104 14.8571 10.9404 14.1714 12.2508 13.0859L12.5926 13.3717V14.2858L18.2906 20L20 18.2857L14.2453 12.5715ZM7.40755 12.5715C4.55849 12.5715 2.27927 10.2857 2.27927 7.42859C2.27927 4.57141 4.55849 2.28578 7.40755 2.28578C10.2565 2.28578 12.5358 4.57141 12.5358 7.42859C12.5358 10.2857 10.2565 12.5715 7.40755 12.5715Z" fill="#008271" />
                  </svg>
                  Vyhledat
                </Link>
              </li>
              <li>
                <Image src={line} alt="Line" />
              </li>
              <li>
                <Link className="text-sm hover:opacity-80" href="/">
                  Zákaznická sekce
                </Link>
              </li>
              <li>
                <Link className="text-sm hover:opacity-80" href="/">
                  Vzorkovny a prodejny
                </Link>
              </li>
              <li>
                <Link className="text-sm hover:opacity-80" href="/">
                  Kontakt
                </Link>
              </li>
            </ul>
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
        </nav>
      </Container>
    </header>
  );
};

export default Header;
