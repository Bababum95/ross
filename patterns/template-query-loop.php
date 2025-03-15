<?php

/**
 * Title: List of posts
 * Slug: ross/template-query-loop
 * Categories: ross
 * Block Types: ross/query
 * Description: A list of posts, with featured image and post date.
 *
 * @package WordPress
 * @subpackage Ross
 * @since Ross 1.0
 */

?>
<!-- wp:query {"query":{"perPage":3,"pages":0,"offset":0,"postType":"post","order":"desc","orderBy":"date","author":"","search":"","exclude":[],"sticky":"","inherit":true,"taxQuery":null,"parents":[]},"align":"full","layout":{"type":"default"}} -->
<div class="wp-block-query alignfull">
	<!-- wp:post-template {"align":"full","style":{"spacing":{"blockGap":"0px"}},"className":"list","layout":{"type":"default"}} -->
	<!-- wp:post-featured-image {"isLink":true} /-->

	<!-- wp:group {"align":"full","style":{"spacing":{"blockGap":"0px"}},"className":"card__text-content","layout":{"type":"constrained"}} -->
	<div class="wp-block-group alignfull card__text-content">
		<!-- wp:post-date {"isLink":true} /-->
		<!-- wp:post-title {"isLink":true} /-->
		<!-- wp:paragraph {"className":"read-more"} -->
		<p class="read-more">
			Read more
			<svg width="26" height="16" viewBox="0 0 26 16" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M0 8H24M24 8L16.2581 1M24 8L16.2581 15" stroke="currentColor" stroke-width="1.5" />
			</svg>
		</p>
		<!-- /wp:paragraph -->
	</div>

	<!-- /wp:group -->
	<!-- /wp:post-template -->

	<!-- wp:group {"style":{"spacing":{"padding":{"top":"var:preset|spacing|60","bottom":"var:preset|spacing|60"}}},"layout":{"type":"constrained"}} -->
	<div class="wp-block-group" style="padding-top:var(--wp--preset--spacing--60);padding-bottom:var(--wp--preset--spacing--60)"><!-- wp:query-no-results -->
		<!-- wp:paragraph -->
		<p>Sorry, but nothing was found. Please try a search with different keywords.</p>
		<!-- /wp:paragraph -->
		<!-- /wp:query-no-results -->
	</div>
	<!-- /wp:group -->

	<!-- wp:group {"align":"wide","layout":{"type":"constrained"}} -->
	<div class="wp-block-group alignwide"><!-- wp:query-pagination {"paginationArrow":"arrow","align":"wide","layout":{"type":"flex","justifyContent":"space-between"}} -->
		<!-- wp:query-pagination-previous /-->

		<!-- wp:query-pagination-numbers /-->

		<!-- wp:query-pagination-next /-->
		<!-- /wp:query-pagination -->
	</div>
	<!-- /wp:group -->
</div>
<!-- /wp:query -->