import Link from 'next/link';

const BorderButton = ({ classes = '', href = '/', text }) => {
  return (
    <Link className={`font-extrabold text-lg text-primaryColor border-[2px] border-primaryColor hover:bg-primaryColor hover:text-white rounded-full py-5 px-5 sm:px-10 text-center block lg:inline-block ${classes}`} href={href}>
      {text}
    </Link>
  );
};

export default BorderButton;
