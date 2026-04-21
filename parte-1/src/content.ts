type ProcessStep = { num: string; title: string; description: string }
type TeamMemberText = { name: string; role: string; bio: string }
type Testimonial = { text: string; name: string; role: string }

export const CONTENT = {
  navbar: {
    links: ['About us', 'Services', 'Use Cases', 'Pricing', 'Blog'],
    cta: 'Request a quote',
  },

  hero: {
    heading: 'Navigating the digital landscape for success',
    description:
      'Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.',
    cta: 'Book a consultation',
  },

  services: {
    label: 'Services',
    description:
      'At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:',
    learnMore: 'Learn more',
    items: [
      { title: ['Search engine', 'optimization'] },
      { title: ['Pay-per-click', 'advertising'] },
      { title: ['Social Media', 'Marketing'] },
      { title: ['Email', 'Marketing'] },
      { title: ['Content', 'Creation'] },
      { title: ['Analytics and', 'Tracking'] },
    ],
  },

  cta: {
    heading: "Let's make things happen",
    description:
      'Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.',
    button: 'Get your free proposal',
  },

  caseStudies: {
    label: 'Case Studies',
    description:
      'Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies',
    learnMore: 'Learn more',
    studies: [
      'For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.',
      'For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.',
      'For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.',
    ],
  },

  process: {
    label: 'Our Working Process',
    description: 'Step-by-Step Guide to\nAchieving Your Business Goals',
    steps: [
      {
        num: '01',
        title: 'Consultation',
        description:
          'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.',
      },
      { num: '02', title: 'Research and Strategy Development', description: '' },
      { num: '03', title: 'Implementation', description: '' },
      { num: '04', title: 'Monitoring and Optimization', description: '' },
      { num: '05', title: 'Reporting and Communication', description: '' },
      { num: '06', title: 'Continual Improvement', description: '' },
    ] as ProcessStep[],
  },

  team: {
    label: 'Team',
    description: 'Meet the skilled and experienced team\nbehind our successful digital marketing strategies',
    seeAll: 'See all team',
    linkedInAlt: 'LinkedIn',
    members: [
      {
        name: 'John Smith',
        role: 'CEO and Founder',
        bio: '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy',
      },
      {
        name: 'Jane Doe',
        role: 'Director of Operations',
        bio: '7+ years of experience in project management and team leadership. Strong organizational and communication skills',
      },
      {
        name: 'Michael Brown',
        role: 'Senior SEO Specialist',
        bio: '5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization',
      },
      {
        name: 'Emily Johnson',
        role: 'PPC Manager',
        bio: '3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis',
      },
      {
        name: 'Brian Williams',
        role: 'Social Media Specialist',
        bio: '4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement',
      },
      {
        name: 'Sarah Kim',
        role: 'Content Creator',
        bio: '2+ years of experience in writing and editing\nSkilled in creating compelling, SEO-optimized content for various industries',
      },
    ] as TeamMemberText[],
  },

  testimonials: {
    label: 'Testimonials',
    description:
      'Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services',
    prevAlt: 'Previous',
    nextAlt: 'Next',
    items: [
      {
        text: 'We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.',
        name: 'John Smith',
        role: 'Marketing Director at XYZ Corp',
      },
      {
        text: 'We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.',
        name: 'John Smith',
        role: 'Marketing Director at XYZ Corp',
      },
      {
        text: 'We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.',
        name: 'John Smith',
        role: 'Marketing Director at XYZ Corp',
      },
      {
        text: 'We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.',
        name: 'John Smith',
        role: 'Marketing Director at XYZ Corp',
      },
      {
        text: 'We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.',
        name: 'John Smith',
        role: 'Marketing Director at XYZ Corp',
      },
    ] as Testimonial[],
  },

  contact: {
    label: 'Contact Us',
    description: "Connect with Us: Let's Discuss Your\nDigital Marketing Needs",
    sayHi: 'Say Hi',
    getQuote: 'Get a Quote',
    form: {
      nameLabel: 'Name',
      emailLabel: 'Email*',
      messageLabel: 'Message*',
      namePlaceholder: 'Name',
      emailPlaceholder: 'Email',
      messagePlaceholder: 'Message',
      submit: 'Send Message',
    },
  },

  footer: {
    logoAlt: 'Positivus',
    socialAlt: 'Social media links',
    links: ['About us', 'Services', 'Use Cases', 'Pricing', 'Blog'],
    contactHeading: 'Contact us:',
    contactEmail: 'Email: info@positivus.com',
    contactPhone: 'Phone: 555-567-8901',
    contactAddress: 'Address: 1234 Main St\nMoonstone City, Stardust State 12345',
    newsletterHeading: 'Subscribe to news',
    newsletterPlaceholder: 'Email',
    newsletterButton: 'Subscribe to news',
    copyright: '© 2023 Positivus. All Rights Reserved.',
    privacyPolicy: 'Privacy Policy',
  },
}
