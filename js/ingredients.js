let inenerNavWidth = $("#navInner").outerWidth();
let navleft = $("#navOuter").css("left");
let data;
let gategName;
let areaName;
let categingre;
let categData;
let categDataIngre;
let ingreId;
let categResponse;


// ingredients section
async function areas() {
  let response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/list.php?i=list"
  );
  let myData = await response.json();
  let data = myData.meals;

  var temp = "";

  for (var i = 0; i < 20; i++) {
    temp += `
    <div class=" col-md-3 col-sm-2 mt-3">
    <div class="ingredientsMeal pt-1 px-3 pb-1">
    <i class="fa-solid fa-bowl-food fa-3x"></i>
    <h2 class="ingMealText text-white fs-3 mt-1 text-capitalize">${data[i].strIngredient}</h2>
    <h2 class="ingMealId text-white fs-3 mt-1 text-capitalize d-none">${data[i].idIngredient}</h2>
        <h2 class="ingMealSubject ">${data[i].strDescription}</h2>
    </div>
</div>`;
  }
  document.getElementById("ingredientsList").innerHTML = temp;

  $(".ingredientsMeal").click(async function () {
    ingreId = $(this).text().trim().split(" ");
    let categResponse = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingreId[0]}`
    );
    let categData = await categResponse.json();
    let temp = "";
    for (var i = 0; i < categData.meals.length; i++) {
      temp += `<div class=" col-md-3 col-sm-2 mt-3">
      <div class="areaMeal" id="ingrediantsMeal">
              <img src="${categData.meals[i].strMealThumb}" alt="" class="w-100 rounded-2">
          <div class="areaMealOverly">
          <h3 class="areaMealid d-none">${categData.meals[i].idMeal}</h3>
              <h2 class="areaMealText ">${categData.meals[i].strMeal}</h2>
          </div>
      </div>
  </div>`;
    }

    document.getElementById("ingredientsList").innerHTML = temp;



    $(".areaMeal").click(async function () {
      ingreId = $(this).text().trim().split(" ");
    let  categResponse = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${ingreId[0]}`
      );
      var myIngredata = await categResponse.json();
      var indexs = "";
      for (var i = 0; i < 1; i++) {
        indexs += `<div class="ingreMeal row mt-3">
        <a href="" class="col-4">
            <img src="${myIngredata.meals[i].strMealThumb}" alt="" class="w-100 rounded-2">
            <h2 class="text-white text-capitalize text-center mt-2 fs-1">${myIngredata.meals[i].strMeal}</h2>
        </a>
        <div class="ingrelist col-8 text-white">
            <h2 class="ingreText text-capitalize">instructions</h2>
            <p class="ingreDiscrp  text-capitalize">${myIngredata.meals[i].strInstructions}</p>
            <p class="fw-bold">Area : <span class="fw-normal">${myIngredata.meals[i].strArea}</span></p>
            <p class="fw-bold">category : <span class="fw-normal">${myIngredata.meals[i].strCategory}</span></p>
        </div>
        <div class="ingrelist col-4">
        </div>
        <div class="ingrelist col-8 text-white justify-content-end">
            <h2 class="ingreText text-capitalize">recipes :</h2>
            <ul class="recipesList row ms-0 ps-0 mt-4 pe-5 flex-wrap">
                <li class="recipesContents mx-1 my-2">${myIngredata.meals[i].strIngredient1} ${myIngredata.meals[i].strMeasure1}</li>
                <li class="recipesContents mx-1 my-2">${myIngredata.meals[i].strIngredient2} ${myIngredata.meals[i].strMeasure2}</li>
                <li class="recipesContents mx-1 my-2">${myIngredata.meals[i].strIngredient3} ${myIngredata.meals[i].strMeasure3}</li>
                <li class="recipesContents mx-1 my-2">${myIngredata.meals[i].strIngredient4} ${myIngredata.meals[i].strMeasure4}</li>
                <li class="recipesContents mx-1 my-2">${myIngredata.meals[i].strIngredient5} ${myIngredata.meals[i].strMeasure5}</li>
                <li class="recipesContents mx-1 my-2">${myIngredata.meals[i].strIngredient6} ${myIngredata.meals[i].strMeasure6}</li>
                <li class="recipesContents mx-1 my-2">${myIngredata.meals[i].strIngredient7} ${myIngredata.meals[i].strMeasure7}</li>
                <li class="recipesContents mx-1 my-2">${myIngredata.meals[i].strIngredient8} ${myIngredata.meals[i].strMeasure8}</li>
            </ul>
        </div>
        <div class="ingrelist col-4">
        </div>
        <div class="taglist col-8 text-white justify-content-end">
            <h2 class="ingreText text-capitalize my-4">tags :</h2>
            <p class="ingreText text-capitalize">${myIngredata.meals[i].strTags}</p>
        </div>
        <div class="ingrelist col-4">
        </div>
        <div class="taglist col-8 text-white mt-3">
        <a href="${myIngredata.meals[i].strYoutube}">
        <button class="btn text-capitalize me-3" id="source">source</button>
    </a>
    <a href="${myIngredata.meals[i].strSource}">
        <button class="btn text-capitalize" id="youtube">youtube</button>
    </a>
        </div>
    </div>`;
      }
      document.getElementById("ingredientsList").innerHTML = indexs;
  });
  });
}

areas();
