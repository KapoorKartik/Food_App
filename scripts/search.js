async function searchRecipe(url) {
  let res = await fetch(url);
  let data = await res.json();

return data.meals
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
        p.innerHTML = strMeal
        cont.append(p)
})

}



export { searchRecipe , debounce , appendName };