export const filterConfig = {
    propertyType: {
      label: "Property Type",
      options: [
        { value: "Residential", label: "Residential" },
        { value: "Commercial", label: "Commercial" },
        { value: "Land", label: "Land" }
      ],
      errorMessage: "Please select a property type"
    },
    transactionType: {
      label: "Transaction Type",
      options: [
        { value: "Lease", label: "Lease" },
        { value: "Sale", label: "Sale" }
      ],
      errorMessage: "Please select a transaction type"
    },
    field_property_highlight: {
      label: "Highlight",
      options: [
        { value: "Deal Of The Week", label: "Deal Of The Week" },
        { value: "Fixer Upper", label: "Fixer Upper" },
        { value: "Great Location", label: "Great Location" },
        { value: "Great Opportunity", label: "Great Opportunity" },
        { value: "Land Spotlight", label: "Land Spotlight" },
        { value: "New Listings", label: "New Listings" },
        { value: "Pending Sale", label: "Pending Sale" },
        { value: "Recently Sold", label: "Recently Sold" },
        { value: "Preserve of Texas", label: "Preserve of Texas" },
        { value: "Recent Renovations", label: "Recent Renovations" }
      ],
      errorMessage: "Please select a highlight"
    },
    bath: {
      label: "Bath",
      options: [
        { value: "1", label: "1" },
        { value: "2", label: "2" },
        { value: "3", label: "3" },
        { value: "4", label: "4" },
        { value: "5", label: "5" },
        { value: "6", label: "6" },
        { value: "1+", label: "1+" },
        { value: "2+", label: "2+" },
        { value: "3+", label: "3+" },
        { value: "4+", label: "4+" },
        { value: "5+", label: "5+" },
        { value: "6+", label: "6+" }
      ],
      errorMessage: "Please select a bathroom"
    },
    bedroom: {
      label: "Bedroom",
      options: [
        { value: "1", label: "1" },
        { value: "2", label: "2" },
        { value: "3", label: "3" },
        { value: "4", label: "4" },
        { value: "5", label: "5" },
        { value: "6", label: "6" },
        { value: "7", label: "7" },
        { value: "8", label: "8" },
        { value: "9", label: "9" }
      ],
      errorMessage: "Please select a bedroom"
    },
    sort: {
      label: "Sort",
      options: [
        { value: "", label: "Sort" },
        { value: "Address", label: "Address" },
        { value: "Lease Price Ascending", label: "Lease Price Ascending" },
        { value: "Lease Price Descending", label: "Lease Price Descending" },
      ],
      errorMessage: "Please select a sort"
    },
    field_address_administrative_area: {
      label: "states",
      options: [
        { value: "Texas", label: "Texas" },
        { value: "Alabama", label: "Alabama" },
        { value: "Florida", label: "Florida" },
        { value: "Georgia", label: "Georgia" },
        { value: "Maryland", label: "Maryland" },
        { value: "Missouri", label: "Missouri" },
        { value: "North Carolina", label: "North Carolina" },
        { value: "South Carolina", label: "South Carolina" },
        { value: "Oklahoma", label: "Oklahoma" },
        { value: "Tennessee", label: "Tennessee" }
      ],
      errorMessage: "Please select a state"
    },
    field_in_hoa: {
      label: "HOA",
      options: [
        { value: "1", label: "Yes" },
        { value: "0", label: "No" }
      ],
      errorMessage: "Please select a HOA"
    },
    field_pool: {
      label: "Pool",
      options: [
        { value: "1", label: "Yes" },
        { value: "0", label: "No" }
      ],
      errorMessage: "Please select a pool"
    },
    field_stories: {
      label: "Stories",
      options: [
        { value: "1", label: "1" },
        { value: "2", label: "2" },
        { value: "3", label: "3" },
        { value: "4", label: "4" },
        { value: "5", label: "5" }
      ],
      errorMessage: "Please select a story"
    },
    minAcres: {
      label: "Min Acres",
      options: [
        { value: "1", label: "0" },
        { value: "1.00", label: "1" },
        { value: "2.00", label: "2" },
        { value: "3.00", label: "3" },
        { value: "4.00", label: "4" },
        { value: "5.00", label: "5" },
        { value: "6.00", label: "6" },
        { value: "7.00", label: "7" },
        { value: "8.00", label: "8" },
        { value: "9.00", label: "9" },
        { value: "10.00", label: "10" },
        { value: "11.00", label: "11" },
        { value: "12.00", label: "12" },
        { value: "13.00", label: "13" },
        { value: "14.00", label: "14" },
        { value: "15.00", label: "15" },
        { value: "16.00", label: "16" },
        { value: "17.00", label: "17" },
        { value: "18.00", label: "18" },
        { value: "19.00", label: "19" },
        { value: "20.00", label: "20" },
        { value: "21.00", label: "21" },
        { value: "22.00", label: "22" },
        { value: "23.00", label: "23" },
        { value: "24.00", label: "24" },
        { value: "25.00", label: "25" },
        { value: "26.00", label: "26" },
        { value: "27.00", label: "27" },
        { value: "28.00", label: "28" },
        { value: "29.00", label: "29" },
        { value: "30.00", label: "30" }
      ],
      errorMessage: "Please select an acreage"
    },
    maxAcres: {
      label: "Max Acres",
      options: [
        { value: "1.00", label: "1" },
        { value: "2.00", label: "2" },
        { value: "3.00", label: "3" },
        { value: "4.00", label: "4" },
        { value: "5.00", label: "5" },
        { value: "6.00", label: "6" },
        { value: "7.00", label: "7" },
        { value: "8.00", label: "8" },
        { value: "9.00", label: "9" },
        { value: "10.00", label: "10" },
        { value: "11.00", label: "11" },
        { value: "12.00", label: "12" },
        { value: "13.00", label: "13" },
        { value: "14.00", label: "14" },
        { value: "15.00", label: "15" },
        { value: "16.00", label: "16" },
        { value: "17.00", label: "17" },
        { value: "18.00", label: "18" },
        { value: "19.00", label: "19" },
        { value: "20.00", label: "20" },
        { value: "21.00", label: "21" },
        { value: "22.00", label: "22" },
        { value: "23.00", label: "23" },
        { value: "24.00", label: "24" },
        { value: "25.00", label: "25" },
        { value: "26.00", label: "26" },
        { value: "27.00", label: "27" },
        { value: "28.00", label: "28" },
        { value: "29.00", label: "29" },
        { value: "30.00", label: "30" }
      ],
      errorMessage: "Please select an acreage"
    },
    field_address_locality: {
      label: "City",
      options: [
        { value: "Alvin", label: "Alvin" },
        { value: "Angleton", label: "Angleton" },
        { value: "Aubrey", label: "Aubrey" },
        { value: "Austin", label: "Austin" },
        { value: "Bay City", label: "Bay City" },
        { value: "Baytown", label: "Baytown" },
        { value: "Beaumont", label: "Beaumont" },
        { value: "Bedias", label: "Bedias" },
        { value: "Blessing", label: "Blessing" },
        { value: "Brazoria", label: "Brazoria" },
        { value: "Channelview", label: "Channelview" },
        { value: "Cleveland", label: "Cleveland" },
        { value: "Copperas Cove", label: "Copperas Cove" },
        { value: "Corpus Christi", label: "Corpus Christi" },
        { value: "Crosby", label: "Crosby" },
        { value: "Cuero", label: "Cuero" },
        { value: "Danbury", label: "Danbury" },
        { value: "Dayton", label: "Dayton" },
        { value: "Deer Park", label: "Deer Park" },
        { value: "Dickinson", label: "Dickinson" },
        { value: "Donie", label: "Donie" },
        { value: "El Campo", label: "El Campo" },
        { value: "El Paso", label: "El Paso" },
        { value: "Freeport", label: "Freeport" },
        { value: "Fulshear", label: "Fulshear" },
        { value: "Harlingen", label: "Harlingen" },
        { value: "Highlands", label: "Highlands" },
        { value: "Hockley", label: "Hockley" },
        { value: "Houston", label: "Houston" },
        { value: "Humble", label: "Humble" },
        { value: "Huntsville", label: "Huntsville" },
        { value: "Katy", label: "Katy" },
        { value: "Kossee", label: "Kossee" },
        { value: "Livingston", label: "Livingston" },
        { value: "La Feria", label: "La Feria" },
        { value: "La Marque", label: "La Marque" },
        { value: "La Porte", label: "La Porte" },
        { value: "Lake Jackson", label: "Lake Jackson" },
        { value: "League City", label: "League City" },
        { value: "Liberty", label: "Liberty" },
        { value: "Liverpool", label: "Liverpool" },
        { value: "Livingston", label: "Livingston" },
        { value: "Magnolia", label: "Magnolia" },
        { value: "Marlin", label: "Marlin" },
        { value: "Marshall", label: "Marshall" },
        { value: "Mart", label: "Mart" },
        { value: "May", label: "May" },
        { value: "Montgomery", label: "Montgomery" },
        { value: "Navasota", label: "Navasota" },
        { value: "New Caney", label: "New Caney" },
        { value: "Onalaska", label: "Onalaska" },
        { value: "Orange", label: "Orange" },
        { value: "Pasadena", label: "Pasadena" },
        { value: "Point Blank", label: "Point Blank" },
        { value: "Port Arthur", label: "Port Arthur" },
        { value: "Porter", label: "Porter" },
        { value: "Rye", label: "Rye" },
        { value: "Red Oak", label: "Red Oak" },
        { value: "Rio Grande City", label: "Rio Grande City" },
        { value: "Riverside", label: "Riverside" },
        { value: "Rosenberg", label: "Rosenberg" },
        { value: "Roymayor", label: "Roymayor" },
        { value: "San Antonio", label: "San Antonio" },
        { value: "San Augustine", label: "San Augustine" },
        { value: "San Leon", label: "San Leon" },
        { value: "Sargent", label: "Sargent" },
        { value: "Seabrook", label: "Seabrook" },
        { value: "Shepherd", label: "Shepherd" },
        { value: "Splendora", label: "Splendora" },
        { value: "Spring", label: "Spring" },
        { value: "Sweeny", label: "Sweeny" },
        { value: "Texarkana", label: "Texarkana" },
        { value: "Texas City", label: "Texas City" },
        { value: "Tomball", label: "Tomball" },
        { value: "Trinity", label: "Trinity" },
        { value: "Vidor", label: "Vidor" },
        { value: "Waco", label: "Waco" },
        { value: "Waller", label: "Waller" },
        { value: "Wharton", label: "Wharton" },
        { value: "Wiergate", label: "Wiergate" },
        { value: "Willis", label: "Willis" },
        { value: "Winnie", label: "Winnie" },
        { value: "Woodville", label: "Woodville" }
      ],
      errorMessage: "Please select a city"
    },
    minDown: {
      label: "Min Down Payment",
      options: [
        { value: "1", label: "0" },
        { value: "1000.00", label: "1k" },
        { value: "2000.00", label: "2k" },
        { value: "3000.00", label: "3k" },
        { value: "4000.00", label: "4k" },
        { value: "5000.00", label: "5k" },
        { value: "6000.00", label: "6k" },
        { value: "7000.00", label: "7k" },
        { value: "8000.00", label: "8k" },
        { value: "9000.00", label: "9k" },
        { value: "10000.00", label: "10k" },
        { value: "15000.00", label: "15k" },
        { value: "20000.00", label: "20k" },
        { value: "40000.00", label: "40k" },
        { value: "50000.00", label: "50k" },
        { value: "60000.00", label: "60k" },
        { value: "70000.00", label: "70k" },
        { value: "80000.00", label: "80k" },
        { value: "90000.00", label: "90k" },
        { value: "100000.00", label: "100k" },
        { value: "125000.00", label: "125k" },
        { value: "150000.00", label: "150k" },
        { value: "175000.00", label: "175k" },
        { value: "200000.00", label: "200k" },
        { value: "225000.00", label: "225k" },
        { value: "250000.00", label: "250k" },
        { value: "275000.00", label: "275k" },
        { value: "300000.00", label: "300k" },
        { value: "325000.00", label: "325k" },
      ],
      errorMessage: "Please select a down payment"
    },
    maxDown: {
      label: "Max Down Payment",
      options: [
        { value: "1250.00", label: "1k" },
        { value: "2500.00", label: "2k" },
        { value: "3750.00", label: "3k" },
        { value: "5000.00", label: "4k" },
        { value: "6250.00", label: "5k" },
        { value: "7500.00", label: "6k" },
        { value: "8750.00", label: "7k" },
        { value: "10000.00", label: "8k" },
        { value: "11250.00", label: "9k" },
        { value: "12500.00", label: "10k" },
        { value: "18750.00", label: "15k" },
        { value: "25000.00", label: "20k" },
        { value: "50000.00", label: "40k" },
        { value: "62500.00", label: "50k" },
        { value: "75000.00", label: "60k" },
        { value: "87500.00", label: "70k" },
        { value: "100000.00", label: "80k" },
        { value: "112500.00", label: "90k" },
        { value: "125000.00", label: "100k" },
        { value: "156250.00", label: "125k" },
        { value: "187500.00", label: "150k" },
        { value: "218750.00", label: "175k" },
        { value: "250000.00", label: "200k" },
        { value: "281250.00", label: "225k" },
        { value: "312500.00", label: "250k" },
        { value: "343750.00", label: "275k" },
        { value: "375000.00", label: "300k" },
        { value: "406250.00", label: "325k" },
      ],
      errorMessage: "Please select a down payment"
    },
    field_property_style: {
      label: "Property Style",
      options: [
        { value: "Residential Lots", label: "Residential Lots" },
        { value: "Commercial Lots", label: "Commercial Lots" },
        { value: "Country Homes Acreage", label: "Country Homes Acreage" },
        { value: "Duplex", label: "Duplex" },
        { value: "Mid or Hi-Rise Condominium", label: "Mid or Hi-Rise Condominium" },
        { value: "Single Family Home", label: "Single Family Home" },
        { value: "Townhouse or Condo", label: "Townhouse or Condo" },
        { value: "Warehouse", label: "Warehouse" },
        { value: "Specialty", label: "Specialty" },
        { value: "Retail", label: "Retail" },
        { value: "Other", label: "Other" },
        { value: "Office", label: "Office" },
        { value: "Night-club or Bar", label: "Night-club or Bar" },
        { value: "Church", label: "Church" },
        { value: "Apartments", label: "Apartments" },
        { value: "Residential Lots", label: "Residential Lots" },
        { value: "Restricted", label: "Restricted" },
        { value: "Restricted Utilities", label: "Restricted Utilities" },
        { value: "Unrestricted", label: "Unrestricted" }
      ],
      errorMessage: "Please select a property style"
    },
    minSqFt: {
      label: "Min Sqft",
      options: [
        { value: "1", label: "0" },
        { value: "500", label: "500" },
        { value: "1000", label: "1000" },
        { value: "1500", label: "1500" },
        { value: "2000", label: "2000" },
        { value: "2500", label: "2500" },
        { value: "3000", label: "3000" },
        { value: "3500", label: "3500" },
        { value: "4000", label: "4000" },
        { value: "4500", label: "4500" },
        { value: "5000", label: "5000" },
        { value: "7500", label: "7500" },
        { value: "10000", label: "10000" },
        { value: "15000", label: "15000" },
        { value: "20000", label: "20000" },
        { value: "50000", label: "50000" }
      ],
      errorMessage: "Please select a min sqft"
    },
    maxSqFt: {
      label: "Max Sqft",
      options: [
        { value: "1000", label: "1000" },
        { value: "1500", label: "1500" },
        { value: "2000", label: "2000" },
        { value: "2500", label: "2500" },
        { value: "3000", label: "3000" },
        { value: "3500", label: "3500" },
        { value: "4000", label: "4000" },
        { value: "4500", label: "4500" },
        { value: "5000", label: "5000" },
        { value: "7500", label: "7500" },
        { value: "10000", label: "10000" },
        { value: "15000", label: "15000" },
        { value: "20000", label: "20000" },
        { value: "50000", label: "50000" },
        { value: "100000", label: "100000" }
      ],
      errorMessage: "Please select a max sqft"
    },
    minLease: {
      label: "Min Lease",
      options: [
        { value: "1", label: "0" },
        { value: "50", label: "50/mo" },
        { value: "100", label: "100/mo" },
        { value: "150", label: "150/mo" },
        { value: "200", label: "200/mo" },
        { value: "250", label: "250/mo" },
        { value: "300", label: "300/mo" },
        { value: "350", label: "350/mo" },
        { value: "400", label: "400/mo" },
        { value: "450", label: "450/mo" },
        { value: "500", label: "500/mo" },
        { value: "550", label: "550/mo" },
        { value: "600", label: "600/mo" },
        { value: "650", label: "650/mo" },
        { value: "700", label: "700/mo" },
        { value: "750", label: "750/mo" },
        { value: "800", label: "800/mo" },
        { value: "850", label: "850/mo" },
        { value: "900", label: "900/mo" },
        { value: "950", label: "950/mo" },
        { value: "1000", label: "1,000/mo" },
        { value: "1100", label: "1,100/mo" },
        { value: "1200", label: "1,200/mo" },
        { value: "1300", label: "1,300/mo" },
        { value: "1400", label: "1,400/mo" },
        { value: "1500", label: "1,500/mo" },
        { value: "1600", label: "1,600/mo" },
        { value: "1700", label: "1,700/mo" },
        { value: "1800", label: "1,800/mo" },
        { value: "1900", label: "1,900/mo" },
        { value: "2000", label: "2,000/mo" },
        { value: "2100", label: "2,100/mo" },
        { value: "2200", label: "2,200/mo" },
        { value: "2300", label: "2,300/mo" },
        { value: "2400", label: "2,400/mo" },
        { value: "2500", label: "2,500/mo" },
        { value: "2600", label: "2,600/mo" },
        { value: "2700", label: "2,700/mo" },
        { value: "2800", label: "2,800/mo" },
        { value: "2900", label: "2,900/mo" },
        { value: "3000", label: "3,000/mo" },
        { value: "3500", label: "3,500/mo" },
        { value: "4000", label: "4,000/mo" },
        { value: "4500", label: "4,500/mo" },
        { value: "5000", label: "5,000/mo" },
        { value: "5500", label: "5,500/mo" },
        { value: "6000", label: "6,000/mo" },
        { value: "6500", label: "6,500/mo" },
        { value: "7000", label: "7,000/mo" },
        { value: "7500", label: "7,500/mo" },
        { value: "8000", label: "8,000/mo" },
        { value: "8500", label: "8,500/mo" },
        { value: "9000", label: "9,000/mo" },
        { value: "9500", label: "9,500/mo" },
        { value: "10000", label: "10,000/mo" },
      ],
      errorMessage: "Please select a min lease"
    },
    maxLease: {
      label: "Max Lease",
      options: [
        { value: "50", label: "50/mo" },
        { value: "100", label: "100/mo" },
        { value: "150", label: "150/mo" },
        { value: "200", label: "200/mo" },
        { value: "250", label: "250/mo" },
        { value: "300", label: "300/mo" },
        { value: "350", label: "350/mo" },
        { value: "400", label: "400/mo" },
        { value: "450", label: "450/mo" },
        { value: "500", label: "500/mo" },
        { value: "550", label: "550/mo" },
        { value: "600", label: "600/mo" },
        { value: "650", label: "650/mo" },
        { value: "700", label: "700/mo" },
        { value: "750", label: "750/mo" },
        { value: "800", label: "800/mo" },
        { value: "850", label: "850/mo" },
        { value: "900", label: "900/mo" },
        { value: "950", label: "950/mo" },
        { value: "1000", label: "1,000/mo" },
        { value: "1100", label: "1,100/mo" },
        { value: "1200", label: "1,200/mo" },
        { value: "1300", label: "1,300/mo" },
        { value: "1400", label: "1,400/mo" },
        { value: "1500", label: "1,500/mo" },
        { value: "1600", label: "1,600/mo" },
        { value: "1700", label: "1,700/mo" },
        { value: "1800", label: "1,800/mo" },
        { value: "1900", label: "1,900/mo" },
        { value: "2000", label: "2,000/mo" },
        { value: "2100", label: "2,100/mo" },
        { value: "2200", label: "2,200/mo" },
        { value: "2300", label: "2,300/mo" },
        { value: "2400", label: "2,400/mo" },
        { value: "2500", label: "2,500/mo" },
        { value: "2600", label: "2,600/mo" },
        { value: "2700", label: "2,700/mo" },
        { value: "2800", label: "2,800/mo" },
        { value: "2900", label: "2,900/mo" },
        { value: "3000", label: "3,000/mo" },
        { value: "3500", label: "3,500/mo" },
        { value: "4000", label: "4,000/mo" },
        { value: "4500", label: "4,500/mo" },
        { value: "5000", label: "5,000/mo" },
        { value: "5500", label: "5,500/mo" },
        { value: "6000", label: "6,000/mo" },
        { value: "6500", label: "6,500/mo" },
        { value: "7000", label: "7,000/mo" },
        { value: "7500", label: "7,500/mo" },
        { value: "8000", label: "8,000/mo" },
        { value: "8500", label: "8,500/mo" },
        { value: "9000", label: "9,000/mo" },
        { value: "9500", label: "9,500/mo" },
        { value: "10000", label: "10,000/mo" },
      ],
      errorMessage: "Please select a max lease"
    },
    minPrice: {
      label: "Min Price",
      options: [
        { value: "1", label: "0" },
        { value: "5000", label: "$5,000" },
        { value: "10000", label: "$10,000" },
        { value: "15000", label: "$15,000" },
        { value: "20000", label: "$20,000" },
        { value: "25000", label: "$25,000" },
        { value: "30000", label: "$30,000" },
        { value: "35000", label: "$35,000" },
        { value: "40000", label: "$40,000" },
        { value: "45000", label: "$45,000" },
        { value: "50000", label: "$50,000" },
        { value: "55000", label: "$55,000" },
        { value: "60000", label: "$60,000" },
        { value: "65000", label: "$65,000" },
        { value: "70000", label: "$70,000" },
        { value: "75000", label: "$75,000" },
        { value: "80000", label: "$80,000" },
        { value: "85000", label: "$85,000" },
        { value: "90000", label: "$90,000" },
        { value: "95000", label: "$95,000" },
        { value: "100000", label: "$100,000" },
        { value: "105000", label: "$105,000" },
        { value: "110000", label: "$110,000" },
        { value: "115000", label: "$115,000" },
        { value: "120000", label: "$120,000" },
        { value: "125000", label: "$125,000" },
        { value: "130000", label: "$130,000" },
        { value: "135000", label: "$135,000" },
        { value: "140000", label: "$140,000" },
        { value: "145000", label: "$145,000" },
        { value: "150000", label: "$150,000" },
        { value: "155000", label: "$155,000" },
        { value: "160000", label: "$160,000" },
        { value: "165000", label: "$165,000" },
        { value: "170000", label: "$170,000" },
        { value: "175000", label: "$175,000" },
        { value: "180000", label: "$180,000" },
        { value: "185000", label: "$185,000" },
        { value: "190000", label: "$190,000" },
        { value: "195000", label: "$195,000" },
        { value: "200000", label: "$200,000" },
        { value: "205000", label: "$205,000" },
        { value: "210000", label: "$210,000" },
        { value: "215000", label: "$215,000" },
        { value: "220000", label: "$220,000" },
        { value: "225000", label: "$225,000" },
        { value: "230000", label: "$230,000" },
        { value: "235000", label: "$235,000" },
        { value: "240000", label: "$240,000" },
        { value: "245000", label: "$245,000" },
        { value: "250000", label: "$250,000" },
        { value: "255000", label: "$255,000" },
        { value: "260000", label: "$260,000" },
        { value: "265000", label: "$265,000" },
        { value: "270000", label: "$270,000" },
        { value: "275000", label: "$275,000" },
        { value: "280000", label: "$280,000" },
        { value: "285000", label: "$285,000" },
        { value: "290000", label: "$290,000" },
        { value: "295000", label: "$295,000" },
        { value: "300000", label: "$300,000" },
        { value: "305000", label: "$305,000" },
        { value: "310000", label: "$310,000" },
        { value: "315000", label: "$315,000" },
        { value: "320000", label: "$320,000" },
        { value: "325000", label: "$325,000" },
        { value: "330000", label: "$330,000" },
        { value: "335000", label: "$335,000" },
        { value: "340000", label: "$340,000" },
        { value: "345000", label: "$345,000" },
        { value: "350000", label: "$350,000" },
        { value: "355000", label: "$355,000" },
        { value: "360000", label: "$360,000" },
        { value: "365000", label: "$365,000" },
        { value: "370000", label: "$370,000" },
        { value: "375000", label: "$375,000" },
        { value: "380000", label: "$380,000" },
        { value: "385000", label: "$385,000" },
        { value: "390000", label: "$390,000" },
        { value: "395000", label: "$395,000" },
        { value: "400000", label: "$400,000" },
        { value: "450000", label: "$450,000" },
        { value: "500000", label: "$500,000" },
        { value: "550000", label: "$550,000" },
        { value: "600000", label: "$600,000" },
        { value: "650000", label: "$650,000" },
        { value: "700000", label: "$700,000" },
        { value: "750000", label: "$750,000" },
        { value: "800000", label: "$800,000" },
        { value: "850000", label: "$850,000" },
        { value: "900000", label: "$900,000" },
        { value: "950000", label: "$950,000" },
        { value: "1000000", label: "$1,000,000" },
      ],
      errorMessage: "Please select a min price"
    },
    maxPrice: {
      label: "Max Price",
      options: [
        { value: "5000", label: "$5,000" },
        { value: "10000", label: "$10,000" },
        { value: "15000", label: "$15,000" },
        { value: "20000", label: "$20,000" },
        { value: "25000", label: "$25,000" },
        { value: "30000", label: "$30,000" },
        { value: "35000", label: "$35,000" },
        { value: "40000", label: "$40,000" },
        { value: "45000", label: "$45,000" },
        { value: "50000", label: "$50,000" },
        { value: "55000", label: "$55,000" },
        { value: "60000", label: "$60,000" },
        { value: "65000", label: "$65,000" },
        { value: "70000", label: "$70,000" },
        { value: "75000", label: "$75,000" },
        { value: "80000", label: "$80,000" },
        { value: "85000", label: "$85,000" },
        { value: "90000", label: "$90,000" },
        { value: "95000", label: "$95,000" },
        { value: "100000", label: "$100,000" },
        { value: "105000", label: "$105,000" },
        { value: "110000", label: "$110,000" },
        { value: "115000", label: "$115,000" },
        { value: "120000", label: "$120,000" },
        { value: "125000", label: "$125,000" },
        { value: "130000", label: "$130,000" },
        { value: "135000", label: "$135,000" },
        { value: "140000", label: "$140,000" },
        { value: "145000", label: "$145,000" },
        { value: "150000", label: "$150,000" },
        { value: "155000", label: "$155,000" },
        { value: "160000", label: "$160,000" },
        { value: "165000", label: "$165,000" },
        { value: "170000", label: "$170,000" },
        { value: "175000", label: "$175,000" },
        { value: "180000", label: "$180,000" },
        { value: "185000", label: "$185,000" },
        { value: "190000", label: "$190,000" },
        { value: "195000", label: "$195,000" },
        { value: "200000", label: "$200,000" },
        { value: "205000", label: "$205,000" },
        { value: "210000", label: "$210,000" },
        { value: "215000", label: "$215,000" },
        { value: "220000", label: "$220,000" },
        { value: "225000", label: "$225,000" },
        { value: "230000", label: "$230,000" },
        { value: "235000", label: "$235,000" },
        { value: "240000", label: "$240,000" },
        { value: "245000", label: "$245,000" },
        { value: "250000", label: "$250,000" },
        { value: "255000", label: "$255,000" },
        { value: "260000", label: "$260,000" },
        { value: "265000", label: "$265,000" },
        { value: "270000", label: "$270,000" },
        { value: "275000", label: "$275,000" },
        { value: "280000", label: "$280,000" },
        { value: "285000", label: "$285,000" },
        { value: "290000", label: "$290,000" },
        { value: "295000", label: "$295,000" },
        { value: "300000", label: "$300,000" },
        { value: "305000", label: "$305,000" },
        { value: "310000", label: "$310,000" },
        { value: "315000", label: "$315,000" },
        { value: "320000", label: "$320,000" },
        { value: "325000", label: "$325,000" },
        { value: "330000", label: "$330,000" },
        { value: "335000", label: "$335,000" },
        { value: "340000", label: "$340,000" },
        { value: "345000", label: "$345,000" },
        { value: "350000", label: "$350,000" },
        { value: "355000", label: "$355,000" },
        { value: "360000", label: "$360,000" },
        { value: "365000", label: "$365,000" },
        { value: "370000", label: "$370,000" },
        { value: "375000", label: "$375,000" },
        { value: "380000", label: "$380,000" },
        { value: "385000", label: "$385,000" },
        { value: "390000", label: "$390,000" },
        { value: "395000", label: "$395,000" },
        { value: "400000", label: "$400,000" },
        { value: "450000", label: "$450,000" },
        { value: "500000", label: "$500,000" },
        { value: "550000", label: "$550,000" },
        { value: "600000", label: "$600,000" },
        { value: "650000", label: "$650,000" },
        { value: "700000", label: "$700,000" },
        { value: "750000", label: "$750,000" },
        { value: "800000", label: "$800,000" },
        { value: "850000", label: "$850,000" },
        { value: "900000", label: "$900,000" },
        { value: "950000", label: "$950,000" },
        { value: "1000000", label: "$1,000,000" },
      ],
      errorMessage: "Please select a max price"
    },
    field_garage_type: {
      label: "Garage Type",
      options: [
        { value: "Attached", label: "Attached" },
        { value: "Detached", label: "Detached" },
        { value: "Carport", label: "Carport" }
      ],
      errorMessage: "Please select a garage type"
    },
    minLot: {
      label: "Min Lot",
      options: [
        { value: "1", label: "0" },
        { value: "1000", label: "1000" },
        { value: "2000", label: "2000" },
        { value: "3000", label: "3000" },
        { value: "4000", label: "4000" },
        { value: "5000", label: "5000" }
      ],
      errorMessage: "Please select a lot"
    },
    maxLot: {
      label: "Max Lot",
      options: [
        { value: "1000", label: "1000" },
        { value: "2000", label: "2000" },
        { value: "3000", label: "3000" },
        { value: "4000", label: "4000" },
        { value: "5000", label: "5000" }
      ],
      errorMessage: "Please select a lot"
    },
    field_status_1: {
      label: "Status",
      options: [
        { value: "Available", label: "Available" },
        { value: "Unavailable", label: "Unavailable" },
        { value: "under contract", label: "Under Contract" },
        { value: "Leased", label: "Leased" },
        { value: "Sold", label: "Sold" },
        { value: "Drive by Only", label: "Drive by Only" },
        { value: "Lease Pending", label: "Lease Pending" },
        { value: "Sale Pending", label: "Sale Pending" }
      ],
      errorMessage: "Please select a status"
    }, 
    field_garage: {
      label: "Garage",
      options: [
        { value: "1.00", label: "1" },
        { value: "2.00", label: "2" },
        { value: "3.00", label: "3" },
        { value: "4.00", label: "4" },
        { value: "5.00", label: "5" },
        { value: "6.00", label: "6" },
        { value: "7.00", label: "7" },
        { value: "8.00", label: "8" },
        { value: "9.00", label: "9" },
      ],
      errorMessage: "Please select a garage type"
    }
};