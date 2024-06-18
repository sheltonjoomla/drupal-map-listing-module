import React, { useState, useEffect, Suspense } from 'react';
import Map from './components/Map';
import Listings from './components/Listings';
import FilterBar from './components/FilterBar';

const App = () => {
  const [listings, setListings] = useState([]);
  const [filteredListings, setFilteredListings] = useState([]);
  const [count, setCount] = useState(0);
  const [filters, setFilters] = useState({
    propertyType: '',
    transactionType: '',
    search: '',
    bath: '',
    bedroom: '',
    minSqft: '',
    maxSqft: '',
    minPrice: '',
    maxPrice: ''
  });


  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await fetch('/api/listings');
        console.log('fetching listings');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setListings(data);
      } catch (error) {
        console.error('Failed to fetch listings:', error);
      }
    };

    fetchListings();
  }, []);

  useEffect(() => {
    const applyFilters = () => {
      let filtered = listings;

      if (filters.propertyType) {
        filtered = filtered.filter(listing => listing.field_property_type === filters.propertyType);
      }
      if (filters.transactionType) {
        filtered = filtered.filter(listing => listing.field_for_sale_or_lease === filters.transactionType);
      }
      if (filters.search) {
        filtered = filtered.filter(listing => listing.title.toLowerCase().includes(filters.search.toLowerCase()));
      }
      if (filters.bath) {
        filtered = filtered.filter(listing => listing.field_bathrooms === filters.bath);
      }
      if (filters.bedroom) {
        filtered = filtered.filter(listing => listing.field_bedrooms === filters.bedroom);
      }
      if (filters.minSqft) {
        filtered = filtered.filter(listing => {
          return listing.field_sq_ft >= parseInt(filters.minSqft);
        });
      }
      if (filters.maxSqft) {
        filtered = filtered.filter(listing => {
          return listing.field_sq_ft <= parseInt(filters.maxSqft);
        });
      }
      if (filters.minPrice) {
        filtered = filtered.filter(listing => listing.field_price_1 >= parseInt(filters.minPrice));
      }
      if (filters.maxPrice) {
        filtered = filtered.filter(listing => listing.field_price_1 <= parseInt(filters.maxPrice));
      }
      if (filters.field_property_highlight) {
        filtered = filtered.filter(listing => listing.field_property_highlight === filters.field_property_highlight);
      }

      setFilteredListings(filtered);
      setCount(filtered.length);
      console.log(setCount);
    };

    applyFilters();
  }, [filters, listings]);

  const handleFilterChange = (name, value) => {
    setFilters({
      ...filters,
      [name]: value
    });
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
      minSqft: '',
      maxSqft: '',
      minPrice: '',
      maxPrice: '',
      field_property_highlight: '',
      field_for_sale_or_lease: ''

    });
  };

  return (
    <div>
      <FilterBar filters={filters} onFilterChange={handleFilterChange} onReset={handleReset} count={count} />
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ flex: 2 }} className='listings-col'>
          <Suspense fallback={<div>Loading...</div>}>
            <Listings listings={filteredListings} />
          </Suspense>
        </div>
        <div style={{ flex: 3 }} className='map-col'>
          <Suspense fallback={<div>Loading...</div>}>
            <Map listings={filteredListings} />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default App;