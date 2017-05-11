var counter = 0;
var colors = ["orange", "green", "red", "blue"];


function colorChange() {
$("body").toggleClass(colors[counter % 5]);
 counter++;
}

function getQuoteColorChange() {
  getQuote();
  colorChange();
}

function getQuote() {

  //Ajax call, adding and tweeting new quote, and changing colors:

  $.ajax({
    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/',
    type: 'POST',
    dataType: 'json',
    success: function(data) {
      var quote =  '"' + data.quote + '"' ;
      var author =  " " + data.author;
      var tweet = quote.replace(/ /g, "%20") + author.replace(/ /g, "%20");
      $("#quote").html(quote).addClass("fade-in");
      $("#author").html(author).addClass("fade-in");
      $("#tweet-this").html("<a target=_blank href=http://twitter.com/home?status=" + quote.replace(/ /g, "%20").replace(/;/g, "%3B") + author.replace(/ /g, "%20") + "><button class=btn id=tweet>Tweet This</button></a>");
      $("#tweet").addClass("btn-default").addClass("btn-lg");
      
    },
    error: function(err) {
      alert(err);
    },
    beforeSend: function(xhr) {
      xhr.setRequestHeader("X-Mashape-Authorization", "asU2Lh9uY4mshLBUSAfnRs1SBQkip1ZxF35jsnqYajcAwBWwsO");
    }
  });
}

$(document).ready(function() {
  getQuote();
  
});