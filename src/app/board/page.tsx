"use client";
import { DataTags } from "@/components/data-tag";
import ActivityComponent from "@/components/activity-component";
import Input from "@/components/overriden/input";

import TopProductsComponent from "@/components/top-products";
import ScheduleComponent from "@/components/schedule";
import { useSession } from "next-auth/react";

export default async function Dashboard() {
  const { data: session } = useSession();
  return (
    <>
      <div className="w-full h-full flex flex-col gap-10">
        <div className="flex-1">
          <div className="w-full justify-between inline-flex h-10">
            <div className="text-secondary font-bold text-xl h-10">
              Dashboard
            </div>
            <div className="flex justify-between items-center">
              <div className="mr-10 relative">
                <Input
                  className="bg-white pl-4 font-lato"
                  placeholder="Search..."
                />
                <div className=" absolute right-0 top-1/2 -translate-x-1/2 -translate-y-1/2 ">
                  <span className="icon icon-search !h-4 !w-4 mr-2 mt-1 !bg-[#858585] "></span>
                </div>
              </div>
              <div className="mr-10">
                <span className="icon icon-bell !h-6 !w-6 !bg-secondary"></span>
              </div>
              <div>
                <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                  <img
                    src={session?.user?.image || ""}
                    alt="avatar"
                    height={80}
                    width={80}
                  />
                </div>
              </div>
            </div>
          </div>
          <DataTags />
        </div>
        <ActivityComponent />
        <div className="flex-1 mb-4 flex justify-between gap-12">
          <TopProductsComponent />
          <ScheduleComponent />
        </div>
      </div>
    </>
  );
}
