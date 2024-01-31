import { Burger, Menu, MenuDropdown } from "@mantine/core";
import { useDisclosure } from '@mantine/hooks';
import Link from "next/link";

export default function DropdownMenu() {
    
    const [opened, { toggle }] = useDisclosure();


    return (
        <Menu shadow="md" width={200} offset={27} position="top-start" transitionProps={{ transition: 'pop', duration: 200}}    >
            <Menu.Target>
                <Burger opened={opened} onClick={toggle} aria-label="Menu" color="white"/>
            </Menu.Target>
            <MenuDropdown>
                <Menu.Label>Menu</Menu.Label>
                <Link href="/menu" prefetch={true} onClick={() => toggle()}>
                    <Menu.Item>Início</Menu.Item>
                </Link>
                <Link href="/menu/Chickens" prefetch={true} onClick={() => toggle()}>
                    <Menu.Item>Cardápio</Menu.Item>
                </Link>
            </MenuDropdown>
        </Menu>
    )
    
    
    



}