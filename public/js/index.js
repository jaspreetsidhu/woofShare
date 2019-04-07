$(".header").on("click", function() {
  window.location.href = "/";
});

$(".fa-heart").on("click", function() {
  var thisDog = $(this).data("dogid");
  console.log(thisDog);
  var allItems = $("i").find(`[data-dogid='${thisDog}']`);
  console.log(allItems);
  if ($(this).hasClass("fas")) {
    $(this).removeClass("fas");
    $(this).addClass("far");
  } else if ($(this).hasClass("far")) {
    $(this).removeClass("far");
    $(this).addClass("fas");
  }
});


// get favorites from local storage or empty array
var favorites = JSON.parse(localStorage.getItem("favorites")) || [];