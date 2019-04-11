$(document).ready(function() {
  $(document).on("submit", "#loginForm", handleAuthFormSubmit);
  $(document).on("click", "#btnGoogleLogin", redirectToGoogleLogin);
  $(document).on("click", "#logOutLink", logout);

  userDetail = JSON.parse(localStorage.getItem("userDetails"));
  var tokenAvailable = false;
  $("#indexloginLink").hide();
  $("#dropDownUser").hide();
  $.get("/api/checkToken", function() {
    console.log("success");
  })
    .done(function(data) {
      tokenAvailable = true;
      checkAuthentication(tokenAvailable);
    })
    .fail(function(error) {
      tokenAvailable = false;
      checkAuthentication(tokenAvailable);
    });

  function checkAuthentication(tokenAvailable) {
    if (
      !tokenAvailable ||
      userDetail === null ||
      typeof userDetail === "undefined"
    ) {
      // Not login
      //if (window.location.pathname =
      var path = window.location.pathname;
      var page = path.split("/").pop();
      //Login Button should not be displyed
      if (page.toUpperCase() === "SIGNUP") {
        $("#indexloginLink").hide();
      } else {
        $("#indexloginLink").show();
      }

      $("#dropDownUser").hide();
    } else {
      console.log("logged in");
      console.log("username:", userDetail.name);
      $("#indexloginLink").hide();
      $("#dropDownUser").show();
      $("#userProfileName").text(userDetail.name);
      $("#userProfilePic").attr("src", userDetail.photo);
    }
  }

  // A function to handle what happens when the form is submitted to create a new Author
  function handleAuthFormSubmit(event) {
    event.preventDefault();

    var userAuth = {
      name: $("#name")
        .val()
        .trim(),
      address: $("#search_term")
        .val()
        .trim()
    };
    // Calling the upsertAuthor function and passing in the value of the name input
    userAuthDetails(userAuth);
  }

  // A function for creating an author. Calls getAuthors upon completion
  function userAuthDetails(userAuth) {
    // console.log(userAuth);
    $.post("/api/signUp", userAuth, function(data) {
      if (data) {
        console.log("success", JSON.stringify(data));
        window.localStorage.setItem("userDetails", JSON.stringify(data));
        window.location.replace("/gallery");
      } else {
        console.log("Fail to obtain data userDetails");
      }
    });
  }

  function redirectToGoogleLogin(event) {
    window.location.replace("/auth/google/callback");
  }
  function logout(event) {
    localStorage.removeItem("userDetails");
    window.location.replace("/logout");
  }
});
