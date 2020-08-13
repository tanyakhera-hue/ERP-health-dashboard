import React, {useState, useEffect} from 'react';
import {Component} from 'react';
import {Bar, Line} from 'react-chartjs-2';

const Chart = () => {
    const [data, setData] = useState({
        labels:['00','01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24'],
        datasets:[
        {
            label: 'Total Sync',
            data: [
                0,0,0,0,0,0,0,0,0,110000,0,0,55000,0,0,110000, 0,0,110000, 0,0,0,0,0,0
            ],
            backgroundColor: '#2ad183',
            
        },
        {
            label: 'Total Success',
            data: [
                0,0,0,0,0,0,0,0,0,90000,0,0,40000,0,0,90000,0,0,90000, 0,0,0,0,0,0
            ],
            backgroundColor: '#5985f1'
        },
        {
            label: 'Total Failed',
            data: [
                0,0,0,0,0,0,0,0,0,15000,0,0,7000,0,0,15000, 0,0,15000, 0,0,0,0,0,0
            ],
            backgroundColor: '#ff6464'
        }
        ]
    });

   
    return (
        <div className="chart">
            <Bar
              data={data}
              options={{
                  legend: {
                    position: 'top',
                    align: 'right'
                  },
                  scales:{
                      xAxes: [{
                          barThickness: 6,
                          gridLines: {
                              display: false,
                          }
                      }],
                      yAxes: [{
                            borderDash: [10,5]
                        }]
                     
                  }
              }}
            />
        </div>
    );
}

export default Chart;