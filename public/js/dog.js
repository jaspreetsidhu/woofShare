
//search dog with various filtering criterias
// function searchDogs() {
//     event.preventDefault();
//     var searchTag = $("#tagSearch").val();
//     var searchAge = $("#age").val();
//     var searchRating = $("#rating").val();
//     var searchDistance = $("#distance").val();

//     console.log(searchTag);
//     console.log(searchAge);
//     console.log(searchRating);
//     console.log(searchDistance);

//     if (searchAge != null) 
//     {
//         var search = {
//             age: searchAge
//         }

//         $.post("api/gallery/:age",search, function (data) {
//             console.log(data);
//         })
//     }
// }

// $("#searchFilter").on("click", function (e) {
//     searchDogs();
// })