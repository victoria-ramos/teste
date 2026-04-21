import { useState } from 'react'
import { CONTENT } from './content'

// ─── Asset URLs from Figma ──────────────────────────────────────────────────
const ASSETS = {
  // Logo
  icon: 'https://www.figma.com/api/mcp/asset/5d615d6e-33b2-4155-b1b6-f48a1aa14053',
  positivusText: 'https://www.figma.com/api/mcp/asset/ec9e1613-39b3-46c5-ad31-9f81d746f9d8',
  // Hero illustration layers
  hero: {
    frame: 'https://www.figma.com/api/mcp/asset/ba76c026-f123-4c2c-9246-4a3ed8012651',
    frame1: 'https://www.figma.com/api/mcp/asset/99bd4168-720a-47a4-b9a4-8b23ac741696',
    ellipse7: 'https://www.figma.com/api/mcp/asset/6fccb2d3-c6d2-41fc-8036-7095763826e6',
    ellipse14: 'https://www.figma.com/api/mcp/asset/31be1b3f-dacd-4a9b-a252-b8544e80e7b5',
    ellipse16: 'https://www.figma.com/api/mcp/asset/99e64dd0-05bc-40ed-a577-4de19581598a',
    ellipse15: 'https://www.figma.com/api/mcp/asset/b5531f7e-2304-489b-85f4-27a0852b7b06',
    group: 'https://www.figma.com/api/mcp/asset/d42a320e-ea21-43d8-9a66-e7226aee57ac',
    group1: 'https://www.figma.com/api/mcp/asset/8a03e5d7-25a5-49ef-b99e-e74229d4d76e',
    group2: 'https://www.figma.com/api/mcp/asset/a211a1f2-6c3d-45b2-b672-4a026ae2b52a',
    group3: 'https://www.figma.com/api/mcp/asset/dfe6c80b-8f7a-4f7b-a169-6f2dad539fd5',
    group4: 'https://www.figma.com/api/mcp/asset/6a01d7e2-99ce-4a47-84fb-258b8b084c4e',
    group5: 'https://www.figma.com/api/mcp/asset/268e68b2-4118-44b2-9de2-9b94e454f424',
  },
  // Company logo vectors (composed as absolute positioned layers)
  logoVectors: {
    amazon1: 'https://www.figma.com/api/mcp/asset/9244781b-c0e2-4463-b7fa-36c5bf6f73c8',
    amazon2: 'https://www.figma.com/api/mcp/asset/734ff0cc-f30c-4463-9d3b-f206e9526a75',
    dribbble: 'https://www.figma.com/api/mcp/asset/53e895f9-da0b-480d-8a33-f32bd97c6946',
    hubspot1: 'https://www.figma.com/api/mcp/asset/dc1eaddd-2adf-44f5-98e2-381ab2afb9bb',
    hubspot2: 'https://www.figma.com/api/mcp/asset/5ab5fe3d-178e-4721-9739-76b0f72b50a7',
    notion: 'https://www.figma.com/api/mcp/asset/0c46bfee-5a7a-4590-a28e-325182ad3570',
    netflix: 'https://www.figma.com/api/mcp/asset/e2360e90-efc1-4a5f-8a3e-2547f438c1c4',
    zoom: 'https://www.figma.com/api/mcp/asset/5e3ec3f7-e188-475b-9613-5286a9eb6b45',
  },
  illustration: {
    seo: '/illustration-1.svg',
    ppc: '/illustration-2.svg',
    social: '/illustration-3.svg',
    email: '/illustration-4.svg',
    content: '/illustration-5.svg',
    analytics: '/illustration-6.svg',
    cta: '/illustration-7.svg',
  },
  arrowGreen: 'https://www.figma.com/api/mcp/asset/47cc36c9-5dea-4f4b-a073-70ccca239c18',
  arrowBlack: 'https://www.figma.com/api/mcp/asset/f8073bf8-e4c6-4a60-b6a5-f9fec0bbb606',
  team: {
    john: '/photo-1.svg',
    jane: '/photo-2.svg',
    michael: '/photo-3.svg',
    emily: '/photo-4.svg',
    brian: '/photo-5.svg',
    sarah: '/photo-6.svg',
  },
  socialIcon: 'https://www.figma.com/api/mcp/asset/e988922b-3ae9-461d-8a93-a5fccbde3527',
  arrowLeft: 'https://www.figma.com/api/mcp/asset/ecd7b43b-3b2e-4abc-a5ac-fa8c708c9b56',
  arrowRight: 'https://www.figma.com/api/mcp/asset/4f0feb03-8395-4e57-aa92-146d5d0dab92',
  footerIllustration: 'https://www.figma.com/api/mcp/asset/b1be8b2a-9685-415a-87ec-edadf2b8d1b1',
  positivusFooter: 'https://www.figma.com/api/mcp/asset/7ff7e6a1-d8dd-4241-b072-a82a4d8d36af',
  socialIcons: 'https://www.figma.com/api/mcp/asset/d48a66c0-f47a-471a-8463-e704e23cf25a',
}

// ─── Reusable Components ────────────────────────────────────────────────────

function SectionLabel({ text }: { text: string }) {
  return (
    <span className="bg-[#b9ff66] text-[#191a23] font-medium text-[40px] px-3 rounded-[7px] leading-none">
      {text}
    </span>
  )
}

function SectionHeading({ label, description }: { label: string; description: string }) {
  return (
    <div className="flex items-center gap-10 mb-16">
      <SectionLabel text={label} />
      <p className="text-[18px] leading-[1.55] text-[#191a23] max-w-[580px] whitespace-pre-line">{description}</p>
    </div>
  )
}

function PlusMinusIcon({ open }: { open: boolean }) {
  return (
    <div className="flex-shrink-0 w-[58px] h-[58px] rounded-full border-2 border-[#191a23] flex items-center justify-center bg-white">
      <span className="text-[28px] font-light leading-none text-[#191a23]">{open ? '−' : '+'}</span>
    </div>
  )
}

// ─── Logo Component (exact Figma structure) ──────────────────────────────────

function PositivusLogo({ className }: { className?: string }) {
  return (
    <div className={className ?? 'h-[36px] relative w-[219.537px]'}>
      {/* Icon occupies the left 16.4% */}
      <div className="absolute inset-[0_83.6%_0_0]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={ASSETS.icon} />
      </div>
      {/* "Positivus" text word-mark */}
      <div className="absolute inset-[8.33%_0_12.33%_22.28%]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={ASSETS.positivusText} />
      </div>
    </div>
  )
}

// ─── Navigation ─────────────────────────────────────────────────────────────

function Navbar() {
  return (
    <nav className="flex items-center justify-between overflow-clip px-[100px] w-full">
      <div className="flex items-start overflow-clip py-[10px]">
        <PositivusLogo className="h-[36px] relative shrink-0 w-[219.537px]" />
      </div>
      <div className="flex gap-[40px] items-center justify-center">
        {CONTENT.navbar.links.map((link, i) => (
          <a
            key={link}
            href={['#about', '#services', '#cases', '#pricing', '#blog'][i]}
            className="font-normal leading-[28px] text-[20px] text-black whitespace-nowrap hover:underline"
          >
            {link}
          </a>
        ))}
        <button className="group border border-[#191a23] border-solid flex items-start px-[35px] py-[20px] rounded-[14px] hover:bg-[#191a23] transition-colors">
          <span className="font-normal leading-[28px] text-[20px] text-[#191a23] group-hover:text-white text-center whitespace-nowrap">
            {CONTENT.navbar.cta}
          </span>
        </button>
      </div>
    </nav>
  )
}

// ─── Hero ────────────────────────────────────────────────────────────────────

function HeroIllustration() {
  const h = ASSETS.hero
  return (
    // Grid overlay: all children share cell [col-1, row-1] and use ml/mt to position
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      {/* Small star / frame bottom-right */}
      <div className="col-[1] ml-[293px] mt-[427px] relative row-[1] size-[36px]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={h.frame} />
      </div>
      {/* Rotated diamond frame */}
      <div className="col-[1] flex items-center justify-center ml-[58px] mt-[313px] relative row-[1] size-[99.456px]">
        <div className="flex-none rotate-45">
          <div className="relative size-[70.326px]">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={h.frame1} />
          </div>
        </div>
      </div>
      {/* Ellipse rings (3 offset copies) */}
      <div className="col-[1] flex h-[377.652px] items-center justify-center ml-[40.46px] mt-[64px] relative row-[1] w-[553.284px]">
        <div className="flex-none rotate-[28.88deg]">
          <div className="h-[118.948px] relative w-[566.261px]">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={h.ellipse7} />
          </div>
        </div>
      </div>
      <div className="col-[1] flex h-[377.652px] items-center justify-center ml-[20.23px] mt-[100.67px] relative row-[1] w-[553.284px]">
        <div className="flex-none rotate-[28.88deg]">
          <div className="h-[118.948px] relative w-[566.261px]">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={h.ellipse7} />
          </div>
        </div>
      </div>
      <div className="col-[1] flex h-[377.652px] items-center justify-center ml-0 mt-[137.35px] relative row-[1] w-[553.284px]">
        <div className="flex-none rotate-[28.88deg]">
          <div className="h-[118.948px] relative w-[566.261px]">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={h.ellipse7} />
          </div>
        </div>
      </div>
      {/* Small dot circles */}
      <div className="col-[1] ml-[116px] mt-[89px] relative row-[1] size-[31px]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={h.ellipse14} />
      </div>
      <div className="col-[1] ml-[411px] mt-[425px] relative row-[1] size-[20px]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={h.ellipse16} />
      </div>
      <div className="col-[1] ml-[58px] mt-[41px] relative row-[1] size-[47px]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={h.ellipse15} />
      </div>
      {/* Main illustration group */}
      <div className="col-[1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[154px] mt-0 place-items-start relative row-[1]">
        <div className="col-[1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[17.41px] place-items-start relative row-[1]">
          <div className="col-[1] h-[367.589px] ml-0 mt-0 relative row-[1] w-[340.58px]">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={h.group} />
          </div>
        </div>
        {/* Social icon cluster */}
        <div className="col-[1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[254.88px] mt-0 place-items-start relative row-[1]">
          <div className="col-[1] h-[98.624px] ml-0 mt-0 relative row-[1] w-[98.716px]">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={h.group1} />
          </div>
          <div className="col-[1] h-[94.948px] ml-[96.67px] mt-[12.38px] relative row-[1] w-[94.91px]">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={h.group2} />
          </div>
          <div className="col-[1] h-[93.988px] ml-[87.42px] mt-[115.32px] relative row-[1] w-[94.049px]">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={h.group3} />
          </div>
          <div className="col-[1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[66.51px] mt-[214.52px] place-items-start relative row-[1]">
            <div className="col-[1] h-[101.791px] ml-0 mt-0 relative row-[1] w-[101.967px]">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={h.group4} />
            </div>
            <div className="col-[1] h-[57.789px] ml-[31.28px] mt-[24.31px] relative row-[1] w-[39.18px]">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={h.group5} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Hero() {
  return (
    <section className="flex items-start justify-between overflow-clip px-[100px] w-full">
      <div className="flex flex-col gap-[35px] items-start shrink-0">
        <p className="font-medium leading-normal shrink-0 text-[60px] text-black w-[531px]">
          {CONTENT.hero.heading}
        </p>
        <p className="font-normal leading-[28px] shrink-0 text-[20px] text-black w-[498px]">
          {CONTENT.hero.description}
        </p>
        <button className="bg-[#191a23] flex items-start px-[35px] py-[20px] rounded-[14px] shrink-0 hover:bg-[#2d2e3a] transition-colors">
          <span className="font-normal leading-[28px] text-[20px] text-center text-white whitespace-nowrap">
            {CONTENT.hero.cta}
          </span>
        </button>
      </div>
      <HeroIllustration />
    </section>
  )
}

// ─── Logos ───────────────────────────────────────────────────────────────────

function LogosSection() {
  const v = ASSETS.logoVectors
  return (
    <section className="flex items-start justify-between overflow-clip px-[100px] py-[60px] w-full">
      {/* Amazon — two vector layers */}
      <div className="h-[48px] mix-blend-luminosity overflow-clip relative shrink-0 w-[124.113px]">
        <div className="absolute inset-[66.48%_33.16%_6.25%_14.01%]">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={v.amazon1} />
        </div>
        <div className="absolute bottom-[34.39%] left-0 right-[0.45%] top-1/4">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={v.amazon2} />
        </div>
      </div>
      {/* Dribbble */}
      <div className="h-[48px] mix-blend-luminosity overflow-clip relative shrink-0 w-[126.369px]">
        <div className="absolute inset-[18.89%_0.48%_24.39%_0]">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={v.dribbble} />
        </div>
      </div>
      {/* HubSpot — two vector layers */}
      <div className="h-[48px] mix-blend-luminosity overflow-clip relative shrink-0 w-[128.626px]">
        <div className="absolute inset-[27.3%_0.3%_16.67%_0]">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={v.hubspot1} />
        </div>
        <div className="absolute inset-[16.67%_9.47%_17.81%_64.21%]">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={v.hubspot2} />
        </div>
      </div>
      {/* Notion */}
      <div className="h-[48px] mix-blend-luminosity overflow-clip relative shrink-0 w-[145.551px]">
        <div className="absolute inset-[12.5%_0.35%_15.73%_0]">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={v.notion} />
        </div>
      </div>
      {/* Netflix */}
      <div className="h-[48px] mix-blend-luminosity overflow-clip relative shrink-0 w-[125.241px]">
        <div className="absolute inset-[20.83%_-0.01%_16.67%_0]">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={v.netflix} />
        </div>
      </div>
      {/* Zoom */}
      <div className="h-[48px] mix-blend-luminosity overflow-clip relative shrink-0 w-[110.573px]">
        <div className="absolute bottom-1/4 left-0 right-[0.1%] top-[29.17%]">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={v.zoom} />
        </div>
      </div>
    </section>
  )
}

// ─── Services ────────────────────────────────────────────────────────────────

type ServiceCardProps = {
  bg: 'gray' | 'green' | 'dark'
  title: string[]
  illustration: string
  illustrationClass?: string
}

function ServiceCard({ bg, title, illustration, illustrationClass }: ServiceCardProps) {
  const bgMap = { gray: 'bg-[#f3f3f3]', green: 'bg-[#b9ff66]', dark: 'bg-[#191a23]' }
  const labelBg = bg === 'gray' ? 'bg-[#b9ff66]' : bg === 'green' ? 'bg-white' : 'bg-white'
  const linkColor = bg === 'dark' ? 'text-white' : 'text-[#191a23]'

  return (
    <div
      className={`${bgMap[bg]} border border-[#191a23] rounded-[45px] shadow-[0_5px_0_0_#191a23] px-[50px] py-[40px] flex items-center justify-between w-full min-h-[310px]`}
    >
      <div className="flex flex-col gap-[93px]">
        <div className="flex flex-col gap-0">
          {title.map((line, i) => (
            <span key={i} className={`${labelBg} text-[#191a23] font-medium text-[30px] px-2 rounded-[7px] inline-block leading-[1.4] w-fit`}>
              {line}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-[15px]">
          <img
            src={ASSETS.arrowBlack}
            alt=""
            className={`w-[41px] h-[41px] ${bg === 'dark' ? 'invert' : ''}`}
          />
          <span className={`${linkColor} text-[20px] leading-[28px]`}>{CONTENT.services.learnMore}</span>
        </div>
      </div>
      <img
        src={illustration}
        alt=""
        className={`w-[210px] h-[166px] object-contain ${illustrationClass ?? ''}`}
      />
    </div>
  )
}

function ServicesSection() {
  const illustrations = [
    ASSETS.illustration.seo,
    ASSETS.illustration.ppc,
    ASSETS.illustration.social,
    ASSETS.illustration.email,
    ASSETS.illustration.content,
    ASSETS.illustration.analytics,
  ]
  const bgs: ServiceCardProps['bg'][] = ['gray', 'green', 'dark', 'gray', 'green', 'dark']
  const illustrationClasses = ['', '', '', '', '', '']

  const services: ServiceCardProps[] = CONTENT.services.items.map((item, i) => ({
    bg: bgs[i],
    title: item.title,
    illustration: illustrations[i],
    illustrationClass: illustrationClasses[i],
  }))

  return (
    <section id="services" className="px-[100px] py-[70px]">
      <SectionHeading
        label={CONTENT.services.label}
        description={CONTENT.services.description}
      />
      <div className="grid grid-cols-2 gap-10">
        {services.map((s) => (
          <ServiceCard key={s.title.join('')} {...s} />
        ))}
      </div>
    </section>
  )
}

// ─── CTA Block ───────────────────────────────────────────────────────────────

function CTABlock() {
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
          src={ASSETS.illustration.cta}
          alt=""
          className="absolute right-[60px] top-1/2 -translate-y-1/2 w-auto h-[400px] object-contain pointer-events-none"
        />
      </div>
    </section>
  )
}

// ─── Case Studies ────────────────────────────────────────────────────────────

function CaseStudiesSection() {
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
                <span className="text-[#b9ff66] text-[20px] leading-[28px]">{CONTENT.caseStudies.learnMore}</span>
                <img src={ASSETS.arrowGreen} alt="" className="w-[17px] h-[10px]" />
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

// ─── Working Process ──────────────────────────────────────────────────────────

function ProcessSection() {
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

// ─── Team ────────────────────────────────────────────────────────────────────

type TeamMember = {
  name: string
  role: string
  bio: string
  photo: string
}

const teamPhotos = [
  ASSETS.team.john,
  ASSETS.team.jane,
  ASSETS.team.michael,
  ASSETS.team.emily,
  ASSETS.team.brian,
  ASSETS.team.sarah,
]

const TEAM: TeamMember[] = CONTENT.team.members.map((m, i) => ({
  ...m,
  photo: teamPhotos[i],
}))

function TeamCard({ member, heightClass }: { member: TeamMember, heightClass?: string }) {
  const hClass = heightClass || 'h-[331px] min-h-[331px]'
  return (
    <div className={`bg-white border border-[#191a23] rounded-[45px] shadow-[0_5px_0_0_#191a23] px-[35px] py-[40px] w-[387px] min-w-[387px] flex flex-col ${hClass}`}>
      <div className="flex items-end gap-5 mb-[20px] relative">
        <div className="w-[106px] h-[106px] flex-shrink-0">
          <img src={member.photo} alt={member.name} className="w-full h-full object-contain" />
        </div>
        <div className="flex flex-col flex-1 pb-[2px]">
          <span className="font-medium text-[20px] text-[#191a23] leading-normal">{member.name}</span>
          <span className="text-[18px] text-[#191a23] leading-normal">{member.role}</span>
        </div>
        <img src={ASSETS.socialIcon} alt={CONTENT.team.linkedInAlt} className="w-[34px] h-[34px] flex-shrink-0 absolute right-0 top-0" />
      </div>
      <hr className="border-[#191a23] mb-[20px]" />
      <p className="text-[18px] text-[#191a23] leading-snug whitespace-pre-line">{member.bio}</p>
    </div>
  )
}

function TeamSection() {
  return (
    <section className="px-[100px] py-[70px]">
      <SectionHeading
        label={CONTENT.team.label}
        description={CONTENT.team.description}
      />
      <div className="flex flex-col gap-10">
        <div className="flex gap-10">
          {TEAM.slice(0, 3).map((m) => <TeamCard key={m.name} member={m} heightClass="h-[331px] min-h-[331px]" />)}
        </div>
        <div className="flex gap-10">
          {TEAM.slice(3).map((m) => <TeamCard key={m.name} member={m} heightClass="h-[354px] min-h-[354px]" />)}
        </div>
      </div>
      <div className="flex justify-end mt-10">
        <button className="bg-[#191a23] text-white rounded-[14px] w-[269px] h-[68px] text-[20px] leading-[28px] hover:bg-[#2d2e3a] transition-colors">
          {CONTENT.team.seeAll}
        </button>
      </div>
    </section>
  )
}

// ─── Testimonials ─────────────────────────────────────────────────────────────

function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const items = CONTENT.testimonials.items
  
  // Clone items for infinite loop effect
  const displayItems = [
    items[items.length - 2],
    items[items.length - 1],
    ...items,
    items[0],
    items[1]
  ]
  const startIndex = 2

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
            style={{
              transform: `translateX(calc(320px - ${(current + startIndex) * 650}px))`
            }}
          >
            {displayItems.map((item, i) => (
              <div key={i} className="w-[600px] flex-shrink-0 flex flex-col">
                <div className="border border-[#b9ff66] rounded-[45px] p-[50px] relative bg-[#191a23] mb-[24px]">
                  <p className="text-[18px] text-white leading-[1.55]">
                    "{item.text}"
                  </p>
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
            onClick={() => setCurrent((c) => (c - 1 + items.length) % items.length)}
            className="text-white hover:opacity-70 transition-opacity"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 12H4M4 12L10 6M4 12L10 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          
          <div className="flex gap-[20px]">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className="hover:opacity-80 transition-opacity"
              >
                <svg width="18" height="18" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M 0 0 Q 7 6 14 0 Q 8 7 14 14 Q 7 8 0 14 Q 6 7 0 0 Z" fill={i === current ? "#b9ff66" : "white"} />
                </svg>
              </button>
            ))}
          </div>

          <button
            onClick={() => setCurrent((c) => (c + 1) % items.length)}
            className="text-white hover:opacity-70 transition-opacity"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

// ─── Contact ──────────────────────────────────────────────────────────────────

function ContactSection() {
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
            <label className="flex items-center gap-3 cursor-pointer">
              <div
                className={`w-[28px] h-[28px] rounded-full border border-[#191a23] flex items-center justify-center cursor-pointer bg-white`}
                onClick={() => setType('say-hi')}
              >
                {type === 'say-hi' && <div className="w-[16px] h-[16px] rounded-full bg-[#b9ff66]" />}
              </div>
              <span className="text-[18px] text-[#191a23] leading-none">{CONTENT.contact.sayHi}</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <div
                className={`w-[28px] h-[28px] rounded-full border border-[#191a23] flex items-center justify-center cursor-pointer bg-white`}
                onClick={() => setType('quote')}
              >
                {type === 'quote' && <div className="w-[16px] h-[16px] rounded-full bg-[#b9ff66]" />}
              </div>
              <span className="text-[18px] text-[#191a23] leading-none">{CONTENT.contact.getQuote}</span>
            </label>
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
          <img src="/illustration-8.svg" alt="" className="w-[800px] h-auto object-contain" />
        </div>
      </div>
    </section>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  const f = CONTENT.footer
  return (
    <footer className="px-[100px] w-full max-w-[1440px] mx-auto">
      <div className="bg-[#191a23] rounded-t-[45px] overflow-hidden px-[60px] pt-[55px] pb-[50px] flex flex-col min-h-[514px]">
        {/* Top Row: Logo, Nav, Social */}
        <div className="flex items-center justify-between mb-[66px]">
          <img src="/logo-2.svg" alt={f.logoAlt} className="h-[28px] w-auto" />
          <div className="flex items-center gap-10">
            {f.links.map((link) => (
              <a key={link} href="#" className="text-white text-[18px] underline hover:text-[#b9ff66] transition-colors">
                {link}
              </a>
            ))}
          </div>
          <div className="flex gap-5">
            <a href="#" className="w-[30px] h-[30px] rounded-full bg-white flex items-center justify-center hover:opacity-80 transition-opacity">
              <svg width="16" height="16" fill="#191a23" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
            </a>
            <a href="#" className="w-[30px] h-[30px] rounded-full bg-white flex items-center justify-center hover:opacity-80 transition-opacity">
              <svg width="16" height="16" fill="#191a23" viewBox="0 0 16 16"><path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/></svg>
            </a>
            <a href="#" className="w-[30px] h-[30px] rounded-full bg-white flex items-center justify-center hover:opacity-80 transition-opacity">
              <svg width="16" height="16" fill="#191a23" viewBox="0 0 16 16"><path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z"/></svg>
            </a>
          </div>
        </div>

        {/* Middle Row: Contact & Newsletter */}
        <div className="flex justify-between items-start">
          <div className="flex flex-col items-start max-w-[332px]">
            <span className="bg-[#b9ff66] text-black px-2 rounded-[7px] text-[20px] font-medium mb-7">
              {f.contactHeading}
            </span>
            <div className="flex flex-col gap-5 text-white text-[18px]">
              <p>{f.contactEmail}</p>
              <p>{f.contactPhone}</p>
              <p className="whitespace-pre-line">{f.contactAddress}</p>
            </div>
          </div>

          <div className="bg-[#292a32] rounded-[14px] p-[58px] flex items-center gap-5 w-[634px]">
            <input
              type="email"
              placeholder={f.newsletterPlaceholder}
              className="border border-white rounded-[14px] px-[35px] py-[22px] text-[18px] text-white bg-transparent placeholder-white outline-none focus:ring-1 focus:ring-[#b9ff66] flex-1 max-w-[285px]"
            />
            <button className="bg-[#b9ff66] text-black rounded-[14px] px-[35px] py-[22px] font-medium text-[20px] hover:bg-[#a0e050] transition-colors whitespace-nowrap">
              {f.newsletterButton}
            </button>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="mt-auto">
          <hr className="border-white opacity-100 mb-[50px] mt-[66px]" />
          <div className="flex items-center gap-[40px] text-white text-[18px]">
            <span>{f.copyright}</span>
            <a href="#" className="underline hover:text-[#b9ff66] transition-colors">{f.privacyPolicy}</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

// ─── Main App ─────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div className="bg-white min-h-screen font-grotesk">
      {/* 1440px fixed-width layout — matches Figma canvas */}
      <div className="flex flex-col gap-[70px] items-start w-[1440px] mx-auto pt-[60px]">
        <Navbar />
        <Hero />
        <LogosSection />
      </div>
      <div className="w-[1440px] mx-auto">
        <ServicesSection />
        <CTABlock />
        <CaseStudiesSection />
        <ProcessSection />
        <TeamSection />
        <TestimonialsSection />
        <ContactSection />
      </div>
      <div className="w-[1440px] mx-auto">
        <Footer />
      </div>
    </div>
  )
}
