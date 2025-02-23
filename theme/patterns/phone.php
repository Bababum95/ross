<?php

/**
 * Title: Phone
 * Slug: ross/phone
 * Categories: ross
 * Description: A phone number with icon.
 *
 * @package WordPress
 * @subpackage Ross
 * @since Ross 1.0
 */

?>

<!-- wp:group {"className":"phone","layout":{"type":"flex","flexWrap":"nowrap"}} -->
<div class="wp-block-group phone">

    <!-- wp:image {"scale":"cover","sizeSlug":"full","linkDestination":"none"} -->
    <figure class="wp-block-image size-full">
        <img
            src="<?php echo esc_url(ROSS_URI); ?>/assets/icons/phone.svg"
            alt="phone icon"
            style="object-fit:cover" />
    </figure>
    <!-- /wp:image -->

    <!-- wp:paragraph -->
    <p><a href="tel:+17078900438">+1 (707) 890-0438</a></p>
    <!-- /wp:paragraph -->
</div>
<!-- /wp:group -->