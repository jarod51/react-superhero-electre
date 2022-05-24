import { useParams } from 'react-router-dom'

const Battle = () => {
  const { id } = useParams()

  return (
    <section>
      <h1>Login Page - ID: {id}</h1>
    </section>
  )
}

export default Battle
