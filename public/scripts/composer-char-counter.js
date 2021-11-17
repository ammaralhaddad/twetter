

$(document).ready(function() {

$("#tweet-text").on("input", function(input){
  const maxLength = 140
  const tweetLength = $(this).val().length
  $('#number').text(maxLength-tweetLength);
  console.log(tweetLength)
  if (tweetLength > maxLength) {
    $('#number').css('color', 'red');
  }
});

});

