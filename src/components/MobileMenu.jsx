import Button from './Button';
import ContactLinks from './ContactLinks';

const MobileMenu = ({ classes, setShowMenu }) => {
  return (
    <div className={`${classes} p-5 h-screen transition-all`}>
      <svg onClick={() => setShowMenu(false)} className="cursor-pointer mb-7 ml-auto" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M18 2L2 18" stroke="#008271" strokeWidth="3" />
        <path d="M18 18L2 2" stroke="#008271" strokeWidth="3" />
      </svg>
      <ul className="flex flex-col gap-6 pb-6">
        <li>
          <a href="/" className="text-base flex items-center gap-2">
            Interiérové dveře{' '}
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 14 10" fill="none">
              <path d="M2 2.5L7 7.5L12 2.5" stroke="#008271" strokeWidth="2.5" strokeLinecap="square" />
            </svg>
          </a>
        </li>
        <li>
          <a href="/" className="text-base flex items-center gap-2">
            Zárubně{' '}
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 14 10" fill="none">
              <path d="M2 2.5L7 7.5L12 2.5" stroke="#008271" strokeWidth="2.5" strokeLinecap="square" />
            </svg>
          </a>
        </li>
        <li>
          <a href="/" className="text-base flex items-center gap-2">
            Dveřní doplňky{' '}
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 14 10" fill="none">
              <path d="M2 2.5L7 7.5L12 2.5" stroke="#008271" strokeWidth="2.5" strokeLinecap="square" />
            </svg>
          </a>
        </li>
        <li>
          <a href="/" className="text-base">
            Fotogalerie
          </a>
        </li>
        <li>
          <a href="/" className="text-base">
            Průvodce výběrem dveří
          </a>
        </li>
      </ul>
      <div className="flex flex-col gap-4 py-5 border-y border-gray-300">
        <Button classes="bg-white text-primaryColor border border-primaryColor h-9" text="Proč s námi" />
        <Button classes="bg-primaryColor text-white h-9" text="Konfigurátor dveří" />
      </div>
      <ContactLinks classes="text-start pt-6" activeWhiteBg={true} />
    </div>
  );
};

export default MobileMenu;
