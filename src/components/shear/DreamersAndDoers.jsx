// import Button from "../../../components/Button";

import Button from "../Button";

const DreamersAndDoers = ({
  title,
  subtitle,
  bgImage,
}) => {
  const hasBg = !!bgImage;  // background ache kina

  return (
    <div
      className="Container bg-[#B6BCC6] "
      style={{
        backgroundImage: hasBg ? `url(${bgImage})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
        <p
        className={`pl-4 sm:pl-6 lg:pl-10
          text-2xl sm:text-4xl lg:text-[65px]
          text-[#B6BCC6] font-normal w-5/6 
          ${hasBg ? "border-none" : "border-l-[1px] border-[#B6BCC6]"}
        `}
      >
        {title}
        {/* <br className="hidden lg:block font-normal" /> */}
      </p>
       <p 
       className={`pl-4 sm:pl-6 lg:pl-10 mb-8 sm:mb-10 lg:mb-[50px]
          text-2xl sm:text-4xl lg:text-[65px] 
          text-[#B6BCC6] font-normal
          ${hasBg ? "border-none" : "border-l-[1px] border-[#B6BCC6]"}
        `}
       >
          {subtitle}
        </p>

      <div className="pl-4 sm:pl-6 lg:pl-10">
        <Button title="Get Started Now" />
      </div>
    </div>
  );
};

export default DreamersAndDoers;
