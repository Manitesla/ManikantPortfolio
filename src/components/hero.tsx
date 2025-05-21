import { motion } from "framer-motion";
import { Arduino } from "./canvas";
import { styles } from "../styles";
import { cn } from "../utils/lib";
import { logo } from "../assets";

// Hero
export const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      {/* About Me Section */}
      <div
        className={cn(
          styles.paddingX,
          "absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-col items-center gap-5"
        )}
      >
    <div className="flex flex-col items-center text-center">
  <h1 className={cn(styles.heroHeadText, "text-white font-bold text-xl md:text-2xl", "text-shadow-lg")}>
    Hi, I'm <span className="text-white">Manikant</span>
  </h1>
  <p className={cn(styles.heroSubText, "mt-2 text-white text-xs md:text-sm font-light", "text-shadow-md")}>
  Innovative Engineer specializing in embedded, IoT, and robotics, recognized nationally for engineering excellence
</p>

</div>


      </div>

      {/* arduino and image*/}
      <div className="absolute bottom-0 left-0 right-0 w-full px-10 pb-10 flex flex-col md:flex-row justify-center items-center gap-20">
  {/* arudino */}
  <div className="flex justify-center mb-5 md:mb-0 md:justify-start w-full max-w-[400px] h-[400px] md:mr-10">

    {/* arudino <Arduino />*/}
  </div>

  {/* Image */}
 <div className="flex justify-center md:justify-end mt-12">
  <motion.img
    src={logo}
    alt="Logo"
    initial={{ opacity: 0, y: 20 }}  // start further down
    animate={{ opacity: 1, y: 0 }}  // end lower than before
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="w-[60vw] sm:w-[240px] md:w-[340px] max-w-full rounded-2xl shadow-lg transform transition-transform duration-300 hover:scale-105"
  />
</div>

</div>

    </section>
  );
};
