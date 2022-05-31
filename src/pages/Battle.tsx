import { useState } from 'react'

type BattleFormProps = {
  label: string,
  id: string,
  callback: () => void,
}

const BattleForm = ({ label, id, callback }: BattleFormProps) => {
  return (
    <form>
      <label htmlFor={id}>{label}</label>
      <input type='text' id={id} />
      <button onClick={callback}>Search</button>
    </form>
  )
}

const Battle = () => {
  const [selectHeroOne, setSelectHeroOne] = useState(false)
  const [selectHeroTwo, setSelectHeroTwo] = useState(false)
  return (
    <section>
      <h1>Battle Page</h1>
      {/* Chaque formulaire doit rechercher independament de l'autre le hero specifie et avoir un etat loading / resultat / pas de resultat */}
      {/* Si deux heros sont selectionner, faire apparaitre un bouton "Battle" */}
      <BattleForm label='Hero 1' id='hero1' callback={() => setSelectHeroOne(true)} />
      <BattleForm label='Hero 2' id='hero2' callback={() => setSelectHeroTwo(true)} />
      <button hidden={!(selectHeroOne && selectHeroTwo)}>Battle</button>
    </section>
  )
}

export default Battle
