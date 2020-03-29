import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const data = [
  { name: "Person 1", temp: 36.6 },
  { name: "Person 2", temp: 36.7 },
  { name: "Person 3", temp: 36.5 },
  { name: "Person 4", temp: 36.8 },
  { name: "Person 5", temp: 36.2 }
];

export default class Example extends PureComponent {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/xqjtetw0/";

  render() {
    return (
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis type="number" domain={[35, 40]} width={30} />
          <Tooltip />
          <Line
            type="linear"
            dataKey="temp"
            stroke="#FA6C39"
            strokeWidth={2}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
