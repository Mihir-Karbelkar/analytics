import { NextResponse } from "next/server";

const data = [
  {
    eventName: "Meeting with suppliers from Kuta Bali",
    eventStartTime: "14.00",
    eventEndTime: "15.00",
    place: "at Sunset Road, Kuta Bali",
  },

  {
    eventName: "Check operations at Giga Factory 1",
    eventStartTime: "18.00",
    eventEndTime: "20.00",
    place: "at Central Jakarta",
  },
];

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
export async function GET() {
  // Do whatever you want
  await delay(1000);
  return NextResponse.json(
    { data },
    {
      status: 200,
    }
  );
}
