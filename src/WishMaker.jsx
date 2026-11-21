import React, { useEffect, useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const WishMaker = () => {
  const [wishMade, setWishMade] = useState(false);
  const [confetti, setConfetti] = useState(false);

  useEffect(() => {
    if (!confetti) return;
    const timer = setTimeout(() => setConfetti(false), 3600);
    return () => clearTimeout(timer);
  }, [confetti]);

  function Reveal({ children, delay = 0, className = "" }) {
    return (
      <motion.div
        className={className}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <section className="finale">
      <div className="finale-bg-mark">♡</div>
      <Reveal className="finale-content">
        <h2>
          Make a wish.
          <br />
          <em>Make it a good one.</em>
        </h2>
        <p>Close your eyes for a second. Think of something wonderful.</p>
        <button
          className="wish-button"
          onClick={() => {
            setWishMade(true);
            setConfetti(true);
          }}
        >
          {wishMade ? "WISH SENT INTO THE UNIVERSE ✨" : "I'VE MADE A WISH"}{" "}
          <Sparkles size={16} />
        </button>
        {wishMade && (
          <motion.p
            className="wish-response"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Now let the universe do its thing. Happy birthday to you Mannn. ♡
          </motion.p>
        )}
      </Reveal>
      {confetti && (
        <div className="confetti" aria-hidden="true">
          {Array.from({ length: 48 }, (_, i) => (
            <i key={i} style={{ "--i": i, "--left": `${(i * 37) % 100}%` }} />
          ))}
        </div>
      )}

      <Link to={"/message"} className="next-button">
        Next
        <ArrowRight size={"20px"} />
      </Link>
    </section>
  );
};

export default WishMaker;
