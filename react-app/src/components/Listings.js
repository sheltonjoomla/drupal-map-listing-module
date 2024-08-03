import React, { useState, useEffect } from "react";

const Listings = ({ listings, formatPrice, count, sortOption, setSortOption }) => {
  const [visibleListings, setVisibleListings] = useState([]);

  useEffect(() => {
    let sortedListings = [...listings];

    // Filter listings based on field_for_sale_or_lease when sorting by lease price
    if (sortOption === "leasePriceAsc" || sortOption === "leasePriceDesc") {
      // sortedListings = sortedListings.filter((listing) =>
      //   listing.field_for_sale_or_lease.toLowerCase().includes("lease")
      // );
    }
    // Filter listings based on field_for_sale_or_lease when sorting by sale price
    else if (sortOption === "salePriceAsc" || sortOption === "salePriceDesc") {
      // sortedListings = sortedListings.filter((listing) =>
      //   listing.field_for_sale_or_lease.toLowerCase().includes("sale")
      // );
    }


    // Sort by lease price ascending
    if (sortOption === "leasePriceAsc") {
      // Sort by lease price ascending
      sortedListings.sort((a, b) => {
        if (a.field_monthly_lease === null || a.field_monthly_lease === "")
          return 1;
        if (b.field_monthly_lease === null || b.field_monthly_lease === "")
          return -1;
        return a.field_monthly_lease - b.field_monthly_lease;
      });
    } else if (sortOption === "leasePriceDesc") {
      // Sort by lease price descending
      sortedListings.sort(
        (a, b) => b.field_monthly_lease - a.field_monthly_lease
      );
    } else if (sortOption === "salePriceAsc") {
      // Sort by sale price ascending
      sortedListings.sort((a, b) => {
        // if a is null or empty, put it at the end
        if (a.field_price_1 === null || a.field_price_1 === "") return 1;
        // if b is null or empty, put it at the end
        if (b.field_price_1 === null || b.field_price_1 === "") return -1;
        return a.field_price_1 - b.field_price_1;
      });
    } else if (sortOption === "salePriceDesc") {
      // Sort by sale price descending
      sortedListings.sort((a, b) => b.field_price_1 - a.field_price_1);
    }

    setVisibleListings(sortedListings.slice(0, count));
  }, [listings, count, sortOption]);

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  return (
    <div>
      <div className="sort-options">
        <label htmlFor="sort">Properties Sorted By:</label>
        <select id="sort" value={sortOption} onChange={handleSortChange}>
          <option value="">Address</option>
          <option value="leasePriceAsc">Lease Price Ascending</option>
          <option value="leasePriceDesc">Lease Price Descending</option>
          <option value="salePriceAsc">Sale Price Ascending</option>
          <option value="salePriceDesc">Sale Price Descending</option>
        </select>
      </div>
      <ul>
        {visibleListings.map((listing) => {
          const link = listing.view_node;

          return (
            <li key={listing.id} className="listing-item">
              <div className="listing-details">
                <div class="row no-gutters property-card">
                  <div class="col-sm-auto mr-sm-3 mr-0 property-image__container">
                    <div class="d-none d-sm-block property-images__desktop">
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        <div
                          className="listing-image"
                          dangerouslySetInnerHTML={{
                            __html: listing.field_images,
                          }}
                        ></div>
                      </a>

                    </div>
                    <div class="d-block d-sm-none property-images__mobile">
                      <div
                        dangerouslySetInnerHTML={{
                          __html: listing.field_images,
                        }}
                      ></div>
                    </div>
                  </div>
                  <div class="col-sm-auto flex-grow-1">
                    <div class="card-body d-flex flex-column justify-content-between">
                      <div class="property-card__top-container  px-4 px-sm-0">
                        <div class="property-card__highlights">
                          {listing.field_property_highlight && (
                            <div className="property-card__highlights__other_highlight property-card__item">
                              {listing.field_property_highlight}
                            </div>
                          )}
                        </div>
                        <span class="property-card__county hide-the-overflow">
                          <a href={link} target="_blank" rel="noopener noreferrer">
                            {listing.field_property_type} Property for{" "}
                            {listing.field_for_sale_or_lease} in{" "}
                            {listing.field_county} County
                          </a>
                        </span>
                      </div>
                      <div class="card-title property-card__address px-4 px-sm-0">
                        <a href={link} target="_blank" rel="noopener noreferrer">
                          {listing.field_address_address_line1},{" "}
                          {listing.field_address_locality}, <br />
                          {listing.field_address_administrative_area}{" "}
                          {listing.field_address_postal_code}
                        </a>
                      </div>
                      <p class="property-card__card-text px-4 px-sm-0">
                        <a href={link} target="_blank" rel="noopener noreferrer">
                          <span>
                            {listing.field_bedrooms
                              ? `${listing.field_bedrooms} Bedrooms`
                              : ""}
                          </span>
                          <span>
                            {listing.field_bathrooms
                              ? `${listing.field_bathrooms} Bathrooms`
                              : ""}
                          </span>
                          <span>
                            {listing.field_sq_ft
                              ? `${listing.field_sq_ft} sq ft`
                              : ""}
                          </span>
                          <span>
                            {listing.field_land_square_ft
                              ? `${listing.field_land_square_ft} land sq ft`
                              : ""}
                          </span>
                        </a>
                      </p>
                      <div class="property_status_price px-4 px-sm-0">
                        <div class="property-card__price">
                          <div class="property-card__price-option">
                            {listing.field_status_1}
                          </div>
                          <div class="property-card__price-option">
                            <a href={link} target="_blank" rel="noopener noreferrer">
                              Pricing Options{" "}
                              <span class="property-card__chevron">
                                &rsaquo;
                              </span>
                            </a>
                          </div>
                        </div>
                        <div class="property-card__price">
                          <div class="property-card__price-sale">
                            {listing.field_price_1
                              ? formatPrice(listing.field_price_1)
                              : ""}
                          </div>
                          <div class="property-card__price-lease">
                            {listing.field_monthly_lease &&
                            !isNaN(listing.field_monthly_lease)
                              ? `${formatPrice(
                                  listing.field_monthly_lease
                                )}/month`
                              : ""}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Listings;
