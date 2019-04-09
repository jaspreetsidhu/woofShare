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
