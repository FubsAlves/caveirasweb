"use client"

import { Modal, Transition, ScrollArea } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { ActionIcon, Table } from '@mantine/core';
import { IconMinus, IconPlus, IconTrash, IconCash } from '@tabler/icons-react';
import { useBagStore } from '@/store/BagStore';
import Total from '../Total';
import Image from 'next/image';
import { notifications } from '@mantine/notifications';
import WhatsAppOrder from '../whatsapporder';
import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr';
import GET_DELIVERYFEES from '@/queries/deliveryfees';
import { ApolloError } from '@apollo/client';
import { Suspense } from 'react';
import { useBagDelayStore, useBagStatusStore } from '@/store/BagStatusStore';


interface FeeProps {
        id: string;
        bairro: string;
        feeValue: number;   
}
interface QueryProps {
    fees: FeeProps[];
    error: ApolloError | undefined
}

interface BagProps {
    opened : boolean;
}

export default function Bag ({opened} : BagProps) {
    
    const [openedBag, { open, close }] = useDisclosure(false);
    const [openedFees, {open : openFees, close: closeFees}] = useDisclosure(false); 
    const bagItems = useBagStore();
    const clearDelay = useBagDelayStore(state => state.clearDelay);
    const setDelay = useBagDelayStore(state => state.setDelay);
    
   
    const { error, data } = useSuspenseQuery<QueryProps>(GET_DELIVERYFEES, { fetchPolicy: "network-only"});
    
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
            <div style={styles} className="flex flex-row items-center justify-around w-full h-14 bg-[#870018] hover:cursor-pointer text-white" onMouseEnter={() => {clearDelay()}} onMouseLeave={() => {setDelay()}} onClick={() => {open(); clearDelay()}}>
            
                <div className='w-[25%] flex justify-center items-end'>
                    <div className='z-[5] w-5 h-5 relative text-white bg-caveirito rounded-full text-sm text-center top-[-117px] left-[18%] md:left-[5%]'>{bagItems.bag.length}</div>
                    <Image className='relative bottom-10 sm:bottom-10 md:bottom-10' src="/images/cb-bag.png" alt='CbBag' width={65} height={65}/>
                </div>
                <h3 className='w-[35%] text-center'>{bagItems.bag.length === 0 ? 'Sacola vazia' : 'Ver pedido'}</h3>
                <h3 className='w-[25%] text-center'><Total/></h3>
            </div>
            }
            </Transition>
            <Modal zIndex={1020} opened={openedBag} onClose={() => {close(); setDelay();}} onMouseEnter={() => {clearDelay()}}  title="Informações do Pedido" scrollAreaComponent={ScrollArea.Autosize} centered>
                    <div className='w-full h-auto grid grid-cols-1 divide-y-2 divide-caveirito'>
                        {bagItems.bag.map((item) => {
                            return (
                            <div className='flex w-full h-36' key={item.id}>
                                <div className='grid grid-cols-1 w-[70%] text-caveiras'>
                                    <h4 className='font-bold my-2'>{item.name}</h4>
                                    {/* 
// @ts-ignore */}
                                    <h5 className='font-semibold'>{formatter.format(item.price * item.quantity)}</h5>
                                </div>
                                <div className='grid grid-cols-1 w-[30%]'>
                                    <div className='w-5 h-5 relative text-white bg-chickens rounded-full text-sm text-center top-7 left-[19%] md:left-[25%]'>{item.quantity}</div>
                                    <Image className='place-self-center' src={item.imageSrc.url} alt={item.name} style={{width: item.imageCustomSize?.width != null ? item.imageCustomSize.width : 55, height: item.imageCustomSize?.height != null ? item.imageCustomSize.height : 60}} width={1080} height={800}/>
                                    <div className='place-self-center'>
                                        {/* 
// @ts-ignore */}
                                        {item.quantity > 1 ? 
                                        <ActionIcon className='mx-1' variant="outline" color="#f07100" size="md" radius="xl" aria-label="Decrease" onClick={() => {
                                            bagItems.decreaseQuantity(item.id);
                                        }}>
                                            <IconMinus />
                                        </ActionIcon> :
                                        <ActionIcon className='mx-1' variant="outline" color="gray" size="md" radius="xl" aria-label="Remove" onClick={() => {
                                            bagItems.removeItemFromBag(item.id);
                                            notifications.show({
                                                color: 'red',
                                                title: 'Item removido da sacola!',
                                                message: `${item.name} foi removido(a) da sacola!`
                                            })
                                        }}>
                                            <IconTrash />
                                        </ActionIcon>
                                        }
                                        <ActionIcon className='mx-1' variant="outline" color="#f07100" size="md" radius="xl" aria-label="Increase" onClick={() => {
                                            bagItems.increaseQuantity(item.id);
                                        }}>
                                            <IconPlus />
                                        </ActionIcon>
                                    </div>
                                </div>
                            </div> 
                            
                            )
                        })}
                    </div>
                    <div className='flex flex-col text-caveirito font-semibold'>
                        <h3>Total:</h3>
                        <h4><Total/> + Taxas de Entrega</h4>
                        <div className='flex flex-row w-full items-center space-x-2 mt-4' onClick={() => {openFees()}}>
                            <ActionIcon variant='outline' color='green' size="md" radius="xl" aria-label='Tabela de taxas'> <IconCash /> </ActionIcon>
                            <h5 className='italic text-sm font-sans cursor-pointer text-caveiras hover:text-caveirito hover:underline'>Valores das taxas de Entrega.</h5>
                        </div>
                    </div>
                    <div className='flex items-end'>
                        <WhatsAppOrder/>
                        <ActionIcon variant='outline' disabled={bagItems.bag.length === 0 ? true : false} color='gray' size="md" radius="xl" aria-label='Remove' onClick={() => {
                            bagItems.removeAllItemsFromBag()
                            notifications.show({
                                color: 'red',
                                title: 'A sacola está vazia!',
                                message: 'Todos os itens foram removidos da sacola!'
                            })
                        }}
                            
                        >
                            <IconTrash/></ActionIcon>
                    </div>
                    <Modal opened={openedFees} zIndex={1025} onClose={closeFees} title="Valores das Taxas de Entrega" scrollAreaComponent={ScrollArea.Autosize} centered>
                        <Suspense>
                            <div className='grid grid-cols-2 place-items-center mb-3'>
                                <h3 className='w-full text-center'>Bairro</h3>
                                <h3 className='w-full text-center'>Valor</h3>
                            </div>
                            <div className='flex flex-col justify-around w-[100%]'>
                                {data.fees.map((fee: FeeProps) => {
                                    return (
                                        <div className='flex border-y-[1px] border-caveirito' key={fee.bairro}>
                                            <div className='flex w-[50%] justify-center items-center h-12 text-center'>
                                                <h3>{fee.bairro}</h3>
                                            </div>
                                            <div className='flex w-[50%] justify-center items-center h-12 text-center'>
                                                <h3>{formatter.format(fee.feeValue)}</h3>
                                            </div>
                                            
                                        </div>
                                    )
                                })}
                            </div>
                        </Suspense>
                    </Modal>
                    
                    
            </Modal>
        </>
            
    )
}