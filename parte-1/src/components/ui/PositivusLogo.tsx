import { ASSETS } from '../../assets'

export default function PositivusLogo({ className }: { className?: string }) {
  return (
    <div className={className ?? 'h-[36px] relative w-[219.537px]'}>
      <div className="absolute inset-[0_83.6%_0_0]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={ASSETS.icon} />
      </div>
      <div className="absolute inset-[8.33%_0_12.33%_22.28%]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={ASSETS.positivusText} />
      </div>
    </div>
  )
}
