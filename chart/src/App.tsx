import CustomizedDotLine from "./components/customized-dot-line/customized-dot-line";
import { data } from "./data";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import gradientOffset from "./utils/gradient-offset";

const off = gradientOffset(data);

const App: React.FC = () => {
  return (
    <AreaChart
      width={500}
      height={400}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <defs>
        <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
          <stop offset={`${off * 75}%`} stopColor="red" />
          <stop offset={`${off * 80}%`} stopColor="green" />
        </linearGradient>
      </defs>
      <Area
        type="monotone"
        dataKey="zscore"
        stroke="#000"
        fill="url(#splitColor)"
        dot={<CustomizedDotLine dataKey="zscore" />}
      />
    </AreaChart>
  );
};

export default App;
