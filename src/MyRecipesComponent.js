import { Link, Route, Routes } from 'react-router-dom';
import icon from './assets/icon.svg';
import Ingredients from './Ingredients';






function MyRecipesComponent({ label, image, calories, ingredients, dietLabels }) {

    <Routes>
        <Route path='/aboutProduct/:title' element={<Ingredients/>}/>
    </Routes>
    
    return(
        <div className="RecipeComponent" >
            
            <img src={image} alt="recipe" />
            <h1>{label}</h1> 
            <hr />
            <div className='itemsBlock'>
                <p className='caloriesBlock'>Kcal: {calories.toFixed()}</p>
                <ul className='labelsBlock'>
                    {dietLabels.map((dietLabels, index) => (
                        <li key={index}>{dietLabels}</li>
                    ))}
                </ul>
            </div>
            <hr />

                <ul className='ingredientsBlock'>
                {ingredients.map((ingredient, index) => (
                    <li key={index}> <img src={icon} className='icon' alt="icon" /> {ingredient} </li>
                ))}
                </ul>

                <Link to={`/ingredients/`}>
                    <button>ингридиенты:</button>
                </Link>

        </div>
    )
}

export default MyRecipesComponent;

