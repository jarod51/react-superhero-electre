import React, { useState, useTransition } from 'react'
import { heroes } from '../heroes'

const SearchWithTRansition = () => {
  const [query, setQuery] = useState('')
  const [isPending, startTransition] = useTransition()
  const [heroesList, setHeroesList] = useState(heroes)
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
    startTransition(() => {
      const filteredHeroes = heroes.filter((hero) =>
        hero.name.toLowerCase().includes(e.target.value)
      )
      setHeroesList(filteredHeroes)
    })
  }
  return (
    <section>
      <h1>SearchWithTRansition</h1>
      <input type='text' value={query} onChange={onChangeHandler} />
      <ul>{!isPending && heroesList.map((hero) => <li key={hero.id}>{hero.name}</li>)}</ul>
    </section>
  )
}

export default SearchWithTRansition
