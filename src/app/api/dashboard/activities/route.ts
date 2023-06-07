import { NextResponse } from "next/server";

const data = [{
    username: 'Guest',
    data: [100, 120, 121, 123, 600, 500]
},
{
    username: 'User',
    data: [200, 400, 421, 600, 700, 211]
},
]
function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
export async function GET() {
    // Do whatever you want
    await delay(1000)
    return NextResponse.json({ data }, {
        status: 200,
    });
}