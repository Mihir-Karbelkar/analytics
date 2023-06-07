import { NextResponse } from "next/server";

const data = [
  {
    icon: "test",
    tagTitle: "Total Revenues",
    tagSubTitle: "$231,122,121",
  },

  {
    icon: "test",
    tagTitle: "Total Revenue",
    tagSubTitle: "$231,122,121",
  },
  {
    icon: "test",
    tagTitle: "Total Revens",
    tagSubTitle: "$231,122,121",
  },

  {
    icon: "test",
    tagTitle: "Total Revens",
    tagSubTitle: "$231,122,121",
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
