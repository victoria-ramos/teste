import { CONTENT } from '../../content'

export default function Footer() {
  const f = CONTENT.footer
  return (
    <footer className="px-[100px] w-full max-w-[1440px] mx-auto">
      <div className="bg-[#191a23] rounded-t-[45px] overflow-hidden px-[60px] pt-[55px] pb-[50px] flex flex-col min-h-[514px]">
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
            <SocialLink href="#" label="LinkedIn">
              <svg width="16" height="16" fill="#191a23" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg>
            </SocialLink>
            <SocialLink href="#" label="Facebook">
              <svg width="16" height="16" fill="#191a23" viewBox="0 0 16 16"><path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" /></svg>
            </SocialLink>
            <SocialLink href="#" label="X (Twitter)">
              <svg width="16" height="16" fill="#191a23" viewBox="0 0 16 16"><path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" /></svg>
            </SocialLink>
          </div>
        </div>

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

function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="w-[30px] h-[30px] rounded-full bg-white flex items-center justify-center hover:opacity-80 transition-opacity"
    >
      {children}
    </a>
  )
}
