
$("form").submit(function(event){
event.preventDefault();
console.log("checktwwet")
$.ajax({
 type:"post",
 url:"/tweets",
 data: $(this).serialize() 

})

})














// const $tweet = $(`<article class="tweet">Hello world</article>`);

const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
  "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
  "created_at": 1461116232227
}

{/* <article class="all-tweets"> 
          <div class="tweet-header">
            <div>
            <i class="fas fa-meh-rolling-eyes"></i>
            <h3> Mero Haddad</h3>
          </div>
            <h3>@haddad</h3>
           </div>
          <p>Hello World!</p>
          <div class="tweet-footer">
            <h5>10 days ago </h5>
            <div>
          <i class="fa-solid fa-retweet"></i>
          <i class="fa-solid fa-heart"></i>
          <i class="fa-solid fa-flag"></i>
            </div>
          </div>
   
        </article>  */}
const createTweetElement = function(tweet){

  const tweets =`<article class="tweets"> 
  <div class="tweet-header">
    <div>
    <i class="fas fa-meh-rolling-eyes"></i>
    <h3>${tweet.user.name}</h3>
  </div>
    <h3>${tweet.user.handle}</h3>
   </div>
  <p>${tweet.content.text}</p>
  <div class="tweet-footer">
    <h5>${timeago.format(tweet.created_at)}</h5>
    <div>
  <i class="fa-solid fa-retweet"></i>
  <i class="fa-solid fa-heart"></i>
  <i class="fa-solid fa-flag"></i>
    </div>
  </div>

</article>`







  const $tweetContainer = $("#tweets-container")
  // console.log($tweetContainer)
  return $tweetContainer.prepend(tweets)

  // return $tweetContainer
  
}

const $tweet = createTweetElement(tweetData);

// Test / driver code (temporary)

  
