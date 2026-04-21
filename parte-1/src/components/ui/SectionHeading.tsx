import SectionLabel from './SectionLabel'

type Props = { label: string; description: string }

export default function SectionHeading({ label, description }: Props) {
  return (
    <div className="flex items-center gap-10 mb-16">
      <SectionLabel text={label} />
      <p className="text-[18px] leading-[1.55] text-[#191a23] max-w-[580px] whitespace-pre-line">
        {description}
      </p>
    </div>
  )
}
