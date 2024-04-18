<?php 

add_theme_support( 'html5', array( 'comment-list', 'comment-form', 'search-form', 'gallery', 'caption', 'style', 'script' ) );
add_theme_support( 'post-thumbnails' );

require_once 'secrets.php';
function polka_scripts() {
    wp_enqueue_style( 'default', get_stylesheet_uri() );
    wp_enqueue_style( 'bootstrap-min', get_template_directory_uri().'/bootstrap/css/bootstrap.min.css' );
    wp_enqueue_style( 'variables-css', get_template_directory_uri().'/css/variables.less' );
    wp_enqueue_script( 'mainjs', get_template_directory_uri().'/js/main.js', array('jquery'),'1.0.0', true); // Corrected this line
    wp_enqueue_script( 'glookup', get_template_directory_uri() . '/js/glookup.js', array(), '1.0.0', true );
    wp_enqueue_style( 'bootstrap-icons', 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css', '', '1.0.0', true );
    wp_enqueue_script( 'main', get_template_directory_uri() . '/js/main.js', array(), '1.0', true );
    wp_register_script('googlemaps', 'https://maps.googleapis.com/maps/api/js?key=' . GOOGLE_MAPS_API_KEY . '&callback=initAutocomplete&libraries=places&v=weekly', array(), '', true);
    wp_enqueue_script('googlemaps');
}
add_action( 'wp_enqueue_scripts', 'polka_scripts' );
// include('shortcodes.php');

/* include Nav Walker file */
// require_once('bs5-navwalker.php');

/* Disable WordPress Admin Bar for all users */
add_filter( 'show_admin_bar', '__return_false' );

add_filter('wpcf7_autop_or_not', '__return_false');

// Prevent WP from adding <p> tags on all post types
function disable_wp_auto_p( $content ) {
    remove_filter( 'the_content', 'wpautop' );
    remove_filter( 'the_excerpt', 'wpautop' );
    return $content;
}
add_filter( 'the_content', 'disable_wp_auto_p', 0 );

// include('google-tag-manager.php');

add_filter('excerpt_length', function ($length) {
    return 50;
});

function new_excerpt_more($more)
{
    return '<a class="read-more" href="' . get_permalink(get_the_ID()) . '">...</a>';
}
add_filter('excerpt_more', 'new_excerpt_more');

function holbornfavicon()
{
    echo '<link rel="Shortcut Icon" type="image/x-icon" href="' . get_template_directory_uri() . '/favicon.ico" />';
}


include('shortcodes.php');
