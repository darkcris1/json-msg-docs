import jm from 'json-msg'

const typeSubLinks = [
  { href: '/types#str', text: 'jm.str()' },
  { href: '/types#num', text: 'jm.num()' },
  { href: '/types#array', text: 'jm.array()' },
  { href: '/types#bool', text: 'jm.bool()' },
  { href: '/types#sameas', text: 'jm.sameAs()' },
  { href: '/types#any', text: 'jm.any()' },
]
const validationSublinks = [
  { href: '/validation#validation', text: 'jm.validate()' },
  { href: '/validation#validateasync', text: 'jm.validateAsync()' },
]
const apiSublinks = [
  { href: '/api#jm-str-options-', text: 'jm.str()' },
  { href: '/api#jm-num-options-', text: 'jm.num()' },
  { href: '/api#jm-bool-options-', text: 'jm.bool()' },
  { href: '/api#jm-array-options-', text: 'jm.array()' },
  { href: '/api#jm-sameas-path-options-', text: 'jm.sameAs()' },
  { href: '/api#jm-any-options-', text: 'jm.any()' },
  { href: '/api#jm-validate-data-schema-options-', text: 'jm.validate()' },
  {
    href: '/api#jm-validateasync-data-schema-options-',
    text: 'jm.validateAsync()',
  },
  { href: '/api#jm-defaultmessages-messages-', text: 'jm.defaultMessages()' },
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
    { href: '/types', text: 'Types', subLinks: typeSubLinks },
    { href: '/validation', text: 'Validation', subLinks: validationSublinks },
    { href: '/custom-messages', text: 'Custom Messages' },
    { href: '/custom-validator', text: 'Custom Validator' },
    { href: '/api', text: 'API', subLinks: apiSublinks },
  ],
  footer: (
    <a target="_blank" href="https://github.com/darkcris1">
      Copyright © Darkcris1
    </a>
  ),
}
