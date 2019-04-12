$(document).ready(function () {
  $(document).on("click", ".completeReturn", statusUpdate);
  $(document).on("click", ".statusArchive", statusArchiveUpdate)
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
  });
}