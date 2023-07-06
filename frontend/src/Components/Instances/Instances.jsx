import './Instances.css'

const Instances = ({ recipe }) => {
    
    return (
    <ul class="flex flex-col p-2 ml-2">
        {/* Add Loop Here */}
            <div class="cursor-default" href="">
                <div class="flex flex-col md:flex-row md:max-w-2xl rounded-lg bg-grey shadow-lg p-4">
                    {/* If Recipe Cotains Image */}
                    {/* <img src="" alt="" hidden="true"> */}
                    {/* Else */}
                    <img src={recipe.image} alt="recipe Image" class="w-full max-w-xs h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" />
                    {/* End If */}
                    <div class="p-6 flex flex-col justify-start">
                        <li>
                            <h2 class="inline-block text-gray-900 text-xl font-medium mb-2">{recipe.title}</h2>
                            <span id="" class="float-right flex">
                                <i class="fa-regular fa-square-plus pl-2 hover:text-blue-600 cursor-pointer add-exercise" title="Add"></i>
                            </span>
                        </li>
                        <p class="text-gray-700 text-base mb-4"><i>Recipe Description</i></p>
                        <p class="text-gray-600 text-xs">Recipe Category</p>
                    </div>
                </div>
            </div>
        {/* End Loop Here */}
    </ul>
  )
}
export default Instances