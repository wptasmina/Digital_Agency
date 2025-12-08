import Button from "../../../components/Button";

const DreamersAndDoers = ({
  title,
  subtitle,
  bgImage,
  noBorder
}) => {
  const hasBg = !!bgImage;  // background ache kina

  return (
    <div
      className={`Container bg-white ${
        noBorder ? "border-none" : "border border-[#B6BCC6]"
      }`}
      style={{
        backgroundImage: hasBg ? `url(${bgImage})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <p
        className={`pl-4 sm:pl-6 lg:pl-10 mb-8 sm:mb-10 lg:mb-[50px]
          text-2xl sm:text-4xl lg:text-[65px] leading-tight
          text-[#B6BCC6] 
          ${hasBg ? "border-none" : "border-l-[1px] border-[#B6BCC6]"}
        `}
      >
        {title}
        <br className="hidden lg:block" />
        {subtitle}
      </p>

      <div className="pl-4 sm:pl-6 lg:pl-10">
        <Button title="Get Started Now" />
      </div>
    </div>
  );
};

export default DreamersAndDoers;
