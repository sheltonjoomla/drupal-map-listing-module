
# Listing Page React App
****
This is a React application integrated with a Drupal module for displaying listings with a map and advanced search functionality.


`just build` in swe-homes/web/modules/custom/listing_page/react-app

After doing a build, update the js filename in 
web/modules/custom/listing_page/listing_page.libraries.ym   landi l

with name from swe-homes/web/modules/custom/listing_page/react-app/build/static/js/main.*****797c20b5*****.js


To start the local dev 
`lando start`

To build file component and update 
just build

run `lando info` to get url to site : http://localhost:64176


## Features

- Display listings with a map view
- Filter listings based on various criteria (property type, transaction type, search, bath, bedroom, etc.)
- Advanced search functionality with additional filters
- Dynamically update the map and listings based on selected filters
- Automatically set minimum value to "0" when a maximum value is selected for fields starting with "min" or "max"
- Format prices with proper currency formatting

## TODO

- Add scrollbar to listings (https://github.com/malte-wessel/react-custom-scrollbars?tab=readme-ov-file)
- Add Leaflet cluster mark cluster plugin
- Optimize API calls (https://blog.logrocket.com/data-fetching-react-suspense/)
- Implement dynamic min/max option adjustment (e.g., when min $500K is entered, max should start at $550K)
- Add skeleton loading for listings
- Recenter map after option selection and search
- Clean up the HTML structure of the listings (reduce the number of classes)
- Research adding root point to paragraph type

## Installation

1. Ensure you have a Drupal module set up for this React application.
2. Clone the repository or copy the files into the designated directory within your Drupal module.
3. Run `npm install` to install the necessary dependencies.
4. Configure the API endpoint for fetching listings in `src/App.js`.

## Usage

1. Build the React application using `npm run build`.
2. Ensure the Drupal module is enabled and properly configured.
3. Access the listing page through the designated route in your Drupal site.
4. Use the filter bar and advanced search to narrow down the listings.
5. Click on a listing to view more details.

## Dependencies

- React
- Leaflet (for maps)
- React Custom Scrollbars (for scrollable listings)
- Drupal (as the backend CMS)

## Debugging 
Filter State : Console log in App.js `console.log("Current filters:", filters);`

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).