import { CONTENT } from '../../content'
import PositivusLogo from '../ui/PositivusLogo'

const NAV_HREFS = ['#about', '#services', '#cases', '#pricing', '#blog']

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between overflow-clip px-[100px] w-full">
      <div className="flex items-start overflow-clip py-[10px]">
        <PositivusLogo className="h-[36px] relative shrink-0 w-[219.537px]" />
      </div>
      <div className="flex gap-[40px] items-center justify-center">
        {CONTENT.navbar.links.map((link, i) => (
          <a
            key={link}
            href={NAV_HREFS[i]}
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
