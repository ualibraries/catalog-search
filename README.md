The catalog search module allows users to query the University Library catalog (sabio.library.arizona.edu) from a form displayed in a block.

After enabling the module, configure the block at admin/config/search/catalog-search

Customizable elements:
* The help text displayed above the search box
* Which scope to use for searches (Main Library, AHSL, Poetry Center, or Law)
* Whether to allow other search types (such as title, or author) in addition to keyword
* The placeholder text that appears in the search box
* Whether or not to show the advanced search link

Assign the block to a region using Structure > Blocks or context.

Changing the block:
* Markup: copy catalog_search.tpl.php into your theme and modify the HTML as needed.
* Styling: use CSS in a custom theme to override the block styles.
* Form fields: use a custom module to implement a hook_form_catalog_search_catalog_form_alter. Or submit a pull request. Or ask us! :-)
