import React from "react";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Heart,
  Music2,
  Pause,
  Play,
  X,
  Sparkles,
  Stars,
} from "lucide-react";

const message = `Happyy Birthday to youu!! 🎂 
May god bless you like he blesses the flowers, the Moon, the stars. May you manifest aapkii har ek khwaaish. 
Always be grateful to your parents for creating youu! 😋
You are my reason my hearts blushes and giggle randomly, you are the highlight of all these years we talked, you have always been the calm in the chaos of my life.

Jis roz Bhagwan ka bday hota he us din bhgwan bhi maaf krdete he, aaj apka din he you are my cutie devi 🤌, i know mene apko bht baar naaraz kiya he hurt kiya he, kasam se kbhi bhi intentional nh tha 😭, me kbhi aapke liye esa nh soch skta, mhari cutie Devi, ho ske to maaf krdijo 😭

Koi takalluf nhi he kahne me not a single day has passed all these years that a thought of you hasn’t crossed my mind. It always does, when i wakeup, when im working and when i go to bed. You are the Moon to my night sky! Thank you for always being there and made my life special Cutu ❤️!!

You are someone, I would have gone for war for you, apko kbhi nh khona chahungaa, I will always celebrate your existence. But fir bhii I don’t know kab ky aakhri ho, I will keep you as my favourite incomplete wish, will always keep you alive in my heart and poetries! A part of me will always miss you. I love you to thik be but I wanna say “I found love in you” 👉👈

अब के हम बिछड़े तो शायद कभी ख़्वाबों में मिलें,
जिस तरह सूखे हुए फूल किताबों में मिले 

Enjoyyy your day my favourite person!! 😋🎀

Bas hamesha aisi hi muskurati rahna! Accchii lagti hoo. Behad acchi lagti hoo!! ❤️

With dher sara pyaarrr!!
- (Whatever you love to call me)`


const herName = "cutuuu";
const birthdayNote =
  "I hope this year is kind to you, full of unexpected little joys, big wins, and reasons to laugh until your cheeks hurt. Keep being wonderfully, unapologetically you.";
const memories = [
  {
    image: "/public/images/1.jpg",
    caption: "हसीन",
    tag: "THE SMILE",
  },
  {
    image: "/public/images/2.jpg",
    caption: "लावण्यपूर्ण",
    tag: "THE MOMENT",
  },
  {
    image: "/public/images/11.jpg",
    caption: "A sight to my sore eyes",
    tag: "THE LOOK",
  },
  {
    image: "/public/images/4.jpg",
    caption: "Be-hadd खूबसूरत",
    tag: "THE VIBE",
  },
  {
    image: "/public/images/5.jpg",
    caption: "चलता फिरता आफताब 🌝",
    tag: "THE GLOW",
  },
  {
    image: "/public/images/6.jpg",
    caption: "Pyaarriiii",
    tag: "THE ICON",
  },
  {
    image: "/public/images/7.jpg",
    caption: "Rashk-e-qamar 🌝",
    tag: "THE CLASSIC",
  },
  {
    image: "/public/images/10.jpg",
    caption: "A walking poetry",
    tag: "THE MASTERPIECE",
  },
  {
    image: "/public/images/9.jpg",
    caption: "You're a 10/10 but always be my 11:11 😭",
    tag: "THE EXTRA",
  },
];
const reasons = [
  [
    "01",
    "Your smile",
    "Aapki ek muskurahat se thik hojati he tabiyat hamari, log puch lete he aksar, dawa kaa naam kya haii",
  ],
  ["02", "Your existence", "Aap ho to neend nh aati, neend aaye to phir saare khawab aapke hain"],
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
          This corner of opens on <strong>16 December at 7:21 AM</strong>.
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

export default function App() {
  const [unlocked, setUnlocked] = useState(
    () => Date.now() >= unlockDate.getTime(),
  );
  const [entered, setEntered] = useState(false);
  const [openedLetter, setOpenedLetter] = useState(false);
  const [activePhoto, setActivePhoto] = useState(null);
  const [revealed, setRevealed] = useState([]);
  const [wishMade, setWishMade] = useState(false);
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

  useEffect(() => {
    if (!confetti) return;
    const timer = setTimeout(() => setConfetti(false), 3600);
    return () => clearTimeout(timer);
  }, [confetti]);

  // if (!unlocked) return <Countdown />;

  const toggleReason = (i) =>
    setRevealed((old) =>
      old.includes(i) ? old.filter((x) => x !== i) : [...old, i],
    );

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
              Forever grateful to your parents for creating youuu 😋
            </p>
          </Reveal>
        </div>
        <Reveal delay={0.2} className="hero-visual">
          <div className="hero-photo-wrap">
            <img
              src="public/images/8.png"
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

      <section className="memories section-wrap" id="memories">
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
       
      </section>

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
        </div>
      </section>

      <section className="letter-section section-wrap" id="letter">
        <Reveal className="letter-label">
          <span className="eyebrow">A SMALL NOTE, WITH BIG GOOD WISHES</span>
          <span className="letter-flower">✳</span>
        </Reveal>
        <Reveal className="letter-card">
          <div className="letter-top">
            <span>DEAR {herName.toUpperCase()},</span>
          </div>
         
          <p>{message}</p>
          <p className="letter-sign">
            Keep being your lovely, chaotic self.
          </p>
        </Reveal>
      </section>

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
      </section>

      <AnimatePresence>
        {activePhoto !== null && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActivePhoto(null)}
          >
            <button
              className="lightbox-close"
              onClick={() => setActivePhoto(null)}
            >
              <X />
            </button>
            <button
              className="lightbox-arrow prev"
              onClick={(e) => {
                e.stopPropagation();
                setActivePhoto(
                  (activePhoto + memories.length - 1) % memories.length,
                );
              }}
            >
              <ArrowLeft />
            </button>
            <motion.div
              className="lightbox-content"
              initial={{ scale: 0.94, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={memories[activePhoto].image}
                alt={memories[activePhoto].caption}
              />
              <span>
               {memories[activePhoto].caption}
              </span>
            </motion.div>
            <button
              className="lightbox-arrow next"
              onClick={(e) => {
                e.stopPropagation();
                setActivePhoto((activePhoto + 1) % memories.length);
              }}
            >
              <ArrowRight />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
