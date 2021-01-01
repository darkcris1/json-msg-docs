const typeSubLinks = [
  { href: '/types#str', text: 'jm.str()' },
  { href: '/types#num', text: 'jm.num()' },
  { href: '/types#array', text: 'jm.array()' },
  { href: '/types#bool', text: 'jm.bool()' },
  { href: '/types#sameas', text: 'jm.sameAs()' },
  { href: '/types#any', text: 'jm.any()' },
]
const validationSublinks = [
  { href: '/validation#validate', text: 'jm.validate()' },
  { href: '/validation#validationasync', text: 'jm.validateAsync()' },
  { href: '/validation#option', text: 'jm.validate(option?)' },
]

export default {
  logo: (
    <img
      src="https://www.flaticon.com/premium-icon/icons/svg/2581/2581980.svg"
      alt="Json-msg logo"
      width="160"
      height="100"
    />
  ),
  links: [
    { href: '/', text: 'Getting Started' },
    {
      href: '/types',
      text: 'Types',
      subLinks: typeSubLinks,
    },
    { text: 'Validation', subLinks: validationSublinks },
    {
      href: '/custom-messages',
      text: 'Custom Messages',
    },

    { href: '/blog', text: 'Blog' },
    { href: '/examples', text: 'Examples' },
  ],
  footer: 'Copyright 2020 @ Darkcris1',
}
