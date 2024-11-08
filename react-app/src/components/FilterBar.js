import React from "react";
import { filterConfig } from "../config/filterConfig";
import SelectField from "./SelectField";
import AdvancedButton from "./AdvancedButton";

const FilterBar = ({ filters, onFilterChange, onReset, count, toggleAdvancedSearch, isAdvancedSearchVisible }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onFilterChange(name, value);
  };

  const showLabelSettings = true;

  return (
    <>
      <div className="filter-bar">
        <div className="form-row align-items-center">
        {/* propertyType */}
        <SelectField
          name="propertyType"
          value={filters.propertyType}
          options={filterConfig.propertyType.options}
          onChange={handleChange}
          firstOption="All Type"
          customClass="col-6 col-md-auto"
          showLabel={showLabelSettings}

        />

        {/* transactionTypes */}
        <SelectField
          name="transactionTypes"
          value={filters.transactionTypes}
          options={filterConfig.transactionTypes.options}
          onChange={handleChange}
          firstOption="All Properties"
          customClass="col-6 col-md-auto"
          showLabel={showLabelSettings}
        />

        {/* Highlighted filters  */}
        <SelectField
          name="field_property_highlight"
          value={filters.field_property_highlight}
          options={filterConfig.field_property_highlight.options}
          onChange={handleChange}
          firstOption="Highlight"
          customClass="col-6 col-md-auto"
          showLabel={showLabelSettings}
        />

        {/* Search */}
        <div className="form-group col-6 col-md-2">
        <label></label>
        <input
          type="text"
          name="search"
          placeholder="Search for properties, suburbs, or keywords…"
          value={filters.search}
          onChange={handleChange}
          className="form-control"
        />
        </div>
        {/* Bathrooms  */}
        <SelectField
          name="bath"
          value={filters.bath}
          options={filterConfig.bath.options}
          onChange={handleChange}
          firstOption="Bath"
          customClass=" col-6 col-md-auto"
          showLabel={showLabelSettings}
        />

        {/* Bedrooms  */}
        <SelectField
          name="bedroom"
          value={filters.bedroom}
          options={filterConfig.bedroom.options}
          onChange={handleChange}
          firstOption="Bedroom"
          customClass="col-6 col-md-auto"
          showLabel={showLabelSettings}
        />

        {/* Min Price */}
        <SelectField
          name="minPrice"
          value={filters.minPrice}
          options={filterConfig.minPrice.options}
          onChange={handleChange}
          firstOption="Min Price"
          customClass="col-6 col-md-auto"
          showLabel={showLabelSettings}
        />
        {/* Max Price */}
        <SelectField
          name="maxPrice"
          value={filters.maxPrice}
          options={filterConfig.maxPrice.options}
          onChange={handleChange}
          firstOption="Max Price"
          customClass="col-6 col-md-auto"
          showLabel={showLabelSettings}
        />

        
   

      <div className="col-auto">
      <button onClick={onReset} className="filter-bar-button">Reset</button>
 
      </div>
      <div className="col-auto">
      <AdvancedButton
        onClick={toggleAdvancedSearch}
        label={isAdvancedSearchVisible ? 'Close' : 'More Filters'}
        customButtonClass="filter-bar-button"
      />
      </div>
      </div>


      </div>
    </>
  );
};

export default FilterBar;
