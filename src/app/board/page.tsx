"use client";
import { DataTagSkeleton, DataTags } from "@/components/data-tag";
import ActivityComponent from "@/components/activity-component";
import Input from "@/components/overriden/input";

import { Suspense } from "react";
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
            <div className="text-secondary font-bold text-xl flex-1 h-10">
              Dashboard
            </div>
            <div className="flex flex-1 justify-between">
              <Input className="bg-white w-1/3" placeholder="Search..." />
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
          <div className="mt-5 flex justify-between ">
            <Suspense
              fallback={Array.from({ length: 4 }).map((index) => (
                <DataTagSkeleton key={`${index}`} />
              ))}
            >
              <DataTags />
            </Suspense>
          </div>
        </div>
        <Suspense
          fallback={
            <div className="rounded-xl p-4 animate-pulse h-[300px] w-full bg-gray-300"></div>
          }
        >
          <ActivityComponent />
        </Suspense>
        <div className="flex-1 mb-4 flex justify-between gap-12">
          <Suspense
            fallback={
              <div className="flex-1 flex flex-col justify-between px-8 rounded-xl p-4 animate-pulse h-[300px] w-full bg-gray-300"></div>
            }
          >
            <TopProductsComponent />
          </Suspense>
          <Suspense
            fallback={
              <div className="flex-1 flex flex-col justify-between px-8 rounded-xl p-4 animate-pulse h-[300px] w-full bg-gray-300"></div>
            }
          >
            <ScheduleComponent />
          </Suspense>
        </div>
      </div>
    </>
  );
}
