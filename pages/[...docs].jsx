import mdParse from '../utils/parseVars'
import SEO from '../components/SEO'
import fs from 'fs'
import generateMdPaths from '../utils/generateMdPaths'

const docs = ({ data, title, description }) => {
  return (
    <>
      <SEO
        title={title || 'Page Not Found'}
        description={description || title}
      />
      <main
        dangerouslySetInnerHTML={{
          __html: data ? data : error,
        }}
      />
    </>
  )
}
export default docs

export async function getStaticPaths() {
  const data = fs.readdirSync(`docs`)

  const paths = generateMdPaths(data, 'docs')

  return { paths, fallback: false }
}
export async function getStaticProps({ params }) {
  const res = await import(`../docs/${params.docs.join('/')}.md`)
  const { vars, md } = mdParse(res.default)
  return {
    props: {
      title: vars.title || null,
      description: vars.description || null,
      data: md,
    },
  }
}
