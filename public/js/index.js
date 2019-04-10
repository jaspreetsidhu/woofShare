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



  // terms of service and confirm button
  function confirmTos() {
    if(!$('#tos').is(":checked")) {
      $('#tos').click();
    }  
  }
  $('#tos').change(function() {
    if($(this).is(":checked")) {
      $("#confirmReservation").removeAttr("disabled");
      $("#tosWarning").empty();
    } else {
      $("#confirmReservation").attr("disabled", true);
      $("#tosWarning").text("You must agree to the Terms of Service");
    }
  });
 
  function confirmResValidation(){
    var pickUpDate = $("#pickUpDate").val();
    var returnDate = $("#returnDate").val();
    var start = moment(pickUpDate, "M/D/YYYY");
    var end = moment(returnDate, "M/D/YYYY");
    console.log(end.diff(start, 'days'));
    
  }
  
  $("#confirmReservation").on("click", function(e){
    confirmResValidation();
  });

  
// get favorites from local storage or empty array
var favorites = JSON.parse(localStorage.getItem("favorites")) || [];
