import { NextRequest, NextResponse } from "next/server";

export function GET(req: NextRequest) {
  return NextResponse.json({
    NextRequest: req instanceof NextRequest,
    Request: req instanceof Request,
  });
}

export const runtime = "experimental-edge";
