
$(document).ready(function() {
    $(document).on("submit", "#loginForm", handleAuthFormSubmit);
  
    // A function to handle what happens when the form is submitted to create a new Author
    function handleAuthFormSubmit(event) {
        event.preventDefault();
        
      var  userAuth={
            name: $("#name").val().trim(),
            address: $("#search_term").val().trim()
        };
        // Calling the upsertAuthor function and passing in the value of the name input
        userAuthDetails( userAuth);
    }
  
    // A function for creating an author. Calls getAuthors upon completion
    function userAuthDetails(userAuth) {
        console.log(userAuth);
        $.post("/api/signUp", userAuth,
        function(data) {

            if (data) {
                console.log("success");
             window.location.replace("/auth/google");
            }
   
            else {
              alert("Sorry");
            }
    
         
          });
    
       
    }
  });