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
        wp_enqueue_style('ross-reset', ROSS_URI . '/assets/css/reset.css', array(), VERSION);
        wp_enqueue_style('ross-button', ROSS_URI . '/assets/css/elements/button.css', array(), VERSION);
        wp_enqueue_style('ross-map', ROSS_URI . '/assets/css/patterns/map.css', array(), VERSION);
        wp_enqueue_style('ross-partners', ROSS_URI . '/assets/css/patterns/partners.css', array(), VERSION);
        wp_enqueue_style('ross-header', ROSS_URI . '/assets/css/parts/header.css', array(), VERSION);
        wp_enqueue_style('ross-footer', ROSS_URI . '/assets/css/parts/footer.css', array(), VERSION);

        if (is_front_page()) {
            wp_enqueue_style('ross-front-page-style', ROSS_URI . '/assets/css/templates/front-page.css', array(), VERSION);
        }

        if (is_page_template('contacts')) {
            wp_enqueue_style('ross-template-contacts-style', ROSS_URI . '/assets/css/templates/contacts.css', array(), VERSION);
        }

        if (is_page_template('service')) {
            wp_enqueue_style('ross-template-service-style', ROSS_URI . '/assets/css/templates/service.css', array(), VERSION);
        }

        if (is_page_template('about')) {
            wp_enqueue_style('ross-template-about-style', ROSS_URI . '/assets/css/templates/about.css', array(), VERSION);
        }

        if (is_single()) {
            wp_enqueue_style('ross-template-single-style', ROSS_URI . '/assets/css/templates/single-post.css', array(), VERSION);
        }

        if (is_home()) {
            wp_enqueue_style('ross-template-home-style', ROSS_URI . '/assets/css/templates/home.css', array(), VERSION);
        }
    }
endif;
add_action('wp_enqueue_scripts', 'ross_enqueue_styles');
