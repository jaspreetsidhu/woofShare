$("#completeReturn").on("click", function(event) {
    event.preventDefault();
    
    var returnDtActual = "2019-04-11";
    var statusComplete = true;
    //var rentalUser = this.user.dataValues.id;

    console.log(statusComplete);
    console.log($("#returnDate").val());

    // var rentStatus = {
    //     name: $("#name").val(),
    //     photo: $("#photo").val(),
    //     scores: [
    //       $("#q1").val(),
    //       $("#q2").val(),
    //       $("#q3").val(),
    //       $("#q4").val(),
    //       $("#q5").val(),
    //       $("#q6").val(),
    //       $("#q7").val(),
    //       $("#q8").val(),
    //       $("#q9").val(),
    //       $("#q10").val()
    //     ]
    //   };

    //   // AJAX post the data to the friends API.
    //   $.post("/api/friends", userData, function(data) {

    //     // Grab the result from the AJAX post so that the best match's name and photo are displayed.
    //     $("#match-name").text(data.name);
    //     $("#match-img").attr("src", data.photo);

    //     // Show the modal with the best match
    //     $("#results-modal").modal("toggle");

    //   });
    // }
    // else {
    //     if(validUrl)
    //        alert("Please fill out all fields before submitting!");
    //     else
    //       alert("Please enter valid photo URL!");
    // }
  });