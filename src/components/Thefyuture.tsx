'use client';

import ScrollVelocity from './ui/ScrollVelocity';
  

export function Thefyuture() {
  return (
    <section className="py-24 bg-card/30 text-[#9d9af0] font-semibold">
      <ScrollVelocity
        texts={['The future of mental health care starts here']}
        velocity={90}
        className="custom-scroll-text"
      />
    </section>
  )
}
