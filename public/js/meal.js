var mealDay = document.getElementById("list");

function getApi() {
console.log("okay");

var requestUrl = 'https://www.themealdb.com/api/json/v1/1/random.php';

    fetch(requestUrl, {
      method: "GET",
      headers: {
    }
    })
 
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        var mealBox =document.createElement('div')
        var mealName = document.createElement('p');
        var mealCat = document.createElement('h5');
        var mealSrc = document.createElement('h5');
          mealBox.setAttribute('style', 'border-style: solid; border-color: var(--light-blue); border-width: 5px; flex-direction: column;')
          mealName.textContent = "Meal of the day: " + data.meals[0].strMeal;
          mealCat.textContent = "Category: " + data.meals[0].strCategory;
          mealSrc.textContent = "Source: " + data.meals[0].strSource;
          mealBox.append(mealName);
          mealBox.append(mealCat);
          mealBox.append(mealSrc);
          mealDay.append(mealBox);
          console.log(data.meals[0].strMeal);
          console.log(data.meals[0].strCategory);
      });
  }

