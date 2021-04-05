import SEO from "./SEO";
import Sidebar from "./Sidebar";
import GithubAccount from "./GithubAccount";
import sidebarConfig from "../sidebar.config";
import Toc from "./Toc";

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
               <link rel="shortcut icon" href="./logo.svg" type="image/svg" />
               <link rel="manifest" href="/manifest.json" />
            </SEO>
            <Sidebar config={sidebarConfig} />

            {children}
            <Toc />
         </div>
         <GithubAccount githubLink="https://www.github.com/darkcris1/json-msg" />
      </>
   );
};

export default Layout;
