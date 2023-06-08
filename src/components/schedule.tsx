"use client";
import { api } from "@/utils/api";
import stringToColor from "@/utils/string-to-color";
import { use, useEffect, useState } from "react";

type Event = {
  eventName: string;
  eventStartTime: string;
  eventEndTime: string;
  place: string;
};
const getEvents = (): Promise<Event[]> => {
  return api("/api/dashboard/schedule", { cache: "no-store" })
    .then((data) => data.json())
    .then((data) => data["data"]);
};

const EventComponent = (props: Event) => {
  const { eventEndTime, eventName, eventStartTime, place } = props;
  return (
    <div className="flex gap-2 mb-2 font-lato">
      <div
        className="w-2"
        style={{ backgroundColor: stringToColor(eventName) }}
      ></div>
      <div>
        <p className="text-md text-[#666] mb-2">{eventName}</p>
        <p className="text-xs text-[#999] mb-2">
          {eventStartTime}-{eventEndTime}
        </p>
        <p className="text-xs text-[#999]">{place}</p>
      </div>
    </div>
  );
};

const ScheduleComponent = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [events, setEvents] = useState<Event[]>([]);
  useEffect(() => {
    setIsLoading(true);
    getEvents().then((data) => {
      setEvents(data);
      setIsLoading(false);
    });
  }, []);
  return isLoading ? (
    <div className="flex-1 flex flex-col justify-between px-8 rounded-xl p-4 animate-pulse h-[300px] w-full bg-gray-300"></div>
  ) : (
    <div className="flex-1 flex flex-col justify-between bg-white  rounded-xl p-4 px-8">
      <div className="flex justify-between">
        <div className="text-secondary text-lg font-bold font-sans">
          {`Today's Schedule`}
        </div>
        <div className="text-gray-300 text-sm flex">
          See All
          {/* <span className="icon icon-down-arrow !bg-gray-300 !w-2 !h-2 -rotate-90"></span> */}
        </div>
      </div>
      <div className="mt-4">
        {events.map((event) => (
          <EventComponent key={event.eventName} {...event} />
        ))}
      </div>
    </div>
  );
};

export default ScheduleComponent;
