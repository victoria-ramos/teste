export default function PlusMinusIcon({ open }: { open: boolean }) {
  return (
    <div className="flex-shrink-0 w-[58px] h-[58px] rounded-full border-2 border-[#191a23] flex items-center justify-center bg-white">
      <span className="text-[28px] font-light leading-none text-[#191a23]">
        {open ? '−' : '+'}
      </span>
    </div>
  )
}
