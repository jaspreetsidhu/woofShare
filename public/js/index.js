$(".header").on("click", function() {
  window.location.href = "/";
});

//$(".notification").hide();

// get favorites from local storage or empty array
var favorites = JSON.parse(localStorage.getItem("favorites")) || [];

// Function to render hearts on favorited/unfavorited dogs.
function renderHearts() {
  var favoriteHearts = JSON.parse(localStorage.getItem("favorites"));
  if (localStorage.getItem("favorites") === null) {
    return;
  } else {
    for (i = 0; i < favoriteHearts.length; i++) {
      $("#heartOne-" + [favoriteHearts[i]]).removeClass("far");
      $("#heartOne-" + [favoriteHearts[i]]).addClass("fas");
      $("#heartTwo-" + [favoriteHearts[i]]).removeClass("far");
      $("#heartTwo-" + [favoriteHearts[i]]).addClass("fas");
    }
  }
}

renderHearts();

// Favorites feature which highlights hearts on favorited dogs and saves that dog to localStorage.
$(".fa-heart").on("click", function() {
  var thisDog = $(this).data("dogid");
  if (favorites.includes(thisDog)) {
    $("#heartOne-" + thisDog).removeClass("fas");
    $("#heartOne-" + thisDog).addClass("far");
    $("#heartTwo-" + thisDog).removeClass("fas");
    $("#heartTwo-" + thisDog).addClass("far");
    let index = favorites.indexOf(thisDog);
    favorites.splice(index, 1);
    localStorage.setItem("favorites", JSON.stringify(favorites));
  } else {
    favorites.push(thisDog);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    renderHearts();
  }
});
// terms of service and confirm button
function confirmTos() {
  if (!$("#tos").is(":checked")) {
    $("#tos").click();
  }
}
confirmTos();
$("#tos").change(function() {
  if ($(this).is(":checked")) {
    $("#confirmReservation").removeAttr("disabled");
    $("#tosWarning").empty();
  } else {
    $("#confirmReservation").attr("disabled", true);
    $("#tosWarning").text("You must agree to the Terms of Service");
  }
});

function confirmResValidation() {
  var pickUpDate = $("#pickUpDate").val();
  var returnDate = $("#returnDate").val();
  var start = moment(pickUpDate, "M/D/YYYY");
  var end = moment(returnDate, "M/D/YYYY");
  console.log(end.diff(start, "days"));
}

$("#confirmReservation").on("click", function() {
  confirmResValidation();
});
// get favorites from local storage or empty array
var favorites = JSON.parse(localStorage.getItem("favorites")) || [];
