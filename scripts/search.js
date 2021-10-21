async function searchRecipe(url) {
  let res = await fetch(url);
  let data = await res.json();

return data
}
var timerID;

function debounce(func, delay) {
  if (timerID) {
    clearTimeout(timerID);
  }
  timerID = setTimeout( () => {
    func();
  }, delay);
}
 async function appendName(data ,cont) {
  cont.innerHTML = null
data.forEach(({strMeal}) => {
  let p = document.createElement('p')

  p.onclick = () =>{
    showRecipe(strMeal)
  }
        p.innerHTML = strMeal
        cont.append(p)
})

}

function showRecipe(strMeal) {
  console.log("strMeal",strMeal);
  let res = searchRecipe(`https://www.themealdb.com/api/json/v1/1/search.php?s=${strMeal}`)
  .then((res) =>{
    console.log('res',res.meals);
  })
}

export { searchRecipe , debounce , appendName };