import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { AlignLeft } from 'lucide-react';
import UserIcon from "./UserIcon";
import { Button } from "../ui/button";
import { links } from "@/utils/links";
import { Link } from "react-router";
/* eslint-disable no-unused-vars */
import { SignInButton, SignOutButton, SignUpButton, SignedIn, SignedOut, UserButton, } from "@clerk/clerk-react";
import SignOutLink from "./SignOutLink";


const DropdownListMenu = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant='outline'>
                    <AlignLeft />
                    <UserIcon />
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {links.map((item, index) => {
                    //code body
                    console.log(item);
                    return <DropdownMenuItem key={index}>
                        <Link to={item.href}>
                            {item.label}
                        </Link>
                    </DropdownMenuItem>
                })}
                <DropdownMenuSeparator />
                {/*  is not login */}
                <SignedOut>
                    {/* Lognin */}
                    <DropdownMenuItem>
                        <SignInButton mode="modal" >
                            <button>Login</button>
                        </SignInButton>
                    </DropdownMenuItem>
                    {/* Regsiter */}
                    <DropdownMenuItem>
                        <SignUpButton mode="modal">
                            <button>Regsiter</button>
                        </SignUpButton>
                    </DropdownMenuItem>
                </SignedOut>
                <DropdownMenuItem>
                    {/* Already logged in  */}
                    <SignedIn>
                        {/* <UserButton /> */}
                        {/* <SignOutButton /> */}
                        <SignOutLink />
                    </SignedIn>
                </DropdownMenuItem>

            </DropdownMenuContent>
        </DropdownMenu>

    )
}

export default DropdownListMenu
