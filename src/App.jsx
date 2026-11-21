import React from "react";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Music2, Pause, Play, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

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

const unlockDate = new Date(2026, 11, 16, 7, 21, 0);

function Countdown() {
  const [remaining, setRemaining] = useState(() =>
    Math.max(0, unlockDate.getTime() - Date.now()),
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setRemaining(Math.max(0, unlockDate.getTime() - Date.now()));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const days = Math.floor(remaining / 86400000);
  const hours = Math.floor((remaining % 86400000) / 3600000);
  const minutes = Math.floor((remaining % 3600000) / 60000);
  const seconds = Math.floor((remaining % 60000) / 1000);

  return (
    <main className="countdown-screen">
      <div className="countdown-grain" />
      <motion.div
        className="countdown-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>
          A little surprise,
          <br />
          <em> 4 you 👉 👈</em>
        </h1>
        <p>
          This corner opens on <strong>16 December at 7:21 AM</strong>.
        </p>
        <div
          className="countdown-grid"
          aria-label="Countdown to 16 December at 7:21 AM"
        >
          {[
            [days, "DAYS"],

            [hours, "HOURS"],
            [minutes, "MINUTES"],
            [seconds, "SECONDS"],
          ].map(([value, label]) => (
            <div className="countdown-unit" key={label}>
              <strong>{String(value).padStart(2, "0")}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
        <span className="countdown-foot">
          Bas us din early morning exam na ho aapka 😭
        </span>
      </motion.div>
    </main>
  );
}

export default function App() {
  const [unlocked, setUnlocked] = useState(
    () => Date.now() >= unlockDate.getTime(),
  );

  const [musicOn, setMusicOn] = useState(false);
  const audioRef = useRef(null);

  const toggleMusic = async () => {
    if (!audioRef.current) {
      audioRef.current = new Audio("/music.mp3");
      audioRef.current.loop = true;
      audioRef.current.volume = 0.35;
    }
    if (musicOn) {
      audioRef.current.pause();
      setMusicOn(false);
    } else {
      try {
        await audioRef.current.play();
        setMusicOn(true);
      } catch {
        alert("Add your music file as public/music.mp3, then try again.");
      }
    }
  };
  const [confetti, setConfetti] = useState(false);

  useEffect(() => {
    if (unlocked) return;
    const timer = setInterval(() => {
      if (Date.now() >= unlockDate.getTime()) {
        setUnlocked(true);
        clearInterval(timer);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [unlocked]);

  if (!unlocked) return <Countdown />;

  return (
    <main>
      <nav className="nav">
        <a href="#top" className="brand">
          a little <i>something 4 you</i>
          <span>&nbsp;&nbsp;♡</span>
        </a>

        <button
          className="music-toggle"
          onClick={toggleMusic}
          aria-label="Toggle music"
        >
          {musicOn ? <Pause size={15} /> : <Music2 size={15} />}{" "}
          <span>{musicOn ? "PAUSE" : "SOUND ON"}</span>
        </button>
      </nav>

      <section className="hero section-wrap" id="top">
        <div className="hero-copy">
          <Reveal delay={0.1}>
            <h1>
              Happy birthday Cutuu
              <br />
              <em>My favourite XX chromosome.</em>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="hero-description">
              Wishing you a more beautiful, calm and chatpati life ahead 😋
            </p>

            <Link to={"/gallery"} className="next-button">
              Next
              <ArrowRight size={"20px"} />
            </Link>
          </Reveal>
        </div>
        <Reveal delay={0.2} className="hero-visual">
          <div className="hero-photo-wrap">
            <img
              src="/images/8.PNG"
              alt="Birthday girl"
              onError={(e) => {
                e.currentTarget.style.display = "none";
                e.currentTarget.parentElement.classList.add("hero-placeholder");
              }}
            />
            <span className="hero-placeholder-text">
              YOUR FAVOURITE
              <br />
              PHOTO GOES HERE
            </span>
            <span className="hero-photo-stamp">
              THE <br />
              CUTEST
              <br />
              BIRTHDAY
              <br />
              GIRL ✳
            </span>
          </div>
        </Reveal>
      </section>

      <section className="ticker" aria-label="Birthday wishes">
        <div className="ticker-track">
          {Array.from({ length: 4 }, (_, i) => (
            <span key={i}>
              HAPPY BIRTHDAY <b>✳</b> KEEP SHINING <b>♡</b> STAY UNSTOPPABLE{" "}
              <b>✳</b> MORE CAKE, LESS DRAMA <b>♡</b>
            </span>
          ))}
        </div>
      </section>
    </main>
  );
}
