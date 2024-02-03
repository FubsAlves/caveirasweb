/* import NewsCarousel from "@/components/newscarousel";
import { Suspense } from "react";
import Loading from "@/components/loading";
import News from "@/components/news";
 */

export default function Home() {
  
  return (
      <div className="w-full min-h-[100vh] flex justify-center bg-caveirito">
        <div className="w-[90%] rounded-lg min-h-full bg-white flex flex-col items-center text-caveiras italic [&>*]:my-4 [&>*]:w-[80%] md:[&>*]:w-[50%] md:justify-center text-center">
          <p>
            {`O Caveira's Burguer ou CB (apelido carinhoso), começou suas atividades em 2022, com intuito de trazer um burguer de qualidade e simplicidade para vocês.`}
          </p>
          <p>
              A ideia é que vocês estejam á uma mordida para felicidade, e trazer lembranças as grandes redes de fast food de antigamente. Em que os lanches eram os mais simples  possíveis, mas muito saborosos. Além da rapidez e qualidade.
          </p>
          <p>
            Como muitos se industralizaram, decidimos trabalhar apenas com produtos frescos para que a sua experiência em casa seja de estar comendo um lanche de fast food, mas artesanal.
          </p>
          <p>
            {`O intuito do CB é não apenas captar clientes, mas sim, de gerar amizades, por isso optamos pelo atendimento humanizado. Também queremos além de amigos, grandes fãs da nossa marca, fãs do Caveirito (nosso mascote) e do nosso trabalho.`} 
            Entendam que em um mundo cheio de ódio e cancelamento, até mesmo um CNPJ pode estar sujeito a erros, pois atrás de uma empresa, existem pessoas, assim como você e eu, buscando trazer a nossa melhor versão a cada dia. Por fim, queremos que estejam comendo o melhor burguer de suas vidas!!!  
          </p>
          <h3 className="text-lg font-bold">Hamburguer and Tradition.</h3>
        </div>
      </div>
  );
}


{/* <Suspense fallback={<Loading/>}>
  <div className="w-full  md:min-h-[200vh]">
      <NewsCarousel/>
      <News/>
  </div>   
</Suspense>
 */}