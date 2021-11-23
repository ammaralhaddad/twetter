
$(document).ready(function() {

$("#tweet-text").on("input", function(input){
  const maxLength = 140
  const tweetLength = $(this).val().length
  const remaningChar = maxLength - tweetLength;
  $('#number').text(remaningChar);
  if (remaningChar < 0) {
    $('#number').css('color', 'red');
  }else {
    $('#number').css('color', 'black');
  }
  
});

});

