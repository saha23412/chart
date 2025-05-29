const calculationScore = (amt: number, pv: number, uv: number): number => {
  const zScore = (pv - amt) / uv;
  return +zScore.toFixed(1);
};

export default calculationScore;
