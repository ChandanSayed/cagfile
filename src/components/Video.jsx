import Image from 'next/image';

import Container from './Container';
import DoubleHeader from './DoubleHeader';
import Paragraph from './Paragraph';
import Bg from '/public/images/v-bg.svg';
import HeadingSecondary from './HeadingSecondary';

import icon1 from '/public/images/icon1.svg';
import icon2 from '/public/images/icon2.svg';
import icon3 from '/public/images/icon3.svg';
import icon4 from '/public/images/icon4.svg';
import separator from '/public/images/separator2.svg';
import VideoPlaceholder from '/public/images/video-placeholder.svg';

const Video = () => {
  const steps = [
    {
      id: 1,
      title: 'Individuální přístup',
      des: 'Každý zákazník je pro nás výjimečný. Díky komplexu služeb Easy Door si vyberete rychle a bez starostí.',
      icon: icon1,
      leftBorder: false
    },
    {
      id: 2,
      title: 'Zdravé dveře',
      des: 'Záleží nám na tom, aby naše dveře byly nejen kvalitní, ale i maximálně bezpečné a zdravotně nezávadné.',
      icon: icon2,
      leftBorder: true
    },
    {
      id: 3,
      title: 'Český výrobek',
      des: 'Naše dveře se vyrábějí výhradně v České republice. Dodavatelé jsou jak z ČR, tak západních zemí EU.',
      icon: icon3,
      leftBorder: true
    },
    {
      id: 4,
      title: 'Kvalitní servis',
      des: 'Každý zákazník je pro nás výjimečný. Díky komplexu služeb Easy Door si vyberete rychle a bez starostí.',
      icon: icon4,
      leftBorder: true
    }
  ];

  const counts = [
    {
      number: '1998',
      text: 'Rok založení'
    },
    {
      number: '48 000',
      text: 'Vyrobených dveří'
    },
    {
      number: '110 000',
      text: 'Zákazníků'
    }
  ];

  return (
    <div className="bg-cover mt-20 pt-20 md:mt-[100px] md:pt-[100px] " style={{ backgroundImage: `linear-gradient(rgba(204, 230, 227, 0.50),rgba(204, 230, 227, 0.50)),url(${Bg.src})` }}>
      <Container>
        <DoubleHeader h4="Naše přednosti" h2="Proč pořídit dveře od CAG?" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:px-10 gap-[41px] pt-5 pb-[100px] border-b border-b-primaryColor border-opacity-50 text-center">
          {steps.map(step => {
            return (
              <div className="relative" key={step.id}>
                <Image className="mx-auto" src={step.icon} alt="Icon" />
                <h3 className="my-4 font-semibold text-2xl leading-tight">{step.title}</h3>
                <Paragraph text={step.des} />
                {step.leftBorder && <Image className="absolute -left-5 h-full top-0 bottom-0 hidden lg:block object-cover" src={separator} alt="Separator" />}
              </div>
            );
          })}
        </div>
        <div className="video-details flex flex-col xl:flex-row lg:gap-20 pt-20 lg:pt-[100px]">
          <div className="left lg:w-1/2">
            <HeadingSecondary classes="mb-6" text={'Již více než 25 let s vámi.'} />
            <Paragraph text="Před dvaceti lety jsme byli drobným výrobcem lakovaných zárubní. Na úvěr jsme si koupili malou výrobní halu a zkusili najít své podnikatelské štěstí. Začínali jsme doslova od píky, jen se třemi zaměstnanci. Teď se můžeme považovat za významného výrobce dveří v České republice." />

            <div className="flex flex-col lg:flex-row my-10 lg:mt-12 lg:mb-11 text-center">
              {counts.map((list, i) => {
                return (
                  <div className="border-l-[4px] lg:border-l-[0] lg:border-b-[4px] lg:w-[253px] py-8 border-primaryColor shadow-shadowMobile lg:shadow-shadowDesktop bg-secondaryGradient lg: bg-white" key={i}>
                    <HeadingSecondary classes="mb-0" text={list.number} />
                    <h4>{list.text}</h4>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="right relative">
            <Image className="object-cover h-full w-full" src={VideoPlaceholder} alt="placeholder" />
            <svg className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px] lg:h-[140px] lg:w-[140px] cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="148" height="148" viewBox="0 0 148 148" fill="none">
              <circle cx="74" cy="73.9998" r="70" fill="url(#paint0_radial_31_4515)" />
              <circle cx="74" cy="73.9998" r="69.5" stroke="white" strokeOpacity="0.5" />
              <g filter="url(#filter0_d_31_4515)">
                <circle cx="74" cy="73.9998" r="54" fill="url(#paint1_linear_31_4515)" />
                <circle cx="74" cy="73.9998" r="53" stroke="white" strokeWidth="2" />
              </g>
              <path d="M100 74L61 99.9808V48.0192L100 74Z" fill="url(#paint2_linear_31_4515)" />
              <defs>
                <filter id="filter0_d_31_4515" x="0" y="-0.000244141" width="148" height="148" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset />
                  <feGaussianBlur stdDeviation="10" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.101961 0 0 0 0 0.0901961 0 0 0 0.5 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_31_4515" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_31_4515" result="shape" />
                </filter>
                <radialGradient id="paint0_radial_31_4515" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(74 74) rotate(-90) scale(70.0002)">
                  <stop stopColor="white" stopOpacity="0" />
                  <stop offset="0.560715" stopColor="white" stopOpacity="0" />
                  <stop offset="1" stopColor="white" stopOpacity="0.301961" />
                </radialGradient>
                <linearGradient id="paint1_linear_31_4515" x1="74" y1="19.9998" x2="74" y2="128" gradientUnits="userSpaceOnUse">
                  <stop stopColor="white" />
                  <stop offset="1" stopColor="#CCE6E3" />
                </linearGradient>
                <linearGradient id="paint2_linear_31_4515" x1="48" y1="104" x2="48" y2="44" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#0E7466" />
                  <stop offset="1" stopColor="#09A892" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Video;
