import React from 'react';
import './Dropdown.css';
const Dropdown = ({ options, title }) => {
    const renderedOptions = options.map((option) => {
        return (
            <option value={option.value}>
                {option.label}
            </option>
        );
    });

    return (
        <div>
            <form>
                <select name="sync-status-dd" className="dropdown">
                    {renderedOptions}
                </select>
            </form>
            
            
        </div>
    );
};

export default Dropdown;