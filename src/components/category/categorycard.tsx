import Image from "next/image";
import Link from "next/link";

interface DataProps {
    name: string;
    imageUrl: string;
}

export default function CategoryCard({name, imageUrl}: DataProps) {

    return (
        <Link className="md:w-[22vw] my-2 w-[48vw] h-[24vh]" href={`/menu/${name}`} prefetch={true}>
            <div className="flex flex-row md:w-[22vw] w-[48vw] h-[24vh] rounded-2xl bg-gradient-to-b from-[#B71105] from-50% to-[#FFFFFF] to-50% shadow-md justify-center items-center">
                <Image className="absolute" style={{width: "auto", height: "auto"}} src={imageUrl} quality={100} width={80} height={80} alt={name} priority/>
                <h3 className="self-end font-semibold z-50 text-lg text-[#502314]">{name}</h3>
            </div>
        </Link>
    );

}