import Link from 'next/link';
import {Menu, MenuButton, MenuItem, IconButton, Flex, Box, Spacer, MenuList} from "@chakra-ui/react";
import {FcMenu, FcHome, FcAbout, FcSearch} from "react-icons/fc";
import { BsSearch } from "react-icons/bs";
import { FiKey } from "react-icons/fi";
import {icons} from "react-icons";


const NavBar = () => {
    return (
        <Flex p={2} borderBottom={"1px"} borderColor={"gray.100"}>
            <Box fontSize={"3xl"} color={"blue.400"} fontWeight={"bold"}>
                <Link href={"/"} paddingLef={2}>Zameen (LAND)</Link>
            </Box>
            <Spacer />
            <Box>
                <Menu>
                    <MenuButton as={IconButton} icon={<FcMenu />} variant={"outlined"} color={"red.400"} />
                    <MenuList>
                        <Link href={"/"} passHref>
                            <MenuItem icon={<FcHome />}>Home</MenuItem>
                        </Link>
                        <Link href={"/search"} passHref>
                            <MenuItem icon={<FcSearch />}>Search</MenuItem>
                        </Link>
                        <Link href={"/search?purpose=for-sale"} passHref>
                            <MenuItem icon={<FcAbout />}>For Sale</MenuItem>
                        </Link>
                        <Link href={"/search?purpose=for-rent"} passHref>
                            <MenuItem icon={<FiKey />}>For Rent</MenuItem>
                        </Link>
                    </MenuList>
                </Menu>
            </Box>
        </Flex>
    );
}

export default NavBar;