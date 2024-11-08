import React, { useRef, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default icon issue with Leaflet in React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: 'https://swehomes.com/themes/barrio_custom/img/property_details_marker.png',
  iconSize: [35, 45], // size of the icon in pixels
  iconAnchor: [17.5, 45], // point of the icon which will correspond to marker's location
  popupAnchor: [0, -45], // point from which the popup should open relative to the iconAnchor
  shadowSize: [0, 0],
  iconRetinaUrl: 'https://swehomes.com/themes/barrio_custom/img/property_details_marker.png',
  shadowUrl: 'https://swehomes.com/themes/barrio_custom/img/property_details_marker.png',
});

const Map = ({ listings, formatPrice }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current && listings.length > 0) {
      const bounds = L.latLngBounds();

      listings.forEach((listing) => {
        if (listing.field_lat_lon) {
          const matches = listing.field_lat_lon.match(/-?\d+\.\d+/g);

          if (matches && matches.length >= 2) {
            const [lon, lat] = matches.map(Number);
            bounds.extend([lat, lon]);
          }
        }
      });

      mapRef.current.fitBounds(bounds);
    }
  }, [listings]);

  // Calculate the center coordinates based on the listings
  const center = listings.length > 0 ? [
    listings.reduce((sum, listing) => {
      const matches = listing.field_lat_lon.match(/-?\d+\.\d+/g);
      return matches ? sum + Number(matches[1]) : sum;
    }, 0) / listings.length,
    listings.reduce((sum, listing) => {
      const matches = listing.field_lat_lon.match(/-?\d+\.\d+/g);
      return matches ? sum + Number(matches[0]) : sum;
    }, 0) / listings.length,
  ] : [32.779167, -96.808891]; // Default center if no listings

  return (
    <MapContainer
      key={listings.length} // Add a key prop that depends on the listings data
      center={center}
      zoom={7}
      style={{ height: '700px', width: '100%' }}
      whenCreated={mapInstance => { mapRef.current = mapInstance; }}
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        subdomains='abcd'
        maxZoom={19}
      />
      {listings.map((listing) => {
        // Check if field_lat_lon is present and not empty
        if (!listing.field_lat_lon) {
          return null;
        }
        // Extract coordinates from field_lat_lon
        const matches = listing.field_lat_lon.match(/-?\d+\.\d+/g);

        // Link 
        const link = listing.view_node;

        if (!matches || matches.length < 2) {
          return null;
        }

        // Reverse the coordinates to match the format expected by Leaflet
        const [lon, lat] = matches.map(Number);
        return (
          <Marker key={listing.id} position={[lat, lon]}>
            <Popup>
              <div>
                <div className="mainImage">
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    <div
                      dangerouslySetInnerHTML={{ __html: listing.field_images }}
                    ></div>
                  </a>
                </div>

                <div className="pop-up-price property_status_price">
                  <span className="property-card__price-lease">
                    <a href={link} target="_blank" rel="noopener noreferrer">
                      {listing.field_monthly_lease ? formatPrice(listing.field_monthly_lease) : ''}
                    </a>
                  </span>
                  <span className="property-card__price-sale">
                    <a href={link} target="_blank" rel="noopener noreferrer">
                      {listing.field_price_1 ? formatPrice(listing.field_price_1) : ''}
                    </a>
                  </span>
                </div>
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <p>
                    {listing.field_address_address_line1}{" "}<br/>
                    {listing.field_address_locality},{" "}
                    {listing.field_address_administrative_area} {listing.field_address_postal_code}
                  </p>
                </a>
                <div className="pop-up-desc">
                  <span className="bedrooms">{listing.field_bedrooms ? `${listing.field_bedrooms} bed` : ''}</span>
                  <span className="bathrooms">{listing.field_bathrooms ? `${listing.field_bathrooms} bath` : ''}</span>
                  <span className="sq-ft">{listing.field_sq_ft ? `${listing.field_sq_ft} sq ft` : ''}</span>
                  <span className="sq-ft">{listing.field_land_square_ft ? `${listing.field_land_square_ft} land sq ft` : ''}</span>
                </div>
              </div>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default Map;