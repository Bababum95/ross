<?php

/**
 * Plugin Name:       Ross Blocks
 * Version:           1.0.0
 * Requires at least: 6.7
 * Requires PHP:      7.4
 * Author:            Bababum
 * Author URI:        https://github.com/Bababum95
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       ross
 *
 * @package RossBlocks
 */

if (! defined('ABSPATH')) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function blocks_init()
{
	register_block_type(__DIR__ . '/build/hero-banner');

	register_block_type(__DIR__ . '/build/services');
	register_block_type(__DIR__ . '/build/services/item');
}
add_action('init', 'blocks_init');
