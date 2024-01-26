"use client"

import { Button, Modal, Transition } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { ActionIcon } from '@mantine/core';
import { IconPaperBag } from '@tabler/icons-react';
import { useBagStore } from '@/store/BagStore';
import { useEffect } from 'react';
import Total from '../Total';

interface BagProps {
    opened : boolean;
}

export default function Bag ({opened} : BagProps) {
    
    const [openedBag, { open, close }] = useDisclosure(false);
    const bagItems = useBagStore();
    
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
            <Modal opened={openedBag} onClose={close} title="Informações do Pedido">
                    {bagItems.bag.map((item) => {
                        return (
                            <div key={item.id}>
                                <div>{item.name}{item.price}{item.quantity}</div>
                                <div><Button variant='filled' color='green' onClick={() => {bagItems.increaseQuantity(item.id)}}>+</Button><Button variant='filled' color='red' onClick={() => {bagItems.decreaseQuantity(item.id)}}>-</Button><Button variant='filled' color='black' onClick={() => {bagItems.removeItemFromBag(item.id)}}>X</Button></div>
                            </div>
                        )
                    })}
            </Modal>
        </>
            
    )
}