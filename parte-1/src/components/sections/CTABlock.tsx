import { ASSETS } from '../../assets'
import { CONTENT } from '../../content'

export default function CTABlock() {
  return (
    <section className="px-[100px] pt-[70px] pb-[100px]">
      <div className="bg-[#f3f3f3] rounded-[45px] px-[60px] py-[60px] relative flex items-center justify-between overflow-visible">
        <div className="flex flex-col gap-[26px] max-w-[500px] relative z-10">
          <h3 className="font-medium text-[30px] text-[#191a23] leading-[1.3]">
            {CONTENT.cta.heading}
          </h3>
          <p className="text-[18px] text-[#191a23] leading-[1.55]">
            {CONTENT.cta.description}
          </p>
          <button className="self-start bg-[#191a23] text-white rounded-[14px] px-[35px] py-5 text-[20px] leading-[28px] hover:bg-[#2d2e3a] transition-colors">
            {CONTENT.cta.button}
          </button>
        </div>
        <img
          src={ASSETS.ctaIllustration}
          alt=""
          className="absolute right-[60px] top-1/2 -translate-y-1/2 w-auto h-[400px] object-contain pointer-events-none"
        />
      </div>
    </section>
  )
}
