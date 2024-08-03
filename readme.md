# Listing Page Module

The Listing Page module is a custom Drupal module that renders a React app on a Drupal page to display a list of listings with various features and functionalities.

## Features

- Display a list of listings with pagination and sorting options
- Show detailed information for each listing, including images, prices, and other relevant data
- Integrate a map using Leaflet to display the locations of the listings
- Provide filtering options to refine the list of listings based on specific criteria
- Utilize Drupal's backend to manage and store the listing data

## Requirements

- Drupal 9.x
- React 17.x
- Leaflet 1.7.x
- Other dependencies (specify any additional requirements)

## Installation

1. Clone or download this module to your Drupal modules directory (e.g., `web/modules/custom/`).
2. Enable the Listing Page module in your Drupal site's module management page or by running `drush en listing_page`.
3. Install the required dependencies by running `npm install` inside the `react-app` directory.
4. Build the React app by running `npm run build` inside the `react-app` directory.
5. Configure the module settings (if applicable) in the Drupal administration panel.

## Configuration

- Specify any configuration options or settings available for the module.
- Provide instructions on how to configure the module using the Drupal administration panel or other means.

## Usage

1. Create or import listing data into your Drupal site using the appropriate content type or data source.
2. Place the Listing Page block or page on the desired Drupal page or layout.
3. Customize the module's behavior or appearance by modifying the React components or Drupal templates.

## Development

- Provide instructions for setting up a development environment for the module.
- Specify any build tools, scripts, or commands required for development.
- Include information on how to contribute to the module, such as coding standards, issue tracking, or pull request guidelines.

## Troubleshooting

- List common issues or errors that users may encounter and provide solutions or workarounds.
- Include any known limitations or compatibility issues with other modules or systems.

## License

Specify the license under which this module is distributed (e.g., GNU General Public License v2.0 or later).

## Credits

- Acknowledge any contributors, authors, or third-party libraries used in the module.
- Provide links to relevant resources or documentation.

## Contact

Provide contact information or links to support channels for users to reach out for assistance or to report issues.