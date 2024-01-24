"use client"

import { Modal, Transition } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';


interface BagProps {
    opened : boolean;
}

export default function Bag ({opened} : BagProps) {
    
    const [openedBag, { open, close }] = useDisclosure(false);


    return (
        <>
            <Transition
                mounted={opened}
                transition='slide-up'
                duration={400}
                timingFunction='ease'
            >
            {(styles) => <div style={styles} className="flex flex-row items-center justify-around w-full h-14 bg-[#870018] text-white" onClick={open}>
                <h3 className='w-[25%] text-center'>###</h3>
                <h3 className='w-[25%] text-center'>Ver pedido</h3>
                <h3 className='w-[25%] text-center'>R$ 2502,67</h3>
            </div>
            }
            </Transition>
            <Modal opened={openedBag} onClose={close} title="Informações do Pedido">
                    {/* Modal content */}
            </Modal>
        </>
            
    )
}