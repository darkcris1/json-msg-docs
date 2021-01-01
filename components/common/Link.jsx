import { default as A } from 'next/link'
import { useRouter } from 'next/router'

const Link = ({ href = '#', as, children, ...props }) => {
  const { asPath } = useRouter()
  return (
    <A href={href === '#' ? asPath : href} as={as}>
      <a {...props}>{children}</a>
    </A>
  )
}

export default Link
