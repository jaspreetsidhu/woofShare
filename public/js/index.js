console.log("click");

$(".header").on("click", function(){
  window.location.href = '/auth/google/callback'; 
});
