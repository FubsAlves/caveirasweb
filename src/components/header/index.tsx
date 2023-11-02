import Image from "next/image";

export default function Header() {
    return (
        <div className="flex w-screen h-[18vh] bg-caveirito justify-center items-center">
                <Image src="/images/caveiras-logo.webp" alt="Logo Caveiras" style={{height: 'auto', width: 'auto'}} width={120} height={120} quality={100} priority/>
        </div>
    );
}