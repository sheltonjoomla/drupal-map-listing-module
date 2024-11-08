import React, { useState, useEffect } from "react";

const Listings = ({
  listings,
  formatPrice,
  count,
  sortOption,
  setSortOption,
  filters,
}) => {
  const [visibleListings, setVisibleListings] = useState([]);

  const filterListings = (listings, transactionTypes) => {
    let filteredListings = [...listings]; // Copy listings
    // Filter listings based on transactionTypes
    if (transactionTypes) {
      // Filter listings based on transactionTypes
      filteredListings = filteredListings.filter(
        (listing) =>
          listing.field_for_sale_or_lease // Get the listing field_for_sale_or_lease
            .toLowerCase() // Convert to lowercase
            .includes(transactionTypes.toLowerCase()) // Check if transactionTypes is included  in the listing field_for_sale_or_lease
      );
    }

    return filteredListings; // Return filtered listings
  };

  useEffect(() => {
    // Filter and sort listings
    const sortedListings = filterListings(listings, filters.transactionTypes);
    if (sortOption) {
      // Sort listings based on sortOption
      sortedListings.sort((a, b) => {
        const aValue = sortOption.includes("Price")
          ? a.field_price_1 || a.field_monthly_lease
          : a.field_address_address_line1;
        const bValue = sortOption.includes("Price")
          ? b.field_price_1 || b.field_monthly_lease
          : b.field_address_address_line1;

        return sortOption.endsWith("Asc") ? aValue - bValue : bValue - aValue;
      });
    }

    setVisibleListings(sortedListings.slice(0, count));
  }, [listings, count, sortOption, filters.transactionTypes]);

  const handleSortChange = (e) => {
    // Set sortOption state to the selected value from the dropdown
    setSortOption(e.target.value); // Set sortOption state to the selected
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
                <div className="row no-gutters property-card">
                  <div className="col-sm-auto mr-sm-3 mr-0 property-image__container">
                    <div className="d-none d-sm-block property-images__desktop">
                      <a href={link} target="_blank" rel="noopener noreferrer">
                        <div
                          className="listing-image"
                          dangerouslySetInnerHTML={{
                            __html: listing.field_images,
                          }}
                        ></div>
                      </a>
                    </div>
                    <div className="d-block d-sm-none property-images__mobile">
                      <div
                        dangerouslySetInnerHTML={{
                          __html: listing.field_images,
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="col-sm-auto flex-grow-1">
                    <div className="card-body d-flex flex-column justify-content-between">
                      <div className="property-card__top-container  px-4 px-sm-0">
                        <div className="property-card__highlights">
                          {listing.field_property_highlight && (
                            <div className="property-card__highlights__other_highlight property-card__item">
                              {listing.field_property_highlight}
                            </div>
                          )}
                        </div>
                        <span className="property-card__county hide-the-overflow">
                          <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {listing.field_property_type} Property for{" "}
                            {listing.field_for_sale_or_lease} in{" "}
                            {listing.field_county} County
                          </a>
                        </span>
                      </div>
                      <div className="card-title property-card__address px-4 px-sm-0">
                        <a
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {listing.field_address_address_line1},{" "}
                          {listing.field_address_locality}, <br />
                          {listing.field_address_administrative_area}{" "}
                          {listing.field_address_postal_code}
                        </a>
                      </div>
                      <p className="property-card__card-text px-4 px-sm-0">
                        <a
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
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
                      <div className="property_status_price px-4 px-sm-0">
                        <div className="property-card__price">
                          <div className="property-card__price-option">
                            {listing.field_status_1}
                          </div>
                          <div className="property-card__price-option">
                            <a
                              href={link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Pricing Options{" "}
                              <span className="property-card__chevron">
                                &rsaquo;
                              </span>
                            </a>
                          </div>
                        </div>
                        <div className="property-card__price">
                          <div className="property-card__price-sale">
                            {listing.field_price_1
                              ? formatPrice(listing.field_price_1)
                              : ""}
                          </div>
                          <div className="property-card__price-lease">
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
