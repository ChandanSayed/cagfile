import HeadingSecondary from './HeadingSecondary';

const DoubleHeader = ({ h4, h2 }) => {
  return (
    <>
      <h4 className="font-bold tracking-[3px] leading-normal uppercase">{h4}</h4>
      <HeadingSecondary text={h2} />
    </>
  );
};

export default DoubleHeader;
