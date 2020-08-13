import React from 'react';
import styles from './App.css';
import Chart from './Chart.js'
//import Dropdown from './Dropdown.js';
import Form from './Form.js';




const App = () => {
    return (
        <div>
            <div className="top-border"> </div>
            
            <div className="main-content">
                <div className="main-content-inner">
                    <div id="heading">Distributor Health Dashboard</div>
                    <div>(date)</div>
                    <div className="container">
                        <div id="child1">
                            <Form />
                        </div>
                        <div id="child2">2</div>
                        <div id="child3">
                            <Chart />
                        </div>
                        <div id="child4">4</div>
                        <div id="child5">5</div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default App;