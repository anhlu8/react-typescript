import * as React from "react";
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import { TransposedDataModel } from "../types";

type LineChartProps = {
    data:TransposedDataModel;
};

const minColor = "#128";
const maxColor = "#C42";
const avgColor = "#888";

const SimpleLineChart = ({data}:LineChartProps) => {
    return ( <div>
        <LineChart width={800} height={450} data={data} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
            <XAxis dataKey="name"/>
            <YAxis/>
            <CartesianGrid strokeDasharray="3 3"/>
            <Tooltip/>
            <Legend verticalAlign="top"/>
            <Line type="monotone" dataKey="max" stroke={maxColor} activeDot={{r: 8}}/>
            <Line type="monotone" dataKey="avg" stroke={avgColor} />
            <Line type="monotone" dataKey="min" stroke={minColor} />
        </LineChart> 
    </div> );
};

export { SimpleLineChart };
