import Image from "next/image";

export default function CategoryCard({name, imageUrl}: any) {

    return (
        <div className="flex flex-col w-[48vw] h-[21vh] my-2 rounded-2xl bg-gradient-to-b from-[#B71105] from-50% to-[#FFFFFF] to-50% shadow-md justify-center items-center">
            <Image className="mt-auto" src="https://media.graphassets.com/bIrjZqeeTESgBGtBn95I" quality={100} width={100} height={100} alt="categorias"/>
            <h3 className="font-semibold mt-auto text-lg text-[#502314]">Teste</h3>
        </div>
    );

}