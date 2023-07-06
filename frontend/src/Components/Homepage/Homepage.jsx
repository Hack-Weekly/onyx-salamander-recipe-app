import './Homepage.css'
import { useEffect, useState } from 'react'
import {Header} from '../Header/Header'
import Instances from '../Instances/Instances'

const Homepage = () => {

  const [recipes, setRecipes] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const endpointKeyOne = 'placeholder';
  const endpointKeyTwo = 'placeholder';

  //Fetch data
  const fetchData = async(endpoint) => {
    setIsLoading(true);
    try {
      const response = await fetch(endpoint);
      if (response.ok) {
        const jsonResponse = await response.json();
        setRecipes(jsonResponse.recipes);
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setIsError(true);
    }
  }

  useEffect(() => {
    fetchData(`https://api.spoonacular.com/recipes/random?number=4&apiKey=${endpointKeyOne}${endpointKeyTwo}`)
  }, [])

  useEffect(() => {
    if (recipes) {
      setIsLoading(false)
    } else {
      setIsLoading(true)
    }
  }, [recipes])

  if (isLoading) {
    return (
    <div id='homeComponent'>
      <header>
        <Header />
      </header>
      <section id='homeMain'>
        <section id='recipesRandomizer'>
          <h3>Unsure what to eat?</h3>
          <h4>Randomize your next meal:</h4>
          <i class="fa-solid fa-recycle iconRandomizer cursor-pointer"></i>
        </section>
        <section id='mainRecipesSection'>
          <h2>Loading...</h2>
        </section>
      </section>
    </div>
    )
  } 
  else if (isError) {
    return (
    <div id='homeComponent'>
      <header>
        <Header />
      </header>
      <section id='homeMain'>
        <section id='recipesRandomizer'>
          <h3>Unsure what to eat?</h3>
          <h4>Randomize your next meal:</h4>
          <i class="fa-solid fa-recycle iconRandomizer cursor-pointer"></i>
        </section>
        <section id='mainRecipesSection'>
          <h2>Failed to load...</h2>
          {/* <button onClick={fetchData}>Try again</button> */}
        </section>
      </section>
    </div>
    )
  }
  else {
  return (
  <div id='homeComponent'>
    <header>
      <Header />
    </header>
    <section id='homeMain'>
      <section id='recipesRandomizer'>
        <h3>Unsure what to eat?</h3>
        <h4 className='subTitle'>Randomize your next meal:</h4>
        <i className="fa-solid fa-recycle iconRandomizer cursor-pointer"></i>
      </section>
      <section id='mainRecipesSection'>
        {
          (recipes != null) ? recipes.map((recipe) => <Instances key={recipe.id} recipe={recipe} />) : ''
        }
      </section>
    </section>
  </div>
  )
}
}

export default Homepage