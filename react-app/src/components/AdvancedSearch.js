import React, { useState, useEffect } from "react";
import { filterConfig } from "../config/filterConfig";
import SelectField from "./SelectField";
import AdvancedButton from "./AdvancedButton";

const AdvancedSearch = ({
  filters,
  onFilterChange,
  onReset,
  toggleAdvancedSearch,
  isAdvancedSearchVisible,
}) => {
  // const [isAdvancedSearchVisible, setIsAdvancedSearchVisible] = useState(false);
  const [districts, setDistricts] = useState([]);
  const [counties, setCounties] = useState([]);
  const [marketAreas, setMarketAreas] = useState([]);
  const [subdivisions, setSubdivisions] = useState([]);

  // Set to true to show labels for select fields
  const showLabelSettings = true;
  const allFirstOptionSettings = "- Any -";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          districtsResponse,
          countiesResponse,
          marketAreasResponse,
          subdivisionsResponse,
        ] = await Promise.all([
          fetch("/api/taxonomy/districts"),
          fetch("/api/taxonomy/county"),
          fetch("/api/taxonomy/market_area"),
          fetch("/api/taxonomy/subdivision"),
        ]);

        const districtsData = await districtsResponse.json();
        const countiesData = await countiesResponse.json();
        const marketAreasData = await marketAreasResponse.json();
        const subdivisionsData = await subdivisionsResponse.json();

        // Sort the data alphabetically by name
        const sortedDistricts = districtsData.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        const sortedCounties = countiesData.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        const sortedMarketAreas = marketAreasData.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        const sortedSubdivisions = subdivisionsData.sort((a, b) =>
          a.name.localeCompare(b.name)
        );

        setDistricts(sortedDistricts);
        setCounties(sortedCounties);
        setMarketAreas(sortedMarketAreas);
        setSubdivisions(sortedSubdivisions);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(`Filter change: ${name} = ${value}`);
    onFilterChange(name, value);
  };


  // Render a select field for the school district - Taxonomy /api/taxonomy/districts
  //TODO Revert? WHY
  const renderDistrictSelectField = () => (
    <SelectField
      label="School District"
      name="field_school_district_taxonomy"
      value={filters.field_school_district_taxonomy}
      options={districts.map((district) => ({
        value: district.name,
        label: district.name,
      }))}
      onChange={handleChange}
      showLabel={showLabelSettings}
      firstOption={allFirstOptionSettings}
      customClass="col-md-4"
    />
  );

  // Render a select field for the county - Taxonomy /api/taxonomy/county
  const renderCountySelectField = () => (
    <SelectField
      label="County"
      name="field_county_taxonomy"
      value={filters.field_county_taxonomy}
      options={counties.map((county) => ({
        value: county.name,
        label: county.name,
      }))}
      onChange={handleChange}
      showLabel={showLabelSettings}
      firstOption={allFirstOptionSettings}
      customClass="col-md-4"
    />
  );

  // Render a select field for the market area
  const renderMarketAreaSelectField = () => (
    <SelectField
      label="Market Area"
      name="field_market_area"
      value={filters.field_county_taxonomy}
      options={marketAreas.map((marketArea) => ({
        value: marketArea.name,
        label: marketArea.name,
      }))}
      onChange={handleChange}
      showLabel={showLabelSettings}
      firstOption={allFirstOptionSettings}
      customClass="col-md-4"
    />
  );

  // Render a select field for the subdivision - Taxonomy /api/taxonomy/subdivision
  const renderSubdivisionSelectField = () => (
    <SelectField
      label="Subdivision"
      name="field_subdivisions_taxonomy"
      value={filters.field_subdivisions_taxonomy}
      options={subdivisions.map((subdivision) => ({
        value: subdivision.name,
        label: subdivision.name,
      }))}
      onChange={handleChange}
      showLabel={showLabelSettings}
      firstOption={allFirstOptionSettings}
      customClass="col-md-4"
    />
  );

  // Render the advanced search form
  return (
    <div className="advanced-search">
      <div className="advanced-search-header">
        <div className="row">
          <div className="advanced-search-header---title col-12 col-md-6">
            <h2>Search SWE Homes Inventory</h2>
          </div>
          <div className="advanced-search-header---buttons col-12 col-md-6">
          <button onClick={onReset} className="filter-bar-button">Reset</button>

        <AdvancedButton
          onClick={toggleAdvancedSearch}
          label={isAdvancedSearchVisible ? "Close" : "Advanced Search"}
          customButtonClass="filter-bar-button"
        />
     
      </div>
      </div>
      </div>
      <div className="advanced-search-filters">
        {/* Full Text Search | Property Type | For Sale Or Lease | Property Highlight | Status */}
        <div className="filter-row form-row">
          <div className="form-group col-md-12">
            <label>Full Text Search</label>
            <input
              type="text"
              name="search"
              placeholder="Search for properties, suburbs, or keywords..."
              value={filters.search}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          {/* Property Type */}
          <SelectField
            label="Property Type"
            name="propertyType"
            value={filters.propertyType}
            options={filterConfig.propertyType.options}
            onChange={handleChange}
            showLabel={showLabelSettings}
            firstOption={allFirstOptionSettings}
            customClass="col-md-4"
          />

          {/* For Sale Or Lease */}
          <SelectField
            label="For Sale Or Lease"
            name="transactionTypes"
            value={filters.transactionTypes}
            options={filterConfig.transactionTypes.options}
            onChange={handleChange}
            showLabel={showLabelSettings}
            firstOption={allFirstOptionSettings}
            customClass="col-md-4"
          />

          {/* Property Highlight */}
          <SelectField
            label="Property Highlight"
            name="field_property_highlight"
            value={filters.field_property_highlight}
            options={filterConfig.field_property_highlight.options}
            onChange={handleChange}
            showLabel={showLabelSettings}
            firstOption={allFirstOptionSettings}
            customClass="col-md-4"
          />
          {/* Status  */}
          {/* <SelectField
            label="Status"
            name="field_status_1"
            value={filters.field_status_1}
            options={filterConfig.field_status_1.options}
            onChange={handleChange}
            showLabel={showLabelSettings}
            firstOption={allFirstOptionSettings}
            customClass="col-md-4"
          /> */}
        </div>

        {/* Property Style -| Bedrooms -| Bathrooms -| Garage Type -| Garage | Stories -| Pool- | In HOA- */}
        <div className="filter-row form-row">
        <SelectField
            label="HOA"
            name="field_in_hoa"
            value={filters.field_in_hoa}
            options={filterConfig.field_in_hoa.options}
            onChange={handleChange}
            showLabel={showLabelSettings}
            firstOption={allFirstOptionSettings}
            customClass="col-12 col-md-3"
          />
          <SelectField
            label="Property Style"
            name="field_property_style"
            value={filters.field_property_style}
            options={filterConfig.field_property_style.options}
            onChange={handleChange}
            showLabel={showLabelSettings}
            firstOption={allFirstOptionSettings}
            customClass="col-12 col-md-3"
          />
          <SelectField
            label="Bedrooms"
            name="bedroom"
            value={filters.bedroom}
            options={filterConfig.bedroom.options}
            onChange={handleChange}
            showLabel={showLabelSettings}
            firstOption={allFirstOptionSettings}
            customClass="col-6 col-md-3"
          />

          <SelectField
            label="Bathrooms"
            name="bath"
            value={filters.bath}
            options={filterConfig.bath.options}
            onChange={handleChange}
            showLabel={showLabelSettings}
            firstOption={allFirstOptionSettings}
            customClass="col-6 col-md-3"
          />


          {/* Garage Type */}
          <SelectField
            label="Garage Type"
            name="field_garage_type"
            value={filters.field_garage_type}
            options={filterConfig.field_garage_type.options}
            onChange={handleChange}
            showLabel={showLabelSettings}
            firstOption={allFirstOptionSettings}
            customClass="col-6 col-md-3"
          />
          {/* Garage */}
          <SelectField
            label="Garage #"
            name="field_garage"
            value={filters.field_garage}
            options={filterConfig.field_garage.options}
            onChange={handleChange}
            showLabel={showLabelSettings}
            firstOption={allFirstOptionSettings}
            customClass="col-6 col-md-3"
          />

          <SelectField
            label="Stories"
            name="field_stories"
            value={filters.field_stories}
            options={filterConfig.field_stories.options}
            onChange={handleChange}
            showLabel={showLabelSettings}
            firstOption={allFirstOptionSettings}
            customClass="col-6 col-md-3"
          />

          <SelectField
            label="Pool"
            name="field_pool"
            value={filters.field_pool}
            options={filterConfig.field_pool.options}
            onChange={handleChange}
            showLabel={showLabelSettings}
            firstOption={allFirstOptionSettings}
            customClass="col-6 col-md-3"
          />


        </div>

        {/* Acres- | Property q.ft.- | Lot sq.ft. */}
        <div className="filter-row ">
          {/* field_sq_ft */}
          <div className="form-row">
          <SelectField
            label="Sq. ft. Min"
            name="minSqFt"
            value={filters.minSqFt}
            options={filterConfig.minSqFt.options}
            onChange={handleChange}
            showLabel={showLabelSettings}
            firstOption={allFirstOptionSettings}
            customClass="col-6 col-md-3"
          />

          {/* Max sq.ft. */}
          <SelectField
            label="Sq. ft. Max"
            name="maxSqFt"
            value={filters.maxSqFt}
            options={filterConfig.maxSqFt.options}
            onChange={handleChange}
            showLabel={showLabelSettings}
            firstOption={allFirstOptionSettings}
            customClass="col-6 col-md-3"
          />

          {/* Min Lot Size */}
          <SelectField
            label="Lot Size (sq. ft.) Min"
            name="minLot"
            value={filters.minLot}
            options={filterConfig.minLot.options}
            onChange={handleChange}
            showLabel={showLabelSettings}
            firstOption={allFirstOptionSettings}
            customClass="col-6 col-md-3"
          />

          {/* Max Lot Size */}
          <SelectField
            label="Lot Size (sq. ft.) Max"
            name="maxLot"
            value={filters.maxLot}
            options={filterConfig.maxLot.options}
            onChange={handleChange}
            showLabel={showLabelSettings}
            firstOption={allFirstOptionSettings}
            customClass="col-6 col-md-3"
            />
          </div>
          <div className="form-row">
          {/* Acres */}
          <SelectField
            label="Min Acres"
            name="minAcres"
            value={filters.minAcres}
            options={filterConfig.minAcres.options}
            onChange={handleChange}
            showLabel={showLabelSettings}
            firstOption={allFirstOptionSettings}
            customClass="col-6 col-md-3"
          />
          <SelectField
            label="Max Acres"
            name="maxAcres"
            value={filters.maxAcres}
            options={filterConfig.maxAcres.options}
            onChange={handleChange}
            showLabel={showLabelSettings}
            firstOption={allFirstOptionSettings}
            customClass="col-6 col-md-3"
          />
          </div>



        </div>

        {/* Price | Monthly Lease | Down Payment- */}
        <div className="filter-row ">
          <div className="form-row">
          {/* Min Price */}
          <SelectField
            label="Price Min"
            name="minPrice"
            value={filters.minPrice}
            options={filterConfig.minPrice.options}
            onChange={handleChange}
            showLabel={showLabelSettings}
            firstOption={allFirstOptionSettings}
            customClass="col-6 col-md-3"
          />
          {/* Max Price */}
          <SelectField
            label="Price Max"
            name="maxPrice"
            value={filters.maxPrice}
            options={filterConfig.maxPrice.options}
            onChange={handleChange}
            showLabel={showLabelSettings}
            firstOption={allFirstOptionSettings}
            customClass="col-6 col-md-3"
          />

          {/* min lease */}
          <SelectField
            label="Lease Min Price"
            name="minLease"
            value={filters.minLease}
            options={filterConfig.minLease.options}
            onChange={handleChange}
            showLabel={showLabelSettings}
            firstOption={allFirstOptionSettings}
            customClass="col-6 col-md-3"
          />
          {/* max lease */}
          <SelectField
            label="Lease Max Price"
            name="maxLease"
            value={filters.maxLease}
            options={filterConfig.maxLease.options}
            onChange={handleChange}
            showLabel={showLabelSettings}
            firstOption={allFirstOptionSettings}
            customClass="col-6 col-md-3"
          />
          </div>

          
          {/* Down Payment */}
          <div className="form-row">
           <SelectField
            label="Min Down Payment"
            name="minDown"
            value={filters.minDown}
            options={filterConfig.minDown.options}
            onChange={handleChange}
            showLabel={showLabelSettings}
            firstOption={allFirstOptionSettings}
            customClass="col-6 col-md-3"
          /> 
          <SelectField
            label="Max Down Payment"
            name="maxDown"
            value={filters.maxDown}
            options={filterConfig.maxDown.options}
            onChange={handleChange}
            showLabel={showLabelSettings}
            firstOption={allFirstOptionSettings}
            customClass="col-6 col-md-3"
            />
           </div>
         
        </div>

        {/* CAD ID Number- | State- | County- | City- | Market Area- | School District Taxonomy -| Subdivisions Taxonomy- */}
        <div className="filter-row">
          <div className="form-row">
          <div className="form-group col-md-12">
            <label>CAD ID Number</label>
            <input
              type="text"
              name="field_cad_id_number"
              placeholder="Search for CAD ID"
              value={filters.field_cad_id_number}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          </div>
          <div className="form-row">
          <SelectField
            label="State"
            name="field_address_administrative_area"
            value={filters.field_address_administrative_area}
            options={filterConfig.field_address_administrative_area.options}
            onChange={handleChange}
            showLabel={showLabelSettings}
            firstOption={allFirstOptionSettings}
            customClass="col-md-4"
          />
          {renderCountySelectField()}

          <SelectField
            label="City"
            name="field_address_locality"
            value={filters.field_address_locality}
            options={filterConfig.field_address_locality.options}
            onChange={handleChange}
            showLabel={showLabelSettings}
            firstOption={allFirstOptionSettings}
            customClass="col-md-4"
          />

          {renderMarketAreaSelectField()}
          {renderDistrictSelectField()}
          {renderSubdivisionSelectField()}
          </div>
        </div>

        {/* Add other filter rows similarly... */}
      </div>
    </div>
  );
};

export default AdvancedSearch;
