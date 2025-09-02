import { NextResponse } from "next/server";

const targetUrl = "https://cloud.umami.is/share/EGY92YAktO63JaJz/rabire.com";

export function GET() {
  return NextResponse.redirect(targetUrl, 307);
}

export function HEAD() {
  return NextResponse.redirect(targetUrl, 307);
}
