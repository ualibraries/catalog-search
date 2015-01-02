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

  $form['catalog_search_scope'] = array(
    '#type' => 'select',
    '#title' => t('Catalog Scope'),
    '#options' => array(
      9 => 'University Libraries',
      1 => 'Arizona Health Sciences Library',
      3 => 'Poetry Center',
      5 => 'Law',
    ),
    '#default_value' => variable_get('catalog_search_scope', 9),
    '#description' => t('Choose the scope to search in the catalog.'),
  );

  $form['catalog_search_additional_types'] = array(
    '#type' => 'checkboxes',
    '#title' => t('Additional Search Types'),
    '#options' => array(
      't' => t('Title'),
      'a' => t('Author'),
      'c' => t('Call Number'),
      's' => t('Journal Title'),
    ),
    '#default_value' => variable_get('catalog_search_additional_types', array()),
    '#description' => t('Choose which search types you want to allow. Keyword will always be available and default.'),
  );

  return system_settings_form($form);
}

