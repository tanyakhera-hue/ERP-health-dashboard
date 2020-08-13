import React from 'react';
import Dropdown from './Dropdown.js';
import Button from './Button.js';
import './Form.css';

const options = [
    {
        label: 'Select an option',
        value: null
    },
    {
        label: 'Red',
        value: 'red',
    },
    {
        label: 'Blue',
        value: 'blue',
    }
];

const title="All ERP";

const Form = () => {
    return (
        <form>
            <div className="form-container">
               
                    <div className='search-by-dist'>
                        <Dropdown options={options} title={title}/>
                    </div>
                    <div className='dist-id'>
                        <Dropdown options={options} title={title}/>
                    </div>
                    <div className='all-sync-status-dd'>
                        <Dropdown options={options} title={title}/>
                    </div>
                
                
                    <div className='all-erp-dd'>
                        <Dropdown options={options} title={title}/>
                    </div>
                    <div className='start-date'>
                        <Dropdown options={options} title={title}/>
                    </div>
                    <div className='end-date'>
                        <Dropdown options={options} title={title}/>
                    </div>
                    <div className='all-data-type-dd'>
                        <Dropdown options={options} title={title}/>
                    </div>
                    <div className="button">
                        <Button />
                    </div>
                
                    
                
            </div>
        </form>
       
        
    );
}

export default Form;