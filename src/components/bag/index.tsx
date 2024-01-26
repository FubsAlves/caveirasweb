"use client"

import { Button, Modal, Transition, ScrollArea } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { ActionIcon } from '@mantine/core';
import { IconPaperBag } from '@tabler/icons-react';
import { useBagStore } from '@/store/BagStore';
import Total from '../Total';
import Image from 'next/image';

interface BagProps {
    opened : boolean;
}

export default function Bag ({opened} : BagProps) {
    
    const [openedBag, { open, close }] = useDisclosure(false);
    const bagItems = useBagStore();

    const formatter = new Intl.NumberFormat('pt-BR', {
        style: "currency",
        currency: "BRL",
    })

    
    return (
        <>
            <Transition
                mounted={opened}
                transition='slide-up'
                duration={400}
                timingFunction='ease'
            >
            {(styles) => 
            <div style={styles} className="flex flex-row items-center justify-around w-full h-14 bg-[#870018] text-white" onClick={open}>
            
                <div className='w-[25%] flex justify-center items-end'>
                    <ActionIcon variant="transparent" color="#ffffff" aria-label="BagInfo">
                        <IconPaperBag stroke={1.5} />
                    </ActionIcon>
                </div>
                <h3 className='w-[25%] text-center'>Ver pedido</h3>
                <h3 className='w-[25%] text-center'><Total/></h3>
            </div>
            }
            </Transition>
            <Modal opened={openedBag} onClose={close} title="Informações do Pedido" scrollAreaComponent={ScrollArea.Autosize}>
                    <div className='w-full h-auto grid grid-cols-1 divide-y-2 divide-caveirito'>
                        {bagItems.bag.map((item) => {
                            return (
                            <div className='flex w-full h-28'>
                                <div className='grid grid-cols-1 w-[60%] text-caveiras'>
                                    <h4 className='font-bold my-2'>{item.name}</h4>
                                    <h5 className='font-semibold'>{formatter.format(item.price * item.quantity)}</h5>
                                </div>
                                <div className='grid grid-cols-1 w-[40%]'>
                                    <Image className='place-self-center' src={item.imageSrc.url} alt={item.name} style={{width: 70, height: 35}} width={1080} height={800}/>
                                    <div className='place-self-center'>
                                        <Button variant='filled' color='green' size='xs'>+</Button>
                                        <Button variant='filled' color='red' size='xs'>-</Button>
                                    </div>
                                </div>
                            </div> 
                            
                            )
                        })}
                    </div>
            </Modal>
        </>
            
    )
}