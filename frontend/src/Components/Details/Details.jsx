const Details = ({recipe = {}}) => {

    const maxCharacters = 1600;
    let recipeDescription = recipe.summary;

    if (recipeDescription.length > maxCharacters) {
        recipeDescription = recipeDescription.slice(0, maxCharacters) + '...';
    }

    const createMarkup = () => {
    return { __html: recipeDescription };
    };

  return (
    <div className="flex flex-col md:max-w-2xl rounded-lg bg-grey shadow-lg p-4">
        <img src={recipe.image} alt="recipe" className="w-full max-h-80 md:h-auto object-cover rounded-t-lg md:rounded-none md:rounded-lg" />
        <p className="text-gray-700 text-base mt-4 mb-4" dangerouslySetInnerHTML={createMarkup()}></p>
        <p className="text-gray-600 text-s"><b>Ingredients:</b> 
            <ul>
                {recipe.extendedIngredients &&
                recipe.extendedIngredients.map((ingredient, index) => (
                <li className="inline-block" key={index}>-{ingredient.original}  </li>
                ))}
            </ul>
        </p>
    </div>
  )
}
export default Details