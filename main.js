$(document).ready(function(){
  $('.btn').on('click', function () {
    getThought();
  });
});
// everything happens inside of here, when the button is clicked
function getThought(){
  // var randomVar = Math.floor(20)
  var randomVar = Math.floor((Math.random()*20));
  console.log(randomVar)
// remove anything in container
   $('.advice').remove()
   $('.form-container').remove()
var url = "https://galvanize-cors.herokuapp.com/https://www.reddit.com/r/Showerthoughts/new.json";
$.get(url, function(data){
// do we need data.data.title?qqq1q`1`111
    var title = data.data.children[randomVar].data.title
    console.log(data)
    showTitle(title);
    console.log(title);


});
}
function showTitle(title) {
  $(".advice-container").html('<span class="poop">'+title+'</span>');
}
//   var settings = {
//  "async": true,
//  "crossDomain": true,
//  "url": "https://galvanize-cors.herokuapp.com/https://www.reddit.com/r/Showerthoughts/new.json",
//  "method": "GET",
//  "headers": {
//    "cache-control": "no-cache",
//    "postman-token": "52c8bf40-feec-f7b5-a4fc-38f8632efe98"
//  }
// };
// $.ajax(settings).done(function (response) {
//  console.log(response);
// });
// }
