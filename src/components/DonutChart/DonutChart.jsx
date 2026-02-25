import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import Card from "../Card/Card";

const defaultColors = [
  "#4CAF50",
  "#2196F3",
  "#FF9800",
  "#F44336"
];

function DonutChart({
  data,
  dataKey,
  nameKey,
  height ,
  colors = defaultColors
}) {
  return (
    <Card>
        <ResponsiveContainer width="100%" height={height}>
        <PieChart>
            <Pie
            data={data}
            dataKey={dataKey}
            nameKey={nameKey}
            cx="50%"
            cy="50%"
            innerRadius="60%"
            outerRadius="80%"
            paddingAngle={2}
            >
            {data.map((entry, index) => (
                <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
                />
            ))}
            </Pie>

            <Tooltip />
        </PieChart>
        </ResponsiveContainer>
    </Card>
  );
}

export default DonutChart;