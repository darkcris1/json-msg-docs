import '../styles/global.scss'
import Layout from './_layout'
import { Router } from 'next/router'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
