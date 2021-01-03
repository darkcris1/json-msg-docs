import { useState } from 'react'
import Link from './common/Link'
import SidebarLinks from './common/SidebarLinks'
import Toggler from './Toggler'
import sidebarConfig from '../sidebar.config'

const Sidebar = () => {
  const [show, setShow] = useState(false)
  const toggle = () => setShow(!show)
  const { links, logo, footer } = sidebarConfig
  return (
    <>
      {show && <div className="nav-modal" onClick={toggle}></div>}
      <nav className={`sidebar ${show ? 'show' : ''}`}>
        <ul>
          <Link href="/" className="logo">
            {logo}
          </Link>
          {links.map((data, i) => {
            return <SidebarLinks key={i} data={data} />
          })}
          <footer>{footer}</footer>
        </ul>
      </nav>
      <Toggler onClick={toggle} toggled={show} />
    </>
  )
}

export default Sidebar
