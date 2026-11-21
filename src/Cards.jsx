import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

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

export const Cards = () => {
  const [revealed, setRevealed] = useState([]);

  const toggleReason = (i) =>
    setRevealed((old) =>
      old.includes(i) ? old.filter((x) => x !== i) : [...old, i],
    );

  const reasons = [
    [
      "01",
      "Your smile",
      "Aapki ek muskurahat se thik hojati he tabiyat hamari, log puch lete he aksar, dawa kaa naam kya haii",
    ],
    [
      "02",
      "Your existence",
      "Aap ho to neend nh aati, neend aaye to phir saare khawab aapke hain",
    ],
    [
      "03",
      "Your Hair",
      "Ye hawayein aapki zulfein bikher de to accha, un zulfon ko ham sanwar de to aur bhi acchaa",
    ],
    [
      "04",
      "Your eyes",
      "Aapki surat se hai aalam mein bahaaron ko sabaat, aapki aankhon ke siwa duniya mein rakkha kya hai",
    ],
  ];

  return (
    <section className="reasons">
      <div className="section-wrap reasons-inner">
        <Reveal className="reasons-intro">
          <span className="eyebrow">A COMPLETELY UNBIASED LIST</span>
          <h2>
            Things that make
            <br />
            you <em>you.</em>
          </h2>
        </Reveal>
        <div className="reason-grid">
          {reasons.map(([num, title, copy], i) => (
            <motion.button
              key={num}
              className={`reason-card ${revealed.includes(i) ? "is-open" : ""}`}
              onClick={() => toggleReason(i)}
              whileHover={{ y: -5 }}
            >
              <span className="reason-num">{num} / 04</span>
              <span className="reason-title">{title}</span>
              <AnimatePresence mode="wait">
                {revealed.includes(i) ? (
                  <motion.p
                    key="copy"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                  >
                    {copy}
                  </motion.p>
                ) : (
                  <span className="tap-hint">TAP TO REVEAL ↗</span>
                )}
              </AnimatePresence>
            </motion.button>
          ))}
        </div>
        <Link to={"/wish-maker"} className="next-button">
          Next
          <ArrowRight size={"20px"} />
        </Link>
      </div>
    </section>
  );
};
