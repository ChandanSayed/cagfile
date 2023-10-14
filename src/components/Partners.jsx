import React from 'react';
import Container from './Container';
import mini from '/public/images/mini.svg';
import eu from '/public/images/eu.svg';
import easy from '/public/images/easy.svg';
import mpo from '/public/images/mpo.svg';
import Image from 'next/image';

const Partners = () => {
  return (
    <Container>
      <div className="flex flex-col items-center gap-10 lg:flex-row justify-between py-[60px]">
        <Image className="" src={eu} alt="Partners" />
        <Image className="" src={mpo} alt="Partners" />
        <Image className="" src={easy} alt="Partners" />
        <Image className="" src={mini} alt="Partners" />
      </div>
    </Container>
  );
};

export default Partners;
