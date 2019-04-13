$(document).ready(function () {
  $(document).on("click", ".completeReturn", statusUpdate);
  $(document).on("click",".statusArchive",statusArchiveUpdate);
  $(document).on("click","#nav-reviewed-tab",userRatingCall);
});

function statusUpdate(event) {
  event.preventDefault();
  console.log($(this).attr("data-rentalId"));
  var rentId = $(this).attr("data-rentalId");
  var updateRental = {
    statusComplete: true,
    rentalId: rentId
  }
  // AJAX post the data to the users API.
  $.post("/api/user-profile/" + rentId, updateRental, function (data) {
    if (data) {
      window.location.replace("/user-profile");
    } else {
      console.log("Fail to obtain data userDetails");
    }
  });
}

function statusArchiveUpdate(event) {
  event.preventDefault();
  console.log($(this).attr("data-rentalId"));
  var rentId = $(this).attr("data-rentalId");
  var updateRental = {
    statusArchive: true,
    rentalId: rentId
  }
  // AJAX post the data to the users API.
  $.post("/api/user-profile/archive/" + rentId, updateRental, function (data) {
    if (data) {
      window.location.replace("/user-profile");
    } else {
      console.log("Fail to obtain data userDetails");
    }
      // AJAX post the data to the users API.
      $.post("/api/user-profile/archive/" + rentId, updateRental, function(data) {
        if(data){
          window.location.replace("/user-profile");
        }
        else {
          console.log("Fail to obtain data userDetails");
        }
    });
  })
}

function userRatingCall(event) {
    event.preventDefault();
    console.log($(this).attr("data-userId"));
    var userId = $(this).attr("data-userId");

      // AJAX post the data to the users.
      $.get("/api/userRate/" + userId,  function(data) {
        if(data){
            console.log("DataReceived:",data);
        }
        else {
          console.log("Fail to obtain data userDetails");
        }
    });
}