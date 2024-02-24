import { NextResponse, NextRequest } from "next/server";

import companies from "./companies.json";

export async function POST(request: NextRequest) {
  console.log("POST /api/selectCompany/route.tsx");
  //   const body = await request.json();
  //   console.log("body", body);
  return NextResponse.json(companies);
}
