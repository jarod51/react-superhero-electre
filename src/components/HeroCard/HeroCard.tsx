import { Hero } from '../../types/hero'

type Props = {
  hero: Hero
}

const HeroCard = ({ hero }: Props): JSX.Element => {
  return (
    <div className='max-w-xs rounded overflow-hidden shadow-lg'>
      <div className='h-96 overflow-hidden relative'>
        <img
          className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
          src={hero.image.url}
          alt={`Illustration of ${hero.name}`}
        />
      </div>
      <div className='px-6 py-2'>
        <h1 className='font-bold text-xl' title='Hero ID'>
          {hero.name} <span className='text-gray-600 text-base'>#{hero.id}</span>
        </h1>
        <h2 className='text-lg mb-2'>{hero.biography['full-name']}</h2>
        <p className='text-gray-700 text-base'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
        </p>
      </div>
      <div className='px-6 pt-1 pb-2'>
        <span
          data-testid="intelligence"
          className={`inline-block ${
            +hero?.powerstats?.intelligence > 50
              ? 'bg-blue-200 text-blue-700'
              : 'bg-blue-100 text-blue-500'
          } rounded-full px-3 py-1 text-xs font-semibold mr-2 mb-1`}
        >
          intelligence: {hero?.powerstats?.intelligence}
        </span>
        <span className='inline-block bg-red-200 rounded-full px-3 py-1 text-xs font-semibold text-red-700 mr-2 mb-1'>
          strength: {hero?.powerstats?.strength}
        </span>
        <span className='inline-block bg-green-200 rounded-full px-3 py-1 text-xs font-semibold text-green-700 mr-2 mb-1'>
          speed: {hero?.powerstats?.speed}
        </span>
        <span className='inline-block bg-yellow-200 rounded-full px-3 py-1 text-xs font-semibold text-yellow-700 mr-2 mb-1'>
          durability: {hero?.powerstats?.durability}
        </span>
        <span className='inline-block bg-purple-200 rounded-full px-3 py-1 text-xs font-semibold text-purple-700 mr-2 mb-1'>
          power: {hero?.powerstats?.power}
        </span>
        <span className='inline-block bg-teal-200 rounded-full px-3 py-1 text-xs font-semibold text-teal-700 mr-2 mb-1'>
          combat: {hero?.powerstats?.combat}
        </span>
      </div>
    </div>
  )
}

export default HeroCard
