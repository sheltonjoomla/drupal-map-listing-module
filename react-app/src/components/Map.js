import React, { useRef, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// TODO: {"maxWidth":"300","minWidth":"50","autoPan":true}
// TODO: Add a marker cluster

// Fix for default icon issue with Leaflet in React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: 'https://swehomes.com/themes/barrio_custom/img/property_details_marker.png',
  iconSize: [35, 45], // size of the icon in pixels
  iconAnchor: [17.5, 45], // point of the icon which will correspond to marker's location
  popupAnchor: [0, -45], // point from which the popup should open relative to the iconAnchor
  iconRetinaUrl: 'https://swehomes.com/themes/barrio_custom/img/property_details_marker.png',
  // shadowUrl: '',
});

const Map = ({ listings, formatPrice }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.invalidateSize();
    }
  }, []);

  return (
    <MapContainer
    // 29.5387293,-95.5333804
    // Dallas : 32.779167, -96.808891
    // Houston : 29.760427, -95.369804
    // San Antonio : 29.424123, -98.493629
    // El Paso : 31.75866, -106.48533
    // Austin : 30.267153, -97.743061
    // El Paso : 31.75866, -106.48533
      center={[32.779167, -96.808891]}
      zoom={7}
      style={{ height: '500px', width: '100%' }}
      whenCreated={mapInstance => { mapRef.current = mapInstance; }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {listings.map((listing) => {

        // Check if field_lat_lon is present and not empty
        if (!listing.field_lat_lon) {
          console.error('Invalid or missing field_lat_lon for listing:', listing);
          return null;
        }
        // Extract coordinates from field_lat_lon
        const matches = listing.field_lat_lon.match(/-?\d+\.\d+/g);

        if (!matches || matches.length < 2) {
          console.error('No valid coordinates found in field_lat_lon for listing:', listing);
          return null;
        }

        // Reverse the coordinates to match the format expected by Leaflet
        const [lon, lat] = matches.map(Number);
        return (
          <Marker key={listing.id} position={[lat, lon]}>
            <Popup>
              <div>
                <div className="mainImage">
                  <a href="{listing.view_node}">
                    <div
                      dangerouslySetInnerHTML={{ __html: listing.field_images }}
                    ></div>
                  </a>
                </div>

                <div className="pop-up-price property_status_price">
                  <span className="property-card__price-lease">
                    <a href="{{ url }}" >
                      {listing.field_monthly_lease ? formatPrice(listing.field_monthly_lease) : ''}
                    </a>
                  </span>
                  <span className="property-card__price-sale">
                    <a href="{{ url }}">
                      {listing.field_price_1 ? formatPrice(listing.field_price_1) : ''}
                    </a>
                  </span>
                </div>
                <a href="{{ url }}">
                 <p> {listing.field_address_address_line1}{" "}<br/>
                  {listing.field_address_locality},{" "}
                  {listing.field_address_administrative_area} {listing.field_address_postal_code}</p>
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