<?php


// Enqueues styles on the front.
if (! function_exists('ross_enqueue_styles')) :
    /**
     * Enqueues styles on the front.
     *
     * @since Ross 1.0
     *
     * @return void
     */
    function ross_enqueue_styles()
    {
        // Enqueue the main stylesheet.
        wp_enqueue_style('ross-style', get_parent_theme_file_uri('style.css'), array(), VERSION);
    }
endif;
add_action('wp_enqueue_scripts', 'ross_enqueue_styles');
