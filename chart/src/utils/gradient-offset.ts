import type { DataModel } from "../data";

const gradientOffset = (data: DataModel[]): number => {
  const dataMax = Math.max(
    ...data.map((chartValue: DataModel) => chartValue.zscore ?? 0)
  );
  const dataMin = Math.min(
    ...data.map((chartValue: DataModel) => chartValue.zscore ?? 0)
  );

  if (dataMax <= 0) {
    return 0;
  }
  if (dataMin >= 0) {
    return 1;
  }

  return dataMax / (dataMax - dataMin);
};

export default gradientOffset;
