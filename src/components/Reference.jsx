import Image from 'next/image';
import Link from 'next/link';
import Container from './Container';
import DoubleHeader from './DoubleHeader';
import bg from '/public/images/rBg.svg';
import separator from '/public/images/separator3.svg';
import bgComa from '/public/images/bg-coma.svg';
import BorderButton from './BorderButton';
import Paragraph from './Paragraph';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

import './Reference.css';

const Reference = () => {
  return (
    <Container>
      <div className="pt-20 lg:pt-[100px]">
        <DoubleHeader h4="Naše reference" h2="Co o nás říkají klienti" />

        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false
          }}
          pagination={{
            clickable: true
          }}
          navigation={true}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <SliderContent />
          </SwiperSlide>
          <SwiperSlide>
            <SliderContent />
          </SwiperSlide>
        </Swiper>

        <div className="text-center">
          <BorderButton classes="text-center" text="Více realizací" />
        </div>
      </div>
    </Container>
  );
};

export default Reference;

function SliderContent() {
  return (
    <div className="flex flex-col lg:flex-row  py-10 gap-10 lg:py-[60px] lg:gap-11">
      <div className="lg:w-2/3">
        <Image src={bg} className="object-cover h-full w-full" alt="bg" />
      </div>
      <div className="lg:w-1/3">
        <h3 className="font-bold text-[28px]">Laminát antracit</h3>
        <p className="mb-4 uppercase font-bold text-sm leading-normal tracking-[3px] text-primaryColor">Dekor dveří</p>
        <h3 className="font-bold text-[28px]">Alumi Vertik</h3>
        <p className="uppercase font-bold text-sm leading-normal tracking-[3px] text-primaryColor">Model dveří</p>
        <Image src={separator} className="w-full my-9" alt="Separator" />
        <h4 className="font-semibold text-2xl mb-8">Hotel Restart, Jičín</h4>
        <div className="relative">
          <Paragraph text={`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et amet dolore magna.`} />
          <Image className="absolute -left-2 top-0" src={bgComa} alt="Coma" />
        </div>
        <h5 className="text-lg font-semibold mt-5 mb-7 mt">Petr Novák, jednatel společnosti</h5>
        <Link className="flex mt-6 items-center gap-3 text-primaryColor font-semibold text-base md:text-lg" href="/">
          Více fotografií
          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="18" viewBox="0 0 11 18" fill="none">
            <path d="M2.5 15L8.5 9L2.5 3" stroke="#008271" strokeWidth="3" strokeLinecap="square" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
