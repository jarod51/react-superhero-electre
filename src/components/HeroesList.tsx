import { Hero } from '../types/hero'
import HeroCard from './HeroCard'

const HeroesList = ({ heroes }: { heroes: Hero[] }) => {
  return (
    <div className='flex flex-wrap justify-center gap-6'>
      {heroes.map((hero) => <HeroCard key={hero.id} hero={hero}/>)}
    </div>
  )
}

export default HeroesList