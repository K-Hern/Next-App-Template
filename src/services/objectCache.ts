import { MyObject } from "@/types/myObject";

// map variable
const cachedObjects= new Map<string, MyObject>()

// setObjectsInCache
export function setObjectInCache(url: string, myObjects: MyObject){
    cachedObjects.set(url, myObjects)
}

// getObjectsFromCache
export function getObjectFromCache(url: string) {
    return cachedObjects.get(url)
}