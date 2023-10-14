const HeadingSecondary = ({ text, classes = 'mt-2 mb-10' }) => {
  return <h2 className={`text-[28px] leading-tight text-primaryColor font-bold md:leading-tight md:text-5xl ${classes}`}>{text}</h2>;
};

export default HeadingSecondary;
