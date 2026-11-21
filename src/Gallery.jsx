import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Gallery = () => {
  function PhotoCard({ item, index, onClick }) {
    return (
      <motion.button
        className={`photo-card photo-${index % 6}`}
        onClick={onClick}
        whileHover={{ y: -7, rotate: 0, scale: 1.015 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="photo-frame">
          <img
            src={item.image}
            alt={item.caption}
            loading="lazy"
            onError={(e) => {
              e.currentTarget.style.display = "none";
              e.currentTarget.parentElement.classList.add("photo-placeholder");
            }}
          />
          <span className="photo-placeholder-label">ADD YOUR PHOTO</span>
        </div>
        <p>{item.caption}</p>
      </motion.button>
    );
  }

  const memories = [
    {
      image: "/images/1.JPG",
      caption: "हसीन",
      tag: "THE SMILE",
    },
    {
      image: "/images/2.jpg",
      caption: "लावण्यपूर्ण",
      tag: "THE MOMENT",
    },
    {
      image: "/images/11.jpg",
      caption: "A sight to my sore eyes",
      tag: "THE LOOK",
    },
    {
      image: "/images/4.jpg",
      caption: "Be-hadd खूबसूरत",
      tag: "THE VIBE",
    },
    {
      image: "/images/5.jpg",
      caption: "चलता फिरता आफताब 🌝",
      tag: "THE GLOW",
    },
    {
      image: "/images/6.jpg",
      caption: "Pyaarriiii",
      tag: "THE ICON",
    },
    {
      image: "/images/7.jpg",
      caption: "Rashk-e-qamar 🌝",
      tag: "THE CLASSIC",
    },
    {
      image: "/images/10.jpg",
      caption: "A walking poetry",
      tag: "THE MASTERPIECE",
    },
    {
      image: "/images/9.jpg",
      caption: "You're a 10/10 but always be my 11:11 😭",
      tag: "THE EXTRA",
    },
  ];

  return (
    <section className="memories section-wrap" id="memories">
      <p style={{ textAlign: "center", fontSize: "20px" }}>
        This is what Universe made you
      </p>
      <div className="gallery-grid">
        {memories.map((item, i) => (
          <PhotoCard
            key={item.image}
            item={item}
            index={i}
            onClick={() => setActivePhoto(i)}
          />
        ))}
      </div>

      <Link to={"/cards"} className="next-button">
        Next
        <ArrowRight size={"20px"} />
      </Link>
    </section>
  );
};

export default Gallery;
