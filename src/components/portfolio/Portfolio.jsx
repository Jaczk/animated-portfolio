import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "React Commerce",
    img: "https://images.pexels.com/photos/19976822/pexels-photo-19976822/free-photo-of-woman-looking-at-flock-of-birds-in-sky.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae veniam tempora excepturi, animi commodi, magnam omnis eos itaque nihil accusamus laudantium veritatis voluptas odit iste et reiciendis ab ut neque.",
  },
  {
    id: 2,
    title: "Next.js Commerce",
    img: "https://images.pexels.com/photos/20116341/pexels-photo-20116341/free-photo-of-postal-altiplano-chileno.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae veniam tempora excepturi, animi commodi, magnam omnis eos itaque nihil accusamus laudantium veritatis voluptas odit iste et reiciendis ab ut neque.",
  },
  {
    id: 3,
    title: "Vanilla Js Commerce",
    img: "https://images.pexels.com/photos/6747386/pexels-photo-6747386.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae veniam tempora excepturi, animi commodi, magnam omnis eos itaque nihil accusamus laudantium veritatis voluptas odit iste et reiciendis ab ut neque.",
  },
  {
    id: 1,
    title: "Laravel Commerce",
    img: "https://images.pexels.com/photos/6747387/pexels-photo-6747387.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae veniam tempora excepturi, animi commodi, magnam omnis eos itaque nihil accusamus laudantium veritatis voluptas odit iste et reiciendis ab ut neque.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset:["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-200, 200]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imgContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <motion.button whileHover={{ backgroundColor:"rgb(255, 186, 35)", scale:1.1  }}>See Demo</motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Portfolio;
