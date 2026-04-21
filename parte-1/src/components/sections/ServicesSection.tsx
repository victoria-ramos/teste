import { ASSETS } from '../../assets'
import { CONTENT } from '../../content'
import SectionHeading from '../ui/SectionHeading'

type CardBg = 'gray' | 'green' | 'dark'

type ServiceCardProps = {
  bg: CardBg
  title: string[]
  illustration: string
}

function ServiceCard({ bg, title, illustration }: ServiceCardProps) {
  const bgClass = { gray: 'bg-[#f3f3f3]', green: 'bg-[#b9ff66]', dark: 'bg-[#191a23]' }[bg]
  const labelBg = bg === 'gray' ? 'bg-[#b9ff66]' : 'bg-white'
  const linkColor = bg === 'dark' ? 'text-white' : 'text-[#191a23]'
  const arrowFilter = bg === 'dark' ? 'invert' : ''

  return (
    <div className={`${bgClass} border border-[#191a23] rounded-[45px] shadow-[0_5px_0_0_#191a23] px-[50px] py-[40px] flex items-center justify-between w-full min-h-[310px]`}>
      <div className="flex flex-col gap-[93px]">
        <div className="flex flex-col gap-0">
          {title.map((line, i) => (
            <span key={i} className={`${labelBg} text-[#191a23] font-medium text-[30px] px-2 rounded-[7px] inline-block leading-[1.4] w-fit`}>
              {line}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-[15px]">
          <img src={ASSETS.arrowCircleBlack} alt="" className={`w-[41px] h-[41px] ${arrowFilter}`} />
          <span className={`${linkColor} text-[20px] leading-[28px]`}>{CONTENT.services.learnMore}</span>
        </div>
      </div>
      <img src={illustration} alt="" className="w-[210px] h-[166px] object-contain" />
    </div>
  )
}

const CARD_BACKGROUNDS: CardBg[] = ['gray', 'green', 'dark', 'gray', 'green', 'dark']

const SERVICE_ILLUSTRATIONS = [
  ASSETS.serviceIllustrations.seo,
  ASSETS.serviceIllustrations.ppc,
  ASSETS.serviceIllustrations.socialMedia,
  ASSETS.serviceIllustrations.emailMarketing,
  ASSETS.serviceIllustrations.contentCreation,
  ASSETS.serviceIllustrations.analytics,
]

export default function ServicesSection() {
  return (
    <section id="services" className="px-[100px] py-[70px]">
      <SectionHeading
        label={CONTENT.services.label}
        description={CONTENT.services.description}
      />
      <div className="grid grid-cols-2 gap-10">
        {CONTENT.services.items.map((item, i) => (
          <ServiceCard
            key={item.title.join('')}
            bg={CARD_BACKGROUNDS[i]}
            title={item.title}
            illustration={SERVICE_ILLUSTRATIONS[i]}
          />
        ))}
      </div>
    </section>
  )
}
