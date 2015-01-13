(function ($) {
    $(document).ready(function () {

        /**
         * This function adds a 'submitted' class to
         * the form when the submit button is clicked.
         *
         * We're using this to trigger the animation of
         * the search icon.
         *
         * See line 168 of /assets/css/catalog-search.scss
         * or line 158 of /assets/css/catalog-search.css
         */

        $('#catalog-search-catalog-form').submit(function () {
            $(this).addClass('submitted');
        });
    });
})(jQuery);