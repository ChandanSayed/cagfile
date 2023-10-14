import Image from 'next/image';
import BorderButton from './BorderButton';
import Container from './Container';
import DoubleHeader from './DoubleHeader';
import refer1 from '/public/images/refer1.svg';
import refer2 from '/public/images/refer2.svg';
import Paragraph from './Paragraph';

const Suggest = () => {
  const items = [
    {
      badge: 'Novinky',
      title: 'Naše nejoblíbenější modely ve slevě',
      des: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt coventant amet pastum...',
      img: refer1
    },
    {
      badge: 'Tipy a Triky',
      title: 'Tipy pro co nejlepší zateplení domácnosti',
      des: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt coventant amet pastum...',
      img: refer2
    }
  ];
  return (
    <Container>
      <div className="py-20 lg:py-[100px] border-b border-b-gray-300">
        <DoubleHeader h4="Novinky" h2="Co je v naší firmě nového" />
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 py-10 lg:py-[60px] items-center">
          {items.map((item, i) => {
            return (
              <div className="flex flex-col lg:flex-row" key={i}>
                <div className="lg:w-1/2">
                  <Image src={item.img} className="h-full w-full object-cover" alt="Img" />
                </div>
                <div style={{ background: 'rgba(204, 230, 227, 0.50)' }} className="px-5 py-7 lg:p-10 flex gap-5 flex-col lg:w-1/2">
                  <span className="bg-white py-2 px-3 text-primaryColor font-semibold text-sm w-max">{item.badge}</span>
                  <h4 className="font-semibold text-2xl">{item.title}</h4>
                  <Paragraph text={item.des} />
                </div>
              </div>
            );
          })}
        </div>
        <div className="text-center">
          <BorderButton classes="text-center" text="Další Články" />
        </div>
      </div>
    </Container>
  );
};

export default Suggest;
