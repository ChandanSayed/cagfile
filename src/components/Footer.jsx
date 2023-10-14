import logo from '/public/images/logo.svg';
import separator from '/public/images/separator4.svg';
import Container from './Container';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-primaryColor py-10">
      <Container>
        <div className="grid xl:grid-cols-[62px_1fr_auto] gap-8 xl:gap-y-[14px] items-center">
          <Link href={`/`} className="xl:row-span-3">
            <Image className="mx-auto" src={logo} alt="Logo" />
          </Link>
          <ul className="text-center xl:flex xl:gap-10 xl:ml-1">
            <li>
              <Link className="text-sm font-semibold leading-[27px] text-white" href="/">
                Přizpůsobit si dveře
              </Link>
            </li>
            <li>
              <Link className="text-sm font-semibold leading-[27px] text-white" href="/">
                Kariéra
              </Link>
            </li>
            <li>
              <Link className="text-sm font-semibold leading-[27px] text-white" href="/">
                Kontakt
              </Link>
            </li>
            <li>
              <Link className="text-sm font-semibold leading-[27px] text-white" href="/">
                Ceník
              </Link>
            </li>
            <li>
              <Link className="text-sm font-semibold leading-[27px] text-white" href="/">
                Pro velkoobchodníky
              </Link>
            </li>
            <li>
              <Link className="text-sm font-semibold leading-[27px] text-white" href="/">
                Obchodní podmínky
              </Link>
            </li>
          </ul>
          <ul className="flex justify-center xl:justify-end gap-3">
            <li>
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
                  <circle opacity="0.4" cx="15" cy="15.2422" r="14.5" stroke="white" />
                  <path opacity="0.8" d="M22 15.2848C22 11.3943 18.8669 8.24219 15 8.24219C11.1331 8.24219 8 11.3943 8 15.2848C8 18.7998 10.5598 21.7134 13.9062 22.2422V17.3206H12.128V15.2848H13.9062V13.7331C13.9062 11.9682 14.9506 10.9933 16.5502 10.9933C17.3162 10.9933 18.1173 11.1308 18.1173 11.1308V12.863H17.2344C16.365 12.863 16.0938 13.406 16.0938 13.9629V15.2848H18.0351L17.7246 17.3206H16.0938V22.2422C19.4402 21.7134 22 18.7998 22 15.2848Z" fill="white" />
                </svg>
              </a>
            </li>
            <li>
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
                  <circle opacity="0.4" cx="15" cy="15.2422" r="14.5" stroke="white" />
                  <path opacity="0.8" d="M15.0016 11.652C13.0152 11.652 11.4129 13.2542 11.4129 15.2406C11.4129 17.227 13.0152 18.8292 15.0016 18.8292C16.988 18.8292 18.5902 17.227 18.5902 15.2406C18.5902 13.2542 16.988 11.652 15.0016 11.652ZM15.0016 17.5737C13.7179 17.5737 12.6685 16.5274 12.6685 15.2406C12.6685 13.9538 13.7148 12.9076 15.0016 12.9076C16.2883 12.9076 17.3346 13.9538 17.3346 15.2406C17.3346 16.5274 16.2852 17.5737 15.0016 17.5737ZM19.574 11.5052C19.574 11.9706 19.1992 12.3422 18.737 12.3422C18.2716 12.3422 17.8999 11.9674 17.8999 11.5052C17.8999 11.043 18.2747 10.6682 18.737 10.6682C19.1992 10.6682 19.574 11.043 19.574 11.5052ZM21.9508 12.3547C21.8977 11.2335 21.6416 10.2403 20.8202 9.422C20.0019 8.6037 19.0087 8.3476 17.8874 8.29138C16.7318 8.22579 13.2682 8.22579 12.1125 8.29138C10.9944 8.34447 10.0012 8.60058 9.17981 9.41887C8.35839 10.2372 8.10541 11.2304 8.04919 12.3516C7.9836 13.5072 7.9836 16.9709 8.04919 18.1265C8.10229 19.2478 8.35839 20.241 9.17981 21.0592C10.0012 21.8775 10.9913 22.1336 12.1125 22.1899C13.2682 22.2555 16.7318 22.2555 17.8874 22.1899C19.0087 22.1368 20.0019 21.8807 20.8202 21.0592C21.6385 20.241 21.8946 19.2478 21.9508 18.1265C22.0164 16.9709 22.0164 13.5103 21.9508 12.3547ZM20.4579 19.3664C20.2143 19.9786 19.7427 20.4502 19.1274 20.697C18.206 21.0624 16.0197 20.978 15.0016 20.978C13.9834 20.978 11.794 21.0592 10.8757 20.697C10.2636 20.4533 9.79197 19.9817 9.54523 19.3664C9.17981 18.4451 9.26414 16.2588 9.26414 15.2406C9.26414 14.2224 9.18293 12.033 9.54523 11.1148C9.78884 10.5026 10.2605 10.031 10.8757 9.7843C11.7971 9.41887 13.9834 9.5032 15.0016 9.5032C16.0197 9.5032 18.2091 9.422 19.1274 9.7843C19.7395 10.0279 20.2111 10.4995 20.4579 11.1148C20.8233 12.0362 20.739 14.2224 20.739 15.2406C20.739 16.2588 20.8233 18.4482 20.4579 19.3664Z" fill="white" />
                </svg>
              </a>
            </li>
            <li>
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
                  <path opacity="0.4" d="M29.5 15.2422C29.5 23.2503 23.0081 29.7422 15 29.7422C6.99187 29.7422 0.5 23.2503 0.5 15.2422C0.5 7.23406 6.99187 0.742188 15 0.742188C23.0081 0.742188 29.5 7.23406 29.5 15.2422Z" stroke="white" />
                  <path opacity="0.8" d="M10.8156 14.3011C11.9356 16.5022 13.74 18.2989 15.9411 19.4266L17.6522 17.7155C17.8622 17.5055 18.1733 17.4355 18.4456 17.5289C19.3167 17.8166 20.2578 17.9722 21.2222 17.9722C21.65 17.9722 22 18.3222 22 18.75V21.4644C22 21.8922 21.65 22.2422 21.2222 22.2422C13.9189 22.2422 8 16.3233 8 9.01997C8 8.59219 8.35 8.24219 8.77778 8.24219H11.5C11.9278 8.24219 12.2778 8.59219 12.2778 9.01997C12.2778 9.99219 12.4333 10.9255 12.7211 11.7966C12.8067 12.0689 12.7444 12.3722 12.5267 12.59L10.8156 14.3011Z" fill="white" />
                </svg>
              </a>
            </li>
            <li>
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
                  <circle opacity="0.4" cx="15" cy="15.2422" r="14.5" stroke="white" />
                  <path opacity="0.8" d="M20.6 9.24023H9.4C8.63 9.24023 8.007 9.87023 8.007 10.6402L8 19.0402C8 19.8102 8.63 20.4402 9.4 20.4402H20.6C21.37 20.4402 22 19.8102 22 19.0402V10.6402C22 9.87023 21.37 9.24023 20.6 9.24023ZM20.6 12.0402L15 15.5402L9.4 12.0402V10.6402L15 14.1402L20.6 10.6402V12.0402Z" fill="white" />
                </svg>
              </a>
            </li>
          </ul>
          <Image src={separator} className="w-full h-[1px] object-cover xl:col-span-2" alt="Separator" />
          <ul className="text-center xl:flex xl:gap-10 xl:ml-1">
            <li>
              <Link className="text-sm font-semibold leading-[27px] text-white" href="/">
                Ochrana osobních údajů
              </Link>
            </li>
            <li>
              <Link className="text-sm font-semibold leading-[27px] text-white" href="/">
                Obchodní podmínky
              </Link>
            </li>
          </ul>
          <p className="text-sm font-semibold leading-[27px] text-white text-center xl:text-end">© 2023 Dveře CAG, s.r.o. Všechna práva vyhrazena.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
