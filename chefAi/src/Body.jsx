import './Body.css'
import React from 'react'
import Recepie from './Recepie'
import IngredientsList from './IngredientsList'
export default function Body(){
    const [ingredients,setIngredients] = React.useState([])
    const[recepieShown,setRecepieShown] = React.useState(false)
   
    
    function addIngredient(formData){
        const newIngredient = formData.get("ingredient")
        setIngredients(preVal =>[...preVal,newIngredient])


    }
    function toggle(){
        setRecepieShown(preVal =>!preVal)
    }
   
    return (
        <main>
        <form 
        action={addIngredient}
        className='add-ingredient-form'>
            <input className='input'
            type="text"
            placeholder="name your ingredient"
            aria-label='add ingredients'
            name="ingredient"
            />
            <button
            
            >Add Ingredient</button>
       
        </form>

        { ingredients.length >0 &&
            <IngredientsList
            ingredients ={ingredients}
            toggle={toggle}
            />
        }
         {recepieShown &&
         <Recepie/>}
         </main>
    )
}