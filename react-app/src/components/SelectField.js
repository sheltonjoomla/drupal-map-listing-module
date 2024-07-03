import React from "react";
// name: name of the select field
// value: value of the select field
// options: options for the select field
// onChange: function to handle the change in the select field
// label: label for the select field
// showLabel: true | false to hide the label
// firstOption: first option to be displayed in the select field if empty will show whats in config
// customClass: custom class to be added to the select field ex: col-md-6 
// Min Max Fields 

const SelectField = ({ name, value, options, onChange, label , showLabel, firstOption, customClass}) => (
  <div className={`form-group ${customClass ? customClass : ''}`}>

    {showLabel && <label>{label}</label>}
    <select name={name} value={value} onChange={onChange} className="form-control">
    {firstOption && <option value="">{firstOption}</option>}
    {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}

    </select>
  </div>
);

export default SelectField;