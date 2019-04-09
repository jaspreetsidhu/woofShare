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

const pickUpDate = datepicker('#pickUpDate', {
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
  const returnDate = datepicker('#returnDate', {
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