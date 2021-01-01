import mdParse from '../utils/parseVars'
import SEO from '../components/SEO'
import indexMD from '../docs/_index.md'

const index = () => {
  const { vars, md } = mdParse(indexMD)
  const { description, title } = vars
  return (
    <>
      <SEO
        title={title || 'Page Not Found'}
        description={description || title}
      />
      <main
        dangerouslySetInnerHTML={{
          __html: md,
        }}
      />
    </>
  )
}

export default index
