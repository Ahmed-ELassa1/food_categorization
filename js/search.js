let inenerNavWidth = $("#navInner").outerWidth();
let navleft = $("#navOuter").css("left");
let data;
let gategName;
let categingre;
let categData;
let categDataIngre;
let categResponse;
let ingreId;


// categories section

$("#SearchNameInp").keyup(async function () {
  let searchValue = $("#SearchNameInp").val();
  console.log(searchValue);
  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`
  );
  let myData = await response.json();
  data = myData.meals;
  var temp = "";
  for (var i = 0; i < data.length; i++) {
    temp += `        
    <div class=" col-md-3 col-sm-2 mt-3">
      <div class="homeMeal">
           <h2 class="catgmealId d-none">${data[i].idMeal}</h2>
              <img src="${data[i].strMealThumb}" alt="" class="w-100 rounded-2">
          <div class="mealOverly">
              <h2 class="mealText ">${data[i].strMeal}</h2>
          </div>
      </div>
      </div>`;
  }
  document.getElementById("searchContent").innerHTML = temp;
  $(".homeMeal").click(async function () {
    ingreId = $(this).text().trim().split(" ");
    console.log(ingreId[0]);
    let categResponse = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${ingreId[0]}`
    );
    var myIngredata = await categResponse.json();
    let indexs = "";
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
    document.getElementById("searchContent").innerHTML = indexs;
  });
});

$("#SearchLetterInp").keyup(async function () {
  let searchLetterValue = $("#SearchLetterInp").val();
  console.log(searchLetterValue);
  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?f=${searchLetterValue}`
  );
  let searchData = await response.json();
  let data = searchData.meals;
  var temp = "";
  for (var i = 0; i < data.length; i++) {
    temp += `        
    <div class=" col-md-3 col-sm-2 mt-3">
      <div class="homeMeal">
      <h2 class="catgmealId d-none">${data[i].idMeal}</h2>
      <img src="${data[i].strMealThumb}" alt="" class="w-100 rounded-2">
          <div class="mealOverly">
              <h2 class="mealText ">${data[i].strMeal}</h2>
          </div>
      </div>
      </div>`;
  }
  document.getElementById("searchContent").innerHTML = temp;

  $(".homeMeal").click(async function () {
    ingreId = $(this).text().trim().split(" ");
    console.log(ingreId[0]);
    let categResponse = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${ingreId[0]}`
    );
    var myIngredata = await categResponse.json();
    let indexs = "";
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
    document.getElementById("searchContent").innerHTML = indexs;
  });
});
