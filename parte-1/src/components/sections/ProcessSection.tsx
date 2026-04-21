import { useState } from 'react'
import { CONTENT } from '../../content'
import SectionHeading from '../ui/SectionHeading'
import PlusMinusIcon from '../ui/PlusMinusIcon'

export default function ProcessSection() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="px-[100px] py-[70px]">
      <SectionHeading
        label={CONTENT.process.label}
        description={CONTENT.process.description}
      />
      <div className="flex flex-col gap-[30px]">
        {CONTENT.process.steps.map((step, i) => {
          const isOpen = openIndex === i
          return (
            <div
              key={step.num}
              className={`${isOpen ? 'bg-[#b9ff66]' : 'bg-[#f3f3f3]'} border border-[#191a23] rounded-[45px] shadow-[0_5px_0_0_#191a23] px-[60px] py-[41px] cursor-pointer transition-colors`}
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-[25px]">
                  <span className="font-medium text-[60px] text-[#191a23] leading-none">{step.num}</span>
                  <span className="font-medium text-[30px] text-[#191a23]">{step.title}</span>
                </div>
                <PlusMinusIcon open={isOpen} />
              </div>
              {isOpen && step.description && (
                <>
                  <hr className="border-[#191a23] my-[30px]" />
                  <p className="text-[18px] text-[#191a23] leading-[1.55] max-w-[1114px]">
                    {step.description}
                  </p>
                </>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
