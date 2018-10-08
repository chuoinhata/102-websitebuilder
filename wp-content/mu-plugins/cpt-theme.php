<?php
function va_create_post_type() {
  register_post_type( 'va_theme',
    array(
      'labels' => array(
        'name' => __( 'Themes' ),
        'singular_name' => __( 'Theme' )
      ),
      'public' => true,
      'has_archive' => true,
    )
  );
}
add_action( 'init', 'va_create_post_type' );

add_filter('sage/template/home/data', function ( array $data ) {
    $themes = get_posts( [
        'posts_per_page' => -1,
        'facetwp' => true
    ] );

    $data['themes'] = $themes;

    return $data;
});

/**
 * FacetWP query programmatically.
 */
add_filter( 'facetwp_is_main_query', function( $is_main_query, $query ) {
    if ( '' !== $query->get( 'facetwp' ) ) {
        $is_main_query = (bool) $query->get( 'facetwp' );
    }
    return $is_main_query;
}, 10, 2 );
