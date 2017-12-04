var $ = jQuery;
var $document = $(document);
var $articles = $('article');
var $window = $(window);

function resizeArticles() {
    var isStacked = $document.width() <= 736;

    $articles.each(function (index, article) {

        var contentHeight = $('.container-table', article).height();

        if(isStacked){
            contentHeight += $('.post-content-media').height();
        }

        $(article).height(contentHeight + 100);
    });
}

$(document).ready(function () {
    resizeArticles();
});
$window.on('resize', resizeArticles);
