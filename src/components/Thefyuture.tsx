'use client';

import ScrollVelocity from './ui/ScrollVelocity';
import { SoundWaveAnimation } from './ui/sound-wave-animation';

export function Thefyuture() {
  return (
    <section className="relative py-24 text-[#9d9af0] font-semibold bg-white overflow-hidden" id="the-future">
      
      {/* Background Animation
      <div className="absolute inset-0 z-0 py-12">
        <SoundWaveAnimation />
      </div> */}

      {/* Foreground Content */}
      <div className="relative z-10">
        <ScrollVelocity
          texts={['The future of mental health care starts here.']}
          velocity={90}
          className="custom-scroll-text"
        />
      </div>
    </section>
  );
}
