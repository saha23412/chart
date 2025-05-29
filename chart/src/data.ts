import calculationScore from "./utils/calculation-score";

export interface DataModel {
  name: string;
  uv: number;
  pv: number;
  amt: number;
  zscore?: number;
}

export const data: DataModel[] = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 1100,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 10300,
    amt: 2100,
  },
  {
    name: "Page H",
    uv: 3490,
    pv: 3500,
    amt: 2100,
  },
  {
    name: "Page J",
    uv: 2780,
    pv: 800,
    amt: 2000,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 14300,
    amt: 2100,
  },
  {
    name: "Page K",
    uv: 3490,
    pv: 3800,
    amt: 2100,
  },
];

data.forEach((graphic) => {
  graphic.zscore = calculationScore(graphic.amt, graphic.pv, graphic.uv);
});
