import { NextResponse } from "next/server";

const data = [
  {
    icon: "icon-revenue",
    tagTitle: "Total Revenues",
    tagSubTitle: "$231,122,121",
  },

  {
    icon: "icon-transaction",
    tagTitle: "Total Transactions",
    tagSubTitle: "1,520",
  },
  {
    icon: "icon-like",
    tagTitle: "Total Likes",
    tagSubTitle: "9,721",
  },

  {
    icon: "icon-users",
    tagTitle: "Total Users",
    tagSubTitle: "892",
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
