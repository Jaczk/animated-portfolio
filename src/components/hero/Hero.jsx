import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 1.6,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = ({portfolioRef}) => {

  const handleScrollToPortfolio = () =>{
    if (portfolioRef.current) {
      portfolioRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>CHRISTOPHER JM</motion.h2>
          <motion.h1 variants={textVariants}>
            Full Stack Web Developer
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button
              variants={textVariants}
              whileHover={{ background: "white", color: "black" }}
              onClick={handleScrollToPortfolio}
            >
              Lihat Proyek
            </motion.button>
            <motion.button
              variants={textVariants}
              whileHover={{ background: "white", color: "black" }}
            >
              Contact Me
            </motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="scroll.png"
            alt=""
            className="scrolls"
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Laravel MySQL HTML CSS JavaScript React
      </motion.div>
      <div className="imageContainer">
        <img src="hero.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
