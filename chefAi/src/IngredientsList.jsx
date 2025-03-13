export default function IngredientsList(props){
    const ingredientsList = props.ingredients.map(ingredient =>{
        return <li key ={ingredient}>{ingredient}</li>
    })
   
    return(
        <section>
                <h2 className=''>Ingredients on Hand:</h2>
                <ul>{ingredientsList}</ul>
               {props.ingredients.length >=4 && <div className='ready-for-recepie-container'>
                    <div>
                        <h3>Ready for recepie??</h3>
                        <p>Genereate a recepie from the listed ingredients</p>
                    </div>
                    <button onClick={props.toggle}>Get the recepie</button>
                </div>}
            </section>
    )
}