import { NextRequest, NextResponse } from "next/server";
import { revalidatePath, updateTag } from "next/cache";

export async function POST(request: NextRequest) {
  const token = request.headers.get("x-revalidate-token");
  const expected = process.env.REVALIDATE_SECRET;
  if (!expected || token !== expected) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Next 16: updateTag for Cache Components, revalidatePath for traditional ISR
  updateTag("opportunities");
  revalidatePath("/opportunities", "page");

  return NextResponse.json({
    revalidated: true,
    timestamp: new Date().toISOString(),
  });
}
