import { useBagStore } from "@/store/BagStore";
import { Button } from "@mantine/core";

export default function WhatsAppOrder() {


    const bagitems = useBagStore((state) => state.bag);
    const whatsAppOrder = bagitems.length === 0 ? '' : 'https://api.whatsapp.com/send?phone=5512981473281&text=Boa%20noite!%20Quero%20fazer%20meu%20pedido:%0A%0A' + bagitems.map((item) => {
        return `${item.quantity}x%20${item.name.replaceAll(" ", "%20")}%0A`
    })
    
    console.log(whatsAppOrder);

    return (
        
            <div className="w-full flex justify-center mt-3">
                <Button disabled={bagitems.length === 0 ? true : false} variant="filled" component="a" color="red" href={whatsAppOrder.replaceAll(",", "")}>Enviar para o WhatsApp</Button>
            </div>
            
       
    );
}



// %0A Quebra de linha
// %20 Espaçamento