<?php

namespace Drupal\listing_page\Controller;

use Drupal\Core\Controller\ControllerBase;

class ListingPageController extends ControllerBase {
  /**
   * Returns a render-able array for a test page.
   */
  public function properties() {
    // Attach the library and render the container for the React app.
    $build = [
      '#markup' => '<div id="listing-page-root"></div>',
      '#attached' => [
        'library' => [
          'listing_page/listing_page', // Ensure this matches the library name in your .libraries.yml file 
        ],
      ],
    ];
    \Drupal::logger('listing_page')->notice('Library attached and content rendered.');
    return $build;
  }
}