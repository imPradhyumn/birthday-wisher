
import React from 'react'
import { motion } from "framer-motion";
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

Meeting you was my favourite accident...I hope in every Universe I find you in some way or the other.
Bas hamesha aisi hi muskurati rahna! Accchii lagti hoo. Behad acchi lagti hoo!! ❤️
Will always celebrate 'you'!!
'
With dher sara pyaarrr!!
- (Whatever you love to call me)`

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

const Message = () => {
  return (
    <section className="letter-section section-wrap" id="letter">

        <Reveal className="letter-card">
          <div className="letter-top">
            <span>Dear Cutuuuu,</span>
          </div>
         
          <p>{message}</p>
          <p className="letter-sign">
            Keep being your lovely, chaotic self.
          </p>
        </Reveal>
      </section>
  )
}

export default Message