import React from "react";
import "../FilterBar.css";

const FilterBar = ({ filters, onFilterChange, onReset, count }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onFilterChange(name, value);
  };

  return (
    <>
    <div className="filter-bar">
      <select
        name="propertyType"
        value={filters.propertyType}
        onChange={handleChange}
      >
        <option value="">All Type</option>
        <option value="Residential">Residential</option>
        <option value="Commercial">Commercial</option>
        <option value="Land">Land</option>
      </select>
      <select
        name="transactionType"
        value={filters.transactionType}
        onChange={handleChange}
      >
        <option value="">All Properties</option>
        <option value="Lease">Lease</option>
        <option value="Sale">Sale</option>
      </select>
         {/* Highlighted filters  */}
         <select
          name="field_property_highlight"
          value={filters.field_property_highlight}
          onChange={handleChange}
        >
          <option value="">Highlight</option>
          <option value="Deal Of The Week">Deal Of The Week</option>
          <option value="Fixer Upper">Fixer Upper</option>
          <option value="Great Location">Great Location</option>
          <option value="Great Opportunity">Great Opportunity</option>
          <option value="Land Spotlight">Land Spotlight</option>
          <option value="New Listings">New Listings</option>
          <option value="Pending Sale">Pending Sale</option>
          <option value="Recently Sold">Recently Sold</option>
          <option value="Preserve of Texas">Preserve of Texas</option>
          <option value="Recent Renovations">Recent Renovations</option>
        </select>
      <input
        type="text"
        name="search"
        placeholder="Search"
        value={filters.search}
        onChange={handleChange}
      />
      <select name="bath" value={filters.bath} onChange={handleChange}>
        <option value="">Bath</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="1+">1+</option>
        <option value="2+">2+</option>
        <option value="3+">3+</option>
        <option value="4+">4+</option>
        <option value="5+">5+</option>
        <option value="6+">6+</option>
      </select>
      <select name="bedroom" value={filters.bedroom} onChange={handleChange}>
        <option value="">Bedroom</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
      </select>
      <select name="minSqft" value={filters.minSqft} onChange={handleChange}>
        <option value="">Min sqft</option>
        <option value="500">500</option>
        <option value="1000">1000</option>
        <option value="1500">1500</option>
        <option value="2000">2000</option>
        <option value="2500">2500</option>
        <option value="3000">3000</option>
        <option value="3500">3500</option>
        <option value="4000">4000</option>
        <option value="4500">4500</option>
        <option value="5000">5000</option>
        <option value="7500">7500</option>
        <option value="10000">10000</option>
        <option value="15000">15000</option>
        <option value="20000">20000</option>
        <option value="50000">50000</option>
      </select>
      <select name="maxSqft" value={filters.maxSqft} onChange={handleChange}>
        <option value="">Max sqft</option>
        <option value="1000">1000</option>
        <option value="1500">1500</option>
        <option value="2000">2000</option>
        <option value="2500">2500</option>
        <option value="3000">3000</option>
        <option value="3500">3500</option>
        <option value="4000">4000</option>
        <option value="4500">4500</option>
        <option value="5000">5000</option>
        <option value="7500">7500</option>
        <option value="10000">10000</option>
        <option value="15000">15000</option>
        <option value="20000">20000</option>
        <option value="50000">50000</option>
        <option value="100000">100000</option>
      </select>
      <select name="minPrice" value={filters.minPrice} onChange={handleChange}>
        <option value="">Min Price</option>
        <option value="5000">$5,000</option>
        <option value="10000">$10,000</option>
        <option value="15000">$15,000</option>
        <option value="20000">$20,000</option>
        <option value="25000">$25,000</option>
        <option value="30000">$30,000</option>
        <option value="35000">$35,000</option>
        <option value="40000">$40,000</option>
        <option value="45000">$45,000</option>
        <option value="50000">$50,000</option>
        <option value="55000">$55,000</option>
        <option value="60000">$60,000</option>
        <option value="65000">$65,000</option>
        <option value="70000">$70,000</option>
        <option value="75000">$75,000</option>
        <option value="80000">$80,000</option>
        <option value="85000">$85,000</option>
        <option value="90000">$90,000</option>
        <option value="95000">$95,000</option>
        <option value="100000">$100,000</option>
        <option value="105000">$105,000</option>
        <option value="110000">$110,000</option>
        <option value="115000">$115,000</option>
        <option value="120000">$120,000</option>
        <option value="125000">$125,000</option>
        <option value="130000">$130,000</option>
        <option value="135000">$135,000</option>
        <option value="140000">$140,000</option>
        <option value="145000">$145,000</option>
        <option value="150000">$150,000</option>
        <option value="155000">$155,000</option>
        <option value="160000">$160,000</option>
        <option value="165000">$165,000</option>
        <option value="170000">$170,000</option>
        <option value="175000">$175,000</option>
        <option value="180000">$180,000</option>
        <option value="185000">$185,000</option>
        <option value="190000">$190,000</option>
        <option value="195000">$195,000</option>
        <option value="200000">$200,000</option>
        <option value="205000">$205,000</option>
        <option value="210000">$210,000</option>
        <option value="215000">$215,000</option>
        <option value="220000">$220,000</option>
        <option value="225000">$225,000</option>
        <option value="230000">$230,000</option>
        <option value="235000">$235,000</option>
        <option value="240000">$240,000</option>
        <option value="245000">$245,000</option>
        <option value="250000">$250,000</option>
        <option value="255000">$255,000</option>
        <option value="260000">$260,000</option>
        <option value="265000">$265,000</option>
        <option value="270000">$270,000</option>
        <option value="275000">$275,000</option>
        <option value="280000">$280,000</option>
        <option value="285000">$285,000</option>
        <option value="290000">$290,000</option>
        <option value="295000">$295,000</option>
        <option value="300000">$300,000</option>
        <option value="305000">$305,000</option>
        <option value="310000">$310,000</option>
        <option value="315000">$315,000</option>
        <option value="320000">$320,000</option>
        <option value="325000">$325,000</option>
        <option value="330000">$330,000</option>
        <option value="335000">$335,000</option>
        <option value="340000">$340,000</option>
        <option value="345000">$345,000</option>
        <option value="350000">$350,000</option>
        <option value="355000">$355,000</option>
        <option value="360000">$360,000</option>
        <option value="365000">$365,000</option>
        <option value="370000">$370,000</option>
        <option value="375000">$375,000</option>
        <option value="380000">$380,000</option>
        <option value="385000">$385,000</option>
        <option value="390000">$390,000</option>
        <option value="395000">$395,000</option>
        <option value="400000">$400,000</option>
        <option value="450000">$450,000</option>
        <option value="500000">$500,000</option>
        <option value="550000">$550,000</option>
        <option value="600000">$600,000</option>
        <option value="650000">$650,000</option>
        <option value="700000">$700,000</option>
        <option value="750000">$750,000</option>
        <option value="800000">$800,000</option>
        <option value="850000">$850,000</option>
        <option value="900000">$900,000</option>
        <option value="950000">$950,000</option>
        <option value="1000000">$1,000,000</option>
      </select>
      <select name="maxPrice" value={filters.maxPrice} onChange={handleChange}>
        <option value="">Max Price</option>
        <option value="5000">$5,000</option>
        <option value="10000">$10,000</option>
        <option value="15000">$15,000</option>
        <option value="20000">$20,000</option>
        <option value="25000">$25,000</option>
        <option value="30000">$30,000</option>
        <option value="35000">$35,000</option>
        <option value="40000">$40,000</option>
        <option value="45000">$45,000</option>
        <option value="50000">$50,000</option>
        <option value="55000">$55,000</option>
        <option value="60000">$60,000</option>
        <option value="65000">$65,000</option>
        <option value="70000">$70,000</option>
        <option value="75000">$75,000</option>
        <option value="80000">$80,000</option>
        <option value="85000">$85,000</option>
        <option value="90000">$90,000</option>
        <option value="95000">$95,000</option>
        <option value="100000">$100,000</option>
        <option value="105000">$105,000</option>
        <option value="110000">$110,000</option>
        <option value="115000">$115,000</option>
        <option value="120000">$120,000</option>
        <option value="125000">$125,000</option>
        <option value="130000">$130,000</option>
        <option value="135000">$135,000</option>
        <option value="140000">$140,000</option>
        <option value="145000">$145,000</option>
        <option value="150000">$150,000</option>
        <option value="155000">$155,000</option>
        <option value="160000">$160,000</option>
        <option value="165000">$165,000</option>
        <option value="170000">$170,000</option>
        <option value="175000">$175,000</option>
        <option value="180000">$180,000</option>
        <option value="185000">$185,000</option>
        <option value="190000">$190,000</option>
        <option value="195000">$195,000</option>
        <option value="200000">$200,000</option>
        <option value="205000">$205,000</option>
        <option value="210000">$210,000</option>
        <option value="215000">$215,000</option>
        <option value="220000">$220,000</option>
        <option value="225000">$225,000</option>
        <option value="230000">$230,000</option>
        <option value="235000">$235,000</option>
        <option value="240000">$240,000</option>
        <option value="245000">$245,000</option>
        <option value="250000">$250,000</option>
        <option value="255000">$255,000</option>
        <option value="260000">$260,000</option>
        <option value="265000">$265,000</option>
        <option value="270000">$270,000</option>
        <option value="275000">$275,000</option>
        <option value="280000">$280,000</option>
        <option value="285000">$285,000</option>
        <option value="290000">$290,000</option>
        <option value="295000">$295,000</option>
        <option value="300000">$300,000</option>
        <option value="305000">$305,000</option>
        <option value="310000">$310,000</option>
        <option value="315000">$315,000</option>
        <option value="320000">$320,000</option>
        <option value="325000">$325,000</option>
        <option value="330000">$330,000</option>
        <option value="335000">$335,000</option>
        <option value="340000">$340,000</option>
        <option value="345000">$345,000</option>
        <option value="350000">$350,000</option>
        <option value="355000">$355,000</option>
        <option value="360000">$360,000</option>
        <option value="365000">$365,000</option>
        <option value="370000">$370,000</option>
        <option value="375000">$375,000</option>
        <option value="380000">$380,000</option>
        <option value="385000">$385,000</option>
        <option value="390000">$390,000</option>
        <option value="395000">$395,000</option>
        <option value="400000">$400,000</option>
        <option value="450000">$450,000</option>
        <option value="500000">$500,000</option>
        <option value="550000">$550,000</option>
        <option value="600000">$600,000</option>
        <option value="650000">$650,000</option>
        <option value="700000">$700,000</option>
        <option value="750000">$750,000</option>
        <option value="800000">$800,000</option>
        <option value="850000">$850,000</option>
        <option value="900000">$900,000</option>
        <option value="950000">$950,000</option>
        <option value="1000000">$1,000,000</option>
    

      </select>
      <button onClick={onReset}>Reset</button>

      </div>
      <div className='filter-count-container'>
        {/* <h3>Over 300+ Homes Sorted By</h3> */}
        <h3>{count} Properties Sorted By</h3>
      </div>
    </>
  );
};

export default FilterBar;
