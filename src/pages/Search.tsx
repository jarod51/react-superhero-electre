import React, { useRef, useState, useTransition } from 'react'
import HeroesList from '../components/HeroesList'
import useSearchHeroes from '../hooks/useSearchHeroes'

const Search = () => {
  const { heroes, loading, error, onSearchHeroes } = useSearchHeroes()
  const [request, setRequest] = useState(false)
  const [searchHero, setSearchHero] = useState('')
  const onSubmitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault()
    // Le point d'interrogation correspond à l'optionnal chaining
    // Si searchInputRef.current est null, il ne va pas lire ce qui se trouve à droite de ce dernier et donc éviter de générer un erreur
    if (searchInputRef.current?.value) onSearchHeroes(searchInputRef.current?.value)
    setRequest(true)
  }

  const searchInputRef = useRef<HTMLInputElement>(null)

  const [isPending, startTransition] = useTransition()

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchHero(e.target.value)
    startTransition(() => {
      onSearchHeroes(e.target.value)
    })
  }

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
        <p>Search on each keystroke:</p>
        <input type="text" value={searchHero} onChange={onChangeHandler} />
      </div>
      <div>
        {loading && <p>Loading...</p>}
        {error && <p className='text-red-600'>Error: {error}</p>}
        {!loading && !error && heroes.length
          ? <HeroesList heroes={heroes} />
          : request && <p>No heroes found</p>}
      </div>
    </section>
  )
}

export default Search
