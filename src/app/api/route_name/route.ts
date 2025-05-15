import { fetchSomeItems } from "@/services/itemServices"
import type { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    const params = request.nextUrl.searchParams;
    const limit = parseInt(params.get('limit') ?? "10");
    const offset = parseInt(params.get('offset') ?? "0");
    const descriptorFilter = params.get('descriptorFilter');

    let data = await fetchSomeItems(limit, offset);

    if (descriptorFilter) {
        data = data.filter((p)=> p.types.includes(descriptorFilter) );
    }

    return Response.json(data);
}