import { useState } from 'react'
import { CONTENT } from '../../content'
import SectionHeading from '../ui/SectionHeading'

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const items = CONTENT.testimonials.items

  // Duplica bordas para criar efeito de loop infinito
  const displayItems = [
    items[items.length - 2],
    items[items.length - 1],
    ...items,
    items[0],
    items[1],
  ]
  const START_INDEX = 2

  return (
    <section className="px-[100px] py-[70px] w-[1440px] mx-auto">
      <SectionHeading
        label={CONTENT.testimonials.label}
        description={CONTENT.testimonials.description}
      />
      <div className="bg-[#191a23] rounded-[45px] relative overflow-hidden flex flex-col items-center w-full h-[625px]">
        <div className="w-full absolute top-[84px] overflow-visible">
          <div
            className="flex gap-[50px] transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(calc(320px - ${(current + START_INDEX) * 650}px))` }}
          >
            {displayItems.map((item, i) => (
              <div key={i} className="w-[600px] flex-shrink-0 flex flex-col">
                <div className="border border-[#b9ff66] rounded-[45px] p-[50px] relative bg-[#191a23] mb-[24px]">
                  <p className="text-[18px] text-white leading-[1.55]">"{item.text}"</p>
                  <svg className="absolute -bottom-[25px] left-[60px] overflow-visible" width="50" height="26" viewBox="0 0 50 26">
                    <path d="M0,0 L25,25 L50,0" stroke="#b9ff66" strokeWidth="1" fill="#191a23" />
                    <line x1="1" y1="0" x2="49" y2="0" stroke="#191a23" strokeWidth="2" />
                  </svg>
                </div>
                <div className="pl-[85px] pt-2 flex flex-col gap-1">
                  <span className="text-[#b9ff66] font-medium text-[20px] leading-none">{item.name}</span>
                  <span className="text-white text-[18px] leading-none">{item.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-[68px] flex items-center justify-between w-[500px]">
          <button
            aria-label={CONTENT.testimonials.prevAlt}
            onClick={() => setCurrent((c) => (c - 1 + items.length) % items.length)}
            className="text-white hover:opacity-70 transition-opacity"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M20 12H4M4 12L10 6M4 12L10 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <div className="flex gap-[20px]">
            {items.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)} className="hover:opacity-80 transition-opacity">
                <svg width="18" height="18" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M 0 0 Q 7 6 14 0 Q 8 7 14 14 Q 7 8 0 14 Q 6 7 0 0 Z"
                    fill={i === current ? '#b9ff66' : 'white'}
                  />
                </svg>
              </button>
            ))}
          </div>
          <button
            aria-label={CONTENT.testimonials.nextAlt}
            onClick={() => setCurrent((c) => (c + 1) % items.length)}
            className="text-white hover:opacity-70 transition-opacity"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
