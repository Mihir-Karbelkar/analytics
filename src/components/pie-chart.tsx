"use client";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { ChartProps, Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
const PieChart = (props: Omit<ChartProps<"pie">, "type">) => {
  return <Pie {...props} />;
};

export default PieChart;
