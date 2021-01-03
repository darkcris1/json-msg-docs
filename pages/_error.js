import { useRouter } from 'next/router'
import SEO from '../components/SEO'
function Error({ message = 'Page Not Found' }) {
  const { replace } = useRouter()
  return (
    <>
      <SEO title={message} description={message} />
      <main>
        <h1>{message}</h1>
        <button onClick={() => replace('/')}>Back to /</button>
      </main>
    </>
  )
}

export default Error
