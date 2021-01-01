import { useMemo, useState } from 'react'
import { useRouter } from 'next/router'
import Link from './Link'
import classNames from 'classnames'
function SubLinks({ data, show }) {
  if (!show) return null
  return (
    <ul className="subLinks">
      {data.map((data, i) => (
        <SidebarLinks key={i} data={data} />
      ))}
    </ul>
  )
}

export default function SidebarLinks({ data }) {
  const {
    href,
    text,
    subLinks,
    links,
    expand,
    className = '',
    activeClass = 'active',
    expandable = true,
    ...rest
  } = data
  const { asPath } = useRouter()
  const [collapse, setCollapse] = useState(expand)

  const collapseContent = useMemo(() => (collapse ? '-' : '+'), [collapse])
  const collapsable = subLinks && expandable
  const isActive = useMemo(() => asPath === href, [asPath])
  const handleCollapse = () => {
    setCollapse(!collapse)
  }
  const classes = classNames({
    [activeClass]: isActive,
    collapsable,
    className,
  })
  return (
    <li>
      <Link
        className={classes}
        href={href}
        data-content={collapsable ? collapseContent : ''}
        onClick={expandable ? handleCollapse : null}
        {...rest}
      >
        {text}
      </Link>
      {subLinks && <SubLinks data={subLinks} show={collapse} />}
    </li>
  )
}
