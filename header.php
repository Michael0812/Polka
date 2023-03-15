<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <?php do_action( 'wpseo_head' );  ?>
        <meta name="viewport" content="width=device-width">
        <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
            rel="stylesheet">
        <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.0.2/css/bootstrap.min.css">
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap" rel="stylesheet">
        <?php wp_head(); ?>
    </head>

    <body <?php body_class(); ?>>
        <?php do_action('after_body'); ?>
        <header class="top-sticky">
            <?php include 'navigation.php'; ?>
        </header>