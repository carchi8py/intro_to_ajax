
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

    $greeting.text('So, you want to live at ' + street + ', ' + city + '?');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview
    $body.append('<img class="bgimg" src="' + stretviewURL + '>');


    // YOUR CODE GOES HERE!

    return false;
};

$('#form-container').submit(loadData);

// loadData();
