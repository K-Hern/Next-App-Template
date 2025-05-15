import { NextRequest } from "next/server";
import { fetchTypes } from "@/services/pokemonServices";

export async function GET(request: NextRequest) {
    const types = await fetchTypes();
    return Response.json(types);
}