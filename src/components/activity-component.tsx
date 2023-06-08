"use client";
import stringToColor from "@/utils/string-to-color";
import { useEffect, useState } from "react";
import LineChart from "./line-chart";
import { api } from "@/utils/api";
type Activity = {
  username: string;
  data: number[];
};
const getActivitiesData = async (): Promise<Activity[]> => {
  return api("/api/dashboard/activities", { cache: "no-store" })
    .then((data) => data.json())
    .then((data) => data["data"]);
};
const ActivityComponent = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [linechartData, setLinechartData] = useState<Activity[]>([]);
  useEffect(() => {
    setIsLoading(true);
    getActivitiesData().then((data) => {
      setLinechartData(data);
      setIsLoading(false);
    });
  }, []);
  return isLoading ? (
    <div
      className="rounded-xl p-4 animate-pulse h-[300px] w-full bg-gray-300"
      key="loader"
    ></div>
  ) : (
    <div
      className="flex-1 flex flex-col justify-between bg-white  rounded-xl p-4 px-8"
      key="loaded-data"
    >
      <div className="flex justify-between">
        <div className="text-secondary text-lg font-bold font-sans">
          Activities
          <div className="text-gray-300 font-normal  text-sm flex items-center">
            May - Jun 2021
            <span className="icon icon-down-arrow !bg-gray-300 !w-2 !h-2 ml-2"></span>
          </div>
        </div>
      </div>
      <div>
        <LineChart
          width={"100%"}
          height={"200px"}
          data={{
            labels: ["", "Week 1", "Week 2", "Week 3", "Week 4", ""],
            datasets: linechartData.map((linechart) => ({
              label: linechart.username,
              data: linechart.data,
              borderWidth: 1,
              tension: 0.4,
              backgroundColor: stringToColor(linechart.username),
              borderColor: stringToColor(linechart.username),
              capBezierPoints: false,
              fill: false,
              pointRadius: 0,
            })),
          }}
          options={{
            plugins: {
              legend: {
                position: "top",
                align: "end",
                labels: {
                  pointStyle: "circle",
                  usePointStyle: true,
                  boxHeight: 5,
                  boxWidth: 5,
                },
              },
            },
            responsive: true,
            maintainAspectRatio: false,

            scales: {
              x: {
                beginAtZero: true,
                grid: {
                  display: false,
                },
              },
              y: {
                beginAtZero: true,
                grid: {
                  lineWidth: 0.5,
                },

                ticks: {
                  display: true,
                  stepSize: 100,
                },
                border: {
                  display: false,
                },
                grace: 1,
              },
            },
          }}
        />
      </div>
    </div>
  );
};
export default ActivityComponent;
