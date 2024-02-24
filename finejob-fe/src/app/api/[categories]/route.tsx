import { NextResponse, NextRequest } from "next/server";

import mainCategories from "./mainCategories.json";
import majorCategories from "./majorCategories.json";
import subCategories from "./subCategories.json";

export async function GET(
  request: NextRequest,
  { params }: { params: { categories: string } }
) {
  console.log("GET /api/majorCategories/route.tsx");
  if (params.categories === "mainCategories") {
    console.log("mainCategories", params.categories);
    return NextResponse.json(mainCategories);
  } else if (params.categories === "majorCategories") {
	console.log("majorCategories", params.categories);
    return NextResponse.json(majorCategories);
  }
  else if (params.categories === "subCategories") {
	console.log("subCategories", params.categories);
	return NextResponse.json(subCategories);
  }
  
  return new NextResponse(null, { status: 400, statusText: "Bad Request" });
}
