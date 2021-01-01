import SEO from '../components/SEO'
import Sidebar from '../components/Sidebar'
import AccountList from '../components/AccountList'
import sidebarConfig from '../sidebar.config'

const Layout = ({ title, children }) => {
  return (
    <div className="container">
      <SEO title={title} description="Docs">
        <meta name="theme-color" content="#000000" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/prism-themes@1.5.0/themes/prism-vsc-dark-plus.css"
        />
        <script
          defer
          src="https://cdn.jsdelivr.net/npm/clipboard@2.0.6/dist/clipboard.min.js"
        ></script>
        <link
          rel="shortcut icon"
          href="https://www.flaticon.com/premium-icon/icons/svg/2581/2581980.svg"
          type="image/svg"
        />
      </SEO>
      <Sidebar config={sidebarConfig} />

      {children}
      <AccountList />
    </div>
  )
}

export default Layout
