import { ASSETS } from '../../assets'
import { CONTENT } from '../../content'
import SectionHeading from '../ui/SectionHeading'

export default function CaseStudiesSection() {
  return (
    <section id="cases" className="px-[100px] py-[70px]">
      <SectionHeading
        label={CONTENT.caseStudies.label}
        description={CONTENT.caseStudies.description}
      />
      <div className="bg-[#191a23] rounded-[45px] px-[60px] py-[70px] flex items-start gap-[64px]">
        {CONTENT.caseStudies.studies.map((text, i) => (
          <div key={i} className="flex items-start">
            <div className="flex flex-col gap-5 max-w-[286px]">
              <p className="text-[18px] text-white leading-[1.55]">{text}</p>
              <div className="flex items-center gap-[15px]">
                <span className="text-[#b9ff66] text-[20px] leading-[28px]">
                  {CONTENT.caseStudies.learnMore}
                </span>
                <img src={ASSETS.arrowCircleGreen} alt="" className="w-[17px] h-[10px]" />
              </div>
            </div>
            {i < CONTENT.caseStudies.studies.length - 1 && (
              <div className="w-px bg-white mx-[32px] self-stretch opacity-20" />
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
