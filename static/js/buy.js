var $ = window.jQuery;

$(document).ready(function(){
    var items = $('.item');
    var buyButtons = $('.btn');
    var form = $('.form');
    var formWrp = $('.form__wrp');
    var formClose = $('.form__back', formWrp);
    var parentSelector = '.viewport-item';

    function getArticleElem($clickedBtn) {
        return $clickedBtn.parents(parentSelector);
    }

    function showForm($article) {
        $article.find('.js-hide-when-form').hide(300);
        $article.find('.form__wrp').addClass('form__wrp--show');

    }

    function hideForm($article) {
        $article.find('.form__wrp').removeClass('form__wrp--show');
        $article.find('.js-hide-when-form').show(300);
    }

    buyButtons.on('click', function(){
        var parentArticle = getArticleElem($(this));
        showForm(parentArticle);
    });

    formClose.on('click', function (e) {
        var parentArticle = getArticleElem($(this));
        hideForm(parentArticle);
    });
});
