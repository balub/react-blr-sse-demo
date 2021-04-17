import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ComposedChart,
  Line,
  Area,
} from "recharts";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`Light : ${payload[0].value} lux`}</p>
        <p className="label">{`Air Temp : ${payload[2].value}°C`}</p>
        <p className="label">{`Air Humidity : ${payload[1].value}%`}</p>
      </div>
    );
  }

  return null;
};

function GraphComponents({ data }) {
  return (
    <ComposedChart
      width={1200}
      height={300}
      data={[...data].slice(Math.max([...data].length - 50, 1))}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <Tooltip content={<CustomTooltip />} />
      <Legend />
      <Area type="monotone" dataKey="light" fill="#4ab5eb" stroke="#4ab5eb" />
      <Line type="monotone" dataKey="air_hum" stroke="#fc6868" />
      <Line type="monotone" dataKey="air_temp" stroke="#c53b89" />
    </ComposedChart>
  );
}

export default GraphComponents;
