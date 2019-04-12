$(document).ready(function() {
  $(document).on("click", ".completeReturn", statusUpdate);
});
function statusUpdate(event) {
    event.preventDefault();
    
    var statusComplete = true;

    console.log($(this).attr("data-rentalId"));
    var rentId = $(this).attr("data-rentalId");

    var updateRental={
        statusComplete: true,
        rentalId: rentId
    }
      // AJAX post the data to the users API.
      $.post("/api/user-profile/" + rentId, updateRental, function(data) {
        if(data){
          window.location.replace("/user-profile");
        }
        else {
          console.log("Fail to obtain data userDetails");
        }
    });
}
