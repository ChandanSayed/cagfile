import Image from 'next/image';
import Container from './Container';
import banner from '/public/images/banner.svg';
import bannerMobile from '/public/images/banner-mobile.svg';
import map from '/public/images/map.svg';
import Paragraph from './Paragraph';
import BorderButton from './BorderButton';
import DoubleHeader from './DoubleHeader';

const Map = () => {
  return (
    <Container>
      <div className="flex flex-col lg:flex-row items-center gap-[60px] text-sm lg:gap-20 pt-10 md:pt-[60px]">
        <div className="right lg:w-1/2">
          <DoubleHeader h4="Naše Prodejny" h2="Jedenáct vzorkoven a patnáct výhradních prodejců v rámci ČR" />
          <Paragraph text={`V rámci ČR provozujeme jedenáct vzorkoven, ve kterých si můžete prohlédnout naše nejnovější modely a v případě objednávky zajistíme nejrychlejší možné vyřízení. Celkem si produkty můžete koupit ve více než stovce prodejen.`} />
          <BorderButton text={`Všechny prodejny`} href="/" classes="mt-10 lg:mt-14" />
        </div>
        <div className="right">
          <Image src={map} alt="map" />
        </div>
      </div>
      <Image className="mt-20 md:mt-[100px] hidden md:block" src={banner} alt="banner" />
      <Image className="mt-20 mx-auto md:mt-[100px] block md:hidden" src={bannerMobile} alt="banner" />
    </Container>
  );
};

export default Map;
