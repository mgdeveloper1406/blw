import AdvertisingCard from '@molecules/Cards/Advertising'
import AdvertisingData from '@api/AdvertisingData'
import RecipeCard from '@molecules/Cards/Recipe'

import './styles.scss'

const SimpleTastyRecipes = ({ recipes }) => {
  const simpleTastyRecipes = recipes.map((recipe) => {
    return (
      <RecipeCard
        key={recipe.id}
        {...recipe}
        cardSize='large'
        background='lightBlue'
      />
    )
  })
  return (
    <section className='simpleTastyRecipes__container'>
      <div className='simpleTastyRecipes__header'>
        <h2 className='simpleTastyRecipes__title'>Simple, anti-inflammatory and tasty recipes</h2>
        <p className='simpleTastyRecipes__text'>Explore a menu designed to not only tantalize your taste buds but also nourish your body with wholesome ingredients. </p>
      </div>
      <div className='simpleTastyRecipes'>
        {simpleTastyRecipes}
        <aside className='simpleTastyRecipes__advertising'>
          <AdvertisingCard data={AdvertisingData} noMargin />
        </aside>
      </div>
    </section>
  )
}

export default SimpleTastyRecipes