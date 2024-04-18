<?php
function shortcode_footer()
{
    return '
    <footer>
    <section class="main-section footer bg-black d-flex align-items-center">
        <div class="container">
            <div class="row">
                <div class="col-12 mx-auto footer-col">
                    <div class="row">
                        <div class="col-12 col-md-4 footer-col">
                        <img src="/wp-content/themes/Polka/images/polka-logo.png" alt="Polka. Graphic design logo"/>
                        <button class="btn btn-transparent my-4">Talk about project</button>
                        </div>
                        <div class="col-12 col-md-2 footer-col">
                            <ul class="footer-nav">
                                <li class="nav-link-footer">
                                    <a href="/our-services">our services</a>
                                </li>
                                <li class="nav-link-footer">
                                    <a href="/about-us">about us</a>
                                </li>
                                <li class="nav-link-footer">
                                    <a href="/our-work">our work</a>
                                </li>
                                <li class="nav-link-footer">
                                    <a href="/join-us">join us</a>
                                </li>
                                <li class="nav-link-footer">
                                    <a href="/contact-us">contact us</a>
                                </li>
                            </ul>
                        </div>
                        <div class="col-12 col-md-2 footer-col">
                            <ul class="footer-nav">
                                <li class="nav-link-footer">
                                    <a href="/privacy-policy">privacy policy</a>
                                </li>
                                <li class="nav-link-footer">
                                    <a href="/cookies">cookies policy</a>
                                </li>
                            </ul>
                        </div>
                        <div class="col-12 col-md-2 footer-col">
                            <h5>Let\'s talk</h5>
                        </div>
                    </div>
                </p>
            </div>
        </div>
    </section>
</footer>
    ';
}
add_shortcode('footer-block', 'shortcode_footer');