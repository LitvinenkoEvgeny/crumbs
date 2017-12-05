var $ = jQuery;
var $document = $(document);
var $articles = $('article');
var $window = $(window);

function resizeArticles() {
    var isStacked = $document.width() <= 736;

    $articles.each(function (index, article) {

        var contentHeight = $('.container-table', article).height();
        var mediaHeight = $('.post-content-media').height();

        if(isStacked){
            contentHeight += mediaHeight;
        }

        if(mediaHeight > contentHeight){
            $(article).height(mediaHeight);
        } else {
            $(article).height(contentHeight);
        }

    });
}

$(document).ready(function () {
    resizeArticles();
});
$window.on('resize', resizeArticles);
