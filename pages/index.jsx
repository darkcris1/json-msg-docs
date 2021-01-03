import mdParse from '../utils/parseVars'
import SEO from '../components/SEO'
import indexMD from '../docs/_index.md'
import { useRouter } from 'next/router'

import Link from '../components/common/Link'
import sortLinks, { getNextAndPrevLinks } from '../utils/sortLinks'
import sidebarConfig from '../sidebar.config'

const sortedLinks = sortLinks(sidebarConfig.links)

const index = () => {
  const { vars, md } = mdParse(indexMD)
  const { description, title } = vars
  const { asPath } = useRouter()
  const prevAndNext = getNextAndPrevLinks(
    asPath.replace(/#\w+/, ''),
    sortedLinks,
  )
  return (
    <>
      <SEO
        title={title || 'Page Not Found'}
        description={description || title}
      />
      <div>
        <main
          dangerouslySetInnerHTML={{
            __html: md,
          }}
        />
        <div className="prev-next-container">
          {prevAndNext.prev && (
            <Link href={prevAndNext.prev.href} className="prev-page">
              {prevAndNext.prev.text}
            </Link>
          )}
          {prevAndNext.next && (
            <Link href={prevAndNext.next.href} className="next-page">
              {prevAndNext.next.text}
            </Link>
          )}
        </div>
      </div>
    </>
  )
}

export default index
