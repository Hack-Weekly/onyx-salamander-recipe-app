import './Instances.css'

const Instances = ({ recipe, onClick }) => {

    const maxCharacters = 100;
    let recipeDescription = recipe.summary;

    if (recipeDescription.length > maxCharacters) {
        recipeDescription = recipeDescription.slice(0, maxCharacters) + '...';
    }

    const createMarkup = () => {
    return { __html: recipeDescription };
    };
    
    return (
    <ul className="flex flex-col p-2 ml-2">
            <div className="cursor-pointer hover:opacity-60" href="" onClick={onClick}>
                <div className="flex flex-col md:flex-row md:max-w-2xl rounded-lg bg-grey shadow-lg p-4">
                    <img src={recipe.image} alt="recipe" className="w-full max-w-xs h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" />
                    <div className="p-6 flex flex-col justify-start">
                        <li>
                            <h2 className="inline-block text-gray-900 text-xl font-medium mb-2">{recipe.title}</h2>
                            {/* <span id="" className="float-right flex">
                                <i className="fa-regular fa-square-plus pl-2 hover:text-blue-600 cursor-pointer add-exercise" title="Add"></i>
                            </span> */}
                        </li>
                        <p className="text-gray-700 text-base mb-4" dangerouslySetInnerHTML={createMarkup()}></p>
                        <p className="text-gray-600 text-xs"><b>Ready in:</b> {recipe.readyInMinutes} minutes</p>
                    </div>
                </div>
            </div>
    </ul>
  )
}
export default Instances