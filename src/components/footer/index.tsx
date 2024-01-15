import Image from "next/image";

export default function Footer() {
    return (
        <div className="flex flex-row justify-center items-end w-[100vw] h-[10vh] bg-[#b71105] fixed bottom-0">
            <Image src="/images/cb.png" style={{width: "auto", height: "auto"}} width={60} height={60} alt="CB"/>
        </div>
    );
}