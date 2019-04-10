$(".header").on("click", function() {
  window.location.href = "/";
});

// get favorites from local storage or empty array
var favorites = JSON.parse(localStorage.getItem("favorites")) || [];

function renderHearts() {
  var favoriteHearts = JSON.parse(localStorage.getItem("favorites"));
  for (i = 0; i < favoriteHearts.length; i++) {
    $("#heartOne" + [favoriteHearts[i]]).removeClass("far");
    $("#heartOne" + [favoriteHearts[i]]).addClass("fas");
    $("#heartTwo" + [favoriteHearts[i]]).removeClass("far");
    $("#heartTwo" + [favoriteHearts[i]]).addClass("fas");
  }
}

renderHearts();

$(".fa-heart").on("click", function() {
  var thisDog = $(this).data("dogid");
  if (favorites.includes(thisDog)) {
    $("#heartOne" + thisDog).removeClass("fas");
    $("#heartOne" + thisDog).addClass("far");
    $("#heartTwo" + thisDog).removeClass("fas");
    $("#heartTwo" + thisDog).addClass("far");
    let index = favorites.indexOf(thisDog);
    favorites.splice(index, 1);
    localStorage.setItem("favorites", JSON.stringify(favorites));
  } else {
    favorites.push(thisDog);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    renderHearts();
  }
});

// datepicker JS

const pickUpDate = datepicker("#pickUpDate", {
  id: 1,
  onSelect: (instance, date) => {
    // Both instances will be set because they are linked by `id`.
    instance.setMin(date);
    document.getElementById("returnDate").removeAttribute("disabled");
  },
  formatter: (input, date, instance) => {
    const value = date.toLocaleDateString();
    input.value = value; // => '1/1/2099'
  }
});

pickUpDate.setMin(new Date());
const returnDate = datepicker("#returnDate", {
  id: 1,
  onSelect: (instance, date) => {
    // Both instances will be set because they are linked by `id`.
    instance.setMax(date);
  },
  formatter: (input, date, instance) => {
    const value = date.toLocaleDateString();
    input.value = value; // => '1/1/2099'
  }
});
returnDate.setMin(new Date());

// terms of service
$("#tos").change(function() {
  if ($(this).is(":checked")) {
    $("#confirm").removeAttr("disabled");
    $("#niceTry").empty();
  } else {
    $("#confirm").attr("disabled", true);
    $("#niceTry").text("Nice try, buddy..");
  }
});

// get favorites from local storage or empty array
var favorites = JSON.parse(localStorage.getItem("favorites")) || [];
