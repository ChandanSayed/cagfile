import Image from 'next/image';
import Container from './Container';
import category1 from '/public/images/category1.svg';
import category2 from '/public/images/category2.svg';
import category3 from '/public/images/category3.svg';
import category4 from '/public/images/category4.svg';
import separator from '/public/images/separator.svg';
import Link from 'next/link';
import Paragraph from './Paragraph';

const Category = () => {
  const categories = [
    {
      id: 1,
      titleStart: 'Dveře ',
      titleEnd: 'podle dekoru',
      image: category1,
      des: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut.',
      button: 'Všechny dekory',
      leftBorder: false
    },
    {
      id: 2,
      titleStart: 'Dveře ',
      titleEnd: 'podle modelu',
      image: category2,
      des: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut.',
      button: 'Všechny dekory',
      leftBorder: true
    },
    {
      id: 3,
      titleStart: 'Dveře ',
      titleEnd: 'podle vlastností',
      image: category3,
      des: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut.',
      button: 'Všechny dekory',
      leftBorder: true
    },
    {
      id: 4,
      titleStart: 'Dveře ',
      titleEnd: 'na míru',
      image: category4,
      des: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut.',
      button: 'Všechny dekory',
      leftBorder: true
    }
  ];

  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 md:gap-x-5 xl:gap-[76px] mt-10 md:mt-[100px]">
        {categories.map(category => {
          return (
            <div className="text-center border-b border-b-[#e5e7eb] xl:border-none relative pt-10 xl:pt-0 pb-10" key={category.id}>
              <h2 className="text-[28px] leading-tight font-extrabold">
                {category.titleStart} <br className="md:hidden" /> <span className="text-primaryColor">{category.titleEnd}</span>
              </h2>
              <Image className="my-7 mx-auto" src={category.image} alt={category.titleStart} />
              <Paragraph text={category.des} />
              <Link className="flex justify-center mt-6 items-center gap-3 text-primaryColor font-semibold text-base md:text-lg" href="/">
                {category.button}
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="18" viewBox="0 0 11 18" fill="none">
                  <path d="M2.5 15L8.5 9L2.5 3" stroke="#008271" strokeWidth="3" strokeLinecap="square" />
                </svg>
              </Link>
              {category.leftBorder && <Image className="absolute hidden xl:block -left-10 top-0 bottom-0 h-full object-cover" src={separator} alt="Separator" />}
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default Category;
