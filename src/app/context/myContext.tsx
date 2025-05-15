'use client';

import { MyObject } from "@/types/myObject"
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

type MyContextType = {
    data: MyObject[],
    limit: number,
    setLimit: Function,
    offset: number,
    setOffset: Function,
    types: string[],
    activeFilter: string,
    setActiveFilter: Function
}

const MyContext = createContext<MyContextType | undefined>(undefined);

export const MyProvider = ({ children }: { children: ReactNode }) => {
    const [data, setData] = useState<MyObject[]>([]);
    const [activeFilter, setActiveFilter] = useState<string>("");
    const [types, setTypes] = useState<string[]>(["all"]);
    const [limit, setLimit] = useState<number>(20);
    const [offset, setOffset] = useState<number>(0);

    useEffect(()=>{
        fetchPokemon()
        fetch('api/types').then((r)=>r.json()).then((d)=>setTypes([...types, ...d]))
    },[])
    
    useEffect(()=>{
        fetchPokemon()
    },[activeFilter, limit, offset])

    function fetchPokemon(){
        if (activeFilter == ""){
            fetch(`/api/route_name?limit=${limit}&offset=${offset}`).
            then((r)=>r.json()).
            then((d)=>setData(d))
        }
        else {
            fetch(`/api/route_name?limit=${limit}&offset=${offset}&type=${activeFilter}`).
            then((r)=>r.json()).
            then((d)=>setData(d))
        }
    }

    return (
        <MyContext.Provider value={{ data, limit, setLimit, offset, setOffset, types, activeFilter, setActiveFilter }}>
            {children}
        </MyContext.Provider>
    );

}

export function useMyProvider() {
    const context = useContext(MyContext);

    if (!context) {
        throw new Error('useMyProvider must be used with a MyProvider');
    }

    return context;

}