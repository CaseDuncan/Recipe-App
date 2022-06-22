const form = document.getElementById("submit")
const input = document.getElementById("search")
const button = document.getElementById("btn")
const mealsDiv = document.getElementById("meals")
const resultHeader = document.getElementById("result-heading")
const singleMeal = document.getElementById("single-meal")

// console.log(input)

function searchRecipe(e){
    e.preventDefault();

    singleMeal.innerHTML ='';
    const searchTerm = input.value;

    console.log(searchTerm);

    //check if item searched isn't empty
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`).then((response)=>{

            return response.json()
        }).then((data)=>{
            var itterablesData =  Object.values(data)
            itterablesData.map((meal) => {
                meal[0]
                console.log(meal[0])
                mealsDiv.innerHTML = `

            <div class="meals">
            <h3>${meal[0].strMeal}</h3>
            <img src="${meal[0].strMealThumb}"/>
            <ul>
            <h3> Ingredients</h3>
            <li>${meal[0].strIngredient1}</li>
            <li>${meal[0].strIngredient2}</li>
            <li>${meal[0].strIngredient3}</li>
            <li>${meal[0].strIngredient4}</li>
            <li>${meal[0].strIngredient5}</li>
            <li>${meal[0].strIngredient6}</li>
            <li>${meal[0].strIngredient7}</li>
            <li>${meal[0].strIngredient8}</li>
            <li>${meal[0].strIngredient9}</li>
            <li>${meal[0].strIngredient10}</li>
            <li>${meal[0].strIngredient11}</li>
            <li>${meal[0].strIngredient12}</li>
            <li>${meal[0].strIngredient13}</li>
            <li>${meal[0].strIngredient14}</li>
            <li>${meal[0].strIngredient15}</li>
            <li>${meal[0].strIngredient16}</li>
            <li>${meal[0].strIngredient17}</li>
            <li>${meal[0].strIngredient18}</li>
            <li>${meal[0].strIngredient19}</li>
            <li>${meal[0].strIngredient20}</li>
            </ul>

            <div class="procedure">
            <h3>Preparation Procedure</h3>
            <ul>

            <li>${meal[0].strMeasure1}</li>
            <li>${meal[0].strMeasure2}</li>
            <li>${meal[0].strMeasure3}</li>
            <li>${meal[0].strMeasure4}</li>
            <li>${meal[0].strMeasure5}</li>
            <li>${meal[0].strMeasure6}</li>
            <li>${meal[0].strMeasure7}</li>
            <li>${meal[0].strMeasure8}</li>
            <li>${meal[0].strMeasure9}</li>
            <li>${meal[0].strMeasure10}</li>
            <li>${meal[0].strMeasure11}</li>
            <li>${meal[0].strMeasure12}</li>
            <li>${meal[0].strMeasure13}</li>
            <li>${meal[0].strMeasure14}</li>
            <li>${meal[0].strMeasure15}</li>
            <li>${meal[0].strMeasure16}</li>
            <li>${meal[0].strMeasure17}</li>
            <li>${meal[0].strMeasure18}</li>
            <li>${meal[0].strMeasure19}</li>
            <li>${meal[0].strMeasure20}</li>
            </ul>
            
            

            </div>
            `


            })
            .catch(error)

            
            

            

        //   for(key in data){
        //     console.log(key)
        //     // for(x in key){
        //     //     console.log(x)
        //     // }
              
        //   }
        })

}

// event listeners
form.addEventListener("submit", searchRecipe)