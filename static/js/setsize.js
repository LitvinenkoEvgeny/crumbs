var $ = jQuery;
var $document = $(document);
var $articles = $('article');
var $window = $(window);

function resizeArticles() {
    var isStacked = $document.width() <= 736;

    $articles.each(function (index, article) {

        var contentHeight = $('.container-table', article).outerHeight(true);
        var mediaHeight = $('.post-content-media', article).outerHeight(true);
        // console.log(article, 'Высота картинки: '+mediaHeight, 'Высота текста ' +contentHeight)

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
    setTimeout(() => {
        $window.on('resize', resizeArticles);
        resizeArticles();
    }, 10000)
});
