import { MyObject } from "@/types/myObject"

import { getObjectFromCache, setObjectInCache } from "./objectCache"

export async function fetchSomeItems(limit: number, offset: number){
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    const r = await fetch(url)
    const data = await r.json()
    const results = data["results"]
    const pokemon: MyObject[] = [];

    for (let i = 0; i < results.length; i++){
        pokemon.push(await fetchItem(results[i]["url"]))
    }
    return pokemon;
}

async function fetchItem(url: string){

    let myObject = getObjectFromCache(url)
    if (myObject){
        return myObject
    }

    console.log(`Fetching: ${url}`)
    const r = await fetch(url)
    const data = await r.json()
    myObject = {
        id: data["id"],
        name: data["name"],
        imgUrl: data["sprites"]["other"]["official-artwork"]["front_default"],
        height: data["height"],
        weight: data["weight"],
        abilities: data["abilities"].map((obj: any)=>obj["ability"]["name"]),
        types: data["types"].map((obj: any)=>obj["type"]["name"]),
    }

    setObjectInCache(url, myObject)
    return myObject
}

export async function fetchTypes(){
    const r = await fetch("https://pokeapi.co/api/v2/type")
    const data = await r.json()
    return data["results"].map((result: any)=>result.name)
}

