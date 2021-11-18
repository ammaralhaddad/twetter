

$("form").submit(function(event){
    event.preventDefault();
    console.log(event)
    let tweetText = $('#tweet-text').val();
    if(tweetText ==="" || tweetText===null){
      // alert("Please enter the text. It cannot be empty");
      $("#error").text("Please enter the text. It cannot be empty").show();

    } else if(tweetText.length > 140){
      $("#error").text("text too long").show();

    }  else {
      $("#error").hide();
       $.ajax({
        type:"post",
        url:"/tweets",
        data: $(this).serialize() 

      }).then(()=>{
        loadTweets()
        $("#tweet-text").val("")
      });

    }


})




const loadTweets = function(){

$.ajax('/tweets',{method:'GET'}).then((response)=> {

  renderTweets(response)
}) 
 

}
loadTweets()





// const $tweet = $(`<article class="tweet">Hello world</article>`);

// const tweetData = {
//   "user": {
//     "name": "Newton",
//     "avatars": "https://i.imgur.com/73hZDYK.png",
//       "handle": "@SirIsaac"
//     },
//   "content": {
//       "text": "If I have seen further it is by standing on the shoulders of giants"
//     },
//   "created_at": 1461116232227
// }


const createTweetElement = function(tweet){

  const tweets =`<article class="tweets"> 
  <div class="tweet-header">
    <div>
    <i class="fas fa-meh-rolling-eyes"></i>
    <h3>${tweet.user.name}</h3>
  </div>
    <h3>${tweet.user.handle}</h3>
   </div>
  <p id="tweet-text">${tweet.content.text}</p>
  <div class="tweet-footer">
    <h5>${timeago.format(tweet.created_at)}</h5>
    <div>
  <i class="fa-solid fa-retweet"></i>
  <i class="fa-solid fa-heart"></i>
  <i class="fa-solid fa-flag"></i>
    </div>
  </div>

</article>`







  return tweets

  // return $tweetContainer
  
}


const renderTweets = function(tweets) {

  for(let ind of tweets){
    // console.log(ind)
  const $tweet = createTweetElement(ind);
  $('#tweets-container').prepend($tweet)

  }


}


  
