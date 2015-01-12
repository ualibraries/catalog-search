(function ($) {
    $(document).ready(function () {
        $('#catalog-search-catalog-form').submit(function () {
            $(this).addClass('submitted');
        });
    });
})(jQuery);