import React from 'react';
import classes from './Select.module.css';

const Select = ({defaultValue, options, value, onChange}) => {

  return (
    <select 
        onChange={e => onChange(e.target.value)}
        className={classes.select} 
        value={value}
    >
        <option disabled value="">
            {defaultValue}
        </option>
        {
        options.map( option =>
            <option key={option.value} value={option.value}>
                {option.name}
            </option>
        )
        }
    </select>
  );
}

export default Select;