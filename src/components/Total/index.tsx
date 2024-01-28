"use client";

import { useBagStore } from "@/store/BagStore"

export default function Total() {

    const items = useBagStore((state) => state.bag)
    {/* 
// @ts-ignore */}
    const sum = items.length === 0 ? 0 : items.reduce((acc : number, item) => acc + item.quantity * item.price, 0) 

    const formatter = new Intl.NumberFormat('pt-BR', {
        style: "currency",
        currency: "BRL",
    })

    return (
        <>
            {formatter.format(sum)}
        </>
    )
}