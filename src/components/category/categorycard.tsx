import Image from "next/image";

export default function CategoryCard({name, imageUrl}: any) {

    return (
        <div className="flex flex-row w-[48vw] h-[21vh] my-2 rounded-2xl bg-gradient-to-b from-[#B71105] from-50% to-[#FFFFFF] to-50% shadow-md justify-center items-center">
            <Image className="absolute" style={{width: "auto", height: "auto"}} src={imageUrl} quality={100} width={80} height={80} alt={name}/>
            <h3 className="self-end font-semibold z-50 text-lg text-[#502314]">{name}</h3>
        </div>
    );

}