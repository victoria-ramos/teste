import { useState } from 'react'
import { CONTENT } from '../../content'
import SectionHeading from '../ui/SectionHeading'

export default function ContactSection() {
  const [type, setType] = useState<'say-hi' | 'quote'>('say-hi')
  const { form } = CONTENT.contact

  return (
    <section id="contact" className="px-[100px] py-[70px] w-full max-w-[1440px] mx-auto">
      <SectionHeading
        label={CONTENT.contact.label}
        description={CONTENT.contact.description}
      />
      <div className="bg-[#f3f3f3] rounded-[45px] relative overflow-hidden w-full h-[773px] flex items-center pl-[100px]">
        <div className="flex flex-col gap-[40px] flex-1 max-w-[556px] relative z-10 w-full">
          <div className="flex gap-[35px]">
            {(['say-hi', 'quote'] as const).map((value) => (
              <label key={value} className="flex items-center gap-3 cursor-pointer" onClick={() => setType(value)}>
                <div className="w-[28px] h-[28px] rounded-full border border-[#191a23] flex items-center justify-center bg-white">
                  {type === value && <div className="w-[16px] h-[16px] rounded-full bg-[#b9ff66]" />}
                </div>
                <span className="text-[18px] text-[#191a23] leading-none">
                  {value === 'say-hi' ? CONTENT.contact.sayHi : CONTENT.contact.getQuote}
                </span>
              </label>
            ))}
          </div>

          <div className="flex flex-col gap-[25px]">
            <div className="flex flex-col gap-[10px]">
              <label className="text-[16px] text-[#191a23] leading-none">{form.nameLabel}</label>
              <input
                type="text"
                placeholder={form.namePlaceholder}
                className="border border-[#191a23] rounded-[14px] px-[30px] py-[18px] text-[18px] text-[#191a23] bg-white placeholder-[#898992] outline-none focus:ring-1 focus:ring-[#b9ff66]"
              />
            </div>
            <div className="flex flex-col gap-[10px]">
              <label className="text-[16px] text-[#191a23] leading-none">{form.emailLabel}</label>
              <input
                type="email"
                placeholder={form.emailPlaceholder}
                className="border border-[#191a23] rounded-[14px] px-[30px] py-[18px] text-[18px] text-[#191a23] bg-white placeholder-[#898992] outline-none focus:ring-1 focus:ring-[#b9ff66]"
              />
            </div>
            <div className="flex flex-col gap-[10px]">
              <label className="text-[16px] text-[#191a23] leading-none">{form.messageLabel}</label>
              <textarea
                placeholder={form.messagePlaceholder}
                className="border border-[#191a23] rounded-[14px] px-[30px] py-[18px] text-[18px] text-[#191a23] bg-white placeholder-[#898992] outline-none focus:ring-1 focus:ring-[#b9ff66] resize-none h-[190px]"
              />
            </div>
          </div>

          <button className="w-full bg-[#191a23] text-white rounded-[14px] px-[35px] py-5 text-[20px] leading-[28px] hover:bg-[#2d2e3a] transition-colors mt-[15px]">
            {form.submit}
          </button>
        </div>

        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 pointer-events-none">
          <img src="/contact-illustration.svg" alt="" className="w-[800px] h-auto object-contain" />
        </div>
      </div>
    </section>
  )
}
