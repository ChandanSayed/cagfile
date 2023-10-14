import Button from './Button';
import Container from './Container';
import hero from '/public/images/hero.svg';

const Hero = () => {
  return (
    <div style={{ backgroundImage: `url(${hero.src})` }} className="h-screen flex items-center bg-cover bg-center relative">
      <div className="bg-primary-gradient absolute inset-0 z-0"></div>
      <Container>
        <h1 style={{ textShadow: '0px 4px 4px rgba(0, 0, 0, 0.40)' }} className="font-extrabold text-center md:text-left text-5xl leading-tight lg:text-7xl uppercase text-white lg:leading-tight">
          Kvalitní české <br />
          <span className="text-primaryColor">dveře na míru</span>
        </h1>
        <div className="flex flex-col gap-5 mt-10">
          <Button classes="h-[58px] text-lg font-extrabold bg-white text-primaryColor md:hidden" text="Proč s Námi" />
          <Button classes="h-[58px] text-lg font-extrabold bg-primaryColor text-white" text="Proč s Námi" />
        </div>
      </Container>
      <svg className="absolute hidden md:block bottom-5 right-0 z-10" xmlns="http://www.w3.org/2000/svg" width="76" height="82" viewBox="0 0 76 82" fill="none">
        <g filter="url(#filter0_d_31_4593)">
          <rect x="6" y="10" width="70" height="70" fill="#008271" />
        </g>
        <path d="M58.0173 38.2426C57.0791 35.4774 55.5475 33.0905 53.4457 31.0484C52.2329 29.8692 50.906 28.8611 49.421 28.0914C47.4333 27.0574 45.3471 26.3473 43.1417 26.1425C42.4108 26.0518 41.6697 26 40.9155 26C31.0209 25.9974 23 34.0183 23 43.9129C23 51.768 28.0587 58.4386 35.0948 60.8566C35.2814 60.9266 35.3281 61.0354 35.2892 61.2064C35.1493 61.8336 35.0041 62.4582 34.859 63.0827C34.7683 63.4689 34.6595 63.8498 34.5869 64.2386C34.4884 64.7724 34.8098 65.0316 35.3203 64.8606C37.264 64.2049 39.2128 63.5622 41.1565 62.8987C42.8877 62.3104 44.6163 61.7196 46.3345 61.0976C47.1353 60.8073 47.9101 60.4367 48.6954 60.1024C50.4188 59.369 51.9115 58.278 53.2591 57.0107C54.6975 55.6553 55.9077 54.1004 56.8329 52.3329C58.0613 49.9953 58.7377 47.5204 58.9036 44.8796C59.0487 42.5964 58.7429 40.391 58.0147 38.24L58.0173 38.2426ZM51.8597 52.3718C51.1677 54.0356 49.9601 55.1629 48.2756 55.7927C47.511 56.0777 46.7232 56.1892 45.9146 56.2073C43.8803 56.2799 42.0351 55.7797 40.6045 54.2559C40.221 53.8464 39.9411 53.354 39.6534 52.8771C39.5031 52.6258 39.3476 52.4081 39.3191 52.1075C39.2906 51.8172 39.459 51.5917 39.7493 51.5788C40.0784 51.5632 40.4179 51.5632 40.7393 51.6202C42.2839 51.8898 43.8414 52.0064 45.4067 52.0401C47.1456 52.0789 48.869 51.8924 50.5872 51.6384C50.8205 51.6047 51.0537 51.5632 51.2896 51.558C51.8286 51.5477 52.0644 51.8794 51.8597 52.3744V52.3718Z" fill="white" />
        <defs>
          <filter id="filter0_d_31_4593" x="0" y="0" width="82" height="82" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="-4" />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_31_4593" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_31_4593" result="shape" />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default Hero;
