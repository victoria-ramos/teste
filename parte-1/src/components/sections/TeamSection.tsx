import { ASSETS } from '../../assets'
import { CONTENT } from '../../content'
import SectionHeading from '../ui/SectionHeading'

type TeamMember = {
  name: string
  role: string
  bio: string
  photo: string
}

const TEAM_PHOTOS = [
  ASSETS.teamPhotos.johnSmith,
  ASSETS.teamPhotos.janeDoe,
  ASSETS.teamPhotos.michaelBrown,
  ASSETS.teamPhotos.emilyJohnson,
  ASSETS.teamPhotos.brianWilliams,
  ASSETS.teamPhotos.sarahKim,
]

const TEAM: TeamMember[] = CONTENT.team.members.map((m, i) => ({
  ...m,
  photo: TEAM_PHOTOS[i],
}))

function TeamCard({ member, heightClass }: { member: TeamMember; heightClass?: string }) {
  const hClass = heightClass ?? 'h-[331px] min-h-[331px]'
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
        <img
          src={ASSETS.linkedInIcon}
          alt={CONTENT.team.linkedInAlt}
          className="w-[34px] h-[34px] flex-shrink-0 absolute right-0 top-0"
        />
      </div>
      <hr className="border-[#191a23] mb-[20px]" />
      <p className="text-[18px] text-[#191a23] leading-snug whitespace-pre-line">{member.bio}</p>
    </div>
  )
}

export default function TeamSection() {
  return (
    <section className="px-[100px] py-[70px]">
      <SectionHeading label={CONTENT.team.label} description={CONTENT.team.description} />
      <div className="flex flex-col gap-10">
        <div className="flex gap-10">
          {TEAM.slice(0, 3).map((m) => (
            <TeamCard key={m.name} member={m} heightClass="h-[331px] min-h-[331px]" />
          ))}
        </div>
        <div className="flex gap-10">
          {TEAM.slice(3).map((m) => (
            <TeamCard key={m.name} member={m} heightClass="h-[354px] min-h-[354px]" />
          ))}
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
