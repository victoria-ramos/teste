import { ASSETS } from '../../assets'
import { CONTENT } from '../../content'

// Composição de grid-overlay: todos os filhos compartilham a célula [col-1, row-1]
// e são posicionados via ml/mt — fiel ao código gerado pelo Figma.
function HeroIllustration() {
  const h = ASSETS.hero
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="col-[1] ml-[293px] mt-[427px] relative row-[1] size-[36px]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={h.starBottomRight} />
      </div>
      <div className="col-[1] flex items-center justify-center ml-[58px] mt-[313px] relative row-[1] size-[99.456px]">
        <div className="flex-none rotate-45">
          <div className="relative size-[70.326px]">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={h.diamondRotated} />
          </div>
        </div>
      </div>
      {[
        { ml: '40.46px', mt: '64px' },
        { ml: '20.23px', mt: '100.67px' },
        { ml: '0', mt: '137.35px' },
      ].map(({ ml, mt }, i) => (
        <div
          key={i}
          className="col-[1] flex h-[377.652px] items-center justify-center relative row-[1] w-[553.284px]"
          style={{ marginLeft: ml, marginTop: mt }}
        >
          <div className="flex-none rotate-[28.88deg]">
            <div className="h-[118.948px] relative w-[566.261px]">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={h.ellipseRing} />
            </div>
          </div>
        </div>
      ))}
      <div className="col-[1] ml-[116px] mt-[89px] relative row-[1] size-[31px]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={h.dotLarge} />
      </div>
      <div className="col-[1] ml-[411px] mt-[425px] relative row-[1] size-[20px]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={h.dotSmall} />
      </div>
      <div className="col-[1] ml-[58px] mt-[41px] relative row-[1] size-[47px]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={h.dotMedium} />
      </div>
      <div className="col-[1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[154px] mt-0 place-items-start relative row-[1]">
        <div className="col-[1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[17.41px] place-items-start relative row-[1]">
          <div className="col-[1] h-[367.589px] ml-0 mt-0 relative row-[1] w-[340.58px]">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={h.megaphoneCharacter} />
          </div>
        </div>
        <div className="col-[1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[254.88px] mt-0 place-items-start relative row-[1]">
          <div className="col-[1] h-[98.624px] ml-0 mt-0 relative row-[1] w-[98.716px]">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={h.socialIconHeart} />
          </div>
          <div className="col-[1] h-[94.948px] ml-[96.67px] mt-[12.38px] relative row-[1] w-[94.91px]">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={h.socialIconShare} />
          </div>
          <div className="col-[1] h-[93.988px] ml-[87.42px] mt-[115.32px] relative row-[1] w-[94.049px]">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={h.socialIconPlay} />
          </div>
          <div className="col-[1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[66.51px] mt-[214.52px] place-items-start relative row-[1]">
            <div className="col-[1] h-[101.791px] ml-0 mt-0 relative row-[1] w-[101.967px]">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={h.socialIconLocation} />
            </div>
            <div className="col-[1] h-[57.789px] ml-[31.28px] mt-[24.31px] relative row-[1] w-[39.18px]">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={h.socialIconLocationSmall} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
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
