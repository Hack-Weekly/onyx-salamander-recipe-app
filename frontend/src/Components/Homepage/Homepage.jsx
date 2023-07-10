import './Homepage.css'
import { useEffect, useState } from 'react'
import {Header} from '../Header/Header'
import Instances from '../Instances/Instances'
import Details from '../Details/Details'

const Homepage = () => {

  const [recipes, setRecipes] = useState("");
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const endpointKeyOne = '49a8a21845e54place';
  const endpointKeyTwo = '6d6bc2a3b1904ff5cd3';

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

  const tumbler = () => {
    setSelectedRecipe(null);
    fetchData(`https://api.spoonacular.com/recipes/random?number=4&apiKey=${endpointKeyOne}${endpointKeyTwo}`)
  }

  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe);
  }

  const handleBackButtonClick = () => {
    setSelectedRecipe(null);
  }

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
          <i className="fa-solid fa-recycle iconRandomizer cursor-pointer" onClick={() => {tumbler()}}></i>
        </section>
        <section id='mainRecipesSection'>
          <h3 className='md:max-w-2xl md:w-2xl'>Loading...</h3>
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
          <i className="fa-solid fa-recycle iconRandomizer cursor-pointer" onClick={() => {tumbler()}}></i>
        </section>
        <section id='mainRecipesSection'>
          <h3>Failed to load...</h3>
          <button className='inline-block rounded bg-neutral-800 px-6 pb-2 pt-2.5 text-xs font-medium uppercase text-neutral-50' onClick={() => {tumbler()}}>Try again</button>
        </section>
      </section>
    </div>
    )
  }
  else if (selectedRecipe) {
    return (
    <div id='homeComponent'>
      <header>
        <Header />
      </header>
      <section id='homeMain'>
        <section id='recipesRandomizer'>
          <h3>Unsure what to eat?</h3>
          <h4>Randomize your next meal:</h4>
          <i className="fa-solid fa-recycle iconRandomizer cursor-pointer" onClick={() => {tumbler()}}></i>
        </section>
        <section id='mainRecipesSection' style={{flexDirection: "row"}}>
          <i className="fa-solid fa-arrow-left text-4xl mt-5 cursor-pointer" onClick={() => {handleBackButtonClick()}}></i>
          <Details recipe={selectedRecipe} />
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
        <i className="fa-solid fa-recycle iconRandomizer cursor-pointer" onClick={() => {tumbler()}}></i>
      </section>
      <section id='mainRecipesSection'>
        {
          (recipes != null) ? recipes.map((recipe) => <Instances key={recipe.id} recipe={recipe} onClick={() => handleRecipeClick(recipe)} />) : ''
        }
      </section>
    </section>
  </div>
  )
}
}

export default Homepage