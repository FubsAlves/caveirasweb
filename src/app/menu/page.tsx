"use client";

import Category from "@/components/category";
import Loading from "@/components/loading";
import { Suspense } from "react";



export default function Menu() {
    return(
        <Suspense fallback={<Loading/>}>
            <Category/>  
        </Suspense>  
    )
}