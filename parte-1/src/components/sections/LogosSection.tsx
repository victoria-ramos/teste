import { ASSETS } from '../../assets'

export default function LogosSection() {
  const v = ASSETS.partnerLogos
  return (
    <section className="flex items-start justify-between overflow-clip px-[100px] py-[60px] w-full">
      <div className="h-[48px] mix-blend-luminosity overflow-clip relative shrink-0 w-[124.113px]">
        <div className="absolute inset-[66.48%_33.16%_6.25%_14.01%]">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={v.amazon1} />
        </div>
        <div className="absolute bottom-[34.39%] left-0 right-[0.45%] top-1/4">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={v.amazon2} />
        </div>
      </div>
      <div className="h-[48px] mix-blend-luminosity overflow-clip relative shrink-0 w-[126.369px]">
        <div className="absolute inset-[18.89%_0.48%_24.39%_0]">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={v.dribbble} />
        </div>
      </div>
      <div className="h-[48px] mix-blend-luminosity overflow-clip relative shrink-0 w-[128.626px]">
        <div className="absolute inset-[27.3%_0.3%_16.67%_0]">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={v.hubspot1} />
        </div>
        <div className="absolute inset-[16.67%_9.47%_17.81%_64.21%]">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={v.hubspot2} />
        </div>
      </div>
      <div className="h-[48px] mix-blend-luminosity overflow-clip relative shrink-0 w-[145.551px]">
        <div className="absolute inset-[12.5%_0.35%_15.73%_0]">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={v.notion} />
        </div>
      </div>
      <div className="h-[48px] mix-blend-luminosity overflow-clip relative shrink-0 w-[125.241px]">
        <div className="absolute inset-[20.83%_-0.01%_16.67%_0]">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={v.netflix} />
        </div>
      </div>
      <div className="h-[48px] mix-blend-luminosity overflow-clip relative shrink-0 w-[110.573px]">
        <div className="absolute bottom-1/4 left-0 right-[0.1%] top-[29.17%]">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={v.zoom} />
        </div>
      </div>
    </section>
  )
}
