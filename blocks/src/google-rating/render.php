<?php

global $wpdb;

$place_id  = $attributes['place_id'] ? $attributes['place_id'] : 0;
$place_sql = "SELECT id, place_id, name, rating, review_count, updated" .
    " FROM " . $wpdb->prefix . "grp_google_place" .
    " WHERE rating > 0 AND review_count > 0" . ($place_id > 0 ? ' AND id = %d' : '') .
    " ORDER BY id DESC";

$places = $place_id > 0 ?
    $wpdb->get_results($wpdb->prepare($place_sql, sanitize_text_field(wp_unslash($place_id)))) :
    $wpdb->get_results($place_sql);

$place = $places[0];

if (!$place) return;

$rating       = (float) $place->rating;
$review_count = (int) $place->review_count;
$link         = isset($attributes['link']) ? $attributes['link'] : '#';
?>

<a <?php echo wp_kses_data(get_block_wrapper_attributes()); ?> href="<?php echo $link; ?>">
    <img class="wp-block-ross-google-rating__google" src="<?php echo ROSS_BLOCKS_URL ?>assets/icons/google.png" alt="Google" width="24" height="24">
    <div class="wp-block-ross-google-rating__content">
        <div class="wp-block-ross-google-rating__rating">
            <span class="wp-block-ross-google-rating__score">
                <?php echo $rating; ?>
            </span>
            <span class="wp-block-ross-google-rating__stars">
                <?php
                foreach (array(1, 2, 3, 4, 5) as $val) {
                    $score = $rating - $val;
                    if ($score > -1) { ?>
                        <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.18113 0.31307C4.26428 0.05715 4.62634 0.0571499 4.70949 0.31307L5.50552 2.76298C5.54271 2.87743 5.64936 2.95492 5.7697 2.95492H8.34568C8.61477 2.95492 8.72666 3.29925 8.50896 3.45742L6.42494 4.97154C6.32759 5.04228 6.28685 5.16766 6.32403 5.28211L7.12006 7.73202C7.20321 7.98794 6.9103 8.20075 6.6926 8.04258L4.60859 6.52846C4.51123 6.45772 4.3794 6.45772 4.28204 6.52846L2.19802 8.04258C1.98033 8.20075 1.68742 7.98794 1.77057 7.73202L2.56659 5.28211C2.60378 5.16766 2.56304 5.04228 2.46568 4.97154L0.381668 3.45742C0.16397 3.29925 0.275852 2.95492 0.544942 2.95492H3.12093C3.24127 2.95492 3.34792 2.87743 3.38511 2.76298L4.18113 0.31307Z" fill="#FFAA01" />
                        </svg>
                    <?php } else { ?>
                        <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.18113 0.31307C4.26428 0.05715 4.62634 0.0571499 4.70949 0.31307L5.50552 2.76298C5.54271 2.87743 5.64936 2.95492 5.7697 2.95492H8.34568C8.61477 2.95492 8.72666 3.29925 8.50896 3.45742L6.42494 4.97154C6.32759 5.04228 6.28685 5.16766 6.32403 5.28211L7.12006 7.73202C7.20321 7.98794 6.9103 8.20075 6.6926 8.04258L4.60859 6.52846C4.51123 6.45772 4.3794 6.45772 4.28204 6.52846L2.19802 8.04258C1.98033 8.20075 1.68742 7.98794 1.77057 7.73202L2.56659 5.28211C2.60378 5.16766 2.56304 5.04228 2.46568 4.97154L0.381668 3.45742C0.16397 3.29925 0.275852 2.95492 0.544942 2.95492H3.12093C3.24127 2.95492 3.34792 2.87743 3.38511 2.76298L4.18113 0.31307Z" fill="#ccc" />
                        </svg>
                <?php }
                } ?>
            </span>
        </div>
        <p class="wp-block-ross-google-rating__review-count">
            Based on <?php echo $review_count ?> reviews
        </p>
    </div>
</a>