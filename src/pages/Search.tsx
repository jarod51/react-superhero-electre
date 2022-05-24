import React, { useRef, useState } from 'react'
import useSearchHeroes from '../hooks/useSearchHeroes'

const Search = () => {
  const { heroes, loading, error, onSearchHeroes } = useSearchHeroes()
  const [request, setRequest] = useState(false)
  const onSubmitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault()
    // Le point d'interrogation correspond à l'optionnal chaining
    // Si searchInputRef.current est null, il ne va pas lire ce qui se trouve à droite de ce dernier et donc éviter de générer un erreur
    if (searchInputRef.current?.value) onSearchHeroes(searchInputRef.current?.value)
    setRequest(true)
  }
  const searchInputRef = useRef<HTMLInputElement>(null)

  return (
    <section>
      <h1>Search Hero</h1>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor='hero' className='mr-6'>
          Hero
        </label>
        <input ref={searchInputRef} type='text' id='hero' name='hero' />
        <button>Search</button>
      </form>
      <div>
        {loading && <p>Loading...</p>}
        {error && <p className='text-red-600'>Error: {error}</p>}
        {!loading && !error && heroes.length
          ? heroes.map((hero) => <div key={hero.id}>{hero.name}</div>)
          : request && <p>No heroes found</p>}
      </div>
    </section>
  )
}

export default Search
