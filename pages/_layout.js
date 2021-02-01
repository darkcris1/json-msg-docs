import SEO from '../components/SEO'
import Sidebar from '../components/Sidebar'
import GithubAccount from '../components/GithubAccount'
import sidebarConfig from '../sidebar.config'

const Layout = ({ title, children }) => {
  return (
    <>
      <div className="container">
        <SEO title={title} description="Docs">
          <meta name="theme-color" content="#dacb02" />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/prism-themes@1.5.0/themes/prism-vsc-dark-plus.css"
          />
          <script
            defer
            src="https://cdn.jsdelivr.net/npm/clipboard@2.0.6/dist/clipboard.min.js"
          ></script>
          <link rel="shortcut icon" href="./logo.svg" type="image/svg" />
          <link rel="manifest" href="manifest.json" />
        </SEO>
        <Sidebar config={sidebarConfig} />

        {children}
      </div>
      <GithubAccount githubLink="https://www.github.com/darkcris1/json-msg" />
    </>
  )
}

export default Layout
