import React, { useState, useEffect, Suspense } from 'react';
import Map from './components/Map';
import Listings from './components/Listings';
import FilterBar from './components/FilterBar';
import AdvancedSearch from './components/AdvancedSearch';


const App = () => {
  // State Variables
  const [loading, setLoading] = useState(true); // Add loading state
  const [listings, setListings] = useState([]);
  const [filteredListings, setFilteredListings] = useState([]);
  const [isAdvancedSearchVisible, setIsAdvancedSearchVisible] = useState(false); // Add state for visibility
  const [count, setCount] = useState(0);
  const [sortOption, setSortOption] = useState(""); // state for listings sorting
  const [filters, setFilters] = useState({
    propertyType: '',
    transactionType: '',
    search: '',
    bath: '',
    bedroom: '',
    minSqFt: '',
    maxSqFt: '',
    minPrice: '',
    maxPrice: '',
    minLease: '',
    maxLease: '',
    field_property_highlight: '',
    field_for_sale_or_lease: '',
    field_address_address_line1: '',
    field_address_locality: '',
    field_address_administrative_area: '',
    field_address_postal_code: '',
    field_address_country: '',
    field_address_address_line2: '',
    field_school_district_taxonomy: '',
    field_subdivisions_taxonomy: '',
    field_market_area: '',
    field_in_hoa: '',
    field_pool:'',
    field_stories:'',
    field_cad_id_number:'',
    field_acres:'',
    field_down_1:'',
    field_garage:'',
    field_garage_type:'',
    field_lot:'',
    field_property_style:'',
    field_monthly_lease:'',
    field_status_1:'',
    minAcres:'',
    maxAcres:'',
    minDown:'',
    maxDown:'',
    sortOption:'',
    setSortOption:'',
  });


// Format Price $1,099,999.00
const formatPrice = (price) => {
  const formattedPrice = Number(price).toLocaleString('en-US');
  return "$" + formattedPrice;
};

// Fetch Listings ---------------------------- ||||||||
useEffect(() => {
  const fetchListings = async () => {

    try {
      const response = await fetch('/api/listings');

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setListings(data);
    } catch (error) {
      console.error('Failed to fetch listings:', error);
    } finally {
      setLoading(false); // Set loading to false after fetching
    }
  };

  fetchListings();
}, []);

  // Filter Listings Logic
  // Add New Filters to the filters object 
  useEffect(() => {
    const applyFilters = () => {
      try {
        let filtered = listings;

        // Use for debugging state of filters
        // console.log("Current filters:", filters);
        const filterMapping = {
          propertyType: (listing, value) => listing.field_property_type === value,
          transactionType: (listing, value) => listing.field_for_sale_or_lease.includes(value),
          field_garage_type: (listing, value) => listing.field_garage_type.includes(value),
          search: (listing, value) => listing.title.toLowerCase().includes(value.toLowerCase()) || listing.field_address_administrative_area.toLowerCase().includes(value.toLowerCase()),
          bath: (listing, value) => listing.field_bathrooms === value,
          bedroom: (listing, value) => listing.field_bedrooms === value,
          // Min Max Filtering
          minSqFt: (listing, value) => listing.field_sq_ft !== null && listing.field_sq_ft >= parseInt(value),
          maxSqFt: (listing, value) => listing.field_sq_ft !== null && listing.field_sq_ft <= parseInt(value),
          minPrice: (listing, value) => listing.field_price_1 !== null && listing.field_price_1 >= parseInt(value),
          maxPrice: (listing, value) => listing.field_price_1 !== null && listing.field_price_1 <= parseInt(value),
          minLease: (listing, value) => listing.field_monthly_lease !== null && listing.field_monthly_lease >= parseInt(value),
          maxLease: (listing, value) => listing.field_monthly_lease !== null && listing.field_monthly_lease <= parseInt(value),
          minLot: (listing, value) => listing.field_lot !== null && listing.field_lot >= parseInt(value),
          maxLot: (listing, value) => listing.field_lot !== null && listing.field_lot <= parseInt(value),
          minAcres: (listing, value) => listing.field_acres !== null && listing.field_acres >= parseInt(value),
          maxAcres: (listing, value) => listing.field_acres !== null && listing.field_acres <= parseInt(value),
          minDown: (listing, value) => listing.field_down_1 !== null && listing.field_down_1 >= parseInt(value),
          maxDown: (listing, value) => listing.field_down_1 !== null && listing.field_down_1 <= parseInt(value),
          field_property_highlight: (listing, value) => listing.field_property_highlight === value,
          field_school_district_taxonomy: (listing, value) => listing.field_school_district_taxonomy === value,
          field_address_administrative_area: (listing, value) => listing.field_address_administrative_area === value,
          field_subdivisions_taxonomy: (listing, value) => listing.field_subdivisions_taxonomy === value,
          field_market_area: (listing, value) => listing.field_market_area === value,
          field_county_taxonomy: (listing, value) => listing.field_county_taxonomy === value,
          field_address_locality: (listing, value) => listing.field_address_locality === value,
          field_cad_id_number: (listing, value) => listing.field_cad_id_number.toLowerCase().includes(value.toLowerCase()),
          field_acres: (listing, value) => listing.field_acres === value,
          field_pool: (listing, value) => listing.field_pool === value,
          field_stories: (listing, value) => listing.field_stories === value,
          field_in_hoa: (listing, value) => listing.field_in_hoa === value,
          field_property_style: (listing, value) => listing.field_property_style === value,
          field_status_1: (listing, value) => listing.field_status_1 === value,
          field_garage: (listing, value) => listing.field_garage === value,
        };

        Object.keys(filters).forEach(key => {
          if (filters[key]) {
            filtered = filtered.filter(listing => filterMapping[key](listing, filters[key]));
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

    // Update the transactionType filter based on the sortOption
    useEffect(() => {
      if (sortOption === "leasePriceAsc" || sortOption === "leasePriceDesc") {
        setFilters(prevFilters => ({
          ...prevFilters,
          transactionType: "Lease"
        }));
      } else if (sortOption === "salePriceAsc" || sortOption === "salePriceDesc") {
        setFilters(prevFilters => ({
          ...prevFilters,
          transactionType: "Sale"
        }));
      } else {
        setFilters(prevFilters => ({
          ...prevFilters,
          transactionType: ""
        }));
      }
    }, [sortOption]);

// Handle Filter Change
const handleFilterChange = (name, value) => {
  if (name.startsWith('max') && !filters[`min${name.slice(3)}`]) {
    setFilters({
      ...filters,
      [name]: value,
      [`min${name.slice(3)}`]: '1',
    });
  } else {
    setFilters({
      ...filters,
      [name]: value,
    });
  }
};

  // Reset the filters
  // Make to add new filters to the filters object
  const handleReset = () => {
    setFilters({
      propertyType: '',
      transactionType: '',
      search: '',
      bath: '',
      bedroom: '',
      minSqFt: '',
      maxSqFt: '',
      minPrice: '',
      maxPrice: '',
      minLease: '',
      maxLease: '',
      field_property_highlight: '',
      field_for_sale_or_lease: '',
      field_school_district_taxonomy: '',
      field_address_administrative_area: '',
      field_subdivisions_taxonomy: '',
      field_market_area: '',
      field_cad_id_number: '',
      field_acres: '',
      field_pool: '',
      field_stories: '',
      field_in_hoa: '',
      field_address_locality: '',
      field_status_1: '',
      field_garage_type: '',
      field_garage: '',
      field_property_style: '',
      field_monthly_lease: '',
      field_down_1: '',
      field_county_taxonomy: '',
      minLot: '',
      maxLot: '',
      minAcres: '',
      maxAcres: '',
      minDown: '',
      maxDown: '',

    });
    setSortOption("");
  };

  const toggleAdvancedSearch = () => {
    setIsAdvancedSearchVisible(!isAdvancedSearchVisible);
  };

  return (
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


      {/*  Load Listings and Map */}
      {loading ? (
        <div>Loading...</div> 
      ) : (
        <div className='listing-map-container'>
          <div className='listings-col'>
            <Suspense fallback={<div>Loading...</div>}>
              <Listings listings={filteredListings} 
              formatPrice={formatPrice} 
              count={count} 
              sortOption={sortOption} 
              setSortOption={setSortOption}/>
            </Suspense>
          </div>
          <div className='map-col'>
            <Suspense fallback={<div>Loading...</div>}>
              <Map listings={filteredListings} formatPrice={formatPrice} />
            </Suspense>
          </div>
        </div>
      )}


    {/*  Advanced Search Container */}
    <div className={`advanced-search-container ${isAdvancedSearchVisible ? 'visible' : ''}`}>
      <AdvancedSearch 
      filters={filters} 
      onFilterChange={handleFilterChange} 
      onReset={handleReset} 
      toggleAdvancedSearch={toggleAdvancedSearch}
      isAdvancedSearchVisible={isAdvancedSearchVisible}
      />
    </div>
    </div>
  );
};

export default App;