import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 1,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      animate= { "animate"}
      ref={ref}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I Focus on helping your brand grow <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color:"orange", cursor:"pointer" }}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color:"orange", cursor:"pointer" }}>For Your</motion.b> Business.
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
            asperiores dolores ea numquam quos ut earum corporis modi et
            voluptatem, voluptas, saepe adipisci dignissimos velit ex
            consectetur magni labore repellendus.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
            asperiores dolores ea numquam quos ut earum corporis modi et
            voluptatem, voluptas, saepe adipisci dignissimos velit ex
            consectetur magni labore repellendus.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
            asperiores dolores ea numquam quos ut earum corporis modi et
            voluptatem, voluptas, saepe adipisci dignissimos velit ex
            consectetur magni labore repellendus.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
            asperiores dolores ea numquam quos ut earum corporis modi et
            voluptatem, voluptas, saepe adipisci dignissimos velit ex
            consectetur magni labore repellendus.
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
