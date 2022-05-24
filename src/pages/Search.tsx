import React, { useRef } from 'react'

const Search = () => {
  const onSubmitHandler = (e: React.SyntheticEvent) => {
		e.preventDefault()
		// Le point d'interrogation correspond à l'optionnal chaining
		// Si searchInputRef.current est null, il ne va pas lire ce qui se trouve à droite de ce dernier et donc éviter de générer un erreur
		console.log(searchInputRef.current?.value)
	}
	const searchInputRef = useRef<HTMLInputElement>(null)

  return (
    <section>
      <h1>Search Hero</h1>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor='hero' className='mr-6'>Hero</label>
        <input ref={searchInputRef} type='text' id='hero' name='hero' />
        <button>Search</button>
      </form>
    </section>
  )
}

export default Search
