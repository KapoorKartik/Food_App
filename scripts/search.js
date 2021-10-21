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
    container.style.display = 'block';
    func();
  }, delay);
}
 async function appendName(data ,cont,who) {
   if (who == "debounce") {
    cont.innerHTML = null
    data.forEach(({strMeal}) => {
      let p = document.createElement('p')
    
      p.onclick = () =>{
        showRecipe(strMeal)
        container.style.display = 'none';
        document.getElementById("query").value = ""
      }
            p.innerHTML = strMeal
            cont.append(p)
    })
   }
  if (who == "showRecipe") {
    cont.innerHTML = null
    let img_div = document.createElement('div')
    img_div.setAttribute('id', 'img_div')

    let content_div =  document.createElement('div')
    content_div.setAttribute('id','content_div')

    let name = document.createElement('p')
    name.innerHTML = data.strMeal
console.log("strMeal",data.strMeal);
    let img = document.createElement('img')
    img.src = data.strMealThumb

    let inst = document.createElement('p')
    inst.innerHTML = data.strInstructions

    let youtube_link = document.createElement('a')
    youtube_link.href = data.strYoutube
    youtube_link.innerHTML = `YouTube link for ${data.strMeal}`

    img_div.append(img)
    content_div.append(name,inst,youtube_link)

    cont.append(img_div , content_div)

  }

}

function showRecipe(strMeal) {
  console.log("strMeal",strMeal);
  let res = searchRecipe(`https://www.themealdb.com/api/json/v1/1/search.php?s=${strMeal}`)
  .then(({meals }) =>{
    console.log('res',meals[0]);
    appendName(meals[0],show,"showRecipe")
  })
}

export { searchRecipe , debounce , appendName };