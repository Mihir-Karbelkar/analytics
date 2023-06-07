import { NextResponse } from "next/server";

const data = [
  {
    productName: "Basic Tee",
    percentage: 55,
  },
  {
    productName: "Custom Short Pants",
    percentage: 31,
  },
  {
    productName: "Super Hoodies",
    percentage: 14,
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
