"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (

        <Link href="/menu" prefetch={true}>
            <div className="flex w-screen h-[18vh] bg-caveirito justify-center items-center">
                    <Image src="/images/caveiras-logo.png" alt="Logo Caveiras" style={{height: '120px', width: '120px'}} width={2000} height={2000} quality={100} priority/>
            </div>
        </Link>
    );
}