<?php

namespace Drupal\listing_page\Controller;

use Drupal\Core\Controller\ControllerBase;

class ListingPageController extends ControllerBase {
  /**
   * Returns a render-able array for the "Properties" page.
   */
  public function properties() {
    $build = [
      '#markup' => '<div id="listing-page-root"></div>',
      '#attached' => [
        'library' => [
          'listing_page/listing_page',
        ],
      ],
      '#cache' => [
        'tags' => ['node_list'],
      ],
    ];
    \Drupal::logger('listing_page')->notice('Library attached and content rendered. React Module Loaded');
    return $build;
  }
}