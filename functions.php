<?php

/**
 * Ross functions and definitions.
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package WordPress
 * @subpackage Ross
 * @since Ross 1.0
 */

define('WP_ENV', getenv('WP_ENV') ?: 'production');
define('VERSION', WP_ENV === 'development' ? time() : wp_get_theme()->get('Version'));
define('ROSS_DIR', get_template_directory());
define('ROSS_URI', get_template_directory_uri());

// Adds theme support for post formats.
if (! function_exists('ross_post_format_setup')) :
	/**
	 * Adds theme support for post formats.
	 *
	 * @since Ross 1.0
	 *
	 * @return void
	 */
	function ross_post_format_setup()
	{
		add_theme_support('post-formats', array('aside', 'audio', 'chat', 'gallery', 'image', 'link', 'quote', 'status', 'video'));
	}
endif;
add_action('after_setup_theme', 'ross_post_format_setup');

require_once ROSS_DIR . '/inc/ross_enqueue_assets.php';


// Registers pattern categories.
if (! function_exists('ross_pattern_categories')) :
	/**
	 * Registers pattern categories.
	 *
	 * @since Ross 1.0
	 *
	 * @return void
	 */
	function ross_pattern_categories()
	{

		register_block_pattern_category(
			'ross_page',
			array(
				'label'       => __('Pages', 'ross'),
				'description' => __('A collection of full page layouts.', 'ross'),
			)
		);

		register_block_pattern_category(
			'ross',
			array(
				'label'       => __('Ross', 'ross'),
				'description' => __('A collection of custom patterns.', 'ross'),
			)
		);
	}
endif;
add_action('init', 'ross_pattern_categories');
