<?php

/**
 * Title: Partners
 * Slug: ross/partners
 * Categories: ross
 * Description: A slider of trusted partners.
 *
 * @package WordPress
 * @subpackage Ross
 * @since Ross 1.0
 */

?>

<!-- wp:group {"className":"partners","style":{"elements":{"link":{"color":{"text":"var:preset|color|base"}}}},"backgroundColor":"accent-1","textColor":"base","layout":{"type":"default"}} -->
<div class="wp-block-group partners has-base-color has-accent-1-background-color has-text-color has-background has-link-color">
    <!-- wp:heading {"textAlign":"center","className":"partners__title"} -->
    <h2 class="wp-block-heading has-text-align-center partners__title">Trusted partners</h2>
    <!-- /wp:heading -->

    <!-- wp:ross/slider {"isGrid":true,"autoplay":true,"slidesPerViewPhone":2} -->
    <div data-options="{&quot;loop&quot;:true,&quot;breakpoints&quot;:{&quot;0&quot;:{&quot;spaceBetween&quot;:28,&quot;slidesPerView&quot;:2,&quot;grid&quot;:{&quot;rows&quot;:2,&quot;fill&quot;:&quot;row&quot;}},&quot;480&quot;:{&quot;spaceBetween&quot;:40,&quot;slidesPerView&quot;:&quot;auto&quot;}},&quot;autoplay&quot;:{&quot;delay&quot;:5000}}" class="wp-block-ross-slider swiper">
        <div class="wp-block-ross-slider__wrapper swiper-wrapper">
            <!-- wp:ross/slider-slide -->
            <div class="wp-block-ross-slider-slide swiper-slide">
                <!-- wp:ross/partner -->
                <div class="wp-block-ross-partner"></div>
                <!-- /wp:ross/partner -->
            </div>
            <!-- /wp:ross/slider-slide -->
            <!-- wp:ross/slider-slide -->
            <div class="wp-block-ross-slider-slide swiper-slide">
                <!-- wp:ross/partner -->
                <div class="wp-block-ross-partner"></div>
                <!-- /wp:ross/partner -->
            </div>
            <!-- /wp:ross/slider-slide -->
            <!-- wp:ross/slider-slide -->
            <div class="wp-block-ross-slider-slide swiper-slide">
                <!-- wp:ross/partner -->
                <div class="wp-block-ross-partner"></div>
                <!-- /wp:ross/partner -->
            </div>
            <!-- /wp:ross/slider-slide -->
            <!-- wp:ross/slider-slide -->
            <div class="wp-block-ross-slider-slide swiper-slide">
                <!-- wp:ross/partner -->
                <div class="wp-block-ross-partner"></div>
                <!-- /wp:ross/partner -->
            </div>
            <!-- /wp:ross/slider-slide -->
            <!-- wp:ross/slider-slide -->
            <div class="wp-block-ross-slider-slide swiper-slide">
                <!-- wp:ross/partner -->
                <div class="wp-block-ross-partner"></div>
                <!-- /wp:ross/partner -->
            </div>
            <!-- /wp:ross/slider-slide -->
            <!-- wp:ross/slider-slide -->
            <div class="wp-block-ross-slider-slide swiper-slide">
                <!-- wp:ross/partner -->
                <div class="wp-block-ross-partner"></div>
                <!-- /wp:ross/partner -->
            </div>
            <!-- /wp:ross/slider-slide -->
        </div>
    </div>
    <!-- /wp:ross/slider -->
</div>
<!-- /wp:group -->