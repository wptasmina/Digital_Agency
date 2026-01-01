import { motion } from "framer-motion";

export default function ImageBanner() {
  return (
    <div className="relative min-h-[450px] max-w-[1720px] mx-auto lg:mt-20 hidden md:block">
  {[
    {
      src: "/public/frame-1.png",
      className:
        "left-0 bottom-10 lg:bottom-0 max-h-[200px] w-[100px] lg:w-[120px] xl:w-auto",
    },
    {
      src: "/public/frame-2.png",
      className:
        "left-[101px] lg:left-[121px] xl:left-[167px] top-[37%] lg:top-32 xl:top-10 max-h-[350px] w-[132px] lg:w-[185px] xl:w-auto",
    },
    {
      src: "/public/frame-3.png",
      className:
        "left-[233px] lg:left-[307px] xl:left-[394px] top-[155px] lg:top-[109px] xl:top-[17px] max-h-[390px] w-[125px] lg:w-[177px] xl:w-auto",
    },
    {
      src: "/public/frame-4.png",
      className:
        "right-[232px] lg:right-[312px] xl:right-[408px] top-[175px] lg:top-[146px] xl:top-[82px] max-h-[380px] w-[137px] lg:w-[187px] xl:w-[220px]",
    },
    {
      src: "/public/frame-5.png",
      className:
        "right-[100px] lg:right-[122px] xl:right-[180px] top-[150px] lg:top-[106px] xl:top-[48px] h-[270px] lg:h-[375px] xl:h-[414px] w-[131px] lg:w-[189px] xl:w-[227px]",
    },
    {
      src: "/public/frame-6.png",
      className:
        "right-0 top-1/2 lg:top-66 lg:-translate-y-1/2 xl:top-28 xl:translate-y-0 max-h-[200px] w-[99px] lg:w-[120px] xl:w-[176px] xl:w-auto object-cover",
    },
  ].map((img, i) => (
    <motion.img
      key={i}
      src={img.src}
      alt=""
      className={`absolute ${img.className}`}
      initial={{ opacity: 0, y: i % 2 === 0 ? 80 : -80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    />
  ))}
    </div>

  );
}
