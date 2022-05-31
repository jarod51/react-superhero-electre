import React, { useRef, useState } from 'react'

type BattleFormProps = {
  label: string,
  id: string,
  callback: (hero: string) => void,
}

const BattleForm = ({ label, id, callback }: BattleFormProps) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const onSubmitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault()
    if (inputRef.current !== null)
      callback(inputRef.current.value)
  }
  return (
    <form onSubmit={onSubmitHandler}>
      <label htmlFor={id}>{label}</label>
      <input ref={inputRef} type='text' id={id} />
      <button disabled={!!inputRef.current?.value}>Search</button>
    </form>
  )
}

const Battle = () => {
  const [selectHeroOne, setSelectHeroOne] = useState('')
  const [selectHeroTwo, setSelectHeroTwo] = useState('')
  return (
    <section>
      <h1>Battle Page</h1>
      {/* Chaque formulaire doit rechercher independament de l'autre le hero specifie et avoir un etat loading / resultat / pas de resultat */}
      {/* Si deux heros sont selectionner, faire apparaitre un bouton "Battle" */}
      <BattleForm label='Hero 1' id='hero1' callback={setSelectHeroOne} />
      <BattleForm label='Hero 2' id='hero2' callback={setSelectHeroTwo} />
      <button style={{
        display: (!!selectHeroOne.length && !!selectHeroTwo.length) ? 'initial': 'none'
      }}>Battle</button>
    </section>
  )
}

export default Battle
