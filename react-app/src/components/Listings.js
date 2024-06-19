import React, { useState, useEffect } from 'react';

const Listings = ({ listings, formatPrice }) => {
  const [visibleListings, setVisibleListings] = useState([]);
  const [loadMore, setLoadMore] = useState(true);
  const [count, setCount] = useState(10);
  

  useEffect(() => {
    setVisibleListings(listings.slice(0, count));
  }, [listings, count]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
      setLoadMore(true);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (loadMore && count < listings.length) {
      setCount(count + 10);
      setLoadMore(false);
    }
  }, [loadMore, count, listings.length]);



  return visibleListings.map((listing) => {
    // Create property link ex. /property/0-14th-st
    const link = listing.view_node;

    return (
      <li key={listing.id} className="listing-item">

        <div className="listing-details">

        
          <div class="row no-gutters property-card">
            <div class="col-sm-auto mr-sm-3 mr-0 property-image__container">
              <div class="d-none d-sm-block property-images__desktop">
              <div
          className="listing-image"
          dangerouslySetInnerHTML={{ __html: listing.field_images }}
        ></div>
              </div>
              <div class="d-block d-sm-none property-images__mobile">
                {listing.field_images_1}
              </div>
            </div>
            <div class="col-sm-auto flex-grow-1">
              <div class="card-body d-flex flex-column justify-content-between">
                <div class="property-card__top-container  px-4 px-sm-0">
                  <div class="property-card__highlights">
                    <div className='property-card__highlights__other_highlight property-card__item'>{listing.field_property_highlight}</div>
                  </div>
                  <span class="property-card__county">
                    <a href={link}>
                      {listing.field_property_type} Property for{" "}
                      {listing.field_for_sale_or_lease} in {listing.field_county} County
                    </a>
                  </span>
                </div>
                <div class="card-title property-card__address px-4 px-sm-0">
                  <a href={link}>
                    {listing.field_address_address_line1}, {listing.field_address_locality},{" "}<br/>
                    {listing.field_address_administrative_area} {listing.field_address_postal_code}
                  </a>
                </div>
                <p class="property-card__card-text px-4 px-sm-0">
                  <a href={link}>
                    <span>{listing.field_bedrooms ? `${listing.field_bedrooms} Bedrooms` : ""}</span>
                    <span>{listing.field_bathrooms ? `${listing.field_bathrooms} Bathrooms` : ""}</span>
                    <span>{listing.field_sq_ft ? `${listing.field_sq_ft} sq ft` : ""}</span>
                    <span>{listing.field_land_square_ft ? `${listing.field_land_square_ft} land sq ft` : ""}</span>
                  </a>
                </p>
                <div class="property_status_price">
                  <div class="property-card__price">
                    <div class="property-card__price-option">
                      {listing.field_status_1 }
                    </div>
                    <div class="property-card__price-option">
                      <a href={link}>
                        Pricing Options{" "}
                        <span class="property-card__chevron">&rsaquo;</span>
                      </a>
                    </div>
                  </div>
                  <div class="property-card__price">
                    <div class="property-card__price-sale">
                    {listing.field_price_1 ? formatPrice(listing.field_price_1) : ""}
                    </div>
                    <div class="property-card__price-lease">
                    {listing.field_monthly_lease ? formatPrice(listing.field_monthly_lease) : ""}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    );
  });




};

export default Listings;