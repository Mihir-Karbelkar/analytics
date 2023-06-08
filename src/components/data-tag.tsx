"use client";
import { api } from "@/utils/api";
import { CSSProperties, use, useEffect, useState } from "react";

type DataTagProps = {
  icon: JSX.Element;
  tagTitle: string;
  tagSubTitle: string;
  bgColor: CSSProperties["backgroundColor"];
};
const DataTag = (props: DataTagProps) => {
  const { icon, tagTitle, tagSubTitle, bgColor } = props;
  return (
    <div
      className={`rounded-[20px] w-[14rem] h-[8rem] px-8 py-6 font-lato`}
      style={{ backgroundColor: bgColor }}
    >
      <div className="flex items-end justify-end">{icon}</div>
      <div className="text-sm">{tagTitle}</div>
      <div className="font-bold text-2xl">{tagSubTitle}</div>
    </div>
  );
};

const allowedColors = ["#DDEFE0", "#F4ECDD", "#EFDADA", "#DEE0EF"];
type DataTag = {
  icon: string;
  tagSubTitle: string;
  tagTitle: string;
};

const getDataTags = async (): Promise<DataTag[]> => {
  return api("/api/dashboard/data-tags", { cache: "no-store" })
    .then((data) => data.json())
    .then((data) => data["data"]);
};

export const DataTags = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [dataTags, setDataTags] = useState<DataTag[]>([]);
  useEffect(() => {
    setIsLoading(true);
    getDataTags().then((data) => {
      setDataTags(data);
      setIsLoading(false);
    });
  }, []);
  return isLoading ? (
    <div key="loader" className="mt-5 flex justify-between ">
      {Array.from({ length: 4 }).map((index) => (
        <DataTagSkeleton key={`${index}`} />
      ))}
    </div>
  ) : (
    <div className="mt-5 flex justify-between " key={"data"}>
      {dataTags.map(({ tagSubTitle, tagTitle, icon }, index) => (
        <DataTag
          key={tagTitle}
          tagSubTitle={tagSubTitle}
          tagTitle={tagTitle}
          bgColor={allowedColors[index % allowedColors.length]}
          icon={<span className={`icon ${icon} !bg-secondary`}></span>}
        />
      ))}
    </div>
  );
};

export const DataTagSkeleton = () => (
  <div className="animate-pulse flex items-center justify-center  bg-gray-300  dark:bg-gray-700 rounded-[20px] w-[14rem] h-[8rem] px-8 py-6 font-lato"></div>
);

export default DataTag;
