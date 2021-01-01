import { useRouter } from 'next/router'
import SEO from '../components/SEO'
function Error({ message = 'Page Not Found' }) {
  const { back } = useRouter()
  return (
    <>
      <SEO title={message} description={message} />
      <main>
        <p>{message}</p>
        <button onClick={back}>Back </button>
      </main>
    </>
  )
}

export default Error
