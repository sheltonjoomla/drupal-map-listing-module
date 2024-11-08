import React, { useState, useEffect, useRef, Suspense } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import Map from "./components/Map";
import FilterBar from "./components/FilterBar";
import Listings from "./components/Listings";
import AdvancedSearch from "./components/AdvancedSearch";

const App = () => {
  const navigate = useNavigate(); // Get the navigate function
  const location = useLocation(); // Get the current location
  const prevSortOption = useRef(""); // Create a ref to store the previous sortOption

  // Initialize filters from URL parameters
  const initializeFilters = () => {
    const params = new URLSearchParams(location.search);
    const initialFilters = {
      propertyType: "",
      transactionTypes: params.get("transactionTypes") || "",
      search: "",
      bath: "",
      bedroom: "",
      minSqFt: "",
      maxSqFt: "",
      minPrice: "",
      maxPrice: "",
      minLease: "",
      maxLease: "",
      field_property_highlight: "",
      field_for_sale_or_lease: "",
      field_address_address_line1: "",
      field_address_locality: "",
      field_address_administrative_area: "",
      field_address_postal_code: "",
      field_address_country: "",
      field_address_address_line2: "",
      field_school_district_taxonomy: "",
      field_subdivisions_taxonomy: "",
      field_market_area: "",
      field_in_hoa: "",
      field_pool: "",
      field_stories: "",
      field_cad_id_number: "",
      field_acres: "",
      field_down_1: "",
      field_garage: "",
      field_garage_type: "",
      field_lot: "",
      field_property_style: "",
      field_monthly_lease: "",
      field_status_1: "",
      minAcres: "",
      maxAcres: "",
      minDown: "",
      maxDown: "",
      field_county_taxonomy: "",
    };

    params.forEach((value, key) => {
      if (key in initialFilters) {
        initialFilters[key] = value;
      }
    });

    return initialFilters;
  };

  const [filters, setFilters] = useState(initializeFilters);
  const [loading, setLoading] = useState(true);
  const [listings, setListings] = useState([]);
  const [filteredListings, setFilteredListings] = useState([]);
  const [isAdvancedSearchVisible, setIsAdvancedSearchVisible] = useState(false);
  const [count, setCount] = useState(0);
  const [sortOption, setSortOption] = useState("");

  // Set filters from URL query parameters on mount
  useEffect(() => {
    // Get URL query parameters
    const params = new URLSearchParams(location.search);
    // Initialize filters
    const newFilters = initializeFilters();
    // Set filters based on URL query parameters
    setFilters(newFilters);
    if (params.get("sortOption")) {
      // Set sortOption based on URL query parameters
      setSortOption(params.get("sortOption"));
    }
  }, [location.search]); // Run on location.search change

  // Update transactionTypes based on sortOption
  // From Listing.js
  useEffect(() => {
    if (prevSortOption.current !== sortOption) {
      // prevSortOption not equal to sortOption

      // if (sortOption === "leasePriceAsc" || sortOption === "leasePriceDesc") {
      //   setFilters((prevFilters) => ({
      //     ...prevFilters,
      //     transactionTypes: "Lease",
      //   }));
      // } else if (
      //   sortOption === "salePriceAsc" ||
      //   sortOption === "salePriceDesc"
      // ) {
      //   setFilters((prevFilters) => ({
      //     ...prevFilters,
      //     transactionTypes: "Sale",
      //   }));
      // }
      prevSortOption.current = sortOption;
    }
  }, [sortOption]);

  // Update URL when filters change
  useEffect(() => {
    const params = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (value) {
        params.set(key, value);
      }
    });
    if (sortOption) {
      params.set("sortOption", sortOption);
      // Check if sortOption is leasePriceAsc or leasePriceDesc and set transactionTypes to Lease
      if (sortOption === "leasePriceAsc" || sortOption === "leasePriceDesc") {
        params.set("transactionTypes", "Lease");
      }
      // Check if sortOption is salePriceAsc or salePriceDesc and set transactionTypes to Sale
      if (sortOption === "salePriceAsc" || sortOption === "salePriceDesc") {
        params.set("transactionTypes", "Sale");
      }
    }

    // Only navigate if the URL parameters have changed
    const currentParams = new URLSearchParams(location.search);
    if (currentParams.toString() !== params.toString()) {
      // Console Para String
      // Update Browser Url
      navigate(`?${params.toString()}`, { replace: false });
    }
  }, [filters, sortOption, navigate, location.search]);

  // Fetch Listings
  useEffect(() => {
    const fetchListings = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/listings");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setListings(data);
        setCount(data.length); // Set the count based on fetched data
      } catch (error) {
        console.error("Failed to fetch listings:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchListings();
  }, []);

  // Filter Listings Logic
  useEffect(() => {
    const applyFilters = () => {
      try {
        let filtered = listings;
        const filterMapping = {
          propertyType: (listing, value) =>
            listing.field_property_type === value,
          transactionTypes: (listing, value) =>
            listing.field_for_sale_or_lease.includes(value),
          field_garage_type: (listing, value) =>
            listing.field_garage_type.includes(value),
          search: (listing, value) =>
            listing.title.toLowerCase().includes(value.toLowerCase()) ||
            listing.field_address_administrative_area
              .toLowerCase()
              .includes(value.toLowerCase()),
          bath: (listing, value) => listing.field_bathrooms === value,
          bedroom: (listing, value) => listing.field_bedrooms === value,
          // Min Max Filtering
          minSqFt: (listing, value) =>
            listing.field_sq_ft !== null &&
            listing.field_sq_ft >= parseInt(value),
          maxSqFt: (listing, value) =>
            listing.field_sq_ft !== null &&
            listing.field_sq_ft <= parseInt(value),
          minPrice: (listing, value) =>
            listing.field_price_1 !== null &&
            listing.field_price_1 >= parseInt(value),
          maxPrice: (listing, value) =>
            listing.field_price_1 !== null &&
            listing.field_price_1 <= parseInt(value),
          minLease: (listing, value) =>
            listing.field_monthly_lease !== null &&
            listing.field_monthly_lease >= parseInt(value),
          maxLease: (listing, value) =>
            listing.field_monthly_lease !== null &&
            listing.field_monthly_lease <= parseInt(value),
          minLot: (listing, value) =>
            listing.field_lot !== null && listing.field_lot >= parseInt(value),
          maxLot: (listing, value) =>
            listing.field_lot !== null && listing.field_lot <= parseInt(value),
          minAcres: (listing, value) =>
            listing.field_acres !== null &&
            listing.field_acres >= parseInt(value),
          maxAcres: (listing, value) =>
            listing.field_acres !== null &&
            listing.field_acres <= parseInt(value),
          minDown: (listing, value) =>
            listing.field_down_1 !== null &&
            listing.field_down_1 >= parseInt(value),
          maxDown: (listing, value) =>
            listing.field_down_1 !== null &&
            listing.field_down_1 <= parseInt(value),
          field_property_highlight: (listing, value) =>
            listing.field_property_highlight === value,
          field_school_district_taxonomy: (listing, value) =>
            listing.field_school_district_taxonomy === value,
          field_address_administrative_area: (listing, value) =>
            listing.field_address_administrative_area === value,
          field_subdivisions_taxonomy: (listing, value) =>
            listing.field_subdivisions_taxonomy === value,
          field_market_area: (listing, value) =>
            listing.field_market_area === value,
          field_county_taxonomy: (listing, value) =>
            listing.field_county_taxonomy === value,
          field_address_locality: (listing, value) =>
            listing.field_address_locality === value,
          field_cad_id_number: (listing, value) =>
            listing.field_cad_id_number
              .toLowerCase()
              .includes(value.toLowerCase()),
          field_acres: (listing, value) => listing.field_acres === value,
          field_pool: (listing, value) => listing.field_pool === value,
          field_stories: (listing, value) => listing.field_stories === value,
          field_in_hoa: (listing, value) => listing.field_in_hoa === value,
          field_property_style: (listing, value) =>
            listing.field_property_style === value,
          field_status_1: (listing, value) => listing.field_status_1 === value,
          field_garage: (listing, value) => listing.field_garage === value,
          field_down_1: (listing, value) => listing.field_down_1 === value,
        };

        Object.entries(filters).forEach(([key, value]) => {
          if (value && filterMapping[key]) {
            filtered = filtered.filter((listing) =>
              filterMapping[key](listing, value)
            );
          }
        });

        setFilteredListings(filtered);
        setCount(filtered.length);
      } catch (error) {
        console.error("Error applying filters:", error);
      }
    };
    applyFilters();
  }, [filters, listings]);

  const handleFilterChange = (name, value) => {
    setFilters((prevFilters) => {
      const newFilters = { ...prevFilters, [name]: value };
      if (name.startsWith("max") && !prevFilters[`min${name.slice(3)}`]) {
        newFilters[`min${name.slice(3)}`] = "1";
      }
      return newFilters;
    });
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);
  };

  const handleReset = () => {
    setFilters(
      Object.fromEntries(Object.keys(filters).map((key) => [key, ""]))
    );
    setSortOption("");
  };

  const toggleAdvancedSearch = () => {
    setIsAdvancedSearchVisible(!isAdvancedSearchVisible);
  };

  return (
    <ErrorBoundary>
      <div>
        <div className="listing-page-cover"></div>
        <FilterBar
          filters={filters}
          onFilterChange={handleFilterChange}
          onReset={handleReset}
          count={count}
          toggleAdvancedSearch={toggleAdvancedSearch}
          isAdvancedSearchVisible={isAdvancedSearchVisible}
        />
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className="listing-map-container">
            <div className="listings-col">
              <Suspense fallback={<div>Loading...</div>}>
                <Listings
                  listings={filteredListings}
                  formatPrice={formatPrice}
                  count={count}
                  sortOption={sortOption}
                  setSortOption={setSortOption}
                  filters={filters} // Pass filters as props
                />
              </Suspense>
            </div>
            <div className="map-col">
              <Suspense fallback={<div>Loading...</div>}>
                <Map
                  listings={filteredListings}
                  formatPrice={formatPrice}
                  filters={filters}
                />
              </Suspense>
            </div>
          </div>
        )}
        <div
          className={`advanced-search-container ${
            isAdvancedSearchVisible ? "visible" : ""
          }`}
        >
          <AdvancedSearch
            filters={filters}
            onFilterChange={handleFilterChange}
            onReset={handleReset}
            toggleAdvancedSearch={toggleAdvancedSearch}
            isAdvancedSearchVisible={isAdvancedSearchVisible}
          />
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default App;
