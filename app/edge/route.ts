import { NextRequest, NextResponse } from "next/server";
export const GET = (req: NextRequest) =>
  NextResponse.json(req instanceof NextRequest); // returns false
