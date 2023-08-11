
import { useEffect, useState } from 'react';
import './App.css';
import MyRecipesComponent from './MyRecipesComponent';
import SearchIcon from './assets/searchIcon.svg';

// https://api.edamam.com/api/recipes/v2?type=public&q=milk&app_id=0ce90b9d&app_key=cc4e3259233fa40cd19f33cab3a8422e // - можно просто прописать эту ссылку, не разделяя на id  и key. Она тоже будет работать


function App() {

  const api_id = '0ce90b9d';
  const api_key = 'cc4e3259233fa40cd19f33cab3a8422e'

  const [mySearch, setMySearch] = useState(''); // получаем доступ к инпут и тому, что там пишут
  const [myResipe, setMyResipe] = useState([]); // получаем доступ к рецептам - отображаем рецепты
  const [wordSubmitted, setWordSubmitted] = useState('milk'); // блокируем перезагрузку страницу после ввода каждой буквы

  useEffect( () => {
    const getRecipy = async () => {
      const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${api_id}&app_key=${api_key}`)
      const data = await response.json();
      setMyResipe(data.hits)
   
    }
    getRecipy()
  }, [wordSubmitted])


  const myRecipeSearch = (e) => {

    setMySearch(e.target.value)
  }
  const finalSearch = (e) => {
  e.preventDefault();
  setWordSubmitted(mySearch);
  setMySearch('');
  }


  return (

    <div className='Container'>

    <div className='TitleSearchBlock'>
      <div >
        <h1>FIND A RECIPE</h1>
      </div>
      
      <div className='FormBlock'>
        <form onSubmit={finalSearch}>
          <input placeholder='search' onChange={myRecipeSearch} value={mySearch}/>
          <button onClick={ () => setWordSubmitted(mySearch)}>
        <img src={SearchIcon} width={30} alt="icon"/>
      </button>
        </form>
      </div>
    </div>

      <div className="App">

      {myResipe.map((el, index) => (
        <MyRecipesComponent 
                            key={index}
                            label={el.recipe.label} 
                            calories = {el.recipe.calories} 
                            image = {el.recipe.image} 
                            ingredients={el.recipe.ingredientLines}
                            dietLabels={el.recipe.dietLabels}
                            />
      ))} 

      </div>
    </div>
  );
}

export default App;
