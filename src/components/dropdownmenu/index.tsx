import { Burger, Menu, MenuDropdown, rem } from "@mantine/core";
import { useDisclosure } from '@mantine/hooks';
import { IconBurger, IconHome } from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DropdownMenu() {

    const [opened, { toggle }] = useDisclosure();
    const pathname = usePathname();


    return (
        <Menu opened={opened} shadow="md" width={200} offset={27} position="top-start" transitionProps={{ transition: 'scale', duration: 200}}>
            <Menu.Target>
                <Burger opened={opened} onClick={toggle} aria-label="Menu" color="white"/>
            </Menu.Target>
            <MenuDropdown>
                <Menu.Label className={pathname === '/menu/Chickens' ? 'text-chickens' : 'text-caveirito'}>Menu</Menu.Label>
                <Link href="/menu" prefetch={true} onClick={() => toggle()}>
                    <Menu.Item color="#502314" leftSection={<IconHome style={{width: rem(14), height: rem(14)}}/>}>Início</Menu.Item>
                </Link>
                <Link href="/menu" prefetch={true} onClick={() => toggle()}>
                    <Menu.Item color="#502314" leftSection={<IconBurger style={{width: rem(14), height: rem(14)}}/>}>Cardápio</Menu.Item>
                </Link>
            </MenuDropdown>
        </Menu>
    )
    
    
    



}