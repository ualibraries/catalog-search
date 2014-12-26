<?php
/**
 * @file
 * Administration page for Catalog Search.
 */

/**
 * Form constructor for Catalog Search admin form.
 *
 * @see catalog_search_admin_settings_submit()
 *
 * @ingroup forms
 */
function catalog_search_admin_settings() {
  $form = array();

  $form['catalog_search_help_text'] = array(
    '#type' => 'textfield',
    '#title' => t('Catalog Help Text'),
    '#default_value' => variable_get('catalog_search_help_text', ''),
    '#description' => t('Set the help text for the catalog box.'),
  );

  return system_settings_form($form);
}

