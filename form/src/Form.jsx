import "./Form.css"
export default function Form(){
    // function handleSubmit(event){
    //     event.preventDefault()
    //     const formData = new FormData(event.currentTarget)
    //     const firstName = formData.get("firstName")
    //     const lastName = formData.get("lastName")
    //     const employementStatus = formData.get("employementStatus")
    //     const diet= formData.getAll("diet")
    //     const favcolor = formData.get("favcolor")

    // }
    

    //we can use any one either onSubmit or action 
    // when you pass function through action it automatically prevent refresh use formData function and also resets it 
    //Hence using action is better than traditional way of getting data from the form

    //tradional onSubit way
    
    
    // function SignUp(formData){
    //     const firstName = formData.get("firstName")
    //     const lastName = formData.get("lastName")
    //     const employementStatus = formData.get("employementStatus")
    //     const diet= formData.getAll("diet")
    //     const favcolor = formData.get("favcolor")
    // }
    // we can get all the data from Object.fromEntries(formData)
    function SignUp(formData){
        const data = Object.fromEntries(formData)
        const diet = formData.getAll("diet")
        const allData = {
            ...data,
            diet
        }
    }
    return(
        <section>
            <h1>
                SignUp Page
            </h1>
            <form action={SignUp} /*</section>onSubmit={handleSubmit}*/>
               <label>FirstName:
                <input type='text' name="firstName" id="FirstName" placeholder="e.g Arian" /></label>
                <br/>
                
                <label>LastName:<input type='text' name="lastName" id="LastName" placeholder="e.g grande"/></label>
                <br/>
               
               <textarea name="description">Description:</textarea>
               

                <fieldset >
                    <legend>Employement Status</legend>
                    <label htmlFor="radio">
                        <input type="radio" name="employementStatus" value="employeed" />
                        Employeed
                    </label>
                    <label htmlFor="radio">
                        <input type="radio" name="employementStatus" value="part-time" />
                        Part-Time
                    </label>
                    <label htmlFor="radio">
                        <input type="radio" name="employementStatus" value="unemployeed" />
                        unemployeed
                    </label>
               </fieldset>

               <fieldset >
                    <legend>what are you?</legend>
                    <label htmlFor="checkbox">
                        <input type="checkbox" name="diet" value="vegan"/>
                        vegan
                    </label>
                    <label htmlFor="checkbox">
                        <input type="checkbox" name="diet" value="veggie" />
                        veggie
                    </label>
                    <label htmlFor="checkbox">
                        <input type="checkbox" name="diet" value="non-veggie" />
                        non-veggie
                    </label>
               </fieldset>
                
               <legend>what is your fav color?</legend>
               <select name = "favcolor" id="favcolor"required>
                    <option disabled>---choose your color---</option>
                    <option value="green">green</option>
                    <option  value="red">red</option>
                    <option  value="blue" >blue</option>
               </select>

               <button type="Submit" >SUBMIT</button>
            </form>
        </section>
    )
}