"use client";
import PieChart from "@/components/pie-chart";
import { api } from "@/utils/api";
import stringToColor from "@/utils/string-to-color";
import { use, useEffect, useState } from "react";

type Product = {
  productName: string;
  percentage: number;
};

const getTopProducts = async (): Promise<Product[]> => {
  return api("/api/dashboard/products?type=top", { cache: "no-store" })
    .then((data) => data.json())
    .then((data) => data["data"]);
};

const TopProductsComponent = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [topProductsData, setTopProductsData] = useState<Product[]>([]);
  useEffect(() => {
    setIsLoading(true);
    getTopProducts().then((data) => {
      setTopProductsData(data);
      setIsLoading(false);
    });
  }, []);
  return isLoading ? (
    <div className="flex-1 flex flex-col justify-between px-8 rounded-xl p-4 animate-pulse h-[300px] w-full bg-gray-300"></div>
  ) : (
    <div className="flex-1 flex flex-col justify-between bg-white  rounded-xl p-4 px-8">
      <div className="flex justify-between">
        <div className="text-secondary text-lg font-bold font-sans">
          Top products
        </div>
        <div className="text-gray-300 font-normal  text-sm flex items-center">
          May - Jun 2021
          <span className="icon icon-down-arrow !bg-gray-300 !w-2 !h-2 ml-2"></span>
        </div>
      </div>
      <div className="flex">
        <div className="w-1/2">
          <PieChart
            width={"100%"}
            height={"100px"}
            data={{
              labels: topProductsData.map(({ productName }) => productName),
              datasets: [
                {
                  data: topProductsData.map(({ percentage }) => percentage),
                  backgroundColor: topProductsData.map(({ productName }) =>
                    stringToColor(productName)
                  ),
                  borderWidth: 1,
                },
              ],
            }}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: false,
                },
              },
            }}
          />
        </div>
        <div className="flex-1">
          {topProductsData.map(({ percentage, productName }) => (
            <div className="mb-2" key={productName}>
              <div className="flex items-center">
                <div
                  className="rounded-full w-4 h-4 mr-4"
                  style={{
                    backgroundColor: stringToColor(productName),
                  }}
                ></div>
                <div className="text-md font-bold">{productName}</div>
              </div>
              <div className="flex items-center">
                <div
                  className="rounded-full w-4 h-4 mr-4"
                  style={{
                    backgroundColor: "transparent",
                  }}
                ></div>
                <div className="text-gray-300 text-xs">{percentage}%</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProductsComponent;
