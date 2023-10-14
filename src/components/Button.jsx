function Button({ classes, text }) {
  return <button className={`rounded-full flex items-center justify-center w-full md:w-[287px] hover:bg-opacity-80 ${classes}`}>{text}</button>;
}

export default Button;
