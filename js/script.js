
function loadData() {

    // Variables
    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    var street = $('#street').val();
    var city = $('#city').val();
    var stretviewURL = 'https://maps.googleapis.com/maps/api/streetview?size=1200x800&location=' + street + ',' + city + '"';
    console.log(stretviewURL);

    var nytKey = 'f04dc6617122670611c89974ff297d6b:17:72661996'
    var nytURL = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + city + '&sort=newest&api-key=' + nytKey;

    $greeting.text('So, you want to live at ' + street + ', ' + city + '?');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview
    $body.append('<img class="bgimg" src="' + stretviewURL + '>');

    // Getting NYTimes data

    $.getJSON(nytURL, function(data) {
        $nytHeaderElem.text('New York Time Articles About ' + city);

        articles = data.response.docs;
        console.log(nytURL)
        for (var i = 0; i < articles.length; i++) {
            var article = articles[i];
            $nytElem.append('<li class="article">' + '<a href="'+article.web_url+'">'+article.headline.main+'</a><p>' + article.snippet + '</p></li>');
        };
    });


    // YOUR CODE GOES HERE!

    return false;
};

$('#form-container').submit(loadData);

// loadData();
