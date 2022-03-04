import React, { useState } from 'react';
import './Chart.css';
import ChartBar from './ChartBar';

const Chart = props => {
    return (
        <div className="chart">
        /* Every DataPoint is an object that has a value property that is read and mapped to each individual ChartBar */
            {props.dataPoints.map((dataPoint => (
                <ChartBar
                    value={dataPoint.value}
                    maxValue={null}
                    label={dataPoint.label}
                />
            ))}
        </div>
    );
};

export default Chart;